export interface Question {
  id: number
  text: string
  options: string[]
  correctIndex: number
  explanation: string
  hcmQuote: string
}

export interface Case {
  id: number
  code: string
  title: string
  defendant: string
  role: string
  charge: string
  story: string
  verdict: string
  sentence: string
  questions: Question[]
}

export const CASES: Case[] = [
  {
    id: 1,
    code: "VV-001",
    title: "Vụ Lạm Dụng Quyền Lực",
    defendant: "Nguyễn Văn Minh",
    role: "Cán bộ quản lý đất đai cấp huyện",
    charge: "Lợi dụng chức vụ, tham nhũng đất công",
    story:
      "Nguyễn Văn Minh đã lợi dụng vị trí quản lý để cấp phép sử dụng đất trái phép cho người thân, gây thiệt hại cho nhà nước hàng tỷ đồng. Ông ta tin rằng quyền lực của mình là tuyệt đối và không ai có thể kiểm soát.",
    verdict: "Có tội",
    sentence: "7 năm tù giam, bồi thường 3,2 tỷ đồng",
    questions: [
      {
        id: 1,
        text: "Theo tư tưởng Hồ Chí Minh, quyền lực nhà nước phải được kiểm soát như thế nào?",
        options: [
          "Chỉ cần kiểm soát nội bộ trong cơ quan",
          "Kiểm soát từ bên trong lẫn bên ngoài thông qua nhiều cơ chế",
          "Giao toàn quyền cho lãnh đạo cấp cao",
          "Không cần kiểm soát nếu cán bộ có đạo đức tốt",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh nhấn mạnh quyền lực phải được kiểm soát cả bên trong (tự kiểm soát, phê bình nội bộ) và bên ngoài (nhân dân giám sát, báo chí, cơ quan độc lập). Không có cơ chế kiểm soát đơn lẻ nào là đủ.",
        hcmQuote:
          '"Cán bộ là người đầy tớ của nhân dân, phải chịu sự kiểm soát của nhân dân."',
      },
      {
        id: 2,
        text: "Hành vi của Nguyễn Văn Minh thể hiện căn bệnh gì mà Hồ Chí Minh đã chỉ ra?",
        options: [
          "Bệnh cận thị về chính trị",
          "Bệnh quan liêu và tham nhũng",
          "Bệnh sùng ngoại",
          "Bệnh hình thức",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh gọi tham nhũng và quan liêu là "giặc nội xâm" nguy hiểm không kém gì giặc ngoại xâm. Lạm quyền vì lợi ích cá nhân là biểu hiện điển hình của tham nhũng.',
        hcmQuote:
          '"Tham ô, lãng phí, quan liêu là tội ác. Phải tẩy sạch những thói xấu đó."',
      },
      {
        id: 3,
        text: "Cơ chế nào hiệu quả nhất để ngăn chặn hành vi như Nguyễn Văn Minh?",
        options: [
          "Tăng lương cho cán bộ",
          "Công khai, minh bạch và giám sát của nhân dân",
          "Chỉ dựa vào lương tâm cá nhân",
          "Tăng số lượng cán bộ thanh tra",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh luôn nhấn mạnh vai trò của sự công khai minh bạch và giám sát của nhân dân. Khi thông tin được công khai và dân biết, dân kiểm tra, tham nhũng khó có đất sống.",
        hcmQuote:
          '"Dân biết, dân bàn, dân làm, dân kiểm tra – đó là nền tảng dân chủ thực sự."',
      },
      {
        id: 4,
        text: "Theo Hồ Chí Minh, nhà nước \"của dân, do dân, vì dân\" nghĩa là gì?",
        options: [
          "Nhà nước do Đảng lãnh đạo toàn diện",
          "Nhà nước thuộc về nhân dân, do nhân dân xây dựng và phục vụ lợi ích nhân dân",
          "Nhà nước quản lý tất cả tài sản của nhân dân",
          "Nhà nước chỉ phục vụ giai cấp công nhân",
        ],
        correctIndex: 1,
        explanation:
          'Tư tưởng "của dân, do dân, vì dân" là nền tảng của nhà nước kiểu mới. Mọi quyền lực đều xuất phát từ nhân dân và phải phục vụ nhân dân, cán bộ là người đầy tớ chứ không phải ông chủ.',
        hcmQuote: '"Nước ta là nước dân chủ. Bao nhiêu lợi ích đều vì dân."',
      },
      {
        id: 5,
        text: "Hình phạt nào phù hợp nhất với quan điểm pháp quyền của Hồ Chí Minh?",
        options: [
          "Tha thứ vì đã có công với cách mạng",
          "Xử lý nghiêm minh theo pháp luật, không có vùng cấm",
          "Phạt tiền nhẹ và cảnh cáo",
          "Chuyển công tác sang vị trí khác",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh khẳng định pháp luật phải được thực thi nghiêm minh, công bằng với tất cả mọi người, không có ngoại lệ. Nghiêm khắc với tội phạm tham nhũng là cách bảo vệ nhân dân.",
        hcmQuote:
          '"Pháp luật phải thẳng thắn, không vị nể, không có vùng cấm."',
      },
    ],
  },
  {
    id: 2,
    code: "VV-002",
    title: "Vụ Lãng Phí Ngân Sách",
    defendant: "Trần Thị Lan",
    role: "Giám đốc Sở Tài chính tỉnh",
    charge: "Lãng phí ngân sách nhà nước trong dự án công trình",
    story:
      "Trần Thị Lan phê duyệt dự án xây dựng trung tâm hành chính trị giá 500 tỷ đồng với chi phí bị thổi giá gấp đôi so với thực tế. Bà ta biện hộ đây là \"phát triển hạ tầng\" nhưng thực chất đã trục lợi từ hoa hồng.",
    verdict: "Có tội",
    sentence: "5 năm tù giam, bồi thường 120 tỷ đồng",
    questions: [
      {
        id: 1,
        text: "Hồ Chí Minh coi lãng phí như thế nào trong quan điểm về đạo đức cách mạng?",
        options: [
          "Chỉ là thiếu sót nhỏ trong quản lý",
          "Là tội ác ngang với tham ô, phản bội nhân dân",
          "Có thể chấp nhận nếu vì mục tiêu phát triển",
          "Ít nghiêm trọng hơn tham nhũng trực tiếp",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh coi lãng phí là tội ác vì tiền của nhà nước là tiền thuế của nhân dân. Lãng phí cũng như lấy cắp tài sản của dân, chỉ khác về hình thức.',
        hcmQuote:
          '"Tham ô là lấy của công làm của tư. Lãng phí cũng là phạm tội với nhân dân."',
      },
      {
        id: 2,
        text: "Biện pháp nào Hồ Chí Minh đề xuất để ngăn lãng phí trong đầu tư công?",
        options: [
          "Trao toàn quyền quyết định cho chuyên gia kỹ thuật",
          "Thực hành tiết kiệm, công khai dự toán và giám sát chặt chẽ",
          "Chỉ phê duyệt dự án nhỏ",
          "Thuê chuyên gia nước ngoài kiểm định",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh luôn đề cao tiết kiệm như một đức tính cách mạng. Công khai dự toán và cho nhân dân giám sát là cách hiệu quả nhất để ngăn thổi giá và tham nhũng trong đầu tư công.",
        hcmQuote: '"Tiết kiệm là quốc sách. Tiền của nhân dân không phải để phung phí."',
      },
      {
        id: 3,
        text: "Hành vi của Trần Thị Lan vi phạm nguyên tắc nào trong xây dựng nhà nước?",
        options: [
          "Nguyên tắc tập trung dân chủ",
          "Nguyên tắc liêm chính và phục vụ nhân dân",
          "Nguyên tắc phân cấp quản lý",
          "Nguyên tắc đoàn kết nội bộ",
        ],
        correctIndex: 1,
        explanation:
          "Liêm chính là một trong những phẩm chất cốt lõi Hồ Chí Minh yêu cầu ở cán bộ. Cán bộ phải trong sạch, không tham ô, không lãng phí. Đây là điều kiện tiên quyết để nhà nước phục vụ nhân dân.",
        hcmQuote: '"Cán bộ phải thực sự cần, kiệm, liêm, chính, chí công vô tư."',
      },
      {
        id: 4,
        text: "Vai trò của nhân dân trong giám sát chi tiêu ngân sách theo tư tưởng Hồ Chí Minh?",
        options: [
          "Chỉ đóng thuế, không cần quan tâm cách chi tiêu",
          "Nhân dân có quyền và trách nhiệm giám sát, phản ánh sai phạm",
          "Giao toàn bộ cho cơ quan kiểm toán nhà nước",
          "Chờ báo cáo định kỳ từ chính quyền",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh nhấn mạnh nhân dân không chỉ là chủ thể mà còn là người giám sát quyền lực. Quyền giám sát của nhân dân là công cụ quan trọng nhất để chống lãng phí và tham nhũng.",
        hcmQuote:
          '"Nhân dân có quyền đôn đốc và phê bình Chính phủ. Đó là quyền dân chủ thiêng liêng."',
      },
      {
        id: 5,
        text: "Tiêu chuẩn đạo đức nào Hồ Chí Minh đặt ra cho cán bộ quản lý tài chính?",
        options: [
          "Có bằng cấp cao và kinh nghiệm quốc tế",
          "Liêm khiết, trung thực, coi tiền công như tiền của mình",
          "Biết nói tiếng Anh và làm việc với đối tác nước ngoài",
          "Được sự tín nhiệm của cấp trên",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh dạy cán bộ phải "dĩ công vi tư" – lấy việc công làm trọng. Với tiền bạc công quỹ phải coi như của mình, không tiêu pha lãng phí dù một đồng.',
        hcmQuote: '"Tiền bạc công quỹ là mồ hôi nước mắt nhân dân. Không được phung phí."',
      },
    ],
  },
  {
    id: 3,
    code: "VV-003",
    title: "Vụ Bổ Nhiệm Người Thân",
    defendant: "Lê Quang Hùng",
    role: "Chủ tịch UBND huyện",
    charge: "Lợi dụng chức vụ bổ nhiệm người thân vào các vị trí quan trọng",
    story:
      "Lê Quang Hùng đã bổ nhiệm 8 người thân trong gia đình vào các vị trí lãnh đạo cấp phòng, ban mà không qua quy trình tuyển chọn minh bạch. Ông ta cho rằng đây là quyền của mình khi đã được tin tưởng giao trọng trách.",
    verdict: "Có tội",
    sentence: "4 năm tù giam, cách chức toàn bộ người thân được bổ nhiệm sai",
    questions: [
      {
        id: 1,
        text: "Hồ Chí Minh yêu cầu gì về tiêu chuẩn cán bộ trong bộ máy nhà nước?",
        options: [
          "Ưu tiên người có mối quan hệ với lãnh đạo",
          "Tuyển chọn dựa trên tài năng, đức độ và qua quy trình công khai",
          "Ưu tiên người có kinh nghiệm lâu năm dù không qua thi tuyển",
          "Do lãnh đạo cấp trên toàn quyền quyết định",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh luôn nhấn mạnh cán bộ phải được tuyển chọn qua quy trình minh bạch, dựa trên đức và tài. Việc dùng người thân vì tình cảm là biểu hiện của chủ nghĩa cá nhân, phá hoại tổ chức.",
        hcmQuote: '"Cán bộ là cái gốc của mọi công việc. Cần có đức, có tài, chọn đúng người."',
      },
      {
        id: 2,
        text: "Hiện tượng \"con ông cháu cha\" trong bộ máy nhà nước gây ra hậu quả gì?",
        options: [
          "Tạo sự gắn kết trong bộ máy",
          "Làm giảm hiệu quả, mất công bằng và xói mòn niềm tin của nhân dân",
          "Tăng tính ổn định của nhân sự",
          "Giúp truyền đạt kinh nghiệm gia đình",
        ],
        correctIndex: 1,
        explanation:
          "Bổ nhiệm người thân không đủ tiêu chuẩn dẫn đến bộ máy kém năng lực, mất công bằng với người tài, và làm nhân dân mất tin vào nhà nước. Đây là một trong những nguyên nhân suy yếu bộ máy.",
        hcmQuote: '"Chủ nghĩa cá nhân là kẻ thù nguy hiểm của chủ nghĩa xã hội."',
      },
      {
        id: 3,
        text: "Biện pháp nào ngăn chặn tình trạng bổ nhiệm sai tiêu chuẩn?",
        options: [
          "Để lãnh đạo tự quyết định nhân sự",
          "Thi tuyển công khai, hội đồng độc lập và công bố kết quả",
          "Chỉ xét bằng cấp chuyên môn",
          "Hỏi ý kiến người dân địa phương",
        ],
        correctIndex: 1,
        explanation:
          "Quy trình thi tuyển công khai với hội đồng độc lập là cách hiệu quả nhất. Khi quy trình minh bạch, không ai có thể tự ý bổ nhiệm người thân mà không bị phát hiện.",
        hcmQuote:
          '"Việc dùng người phải công khai, công bằng, không vị nể, không thiên vị."',
      },
      {
        id: 4,
        text: "Theo tư tưởng Hồ Chí Minh, \"chủ nghĩa cá nhân\" trong cán bộ biểu hiện như thế nào?",
        options: [
          "Có chí tiến thủ cá nhân",
          "Đặt lợi ích cá nhân và gia đình lên trên lợi ích tập thể, nhân dân",
          "Có quan điểm độc lập trong công việc",
          "Tự học hỏi và phát triển bản thân",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh phân biệt rõ "cá nhân chủ nghĩa" (lối sống ích kỷ, hại công, lợi tư) với tinh thần cá nhân tích cực. Bổ nhiệm người thân là biểu hiện điển hình của chủ nghĩa cá nhân cần lên án.',
        hcmQuote: '"Chủ nghĩa cá nhân trái với đạo đức cách mạng. Phải diệt trừ nó."',
      },
      {
        id: 5,
        text: "Sau vụ án, cơ quan nào có trách nhiệm chính trong việc cải cách quy trình bổ nhiệm?",
        options: [
          "Chỉ Bộ Nội vụ",
          "Toàn bộ hệ thống từ Đảng, Chính quyền đến cơ quan giám sát nhân dân",
          "Chỉ các cơ quan tư pháp",
          "Dư luận và báo chí",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh nhấn mạnh cải cách bộ máy là trách nhiệm của toàn hệ thống, không phải một cơ quan. Đảng lãnh đạo, chính quyền thực hiện, nhân dân giám sát – ba lực lượng phải cùng vào cuộc.",
        hcmQuote:
          '"Cải cách bộ máy là nhiệm vụ thường xuyên, không phải chỉ sau khi xảy ra sai phạm."',
      },
    ],
  },
  {
    id: 4,
    code: "VV-004",
    title: "Vụ Che Giấu Thông Tin",
    defendant: "Phạm Minh Đức",
    role: "Trưởng phòng Thông tin - Truyền thông",
    charge: "Cố ý che giấu thông tin dịch bệnh, gây thiệt hại nghiêm trọng cho nhân dân",
    story:
      "Phạm Minh Đức đã biết về ổ dịch bệnh trong khu vực nhưng cố tình trì hoãn công bố thông tin để tránh ảnh hưởng đến các sự kiện chính trị địa phương. Hậu quả là dịch lan rộng, hàng trăm người bị ảnh hưởng.",
    verdict: "Có tội",
    sentence: "3 năm tù giam, bồi thường thiệt hại y tế",
    questions: [
      {
        id: 1,
        text: "Theo tư tưởng Hồ Chí Minh, quyền được thông tin của nhân dân quan trọng như thế nào?",
        options: [
          "Có thể hạn chế khi cần bảo vệ ổn định chính trị",
          "Là quyền cơ bản, nhà nước phải bảo đảm thông tin trung thực và kịp thời",
          "Chỉ cần thiết trong thời bình",
          "Do lãnh đạo quyết định thời điểm công bố",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh coi quyền được thông tin là một phần của quyền dân chủ. Che giấu thông tin, đặc biệt liên quan đến sức khỏe nhân dân, là hành vi phản dân chủ và vi phạm nghĩa vụ của nhà nước.",
        hcmQuote: '"Chính phủ phải nói thật với nhân dân. Không được che giấu sự thật."',
      },
      {
        id: 2,
        text: "Hành vi trì hoãn thông tin của Phạm Minh Đức phản ánh căn bệnh nào?",
        options: [
          "Bệnh sợ trách nhiệm và bệnh quan liêu",
          "Bệnh thiếu chuyên môn kỹ thuật",
          "Bệnh thiếu kinh phí hoạt động",
          "Bệnh thiếu nhân lực",
        ],
        correctIndex: 0,
        explanation:
          'Hồ Chí Minh chỉ ra bệnh "sợ trách nhiệm" – cán bộ không dám đưa ra quyết định vì sợ ảnh hưởng đến vị trí của mình. Kết hợp với bệnh quan liêu – không sát thực tế, không vì dân – đây là hai căn bệnh nguy hiểm.',
        hcmQuote:
          '"Bệnh sợ trách nhiệm và bệnh quan liêu làm hỏng bộ máy, hại đến nhân dân."',
      },
      {
        id: 3,
        text: "Vai trò của truyền thông và báo chí trong giám sát quyền lực theo tư tưởng Hồ Chí Minh?",
        options: [
          "Chỉ tuyên truyền chủ trương, chính sách",
          "Vừa tuyên truyền vừa giám sát, phát hiện sai phạm và bảo vệ lợi ích nhân dân",
          "Không được phê bình lãnh đạo",
          "Chỉ đưa tin tích cực",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh từng làm báo và hiểu rõ vai trò kép của báo chí. Báo chí không chỉ tuyên truyền mà còn phải là tiếng nói của nhân dân, dám phê bình cái xấu, bảo vệ cái đúng.",
        hcmQuote: '"Báo chí của ta phải phục vụ nhân dân, dám nói thật, dám phê bình."',
      },
      {
        id: 4,
        text: "Khi cán bộ che giấu sự thật vì \"ổn định chính trị\", điều đó cho thấy điều gì?",
        options: [
          "Cán bộ có ý thức chính trị cao",
          "Cán bộ đặt lợi ích nhóm và sự ổn định giả tạo lên trên lợi ích thực của nhân dân",
          "Cán bộ cần thêm quyền hạn để xử lý tình huống",
          "Cần có quy định rõ hơn về thẩm quyền công bố thông tin",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh phân biệt rõ \"ổn định thực chất\" (dựa trên sự thật, lòng tin nhân dân) với \"ổn định giả tạo\" (che đậy vấn đề). Ổn định giả tạo chỉ kéo dài khủng hoảng và làm mất lòng tin lâu dài.",
        hcmQuote:
          '"Ổn định phải dựa trên sự thật và lòng tin của nhân dân, không phải trên sự che đậy."',
      },
      {
        id: 5,
        text: "Biện pháp nào hiệu quả nhất để đảm bảo thông tin công khai kịp thời?",
        options: [
          "Tập trung mọi quyết định về trung ương",
          "Quy định pháp lý về nghĩa vụ công bố thông tin kèm chế tài nghiêm",
          "Tăng cường đào tạo kỹ năng truyền thông",
          "Để báo chí tự tìm kiếm và công bố",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh coi pháp luật là công cụ quan trọng để buộc bộ máy nhà nước thực hiện trách nhiệm. Quy định rõ ràng về nghĩa vụ công bố thông tin kèm theo chế tài là cách bảo vệ quyền của nhân dân.",
        hcmQuote:
          '"Pháp luật phải quy định rõ quyền và nghĩa vụ, để không ai có thể trốn tránh trách nhiệm."',
      },
    ],
  },
  {
    id: 5,
    code: "VV-005",
    title: "Vụ Thông Đồng Doanh Nghiệp",
    defendant: "Hoàng Văn Thái",
    role: "Phó Giám đốc Sở Kế hoạch - Đầu tư",
    charge: "Thông đồng với doanh nghiệp tư nhân trong đấu thầu dự án công",
    story:
      "Hoàng Văn Thái đã tiết lộ thông tin đấu thầu mật cho công ty sân sau, giúp công ty này thắng thầu nhiều dự án với giá cao hơn thị trường. Hắn nhận hối lộ qua hình thức cổ phần ẩn danh trong công ty.",
    verdict: "Có tội",
    sentence: "9 năm tù giam, tịch thu toàn bộ tài sản bất minh",
    questions: [
      {
        id: 1,
        text: "Mối quan hệ giữa nhà nước và doanh nghiệp theo tư tưởng Hồ Chí Minh phải như thế nào?",
        options: [
          "Nhà nước phải bảo vệ và ưu tiên mọi yêu cầu của doanh nghiệp",
          "Nhà nước quản lý bằng pháp luật, tạo môi trường công bằng, không thiên vị",
          "Doanh nghiệp tư nhân không được tham gia dự án nhà nước",
          "Nhà nước và doanh nghiệp có thể hợp tác phi chính thức",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh coi nhà nước là người điều tiết, không phải đối tác kinh doanh của doanh nghiệp. Pháp luật phải áp dụng bình đẳng, tạo sân chơi công bằng cho mọi thành phần kinh tế.",
        hcmQuote:
          '"Nhà nước phải quản lý kinh tế bằng pháp luật, không bằng quan hệ cá nhân."',
      },
      {
        id: 2,
        text: "Hành vi nhận hối lộ qua cổ phần ẩn danh phản ánh điều gì về bản chất tham nhũng?",
        options: [
          "Tham nhũng chỉ xảy ra khi nhận tiền mặt trực tiếp",
          "Tham nhũng luôn tìm cách ẩn mình qua các hình thức tinh vi hơn",
          "Đây là hình thức đầu tư hợp pháp",
          "Khó xử lý vì không có bằng chứng rõ ràng",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh cảnh báo tham nhũng sẽ ngày càng tinh vi. Cơ chế kiểm soát phải đi trước các thủ đoạn che giấu. Buộc kê khai tài sản, kiểm tra nguồn gốc là cần thiết.",
        hcmQuote: '"Kẻ tham nhũng ngày càng tinh vi. Cơ chế kiểm soát phải chặt hơn chúng."',
      },
      {
        id: 3,
        text: "Cơ chế đấu thầu minh bạch cần đảm bảo yếu tố gì theo nguyên tắc dân chủ?",
        options: [
          "Ưu tiên doanh nghiệp nhà nước",
          "Công khai hồ sơ, độc lập hội đồng, giám sát bên thứ ba",
          "Để lãnh đạo cơ quan quyết định cuối cùng",
          "Chỉ mời một số doanh nghiệp uy tín",
        ],
        correctIndex: 1,
        explanation:
          "Minh bạch trong đấu thầu là điều kiện cơ bản của nhà nước pháp quyền. Hội đồng độc lập, hồ sơ công khai và giám sát độc lập là ba trụ cột ngăn thông đồng.",
        hcmQuote:
          '"Dân chủ trong kinh tế nghĩa là mọi người đều có cơ hội bình đẳng, không ai được đặc ân."',
      },
      {
        id: 4,
        text: "Theo Hồ Chí Minh, nguồn gốc sâu xa của tham nhũng là gì?",
        options: [
          "Do kinh tế khó khăn, lương thấp",
          "Do chủ nghĩa cá nhân, tham lam và suy thoái đạo đức",
          "Do thiếu nhân lực giám sát",
          "Do pháp luật chưa đủ nghiêm",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh phân tích tham nhũng có gốc rễ từ chủ nghĩa cá nhân và suy thoái tư tưởng, đạo đức. Dù kinh tế khó khăn, người có đạo đức cách mạng không tham nhũng; dù được trả cao, kẻ tham vẫn tham.",
        hcmQuote:
          '"Tham nhũng bắt nguồn từ suy thoái đạo đức, từ chủ nghĩa cá nhân. Chữa bệnh này phải chữa từ gốc."',
      },
      {
        id: 5,
        text: "Biện pháp nào Hồ Chí Minh đề xuất để xây dựng đội ngũ cán bộ liêm chính?",
        options: [
          "Tăng lương và phúc lợi",
          "Giáo dục đạo đức thường xuyên kết hợp cơ chế kiểm tra nghiêm",
          "Giảm bớt quyền hạn của cán bộ",
          "Luân chuyển cán bộ liên tục",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh kết hợp hai phương pháp: giáo dục để cán bộ tự giác (đức trị) và kiểm tra nghiêm để không thể sai phạm (pháp trị). Một trong hai là không đủ.',
        hcmQuote:
          '"Giáo dục đạo đức và kiểm tra nghiêm – hai mặt không thể tách rời trong xây dựng cán bộ liêm chính."',
      },
    ],
  },
  {
    id: 6,
    code: "VV-006",
    title: "Vụ Quan Liêu Giấy Tờ",
    defendant: "Vũ Thị Hoa",
    role: "Trưởng bộ phận Một cửa - UBND phường",
    charge: "Gây khó dễ, nhũng nhiễu người dân trong thủ tục hành chính",
    story:
      "Vũ Thị Hoa đã cố tình trì hoãn xử lý hồ sơ, yêu cầu thêm giấy tờ không cần thiết, và gợi ý người dân phải \"bôi trơn\" để được giải quyết nhanh. Hành vi này diễn ra kéo dài 2 năm, ảnh hưởng hàng trăm hộ dân.",
    verdict: "Có tội",
    sentence: "2 năm tù giam, đình chỉ công tác vĩnh viễn",
    questions: [
      {
        id: 1,
        text: "Bệnh quan liêu theo Hồ Chí Minh biểu hiện như thế nào trong bộ máy hành chính?",
        options: [
          "Làm việc quá chăm chỉ, thiếu nghỉ ngơi",
          "Xa rời thực tế, cửa quyền, làm khó dân, không vì lợi ích nhân dân",
          "Thiếu trình độ chuyên môn kỹ thuật",
          "Không nắm vững pháp luật",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh mô tả bệnh quan liêu là: ngồi bàn giấy, xa rời nhân dân, dùng quyền làm khó dân, chỉ quan tâm đến hình thức. Đây là một trong những căn bệnh Hồ Chí Minh phê phán gay gắt nhất.',
        hcmQuote:
          '"Bệnh quan liêu: ngồi bàn giấy, xa rời thực tế, xa rời nhân dân. Phải chữa tận gốc."',
      },
      {
        id: 2,
        text: "Tiêu chuẩn cán bộ hành chính theo tư tưởng Hồ Chí Minh là gì?",
        options: [
          "Nắm nhiều quy định để có thể từ chối hồ sơ",
          "Phục vụ nhân dân tận tâm, giải quyết nhanh, đúng pháp luật",
          "Bảo vệ lợi ích cơ quan trước lợi ích công dân",
          "Tuân thủ nghiêm ngặt mọi thủ tục dù gây khó khăn",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh dạy: "Việc gì có lợi cho dân phải hết sức làm, việc gì hại dân phải hết sức tránh." Cán bộ hành chính phải đặt sự thuận tiện của dân lên hàng đầu.',
        hcmQuote:
          '"Việc gì có lợi cho dân thì hết sức làm. Việc gì hại đến dân thì hết sức tránh."',
      },
      {
        id: 3,
        text: "\"Bôi trơn\" trong thủ tục hành chính phá vỡ nguyên tắc nào của nhà nước pháp quyền?",
        options: [
          "Nguyên tắc phân quyền",
          "Nguyên tắc bình đẳng trước pháp luật",
          "Nguyên tắc tập trung dân chủ",
          "Nguyên tắc đoàn kết dân tộc",
        ],
        correctIndex: 1,
        explanation:
          'Khi ai "bôi trơn" được phục vụ nhanh hơn, đó là sự bất bình đẳng trước pháp luật. Người nghèo, không có điều kiện "bôi trơn" bị thiệt thòi. Đây phá vỡ nguyên tắc cơ bản của nhà nước pháp quyền.',
        hcmQuote: '"Pháp luật phải công bằng với tất cả. Không được phân biệt giàu nghèo."',
      },
      {
        id: 4,
        text: "Hồ Chí Minh đề xuất cải cách hành chính theo hướng nào?",
        options: [
          "Tăng thêm nhiều tầng kiểm tra để đảm bảo chính xác",
          "Đơn giản hóa thủ tục, giảm phiền hà, tăng trách nhiệm giải trình",
          "Chuyển toàn bộ sang dịch vụ tư nhân",
          "Yêu cầu dân tự xử lý giấy tờ",
        ],
        correctIndex: 1,
        explanation:
          "Hồ Chí Minh luôn chủ trương cải cách bộ máy theo hướng tinh gọn, hiệu quả. Thủ tục hành chính phải phục vụ dân, không phải làm khó dân. Trách nhiệm giải trình là cơ chế buộc cán bộ phải làm đúng.",
        hcmQuote:
          '"Bộ máy nhà nước phải tinh gọn, hiệu quả, phục vụ dân nhanh chóng và tận tình."',
      },
      {
        id: 5,
        text: "Để giải quyết vụ án này, nhà nước cần thực hiện biện pháp nào theo tư tưởng Hồ Chí Minh?",
        options: [
          "Tăng số lượng cán bộ tại bộ phận một cửa",
          "Xử lý nghiêm người vi phạm và cải cách quy trình dựa trên phản hồi của dân",
          "Giải tán toàn bộ bộ phận một cửa",
          "Thuê công ty tư nhân thay thế",
        ],
        correctIndex: 1,
        explanation:
          'Hồ Chí Minh luôn nhấn mạnh hai việc đi đôi: xử lý nghiêm kẻ sai phạm VÀ cải cách cơ chế để không tái diễn. "Vừa trị bệnh, vừa chữa gốc" – đây là phương pháp biện chứng trong xây dựng nhà nước.',
        hcmQuote:
          '"Xử lý sai phạm phải đi kèm cải cách cơ chế. Trị bệnh mà không chữa gốc thì bệnh sẽ tái phát."',
      },
    ],
  },
]

export const RANKS = [
  { min: 90, label: "Thẩm Phán Liêm Chính", desc: "Xuất sắc – Nắm vững tư tưởng Hồ Chí Minh" },
  { min: 70, label: "Công Tố Viên Ưu Tú", desc: "Tốt – Hiểu sâu các nguyên tắc pháp quyền" },
  { min: 50, label: "Luật Sư Triển Vọng", desc: "Khá – Cần ôn luyện thêm một số phần" },
  { min: 30, label: "Sinh Viên Luật", desc: "Trung bình – Hãy xem lại lý thuyết" },
  { min: 0, label: "Học Viên Mới", desc: "Cần cố gắng hơn – Đừng bỏ cuộc!" },
]

export function getRank(pct: number) {
  return RANKS.find((r) => pct >= r.min) ?? RANKS[RANKS.length - 1]
}
