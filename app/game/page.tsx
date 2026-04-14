"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { CASES, getRank, type Case, type Question } from "./data"
import {
  Gavel,
  Scale,
  ChevronRight,
  RotateCcw,
  Home,
  Star,
  Zap,
  BookOpen,
  Timer,
  Trophy,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ArrowRight,
  Flame,
  Shield,
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────
type Screen =
  | "intro"
  | "case-select"
  | "question"
  | "explanation"
  | "case-verdict"
  | "results"

interface AnswerRecord {
  caseId: number
  questionId: number
  correct: boolean
  attempt: number // 1–4
  points: number
}

const POINTS_BY_ATTEMPT = [10, 7, 4, 1]
const QUESTION_TIME = 10 // seconds per question

// ─── Helpers ─────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function GavelAnim({ show, correct }: { show: boolean; correct: boolean }) {
  if (!show) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div
        className={`flex flex-col items-center gap-3 animate-[gavelPop_0.5s_ease-out]`}
      >
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${
            correct
              ? "bg-green-50 border-green-500 text-green-600"
              : "bg-red-50 border-primary text-primary"
          }`}
          style={{ animation: "gavelPop 0.4s ease-out" }}
        >
          {correct ? (
            <CheckCircle2 className="w-12 h-12" />
          ) : (
            <XCircle className="w-12 h-12" />
          )}
        </div>
        <span
          className={`font-mono text-xl font-extrabold uppercase tracking-widest ${
            correct ? "text-green-600" : "text-primary"
          }`}
        >
          {correct ? "Chính xác!" : "Sai rồi!"}
        </span>
      </div>
    </div>
  )
}

function TimerBar({
  seconds,
  total,
  urgent,
}: {
  seconds: number
  total: number
  urgent: boolean
}) {
  const pct = (seconds / total) * 100
  return (
    <div className="w-full h-3 bg-border overflow-hidden">
      <div
        className="h-full transition-all duration-1000 ease-linear"
        style={{
          width: `${pct}%`,
          background: urgent
            ? "oklch(0.48 0.24 25)"
            : pct > 60
            ? "oklch(0.72 0.17 85)"
            : "oklch(0.58 0.20 50)",
        }}
      />
    </div>
  )
}

function StreakBanner({ streak }: { streak: number }) {
  if (streak < 3) return null
  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 pointer-events-none">
      <div className="bg-primary text-primary-foreground px-6 py-2 flex items-center gap-2 font-mono font-bold text-sm uppercase tracking-widest border-2 border-primary shadow-lg animate-[streakPop_0.4s_ease-out]">
        <Flame className="w-4 h-4" />
        <span>Chuỗi {streak} đúng! x{Math.min(streak, 5)} Điểm thưởng</span>
      </div>
    </div>
  )
}

// ─── Screen: Intro ────────────────────────────────────────────────────────────
function IntroScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="w-12 h-[2px] bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            HCM202 / Trò chơi
          </span>
          <div className="w-12 h-[2px] bg-primary" />
        </div>

        <div className="relative inline-block">
          <Gavel className="w-20 h-20 text-primary mx-auto" strokeWidth={1.5} />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary flex items-center justify-center">
            <Scale className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
        </div>

        <h1 className="font-[var(--font-playfair)] text-4xl md:text-6xl font-bold text-foreground leading-tight">
          Phiên Tòa
          <span className="block text-primary">Liêm Chính</span>
        </h1>

        <p className="font-sans text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
          Bạn là thẩm phán. Xét xử 6 vụ án tham nhũng thực tế, áp dụng tư tưởng Hồ Chí Minh để tìm ra sự thật và bảo vệ công lý.
        </p>

        {/* Feature badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-left">
          {[
            { icon: Timer, label: "10 giây/câu" },
            { icon: Flame, label: "Combo thưởng" },
            { icon: Lightbulb, label: "Gợi ý -3đ" },
            { icon: Trophy, label: "Bảng xếp hạng" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="bg-card border border-border px-3 py-2.5 flex items-center gap-2"
            >
              <Icon className="w-4 h-4 text-primary shrink-0" strokeWidth={2} />
              <span className="font-mono text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
          <button
            onClick={onStart}
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all duration-200"
          >
            <Gavel className="w-5 h-5" />
            <span>Bắt đầu phiên tòa</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-border px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Về trang chủ</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Case Select ──────────────────────────────────────────────────────
function CaseSelectScreen({
  cases,
  completedCases,
  onSelect,
  totalScore,
  maxScore,
}: {
  cases: Case[]
  completedCases: number[]
  onSelect: (c: Case) => void
  totalScore: number
  maxScore: number
}) {
  const nextCase = cases.find((c) => !completedCases.includes(c.id))
  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Danh sách vụ án
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-foreground">
              Chọn Vụ Án
            </h2>
            <div className="font-mono text-sm text-muted-foreground border border-border px-4 py-2">
              <span className="text-primary font-bold">{totalScore}</span> / {maxScore} điểm
            </div>
          </div>
          {/* Overall progress bar */}
          <div className="mt-4 w-full h-1.5 bg-border">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${(completedCases.length / cases.length) * 100}%` }}
            />
          </div>
          <p className="font-mono text-xs text-muted-foreground mt-1.5">
            {completedCases.length} / {cases.length} vụ đã xét xử
          </p>
        </div>

        {/* Case grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c) => {
            const done = completedCases.includes(c.id)
            const isNext = c.id === nextCase?.id
            return (
              <button
                key={c.id}
                onClick={() => onSelect(c)}
                disabled={done}
                className={`group text-left border-2 p-5 transition-all duration-200 ${
                  done
                    ? "border-border bg-muted/40 opacity-60 cursor-not-allowed"
                    : isNext
                    ? "border-primary bg-card hover:bg-primary/5"
                    : "border-border bg-card hover:border-primary/60"
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                    {c.code}
                  </span>
                  {done ? (
                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  ) : isNext ? (
                    <div className="bg-primary text-primary-foreground px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest shrink-0">
                      Tiếp theo
                    </div>
                  ) : null}
                </div>
                <h3 className="font-[var(--font-playfair)] text-lg font-bold text-foreground mb-1 leading-tight">
                  {c.title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground mb-3">{c.charge}</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-foreground/50">
                    Bị cáo: {c.defendant}
                  </span>
                  <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-colors">
                    <span className="font-mono text-xs">5 câu hỏi</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </button>
            )
          })}
        </div>

        {completedCases.length === cases.length && (
          <div className="mt-8 flex justify-center">
            <Link
              href="#results"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all"
            >
              <Trophy className="w-5 h-5" />
              Xem kết quả
            </Link>
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
          >
            <Home className="w-3.5 h-3.5" />
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Screen: Question ─────────────────────────────────────────────────────────
function QuestionScreen({
  currentCase,
  question,
  questionIndex,
  totalQuestions,
  attempt,
  streak,
  shuffledOptions,
  onAnswer,
  onHint,
  hintUsed,
  timeLeft,
  totalScore,
  disabledOptions,
}: {
  currentCase: Case
  question: Question
  questionIndex: number
  totalQuestions: number
  attempt: number
  streak: number
  shuffledOptions: { text: string; originalIndex: number }[]
  onAnswer: (idx: number) => void
  onHint: () => void
  hintUsed: boolean
  timeLeft: number
  totalScore: number
  disabledOptions: number[]
}) {
  const urgent = timeLeft <= 4
  const pointsAvailable = POINTS_BY_ATTEMPT[Math.min(attempt - 1, 3)]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="border-b-2 border-border bg-card px-6 py-4 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-muted-foreground uppercase tracking-widest font-semibold">
            {currentCase.code}
          </span>
          <span className="w-px h-5 bg-border" />
          <span className="font-mono text-sm text-foreground font-bold truncate max-w-[220px]">
            {currentCase.title}
          </span>
        </div>
        <div className="flex items-center gap-6">
          {streak >= 2 && (
            <div className="flex items-center gap-2 text-primary">
              <Flame className="w-5 h-5" />
              <span className="font-mono text-sm font-bold">{streak} chuỗi</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-golden" fill="currentColor" />
            <span className="font-mono text-sm font-bold text-foreground">{totalScore}đ</span>
          </div>
          <div
            className={`flex items-center gap-2 font-mono font-extrabold ${
              urgent ? "text-primary animate-pulse text-2xl" : "text-foreground text-xl"
            }`}
          >
            <Timer className="w-5 h-5" />
            {timeLeft}s
          </div>
        </div>
      </div>

      {/* Timer bar */}
      <TimerBar seconds={timeLeft} total={QUESTION_TIME} urgent={urgent} />

      <div className="flex-1 px-6 py-8 max-w-3xl mx-auto w-full">
        {/* Case context strip */}
        <div className="bg-card border border-border px-4 py-3 mb-6 flex gap-3 items-start">
          <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">
              Bị cáo
            </p>
            <p className="font-sans text-xs text-foreground">
              <strong>{currentCase.defendant}</strong> — {currentCase.role}
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-2 mb-5">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`flex-1 h-1 ${
                i < questionIndex
                  ? "bg-primary"
                  : i === questionIndex
                  ? "bg-primary/50"
                  : "bg-border"
              }`}
            />
          ))}
          <span className="font-mono text-xs text-muted-foreground whitespace-nowrap ml-1">
            {questionIndex + 1}/{totalQuestions}
          </span>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-primary text-primary-foreground font-mono text-xs px-2.5 py-1 font-bold uppercase tracking-wider">
              Câu {questionIndex + 1}
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              Lần thử {attempt}/4 — {pointsAvailable} điểm nếu đúng
            </span>
          </div>
          <p className="font-[var(--font-playfair)] text-xl md:text-2xl text-foreground leading-snug font-semibold">
            {question.text}
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {shuffledOptions.map((opt, idx) => {
            const isDisabled = disabledOptions.includes(idx)
            return (
              <button
                key={idx}
                onClick={() => !isDisabled && onAnswer(idx)}
                disabled={isDisabled}
                className={`w-full text-left border-2 px-5 py-4 font-sans text-sm leading-relaxed transition-all duration-150 flex items-start gap-3 group ${
                  isDisabled
                    ? "border-border bg-muted/60 text-muted-foreground line-through cursor-not-allowed opacity-50"
                    : "border-border bg-card hover:border-primary hover:bg-primary/5 cursor-pointer"
                }`}
              >
                <span
                  className={`font-mono text-xs font-bold shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border ${
                    isDisabled ? "border-muted-foreground/30 text-muted-foreground/50" : "border-primary/40 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                  } transition-colors`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{opt.text}</span>
              </button>
            )
          })}
        </div>

        {/* Hint button */}
        {!hintUsed && attempt <= 3 && (
          <button
            onClick={onHint}
            className="inline-flex items-center gap-2 border border-dashed border-primary/50 px-4 py-2 font-mono text-xs text-primary/70 hover:text-primary hover:border-primary transition-colors uppercase tracking-widest"
          >
            <Lightbulb className="w-3.5 h-3.5" />
            Xem gợi ý (-3 điểm)
          </button>
        )}
        {hintUsed && (
          <div className="border border-dashed border-primary/40 bg-primary/5 px-4 py-3 flex gap-2 items-start">
            <Lightbulb className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="font-[var(--font-playfair)] text-sm italic text-foreground/80 leading-relaxed">
              {question.hcmQuote}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Screen: Explanation ──────────────────────────────────────────────────────
function ExplanationScreen({
  question,
  correct,
  pointsEarned,
  onNext,
  isLastQuestion,
}: {
  question: Question
  correct: boolean
  pointsEarned: number
  onNext: () => void
  isLastQuestion: boolean
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full space-y-6">
        {/* Result badge */}
        <div
          className={`flex items-center gap-4 p-5 border-2 ${
            correct ? "border-green-500 bg-green-50" : "border-primary bg-primary/5"
          }`}
        >
          {correct ? (
            <CheckCircle2 className="w-8 h-8 text-green-600 shrink-0" />
          ) : (
            <XCircle className="w-8 h-8 text-primary shrink-0" />
          )}
          <div>
            <p
              className={`font-mono text-sm font-bold uppercase tracking-widest ${
                correct ? "text-green-700" : "text-primary"
              }`}
            >
              {correct ? "Chính xác!" : "Chưa đúng"}
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              +{pointsEarned} điểm
            </p>
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-card border-2 border-border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
              Giải thích
            </span>
          </div>
          <p className="font-sans text-sm text-foreground leading-relaxed">
            {question.explanation}
          </p>

          {/* HCM Quote */}
          <div className="border-l-4 border-primary pl-4 mt-4">
            <p className="font-[var(--font-playfair)] text-base italic text-foreground leading-relaxed">
              {question.hcmQuote}
            </p>
            <p className="font-mono text-xs text-primary uppercase tracking-widest mt-2 font-semibold">
              — Hồ Chí Minh
            </p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="w-full group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all duration-200"
        >
          <span>{isLastQuestion ? "Xem phán quyết" : "Câu tiếp theo"}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

// ─── Screen: Case Verdict ─────────────────────────────────────────────────────
function CaseVerdictScreen({
  currentCase,
  caseScore,
  maxCaseScore,
  onNext,
  isLastCase,
}: {
  currentCase: Case
  caseScore: number
  maxCaseScore: number
  onNext: () => void
  isLastCase: boolean
}) {
  const pct = Math.min(100, Math.round((caseScore / maxCaseScore) * 100))
  return (
    <div className="min-h-screen bg-foreground flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-[1px] bg-primary" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-semibold">
            Phán quyết
          </span>
          <div className="w-10 h-[1px] bg-primary" />
        </div>

        <Gavel className="w-16 h-16 text-primary mx-auto" strokeWidth={1.5} />

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-background/50 mb-2">
            {currentCase.code} — {currentCase.title}
          </p>
          <h2 className="font-[var(--font-playfair)] text-3xl md:text-4xl font-bold text-background leading-tight">
            {currentCase.defendant}
          </h2>
          <p className="font-sans text-sm text-background/60 mt-1">{currentCase.role}</p>
        </div>

        {/* Verdict card */}
        <div className="border-2 border-primary bg-primary/10 p-6 text-left space-y-3">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              Tuyên án
            </span>
          </div>
          <p className="font-[var(--font-playfair)] text-xl font-bold text-primary">
            {currentCase.verdict}
          </p>
          <p className="font-sans text-sm text-background/70">{currentCase.sentence}</p>
        </div>

        {/* Score for this case */}
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <p className="font-mono text-3xl font-bold text-primary">{caseScore}</p>
            <p className="font-mono text-xs text-background/50 uppercase tracking-widest">điểm</p>
          </div>
          <div className="w-px h-10 bg-background/20" />
          <div className="text-center">
            <p className="font-mono text-3xl font-bold text-golden">{pct}%</p>
            <p className="font-mono text-xs text-background/50 uppercase tracking-widest">chính xác</p>
          </div>
        </div>

        <button
          onClick={onNext}
          className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all duration-200 mx-auto"
        >
          <span>{isLastCase ? "Xem kết quả tổng" : "Vụ án tiếp theo"}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  )
}

// ─── Screen: Results ──────────────────────────────────────────────────────────
function ResultsScreen({
  records,
  totalScore,
  maxScore,
  onRestart,
}: {
  records: AnswerRecord[]
  totalScore: number
  maxScore: number
  onRestart: () => void
}) {
  const pct = Math.min(100, Math.round((totalScore / maxScore) * 100))
  const rank = getRank(pct)

  // Per-case scores
  const caseScores = CASES.map((c) => {
    const cRecords = records.filter((r) => r.caseId === c.id)
    const score = cRecords.reduce((s, r) => s + r.points, 0)
    const max = c.questions.length * 10
    return { case: c, score, max, pct: Math.min(100, Math.round((score / max) * 100)) }
  })

  return (
    <div className="min-h-screen bg-background px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[2px] bg-primary" />
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary font-semibold">
              Kết quả phiên tòa
            </span>
            <div className="w-10 h-[2px] bg-primary" />
          </div>
          <Trophy className="w-16 h-16 text-golden mx-auto" strokeWidth={1.5} />
          <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl font-bold text-foreground">
            {rank.label}
          </h1>
          <p className="font-sans text-sm text-muted-foreground">{rank.desc}</p>
        </div>

        {/* Big score */}
        <div className="bg-foreground text-background p-8 text-center space-y-2">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-background/50">Tổng điểm</p>
          <p className="font-mono text-6xl font-extrabold text-primary">{totalScore}</p>
          <p className="font-mono text-sm text-background/50">/ {maxScore} điểm — {pct}% chính xác</p>
          <div className="w-full h-2 bg-background/10 mt-4">
            <div
              className="h-full bg-primary transition-all duration-700"
              style={{ width: `${Math.min(100, pct)}%` }}
            />
          </div>
        </div>

        {/* Per-case breakdown */}
        <div className="space-y-4">
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground font-semibold">
            Chi tiết từng vụ án
          </h3>
          {caseScores.map(({ case: c, score, max, pct: cp }) => (
            <div key={c.id} className="bg-card border border-border px-5 py-4 space-y-2">
              <div className="flex items-center justify-between gap-4 min-w-0">
                <div className="min-w-0 flex-1">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest block">
                    {c.code}
                  </span>
                  <span className="font-sans text-sm font-semibold text-foreground block truncate">
                    {c.title}
                  </span>
                </div>
                <span className="font-mono text-sm font-bold text-primary shrink-0 whitespace-nowrap">
                  {score}/{max}đ
                </span>
              </div>
              <div className="w-full h-1.5 bg-border">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${cp}%` }}
                />
              </div>
              <p className="font-mono text-xs text-muted-foreground text-right">{cp}%</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={onRestart}
            className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-sans text-sm uppercase tracking-widest font-bold hover:bg-primary/90 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Chơi lại
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-border px-8 py-4 font-sans text-sm uppercase tracking-widest font-medium text-foreground hover:border-primary hover:text-primary transition-all"
          >
            <Home className="w-4 h-4" />
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  )
}

// ─── Main Game Controller ─────────────────────────────────────────────────────
export default function GamePage() {
  const [screen, setScreen] = useState<Screen>("intro")
  const [cases, setCases] = useState<Case[]>([])
  const [completedCases, setCompletedCases] = useState<number[]>([])
  const [currentCase, setCurrentCase] = useState<Case | null>(null)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [attempt, setAttempt] = useState(1)
  const [shuffledOptions, setShuffledOptions] = useState<{ text: string; originalIndex: number }[]>([])
  const [disabledOptions, setDisabledOptions] = useState<number[]>([])
  const [hintUsed, setHintUsed] = useState(false)
  const [records, setRecords] = useState<AnswerRecord[]>([])
  const [totalScore, setTotalScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [gavelAnim, setGavelAnim] = useState<{ show: boolean; correct: boolean }>({
    show: false,
    correct: false,
  })
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false)
  const [lastPointsEarned, setLastPointsEarned] = useState(0)
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME)
  const [caseScore, setCaseScore] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Init
  useEffect(() => {
    setCases(shuffle(CASES))
  }, [])

  const maxScore = CASES.length * 5 * 10 // 6 cases × 5 questions × 10 pts each

  // Timer
  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
  }, [])

  const startTimer = useCallback(() => {
    stopTimer()
    setTimeLeft(QUESTION_TIME)
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          stopTimer()
          // Time's up — treat as wrong, record 0 pts
          const q = shuffledQuestions[questionIndex]
          if (q) {
            setRecords((prev) => [
              ...prev,
              { caseId: currentCase!.id, questionId: q.id, correct: false, attempt: 4, points: 0 },
            ])
            setStreak(0)
            setLastAnswerCorrect(false)
            setLastPointsEarned(0)
            setGavelAnim({ show: true, correct: false })
            setTimeout(() => {
              setGavelAnim({ show: false, correct: false })
              setScreen("explanation")
            }, 700)
          }
          return 0
        }
        return t - 1
      })
    }, 1000)
  }, [stopTimer, shuffledQuestions, questionIndex, currentCase])

  useEffect(() => {
    if (screen === "question") startTimer()
    else stopTimer()
    return () => stopTimer()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, questionIndex])

  // ── Handlers ──
  const handleStart = () => setScreen("case-select")

  const buildShuffledOptions = useCallback((q: Question) => {
    const opts = q.options.map((text, i) => ({ text, originalIndex: i }))
    return shuffle(opts)
  }, [])

  const handleSelectCase = (c: Case) => {
    const qs = shuffle(c.questions)
    setCurrentCase(c)
    setShuffledQuestions(qs)
    setQuestionIndex(0)
    setAttempt(1)
    setShuffledOptions(buildShuffledOptions(qs[0]))
    setDisabledOptions([])
    setHintUsed(false)
    setCaseScore(0)
    setScreen("question")
  }

  const handleAnswer = (idx: number) => {
    const q = shuffledQuestions[questionIndex]
    const correct = shuffledOptions[idx]?.originalIndex === q.correctIndex

    stopTimer()
    if (correct) {
      const pts = POINTS_BY_ATTEMPT[0] // always first-attempt points since only 1 chance
      const newStreak = streak + 1
      const bonus = newStreak >= 3 ? Math.min(newStreak, 5) : 0
      const total = pts + bonus
      setTotalScore((s) => s + total)
      setCaseScore((s) => s + total)
      setStreak(newStreak)
      setLastPointsEarned(total)
      setRecords((prev) => [
        ...prev,
        { caseId: currentCase!.id, questionId: q.id, correct: true, attempt: 1, points: total },
      ])
      setLastAnswerCorrect(true)
      setGavelAnim({ show: true, correct: true })
      setTimeout(() => {
        setGavelAnim({ show: false, correct: false })
        setScreen("explanation")
      }, 700)
    } else {
      // Wrong on first (and only) attempt — 0 points, move on
      setStreak(0)
      setLastPointsEarned(0)
      setRecords((prev) => [
        ...prev,
        { caseId: currentCase!.id, questionId: q.id, correct: false, attempt: 1, points: 0 },
      ])
      setLastAnswerCorrect(false)
      setGavelAnim({ show: true, correct: false })
      setTimeout(() => {
        setGavelAnim({ show: false, correct: false })
        setScreen("explanation")
      }, 700)
    }
  }

  const handleHint = () => {
    setHintUsed(true)
    setTotalScore((s) => Math.max(0, s - 3))
    setCaseScore((s) => Math.max(0, s - 3))
  }

  const handleNextFromExplanation = () => {
    const isLast = questionIndex >= shuffledQuestions.length - 1
    if (isLast) {
      setCompletedCases((prev) => [...prev, currentCase!.id])
      setScreen("case-verdict")
    } else {
      const nextIndex = questionIndex + 1
      setQuestionIndex(nextIndex)
      setShuffledOptions(buildShuffledOptions(shuffledQuestions[nextIndex]))
      setAttempt(1)
      setDisabledOptions([])
      setHintUsed(false)
      setScreen("question")
    }
  }

  const handleNextFromVerdict = () => {
    const isLast = completedCases.length >= cases.length
    if (isLast) {
      setScreen("results")
    } else {
      setScreen("case-select")
    }
  }

  const handleRestart = () => {
    setCases(shuffle(CASES))
    setCompletedCases([])
    setCurrentCase(null)
    setShuffledQuestions([])
    setQuestionIndex(0)
    setAttempt(1)
    setShuffledOptions([])
    setDisabledOptions([])
    setHintUsed(false)
    setRecords([])
    setTotalScore(0)
    setStreak(0)
    setCaseScore(0)
    setScreen("intro")
  }

  return (
    <>
      <style>{`
        @keyframes gavelPop {
          0% { transform: scale(0.5) rotate(-15deg); opacity: 0; }
          60% { transform: scale(1.15) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes streakPop {
          0% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
          60% { transform: translateX(-50%) translateY(4px); opacity: 1; }
          100% { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
      `}</style>

      <GavelAnim show={gavelAnim.show} correct={gavelAnim.correct} />
      {streak >= 3 && screen === "question" && <StreakBanner streak={streak} />}

      {screen === "intro" && <IntroScreen onStart={handleStart} />}

      {screen === "case-select" && (
        <CaseSelectScreen
          cases={cases}
          completedCases={completedCases}
          onSelect={handleSelectCase}
          totalScore={totalScore}
          maxScore={maxScore}
        />
      )}

      {screen === "question" && currentCase && shuffledQuestions[questionIndex] && (
        <QuestionScreen
          currentCase={currentCase}
          question={shuffledQuestions[questionIndex]}
          questionIndex={questionIndex}
          totalQuestions={shuffledQuestions.length}
          attempt={attempt}
          streak={streak}
          shuffledOptions={shuffledOptions}
          onAnswer={handleAnswer}
          onHint={handleHint}
          hintUsed={hintUsed}
          timeLeft={timeLeft}
          totalScore={totalScore}
          disabledOptions={disabledOptions}
        />
      )}

      {screen === "explanation" && currentCase && shuffledQuestions[questionIndex] && (
        <ExplanationScreen
          question={shuffledQuestions[questionIndex]}
          correct={lastAnswerCorrect}
          pointsEarned={lastPointsEarned}
          onNext={handleNextFromExplanation}
          isLastQuestion={questionIndex >= shuffledQuestions.length - 1}
        />
      )}

      {screen === "case-verdict" && currentCase && (
        <CaseVerdictScreen
          currentCase={currentCase}
          caseScore={caseScore}
          maxCaseScore={currentCase.questions.length * 10}
          onNext={handleNextFromVerdict}
          isLastCase={completedCases.length >= cases.length}
        />
      )}

      {screen === "results" && (
        <ResultsScreen
          records={records}
          totalScore={totalScore}
          maxScore={maxScore}
          onRestart={handleRestart}
        />
      )}
    </>
  )
}
