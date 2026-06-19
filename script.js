const categories = [
  {
    id: "brand",
    title: "品牌设计 — Brand & Symbol",
    desc: "系统性的 VI 项目、标志设计与品牌视觉延展。文字保持克制，重点交给项目介绍和视觉展示。",
  },
  {
    id: "graphic",
    title: "平面视觉 — Graphic Visual",
    desc: "活动主视觉、横版物料、H5 长图、海报和包装。右侧用轻量筛选切换同类型作品。",
    filters: ["Banner", "H5 长图", "海报", "包装"],
  },
  {
    id: "ai",
    title: "AI 实验室 — AI Lab",
    desc: "AI 图像、AI 视频短片与生成流程实验，保留方法、关键词和后期处理痕迹。",
  },
  {
    id: "study",
    title: "美学探索 — Aesthetic Study",
    desc: "日常版式训练、海报练习和图像秩序实验，作为个人审美档案持续更新。",
  },
  {
    id: "motion",
    title: "影像记录 — Vlog & Motion",
    desc: "个人拍摄、短片片段、vlog 与运动影像记录。",
  },
  {
    id: "archive",
    title: "灵感杂项 — Misc & Archive",
    desc: "暂时作为保留区，后续用于收纳灵感、草稿和不适合归入其他栏目里的视觉记录。",
  },
];

const imageSeeds = [
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
];

const workSections = [
  {
    id: "brand",
    title: "品牌设计 — Brand & Symbol",
    description: "从标志、包装、IP 到视觉系统，整理品牌被看见、被记住、被使用的方式。",
    tags: ["VI SYSTEM", "LOGO", "PACKAGING", "IP DESIGN"],
    sourceCategories: ["brand"],
  },
  {
    id: "graphic",
    title: "平面视觉 — Graphic Visual",
    description: "围绕信息密度、版式秩序与传播情境展开的平面实践，把画面留在记忆里，而不是留在模板里。",
    tags: ["POSTER", "BANNER", "CAMPAIGN", "EDITORIAL"],
    sourceCategories: ["graphic"],
    excludedProjectIds: ["graphic-03", "pack-01"],
  },
  {
    id: "study",
    title: "美学探索 — Aesthetic Study",
    description: "日常版式、图形、字体与构成练习，记录一种视觉语言被反复推敲、慢慢定型的过程。",
    tags: ["LAYOUT", "POSTER", "CARD", "TYPE"],
    sourceCategories: ["study"],
  },
  {
    id: "ai",
    title: "AI 实验室 — AI Lab",
    description: "以 AI 图像、生成式视觉与工具实验为主，记录一种从概念到画面逐步成形的过程。",
    tags: ["AI VISUAL", "GENERATIVE", "IMAGE", "EXPERIMENT"],
    sourceCategories: ["ai"],
  },
  {
    id: "motion",
    title: "影像记录 — Vlog & Motion",
    description: "收纳拍摄片段、动态练习与短片实验，让影像作为另一种节奏进入作品结构。",
    tags: ["VIDEO", "MOTION", "SHORT FILM", "RECORD"],
    sourceCategories: ["motion"],
  },
  {
    id: "archive",
    title: "视觉杂记 — Archive & Notes",
    description: "收集过程稿、灵感片段与未完成实验，像边角页一样，留下思路还没说完时的样子。",
    tags: ["PROCESS", "NOTES", "SKETCH", "MISC"],
    sourceCategories: ["archive"],
    emptyTitle: "Archive is still collecting fragments.",
    emptyBody: "这里会存放过程稿、灵感片段和未完成的视觉实验。",
  },
];

const projects = [
  {
    id: "vi-01",
    category: "brand",
    title: "TAGcha 茶饮品牌视觉系统",
    type: "VI 项目",
    year: "2026",
    image: "./assets/home/01-tagcha.png",
    indexImage: "./assets/projects/brand/thumbnails/tagcha.png",
    shape: "tall",
    home: true,
    industry: "餐饮茶饮",
    industryShort: "餐饮行业",
    industryEn: "Tea Beverage",
    role: "品牌视觉系统",
    roleEn: "Brand Identity",
    client: "TAGcha",
    services: ["茶饮品牌设计", "茶饮品牌包装设计", "茶饮品牌VI设计"],
    date: "2024-06-14",
    introParagraphs: [
      "TAGcha以自由、松弛与内在优雅为核心，试图把一杯茶从日常消费，转化为短暂停靠的情绪场域。",
      "视觉系统围绕“在繁忙中停下来”的体验展开，以清透的色彩、克制的版式和柔和的图像气质，回应都市生活里对片刻安静的需求。",
      "项目希望让传统茶文化进入更轻盈的当代语境，使品牌在亲近、自然与精致之间形成稳定识别。",
    ],
  },
  {
    id: "vi-02",
    category: "brand",
    title: "水鲜记品牌视觉系统",
    type: "VI 项目",
    year: "2026",
    image: "./assets/home/02-youshe.png",
    indexImage: "./assets/projects/brand/thumbnails/shuixianji.png",
    shape: "tall",
    home: true,
    industry: "科技活动",
    industryShort: "科技活动",
    industryEn: "AI Event",
    role: "巡讲视觉方案",
    roleEn: "Event Visual System",
    client: "水鲜记",
    services: ["活动视觉设计", "主视觉设计", "巡讲视觉系统"],
    date: "2025-09-18",
    introParagraphs: [
      "这是一套为优设AI全国巡讲建立的活动视觉方案，主题围绕“复苏新升级，设计正发声”展开。",
      "项目将AI进入设计现场的时代感，转译为更具公共传播力的视觉语言：明确、明亮，并带有持续向外扩散的能量。",
      "整体表达在专业性与未来感之间取得平衡，让活动本身不只是知识分享，也成为一次关于设计行业变化的视觉宣言。",
    ],
  },
  {
    id: "vi-03",
    category: "brand",
    title: "面包小子社区烘焙品牌视觉系统",
    type: "VI 项目",
    year: "2026",
    image: "./assets/home/03-bread-boy.png",
    indexImage: "./assets/projects/brand/thumbnails/bread-boy.png",
    shape: "tall",
    home: true,
    industry: "社区烘焙",
    industryShort: "烘焙零售",
    industryEn: "Bakery Retail",
    role: "品牌视觉系统",
    roleEn: "Brand Identity",
    client: "面包小子",
    services: ["烘焙品牌设计", "门店视觉设计", "品牌VI设计"],
    date: "2023-11-02",
    introParagraphs: [
      "面包小子是一家以新鲜烘焙与现打牛奶为核心的社区品牌，气质不追求距离感，而是像街角熟悉的邻居一样自然靠近。",
      "视觉系统以轻松、亲切和带有一点幽默感的表达建立识别，让门店、包装与传播物料都保留手作温度。",
      "项目希望在日常消费场景里制造一种柔软的记忆点，让“买面包”成为一次更鲜活、更有陪伴感的社区体验。",
    ],
  },
  {
    id: "duck-ip",
    category: "brand",
    title: "苟小丫 IP 形象设计",
    type: "IP 设计",
    year: "2026",
    image: "./assets/home/04-gouxiaoya.png",
    indexImage: "./assets/projects/brand/thumbnails/gouxiaoya.png",
    shape: "tall",
    home: true,
    industry: "原创 IP",
    industryShort: "IP形象",
    industryEn: "Character IP",
    role: "角色形象设计",
    roleEn: "Character Design",
    client: "苟小丫",
    services: ["IP形象设计", "角色视觉设计", "延展应用设计"],
    date: "2026-03-27",
    introParagraphs: [
      "苟小丫是一组以陪伴感、亲和力和轻松情绪为出发点的原创IP形象。",
      "项目不只停留在“可爱”的表层，而是通过角色比例、表情气质和外形特征，建立可以持续延展的识别基础。",
      "它适合进入表情、周边、社交内容与品牌传播场景，在稳定的角色性格中保留柔软、有趣和可亲近的状态。",
    ],
  },
  {
    id: "brand-ican",
    category: "brand",
    title: "ICAN 医疗品牌",
    type: "品牌设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/ican-medical.png",
    indexImage: "./assets/projects/brand/thumbnails/ican-medical.png",
    shape: "tall",
    client: "ICAN医疗",
    role: "品牌视觉设计",
    roleEn: "Brand Visual",
    services: ["品牌视觉设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-uisdc-23",
    category: "brand",
    title: "优设-设计师私享会",
    type: "活动海报",
    year: "2023",
    image: "./assets/projects/brand/thumbnails/youshe.png",
    indexImage: "./assets/projects/brand/thumbnails/youshe.png",
    shape: "tall",
    client: "优设",
    role: "活动海报设计",
    roleEn: "Event Poster",
    services: ["活动海报设计", "品牌活动视觉"],
    date: "2023-10-01",
    link: "https://www.uisdc.com/",
  },
  {
    id: "brand-tiankong",
    category: "brand",
    title: "天空山舍品牌",
    type: "品牌设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/tiankongshanshe-brand.png",
    indexImage: "./assets/projects/brand/thumbnails/tiankongshanshe-brand.png",
    shape: "tall",
    client: "天空山舍",
    role: "品牌视觉设计",
    roleEn: "Brand Visual",
    services: ["品牌视觉设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-jooki",
    category: "brand",
    title: "Jooki品牌视觉",
    type: "品牌设计",
    year: "2026",
    image: "./assets/projects/brand/jooki-brand/1_画板 1 副本 2.jpg",
    indexImage: "./assets/projects/brand/jooki-brand/1_画板 1 副本 2.jpg",
    shape: "tall",
    client: "Jooki",
    role: "品牌视觉设计",
    roleEn: "Brand Visual",
    services: ["品牌视觉设计", "视觉延展设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-zhengzheng",
    category: "brand",
    title: "蒸蒸上门立牌设计",
    type: "品牌设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/zhengzheng-sign.png",
    indexImage: "./assets/projects/brand/thumbnails/zhengzheng-sign.png",
    shape: "tall",
    client: "蒸蒸上门",
    role: "品牌物料设计",
    roleEn: "Brand Graphic",
    services: ["品牌物料设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-probiotics",
    category: "brand",
    title: "益生菌包装设计",
    type: "包装设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/probiotics-package.png",
    indexImage: "./assets/projects/brand/thumbnails/probiotics-package.png",
    shape: "tall",
    client: "益生菌",
    role: "包装视觉设计",
    roleEn: "Package Visual",
    services: ["包装设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-newyear",
    category: "brand",
    title: "跃见幸福新年礼盒",
    type: "包装设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/newyear-giftbox.png",
    indexImage: "./assets/projects/brand/thumbnails/newyear-giftbox.png",
    shape: "tall",
    client: "跃见幸福",
    role: "礼盒包装设计",
    roleEn: "Gift Packaging",
    services: ["礼盒包装设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-moon",
    category: "brand",
    title: "带我飞向月球礼盒",
    type: "包装设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/moon-giftbox.png",
    indexImage: "./assets/projects/brand/thumbnails/moon-giftbox.png",
    shape: "tall",
    client: "带我飞向月球",
    role: "礼盒包装设计",
    roleEn: "Gift Packaging",
    services: ["礼盒包装设计"],
    date: "2026-06-17",
  },
  {
    id: "brand-zhuiguang",
    category: "brand",
    title: "追光舞蹈品牌图形",
    type: "品牌设计",
    year: "2026",
    image: "./assets/projects/brand/thumbnails/zhuiguang-dance.png",
    indexImage: "./assets/projects/brand/thumbnails/zhuiguang-dance.png",
    shape: "tall",
    client: "追光舞蹈",
    role: "品牌图形设计",
    roleEn: "Brand Graphic",
    services: ["品牌图形设计"],
    date: "2026-06-17",
  },

  {
    id: "brand-yuemu",
    category: "brand",
    title: "爱看悦目标志设计",
    type: "品牌设计",
    year: "2026",
    image: "./assets/projects/brand/aikan-yuemu/爱看悦目_标志设计_1.jpg",
    indexImage: "./assets/projects/brand/aikan-yuemu/爱看悦目_标志设计_1.jpg",
    shape: "tall",
    client: "爱看悦目",
    role: "品牌标志设计",
    roleEn: "Logo Design",
    services: ["品牌标志设计", "视觉延展设计"],
    date: "2026-06-17",
  },
  {
    id: "pack-01",
    category: "graphic",
    title: "带我飞向月球 中秋礼盒包装",
    type: "包装",
    year: "2026",
    image: "./assets/projects/graphic/pack-moon/01.png",
    homeImage: "./assets/home/05-new-year.png",
    shape: "wide",
    home: true,
    filter: "包装",
    industry: "节日礼盒",
    industryShort: "礼盒包装",
    industryEn: "Festival Packaging",
    role: "包装视觉设计",
    roleEn: "Package Design",
    client: "中秋礼盒",
    services: ["礼盒包装设计", "节日视觉设计", "插画延展设计"],
    date: "2022-08-12",
    introParagraphs: [
      "这是一组以“带我飞向月球”为主题的中秋礼盒包装设计，把节日团圆、月亮意象与轻盈的想象力重新编织在一起。",
      "项目有意避开传统礼盒常见的厚重感，以更具叙事性的画面语言，让包装成为一段关于月光、飞行和想念的视觉短篇。",
      "它保留节日礼赠的仪式感，同时让情绪更年轻、更浪漫，也更容易被当代审美接住。",
    ],
  },
  {
    id: "ai-01",
    category: "ai",
    title: "小白 AI 虚拟形象短片",
    type: "AI 影像",
    year: "2026",
    video: "./assets/home/06-xiaobai.mp4",
    homeVideo: "./assets/home/06-xiaobai.mp4",
    shape: "wide",
    home: true,
  },
  {
    id: "ai-02",
    category: "ai",
    title: "轻与重",
    type: "AI 影像",
    year: "2026",
    video: "./assets/home/07-light-heavy.mp4",
    homeVideo: "./assets/home/07-light-heavy.mp4",
    shape: "wide",
    home: true,
  },
  {
    id: "motion-01",
    category: "ai",
    title: "小米 YU7 宣传片视觉实验",
    type: "AI 影像",
    year: "2026",
    video: "./assets/home/08-xiaomi.mp4",
    homeVideo: "./assets/home/08-xiaomi.mp4",
    shape: "wide",
    home: true,
  },
  {
    id: "motion-02",
    category: "ai",
    title: "胡金铨风格美学影像探索",
    type: "AI 影像",
    year: "2026",
    video: "./assets/projects/ai/hu-style/胡.mp4",
    homeVideo: "./assets/home/09-hu.mp4",
    shape: "wide",
    home: true,
  },
  {
    id: "study-01",
    category: "ai",
    title: "决战高考",
    type: "AI 影像",
    year: "2026",
    video: "./assets/home/10-fight-test.mp4",
    homeVideo: "./assets/home/10-fight-test.mp4",
    shape: "wide",
    home: true,
  },
  {
    id: "graphic-02",
    category: "graphic",
    title: "车企与数码 Banner 组图",
    type: "Banner",
    year: "2026",
    image: "./assets/projects/graphic/banner/01.jpg",
    shape: "wide",
    filter: "Banner",
    industryShort: "横版物料",
    role: "Banner 视觉设计",
    roleEn: "Banner Design",
    client: "平台内容项目",
    services: ["Banner 设计", "内容视觉延展", "横版传播物料"],
    date: "2025-07-16",
    introParagraphs: [
      "这一组作品围绕车企与数码方向的内容传播场景展开，重点在有限画幅中建立明确而快速的视觉识别。",
      "画面强调节奏、信息层级与氛围控制，让横版物料在浏览流中能够被迅速捕捉，同时保留内容质感。",
    ],
  },
  {
    id: "graphic-03",
    category: "graphic",
    title: "无误 H5 长图视觉",
    type: "H5 长图",
    year: "2026",
    image: "./assets/projects/graphic/h5/01.png",
    shape: "long",
    filter: "H5 长图",
    industryShort: "长图叙事",
    role: "H5 长图设计",
    roleEn: "Long-form Visual",
    client: "无误",
    services: ["H5 长图设计", "叙事排版", "图文节奏设计"],
    date: "2024-10-09",
    introParagraphs: [
      "这组 H5 长图以连续阅读体验为核心，视觉处理更接近一篇被设计过的叙事文本。",
      "项目重点不在单张冲击力，而在纵向展开时的节奏递进、信息停顿与情绪转场。",
    ],
  },
  {
    id: "graphic-04",
    category: "graphic",
    title: "活动与品牌海报练习",
    type: "海报",
    year: "2026",
    image: "./assets/projects/graphic/poster/01.jpg",
    shape: "tall",
    filter: "海报",
    industryShort: "海报视觉",
    role: "海报设计",
    roleEn: "Poster Design",
    client: "练习与提案项目",
    services: ["活动海报", "品牌海报", "版式练习"],
    date: "2025-03-22",
    introParagraphs: [
      "这一组海报集中处理字体、图像和留白之间的关系，尝试在不同主题里保持明确的画面态度。",
      "它们既是传播物料，也是一种关于视觉密度与情绪重心的持续练习。",
    ],
  },
  {
    id: "study-02",
    category: "study",
    title: "美学探索海报练习集",
    type: "海报练习",
    year: "2026",
    image: "./assets/projects/study/aesthetic-01/01.jpg",
    shape: "tall",
    industryShort: "审美训练",
    role: "版式与海报练习",
    roleEn: "Aesthetic Study",
    client: "个人练习",
    services: ["海报练习", "版式实验", "图像秩序研究"],
    date: "2026-02-14",
    introParagraphs: [
      "这一组作品更接近日常审美训练，用重复性的练习不断校准版式、比例、留白和图像气质。",
      "它们不追求统一风格，而是在不同尝试中保留个人判断，逐步积累更稳定的视觉感受力。",
    ],
  },



  {
    id: "vlog-02",
    category: "motion",
    title: "桂林影像记录",
    type: "Vlog & Motion",
    year: "2026",
    video: "./assets/projects/motion/guilin-20260302/20260302_桂林.mp4",
    shape: "wide",
  },
  { id: "archive-01", category: "archive", title: "灵感杂项 01", type: "Archive", year: "2026", image: imageSeeds[2], shape: "wide" },
];

const app = document.querySelector("#app");
const viewerLayer = document.querySelector("#viewer-layer");
const primaryNav = document.querySelector(".site-header .nav-link");
const brandMark = document.querySelector(".site-header .brand-mark");
const viewerExitDuration = 720;
let activeCategory = "brand";
let activeFilter = "Banner";
let previousPage = "";
let previousViewState = null;
let viewerReturnHref = "#work";

function applyRouteChrome(page = "home") {
  document.body.className = `route-${page || "home"}`;
  if (primaryNav) {
    const showWorkLink = !page || page === "home" || page === "about";
    primaryNav.textContent = showWorkLink ? "WORK" : "HOME";
    primaryNav.href = showWorkLink ? "#work" : "#home";
  }
  if (brandMark) {
    brandMark.classList.remove("is-home-hidden", "is-compact-visible", "is-view-hidden");
    if (!page || page === "home") {
      brandMark.classList.add("is-home-hidden");
    } else if (page === "view" || page === "work" || page === "project" || page === "about") {
      brandMark.classList.add("is-view-hidden");
    }
  }
}

function closeViewerTo(href) {
  if (href === "#home" && document.querySelector(".home")) {
    history.replaceState(null, "", href);
    clearViewerLayer();
    previousViewState = null;
    previousPage = "home";
    viewerReturnHref = "#home";
    applyRouteChrome("home");
    return;
  }
  const match = href.match(/^#work\/([^/]+)$/);
  if (match && document.querySelector(".work-layout") && activeCategory === match[1]) {
    history.replaceState(null, "", href);
    clearViewerLayer();
    previousViewState = null;
    previousPage = "work";
    applyRouteChrome("work");
    return;
  }
  window.location.hash = href;
}

function imageMediaFromFiles(basePath, files, title, orientation = "portrait") {
  return files.map((file, index) => ({
    type: "image",
    src: `${basePath}/${file}`,
    title: `${title}${String(index + 1).padStart(2, "0")}`,
    orientation,
  }));
}

function numberedImageMedia(basePath, fileName, numbers, title, extension = "jpg", orientation = "portrait") {
  return imageMediaFromFiles(
    basePath,
    numbers.map((number) => fileName(number) + `.${extension}`),
    title,
    orientation
  );
}

const projectMedia = {
  "vi-01": Array.from({ length: 18 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/brand/tagcha-brand/${String(index + 1).padStart(2, "0")}.jpg`,
    title: `TAGcha展示${String(index + 1).padStart(2, "0")}`,
    orientation: [1, 10, 11, 12, 13, 14, 15, 16].includes(index + 1) ? "landscape" : "portrait",
  })),
  "vi-02": Array.from({ length: 35 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/brand/shuixianji-brand/水鲜记_品牌设计 - 橙色-${String(index + 1).padStart(2, "0")}.jpg`,
    title: `水鲜记展示${String(index + 1).padStart(2, "0")}`,
    orientation: "portrait",
  })),
  "vi-03": Array.from({ length: 14 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/brand/bread-boy-brand/面包小子-品牌VI-${String(index + 1).padStart(2, "0")}.jpg`,
    title: `面包小子展示${String(index + 1).padStart(2, "0")}`,
    orientation: "portrait",
  })),
  "duck-ip": Array.from({ length: 14 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/brand/gouxiaoya-ip/苟小丫-${String(index + 1).padStart(2, "0")}.jpg`,
    title: `苟小丫展示${String(index + 1).padStart(2, "0")}`,
    orientation: "portrait",
  })),
  "brand-uisdc-23": imageMediaFromFiles(
    "./assets/projects/brand/youshe-event",
    [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
    ],
    "优设-设计师私享会",
    "portrait"
  ),
  "brand-ican": imageMediaFromFiles(
    "./assets/projects/brand/aikan-medical",
    [
      "ICAN\u7231\u770b\u533b\u7597_1.jpg",
      "ICAN\u7231\u770b\u533b\u7597_2.jpg",
      "ICAN\u7231\u770b\u533b\u7597_3.jpg",
      "ICAN\u7231\u770b\u533b\u7597_4.jpg",
      "ICAN\u7231\u770b\u533b\u7597_5.jpg",
      "ICAN\u7231\u770b\u533b\u7597_6.jpg",
      "ICAN\u7231\u770b\u533b\u7597_7.jpg",
      "ICAN\u7231\u770b\u533b\u7597_8.jpg",
      "ICAN\u7231\u770b\u533b\u7597_9.jpg",
      "ICAN\u7231\u770b\u533b\u7597_10.jpg",
      "ICAN\u7231\u770b\u533b\u7597_11.jpg",
      "ICAN\u7231\u770b\u533b\u7597_14.jpg",
    ],
    "ICAN????",
    "portrait"
  ),
  "brand-yuemu": imageMediaFromFiles(
    "./assets/projects/brand/aikan-yuemu",
    [
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_1.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 2.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 3.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 5.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 6.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 7.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 8.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 9.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 10.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 11.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 12.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 13.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 14.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 15.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c 16.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2 \u526f\u672c.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1_2.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1-18.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1-19.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1-20.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1-21.jpg",
      "\u7231\u770b\u60a6\u76ee_\u6807\u5fd7\u8bbe\u8ba1-22.jpg",
    ],
    "??????",
    "portrait"
  ),
  "brand-tiankong": imageMediaFromFiles(
    "./assets/projects/brand/tiankongshanshe-brand",
    [
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_1.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_2.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_3.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_4.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_5.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_6.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_7.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_8.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_9.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_10.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_11.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_12.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_13.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_14.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_15.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_16.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_17.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_18.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_19.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_20.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_21.jpg",
      "\u5929\u7a7a\u5c71\u820d-\u5ef6\u5c55_22.jpg",
    ],
    "??????",
    "portrait"
  ),
  "brand-zhengzheng": imageMediaFromFiles(
    "./assets/projects/brand/zhengzheng-brand",
    [
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_1.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_2.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_3.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_4.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_5.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_6.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_7.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_8.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_9.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_10.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_11.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_12.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_13.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_14.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_15.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_16.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_17.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_18.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_19.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_20.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_21.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_22.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_23.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_24.jpg",
      "\u84b8\u84b8\u4e0a-\u5ef6\u5c55_25.jpg",
    ],
    "?????",
    "portrait"
  ),
  "brand-probiotics": [
    {
      type: "image",
      src: "./assets/projects/brand/thumbnails/probiotics-package.png",
      title: "益生菌包装",
      orientation: "portrait",
    },
  ],
  "brand-newyear": imageMediaFromFiles(
    "./assets/projects/brand/newyear-giftbox",
    [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
    ],
    "??????",
    "portrait"
  ),
  "brand-moon": imageMediaFromFiles(
    "./assets/projects/brand/moon-giftbox",
    [
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
    ],
    "????????",
    "portrait"
  ),
  "brand-jooki": imageMediaFromFiles(
    "./assets/projects/brand/jooki-brand",
    [
      "1_\u753b\u677f 1 \u526f\u672c 2.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 3.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 4.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 5.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 6.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 7.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 8.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 9.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 10.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 11.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 12.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 13.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 14.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 15.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 16.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 17.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 18.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 19.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 20.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 21.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 22.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 23.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 24.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 25.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 26.jpg",
      "1_\u753b\u677f 1 \u526f\u672c 27.jpg",
    ],
    "Jooki??",
    "portrait"
  ),
  "brand-zhuiguang": imageMediaFromFiles(
    "./assets/projects/brand/zhuiguang-dance",
    [
      "banner\u5c01\u9762\u56fe\u8fd9\u6837\u505a\u662f\u4e0d\u884c\u7684_\u753b\u677f 1 \u526f\u672c 2.jpg",
      "banner\u5c01\u9762\u56fe\u8fd9\u6837\u505a\u662f\u4e0d\u884c\u7684_\u753b\u677f 1 \u526f\u672c 3.jpg",
      "banner\u5c01\u9762\u56fe\u8fd9\u6837\u505a\u662f\u4e0d\u884c\u7684_\u753b\u677f 1 \u526f\u672c 4.jpg",
      "banner\u5c01\u9762\u56fe\u8fd9\u6837\u505a\u662f\u4e0d\u884c\u7684_\u753b\u677f 1 \u526f\u672c.jpg",
      "banner\u5c01\u9762\u56fe\u8fd9\u6837\u505a\u662f\u4e0d\u884c\u7684_\u753b\u677f 1.jpg",
    ],
    "??????",
    "landscape"
  ),
  "graphic-02": Array.from({ length: 3 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/graphic/banner/${String(index + 1).padStart(2, "0")}.jpg`,
    title: `Banner展示${String(index + 1).padStart(2, "0")}`,
    orientation: "landscape",
  })),
  "graphic-03": [
    {
      type: "image",
      src: "./assets/projects/graphic/h5/01.png",
      title: "H5长图展示01",
      orientation: "portrait",
    },
    {
      type: "image",
      src: "./assets/projects/graphic/h5/02.jpg",
      title: "H5长图展示02",
      orientation: "portrait",
    },
  ],
  "graphic-04": Array.from({ length: 3 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/graphic/poster/${String(index + 1).padStart(2, "0")}.jpg`,
    title: `海报展示${String(index + 1).padStart(2, "0")}`,
    orientation: "portrait",
  })),
  "pack-01": Array.from({ length: 10 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/graphic/pack-moon/${String(index + 1).padStart(2, "0")}.png`,
    title: `中秋礼盒展示${String(index + 1).padStart(2, "0")}`,
  })),
  "study-02": Array.from({ length: 32 }, (_, index) => ({
    type: "image",
    src: `./assets/projects/study/aesthetic-01/${String(index + 1).padStart(2, "0")}.jpg`,
    title: `美学探索${String(index + 1).padStart(2, "0")}`,
    orientation: "portrait",
  })),
};

function cleanText(text = "") {
  return String(text)
    .replace(/([\u3400-\u9fff])\s+([A-Za-z0-9]+)/g, "$1$2")
    .replace(/([A-Za-z0-9]+)\s+([\u3400-\u9fff])/g, "$1$2");
}

function categoryTitleMarkup(title = "") {
  const [cn, en] = cleanText(title).split(" — ");
  if (!en) return `<span class="title-cjk">${cn}</span>`;
  return `<span class="title-cjk">${cn}</span><span class="title-sep"> — </span><span class="title-latin">${en}</span>`;
}

function sectionTitleMarkup(title = "") {
  const [cn, en] = title.split(" — ");
  if (!en) return `<span class="title-cjk">${cn}</span>`;
  return `<span class="title-cjk">${cn}</span><span class="title-sep"> — </span><span class="title-latin">${en}</span>`;
}

function workSectionById(sectionId) {
  return workSections.find((section) => section.id === sectionId) || workSections[0];
}

const hiddenProjectIds = new Set([
  "brand-jooki",
  "brand-yuemu",
]);

function isProjectVisible(project) {
  return !hiddenProjectIds.has(project.id);
}

function workSectionForProject(project) {
  return workSections.find((section) => section.sourceCategories.includes(project.category)) || workSections[0];
}

function workSectionProjects(sectionId) {
  const section = workSectionById(sectionId);
  return projects.filter((project) => {
    if (!isProjectVisible(project)) return false;
    if (!section.sourceCategories.includes(project.category)) return false;
    if (section.excludedProjectIds?.includes(project.id)) return false;
    return true;
  });
}

function projectCardMeta(project) {
  const section = workSectionForProject(project);
  const labelMap = {
    brand: "Brand",
    graphic: "Graphic",
    ai: "AI",
    motion: "Motion",
    study: "Study",
    archive: "Archive",
  };
  return `${project.year} ${labelMap[section.id] || "Project"}`;
}

function isTransparentCutout(src = "") {
  return /assets\/projects\/brand\/index\//.test(src)
    || /assets\/home\/0[1-4]-/.test(src)
    || /assets\/projects\/brand\/index\/.+\.(png|webp)$/i.test(src);
}

function surfaceRadiusClass(src = "") {
  return "";
}


function projectCardName(project) {
  const overrideNameMap = {
    "brand-uisdc-23": "优设-设计师私享会",
    "brand-ican": "ICAN医疗",
    "brand-tiankong": "天空山舍",
    "brand-zhengzheng": "蒸蒸上门",
    "brand-probiotics": "益生菌包装",
    "brand-newyear": "跃见幸福",
    "brand-moon": "带我飞向月球",
    "brand-zhuiguang": "追光舞蹈",
  };
  if (overrideNameMap[project.id]) return overrideNameMap[project.id];
  const nameMap = {
    "vi-01": "TAGcha",
    "vi-02": "水鲜记",
    "vi-03": "面包小子",
    "duck-ip": "荷小丫",
    "pack-01": "中秋礼盒",
    "graphic-02": "Banner Visual",
    "graphic-04": "Poster Study",
    "study-02": "Aesthetic Study",
    "ai-01": "小白",
    "ai-02": "轻与重",
    "motion-01": "Xiaomi YU7",
    "motion-02": "胡金铨美学",
    "study-01": "决战高考",
    "ai-03": "游离",
    "ai-04": "神秘者",
    "vlog-01": "New Year 2024",
    "vlog-02": "Guilin",
    "archive-01": "Archive 01",
  };
  return nameMap[project.id] || cleanText(project.client || project.title);
}

function projectHoverName(project) {
  const overrideNameMap = {
    "brand-uisdc-23": "优设-设计师私享会",
    "brand-ican": "ICAN医疗品牌设计",
    "brand-tiankong": "天空山舍品牌设计",
    "brand-zhengzheng": "蒸蒸上门立牌设计",
    "brand-probiotics": "益生菌包装设计",
    "brand-newyear": "跃见幸福新年礼盒",
    "brand-moon": "带我飞向月球礼盒",
    "brand-zhuiguang": "追光舞蹈品牌图形",
  };
  if (overrideNameMap[project.id]) return overrideNameMap[project.id];
  const nameMap = {
    "vi-01": "TAGcha品牌全案",
    "vi-02": "水鲜记品牌全案",
    "vi-03": "面包小子品牌全案",
    "duck-ip": "荷小丫IP形象设计",
    "pack-01": "中秋礼盒包装设计",
    "ai-01": "小白AI影像",
    "ai-02": "轻与重AI影像",
    "motion-01": "Xiaomi YU7影像实验",
    "motion-02": "胡金铨美学影像",
    "study-01": "决战高考影像实验",
    "archive-01": "视觉杂记",
  };
  return nameMap[project.id] || projectCardName(project);
}

function projectMeta(project) {
  if (project.client || project.services || project.date) {
    return [
      `客户名称：${project.client || project.title}`,
      `服务内容：${(project.services || [project.role || project.type]).slice(0, 4).join("、")}`,
      `创作日期：${project.date || project.year}`,
    ].map(cleanText).join("<br>");
  }

  return [
    `${project.year}/${project.industryShort || project.industry || "视觉设计"}`,
    `${project.role || project.type} / ${project.roleEn || "Portfolio Project"}`,
  ].map(cleanText).join("<br>");
}

function projectIntroParagraphs(project) {
  if (Array.isArray(project.introParagraphs) && project.introParagraphs.length) {
    return project.introParagraphs;
  }

  if (project.intro || project.background) {
    return [project.intro, project.background].filter(Boolean);
  }

  const workSection = workSectionForProject(project);
  const category = { title: workSection.title };
  return [
    `${project.title}是一组围绕${project.type || category?.title || "视觉表达"}展开的阶段性作品。项目以图像秩序、画面节奏和情绪识别为核心，保留明确的视觉方向。`,
    "当前页面先作为作品归档结构使用，后续会根据真实项目内容补充更完整的语境、创作过程和应用细节。",
  ];
}

function mediaForProject(project) {
  if (projectMedia[project.id]) {
    return projectMedia[project.id];
  }

  if (project.video) {
    return [{ type: "video", src: project.video, title: project.title }];
  }

  return [
    { type: "image", src: project.image, title: project.title },
    { type: "image", src: imageSeeds[0], title: `${project.title} 展示 01` },
    { type: "image", src: imageSeeds[1], title: `${project.title} 展示 02` },
    { type: "image", src: imageSeeds[2], title: `${project.title} 展示 03` },
  ];
}

function isProjectCard(project) {
  return project.category === "brand" || project.filter === "包装";
}

function workCardHref(project) {
  return isProjectCard(project) || project.video ? `#view/${project.id}/0` : projectHref(project);
}

function workItemsForProject(project) {
  if (isProjectCard(project) || project.video) {
    return [{ project, item: null, index: 0 }];
  }
  return mediaForProject(project).map((item, index) => ({ project, item, index }));
}

function cover(project, className = "", context = "work") {
  if (project.video) {
    if (context === "home") {
      const src = project.homeVideo || project.video;
      return `<div class="cover ${className}${surfaceRadiusClass(src)}"><video class="${surfaceRadiusClass(src).trim()}" src="${src}" muted autoplay loop playsinline preload="metadata" aria-label="${project.title}"></video></div>`;
    }
    const src = context === "home" ? (project.homeVideo || project.video) : project.video;
    return `
      <div class="cover video-frame-cover ${className}${surfaceRadiusClass(src)}" data-video-cover="${src}" aria-label="${project.title}">
        <video class="${surfaceRadiusClass(src).trim()}" muted playsinline preload="none" aria-hidden="true"></video>
        <span class="play-badge" aria-hidden="true"></span>
      </div>
    `;
  }
  const image = context === "work" && project.indexImage ? project.indexImage : (context === "home" && project.homeImage ? project.homeImage : project.image);
  const loading = context === "home" ? "eager" : "lazy";
  const fetchpriority = context === "home" ? "high" : "auto";
  return `<div class="cover ${className}"><img class="${surfaceRadiusClass(image).trim()}" src="${image}" alt="${project.title}" loading="${loading}" fetchpriority="${fetchpriority}" decoding="async"></div>`;
}

function mediaMarkup(item, className = "") {
  const orientationClass = item.orientation ? `is-${item.orientation}` : "";
  const radiusClass = surfaceRadiusClass(item.src);
  const classes = [className, orientationClass, radiusClass.trim()].filter(Boolean).join(" ");
  if (item.type === "video") {
    return `<video class="${classes}" src="${item.src}" controls autoplay playsinline preload="metadata"></video>`;
  }
  return `<img class="${classes}" src="${item.src}" alt="${item.title}" loading="lazy">`;
}

function thumbMarkup(item, title = "") {
  if (item.type === "video") {
    return `<div class="video-thumb">${cleanText(title || item.title || "Video")}</div>`;
  }
  return mediaMarkup(item, "");
}

function projectHref(project) {
  return project.video ? `#view/${project.id}/0` : `#project/${project.id}`;
}

function homeFeaturedHref(project) {
  return `#view/${project.id}/0`;
}

function renderWorkCard(entry, renderIndex = 0) {
  const { project, item, index } = entry;
  if (item) {
    return `
      <a class="project-card masonry-card" data-shape="${item.orientation || project.shape || "wide"}" href="#view/${project.id}/${index}" style="--card-index:${renderIndex}">
        <div class="project-card-media work-image-reveal" style="--reveal-index:${renderIndex % 4}">
          ${mediaMarkup(item, "")}
        </div>
      </a>
    `;
  }

  return `
    <a class="project-card ${project.video ? "is-video-card" : ""}" data-hover-label="${projectHoverName(project)}" data-shape="${project.shape || "wide"}" href="${workCardHref(project)}" style="--card-index:${renderIndex}">
      <div class="project-card-media work-image-reveal" style="--reveal-index:${renderIndex % 4}">
        ${cover(project, project.video ? "wide" : (project.shape || "tall"))}
      </div>
    </a>
  `;
}

function initProjectHoverLabels() {
  const label = document.querySelector(".work-hover-label");
  if (!label) return;

  const moveLabel = (event) => {
    const labelRect = label.getBoundingClientRect();
    const gap = 14;
    let x = event.clientX + gap;
    let y = event.clientY - labelRect.height - gap;

    if (x + labelRect.width > window.innerWidth - 10) {
      x = event.clientX - labelRect.width - gap;
    }
    if (y < 10) {
      y = event.clientY + gap;
    }

    label.style.setProperty("--label-x", `${Math.max(10, x).toFixed(2)}px`);
    label.style.setProperty("--label-y", `${Math.max(10, y).toFixed(2)}px`);
  };

  document.querySelectorAll(".project-card:not(.masonry-card)[data-hover-label]").forEach((card) => {
    card.addEventListener("pointerenter", (event) => {
      label.textContent = card.dataset.hoverLabel || "";
      label.classList.add("is-visible");
      moveLabel(event);
    });
    card.addEventListener("pointermove", moveLabel);
    card.addEventListener("pointerleave", () => {
      label.classList.remove("is-visible");
    });
  });
}

function workGridColumns(categoryId) {
  if (categoryId === "ai" || categoryId === "motion") return 2;
  return 4;
}

function renderHome() {
  const featuredOrder = ["vi-03", "ai-01", "vi-02", "ai-02", "vi-01", "motion-01", "duck-ip", "motion-02", "pack-01", "study-01"];
  const featured = featuredOrder.map((id) => projects.find((project) => project.id === id)).filter(Boolean);

  app.innerHTML = `
    <section class="page home">
      <div class="home-title-block">
        <h1 class="home-title">White Lab<span class="home-title-mark" aria-hidden="true">&reg;</span></h1>
        <p class="home-subtitle">${cleanText("\u5728\u79e9\u5e8f\u3001\u56fe\u50cf\u4e0e\u8868\u8fbe\u4e4b\u95f4\uff0c\u6301\u7eed\u7ec3\u4e60\u89c6\u89c9\u5224\u65ad")}</p>
      </div>
      <div class="selected-strip" aria-label="${cleanText("\u9996\u9875\u7cbe\u9009\u4f5c\u54c1")}">
        ${featured.map((project) => `
          <a class="cover-link ${project.video ? "is-horizontal" : "is-vertical"}" href="${homeFeaturedHref(project)}">
            ${cover(project, project.video ? "wide" : "tall", "home")}
            <div class="cover-label">${cleanText(project.title)}</div>
          </a>
        `).join("")}
      </div>
      <div class="home-hover-label" aria-hidden="true"></div>
    </section>
  `;

  initVideoCovers();
  initHomeIntro();
}

function hideHomeHoverLabel(hoverLabel) {
  if (!hoverLabel) return;
  hoverLabel.classList.remove("is-visible");
  hoverLabel.textContent = "";
}

function moveHomeHoverLabel(event, hoverLabel, home) {
  if (!hoverLabel || !home || !event) return;
  const homeRect = home.getBoundingClientRect();
  const labelRect = hoverLabel.getBoundingClientRect();
  const gap = 18;
  let x = event.clientX - homeRect.left + gap;
  let y = event.clientY - homeRect.top - labelRect.height - gap;

  if (x + labelRect.width > homeRect.width - 12) {
    x = event.clientX - homeRect.left - labelRect.width - gap;
  }
  if (y < 12) {
    y = event.clientY - homeRect.top + gap;
  }

  hoverLabel.style.setProperty("--label-x", `${Math.max(12, x).toFixed(2)}px`);
  hoverLabel.style.setProperty("--label-y", `${Math.max(12, y).toFixed(2)}px`);
}

function showHomeHoverLabel(link, event, hoverLabel, home) {
  if (!hoverLabel) return;
  const title = link.querySelector(".cover-label")?.textContent.trim();
  if (!title) return;
  hoverLabel.textContent = title;
  hoverLabel.classList.add("is-visible");
  moveHomeHoverLabel(event, hoverLabel, home);
}

function clearHomeHover(strip, links, hoverLabel) {
  strip.classList.remove("is-hovering");
  hideHomeHoverLabel(hoverLabel);
  links.forEach((link) => {
    link.classList.remove("is-active", "is-before-active", "is-after-active");
    link.style.removeProperty("--hover-shift");
    link.style.removeProperty("--hover-scale");
    link.style.removeProperty("--label-scale");
    link.style.removeProperty("--hover-lift");
  });
}

function setHomeHover(strip, links, activeIndex, event, hoverLabel, home) {
  clearHomeHover(strip, links, hoverLabel);
  const active = links[activeIndex];
  if (!active) return;

  const stripRect = strip.getBoundingClientRect();
  const rects = links.map((link) => {
    const left = stripRect.left + link.offsetLeft;
    const width = link.offsetWidth;
    return { left, right: left + width, width };
  });
  const activeRect = rects[activeIndex];
  const activeScale = active.classList.contains("is-horizontal") ? 1.92 : 2.18;
  const safeGap = 34;
  const activeCenter = activeRect.left + activeRect.width / 2;
  const activeLeft = activeCenter - (activeRect.width * activeScale) / 2;
  const activeRight = activeCenter + (activeRect.width * activeScale) / 2;

  const leftNeighbor = rects[activeIndex - 1];
  const rightNeighbor = rects[activeIndex + 1];
  const leftShift = leftNeighbor ? Math.min(0, activeLeft - safeGap - leftNeighbor.right) : 0;
  const rightShift = rightNeighbor ? Math.max(0, activeRight + safeGap - rightNeighbor.left) : 0;

  strip.classList.add("is-hovering");
  active.style.setProperty("--hover-scale", String(activeScale));
  active.style.setProperty("--label-scale", (1 / activeScale).toFixed(3));
  links.forEach((link, index) => {
    link.classList.toggle("is-active", index === activeIndex);
    link.classList.toggle("is-before-active", index < activeIndex);
    link.classList.toggle("is-after-active", index > activeIndex);
    if (index < activeIndex) {
      link.style.setProperty("--hover-shift", `${leftShift.toFixed(2)}px`);
    }
    if (index > activeIndex) {
      link.style.setProperty("--hover-shift", `${rightShift.toFixed(2)}px`);
    }
  });
  showHomeHoverLabel(active, event, hoverLabel, home);
}

function initHomeIntro() {
  const home = document.querySelector(".home");
  const strip = document.querySelector(".selected-strip");
  const links = Array.from(document.querySelectorAll(".home .cover-link"));
  const hoverLabel = document.querySelector(".home-hover-label");
  if (!home || !strip || !links.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  links.forEach((link, index) => {
    link.addEventListener("pointerenter", (event) => {
      if (!home.classList.contains("is-intro-complete")) return;
      setHomeHover(strip, links, index, event, hoverLabel, home);
    });
    link.addEventListener("pointermove", (event) => {
      if (!home.classList.contains("is-intro-complete")) return;
      if (!link.classList.contains("is-active")) {
        setHomeHover(strip, links, index, event, hoverLabel, home);
        return;
      }
      moveHomeHoverLabel(event, hoverLabel, home);
    });
    link.addEventListener("focus", () => {
      if (!home.classList.contains("is-intro-complete")) return;
      const rect = link.getBoundingClientRect();
      setHomeHover(strip, links, index, {
        clientX: rect.left + rect.width / 2,
        clientY: rect.top + rect.height / 2
      }, hoverLabel, home);
    });
  });

  strip.addEventListener("pointerleave", () => clearHomeHover(strip, links, hoverLabel));
  strip.addEventListener("focusout", (event) => {
    if (!strip.contains(event.relatedTarget)) {
      clearHomeHover(strip, links, hoverLabel);
    }
  });

  if (prefersReducedMotion) {
    home.classList.add("is-title-expanded", "is-intro-complete");
    links.forEach((link) => link.classList.add("is-intro-visible"));
    return;
  }

  const targetX = window.innerWidth / 2;
  const targetY = window.innerHeight * 0.55;
  const introTargetWidth =
    window.innerWidth <= 768
      ? Math.min(window.innerWidth * 0.54, 252)
      : Math.min(Math.max(window.innerWidth * 0.155, 208), 320);
  const centerIndex = (links.length - 1) / 2;
  links.forEach((link) => {
    const rect = link.getBoundingClientRect();
    const linkCenterX = rect.left + rect.width / 2;
    const linkCenterY = rect.top + rect.height / 2;
    link.style.setProperty("--intro-x", `${(targetX - linkCenterX).toFixed(2)}px`);
    link.style.setProperty("--intro-y", `${(targetY - linkCenterY).toFixed(2)}px`);
    link.style.setProperty("--intro-scale", (introTargetWidth / Math.max(1, rect.width)).toFixed(3));
  });

  home.classList.add("is-intro-stacked");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const revealDuration = 1000;
      const settleDuration = 500;
      const revealLead = 0;
      const orderedLinks = links
        .map((link, index) => ({ link, index, distance: Math.abs(index - centerIndex) }))
        .sort((a, b) => a.distance - b.distance || a.index - b.index);
      const revealStagger = orderedLinks.length > 1 ? revealDuration / (orderedLinks.length - 1) : 0;
      const expandStart = revealLead + revealDuration;
      home.classList.add("is-intro-animating");
      orderedLinks.forEach(({ link }, orderIndex) => {
        link.style.setProperty("--intro-z", String(orderIndex + 1));
        window.setTimeout(() => {
          link.classList.add("is-intro-visible");
        }, revealLead + orderIndex * revealStagger);
      });
      window.setTimeout(() => {
        home.classList.add("is-title-expanded");
        home.classList.remove("is-intro-stacked");
      }, expandStart);
      window.setTimeout(() => {
        home.classList.remove("is-intro-animating");
        home.classList.add("is-intro-complete");
      }, expandStart + settleDuration);
    });
  });
}

function renderSidebar() {
  return `
    <aside class="work-sidebar">
      <div>
        <p class="sidebar-title">Selected·</p>
        <nav class="category-list" aria-label="作品分类">
          ${categories.map((category) => `
            <button class="category-button ${category.id === activeCategory ? "is-active" : ""}" data-category="${category.id}">
              ${categoryTitleMarkup(category.title)}
            </button>
          `).join("")}
        </nav>
      </div>
      <div class="sidebar-foot">
        <a class="rednote-icon" href="https://www.xiaohongshu.com/user/profile/5fb736c40000000001002dd0" target="_blank" rel="noreferrer noopener" aria-label="小红书入口">
          <img src="./assets/xiaohongshu.png" alt="小红书">
        </a>
      </div>
    </aside>
  `;
}

function defaultFilterFor(categoryId) {
  const category = categories.find((item) => item.id === categoryId);
  return category?.filters?.[0] || "";
}

function visibleProjects() {
  return projects.filter((project) => {
    if (!isProjectVisible(project)) return false;
    if (project.category !== activeCategory) return false;
    if (activeCategory !== "graphic") return true;
    return project.filter === activeFilter;
  });
}

function renderWork() {
  const category = categories.find((item) => item.id === activeCategory);
  if (category.filters && !category.filters.includes(activeFilter)) {
    activeFilter = defaultFilterFor(category.id);
  }
  const items = visibleProjects();
  const workItems = items.flatMap(workItemsForProject);
  const gridColumns = workGridColumns(activeCategory);
  if (!viewerLayer) return;

  viewerLayer.innerHTML = `
    <section class="page work-layout">
      ${renderSidebar()}
      <div class="work-content">
        <h1 class="section-head">${cleanText(category.title)}</h1>
        <p class="section-desc">${cleanText(category.desc)}</p>
        ${category.filters ? `
          <div class="filters" aria-label="平面视觉筛选">
            ${category.filters.map((filter) => `
              <button class="filter-button ${filter === activeFilter ? "is-active" : ""}" data-filter="${filter}">${cleanText(filter)}</button>
            `).join("")}
          </div>
        ` : ""}
        <div class="project-grid grid-cols-${gridColumns}">
          ${workItems.map((entry, renderIndex) => renderWorkCard(entry, renderIndex)).join("")}
        </div>
        <div class="work-hover-label" aria-hidden="true"></div>
      </div>
    </section>
  `;

  initVideoCovers();
  initPressFeedback(".project-card");
  initProjectHoverLabels();

  document.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      activeFilter = defaultFilterFor(activeCategory);
      renderWork();
    });
  });

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderWork();
    });
  });
}

function renderSidebarV2() {
  return `
    <aside class="work-sidebar">
      <div>
        <p class="sidebar-title">Selected.</p>
        <nav class="category-list" aria-label="作品分类">
          ${workSections.map((section) => `
            <button class="category-button ${section.id === activeCategory ? "is-active" : ""}" data-work-section="${section.id}">
              ${sectionTitleMarkup(section.title)}
            </button>
          `).join("")}
        </nav>
      </div>
      <div class="sidebar-foot">
        <a class="rednote-icon" href="https://www.xiaohongshu.com/user/profile/5fb736c40000000001002dd0" target="_blank" rel="noreferrer noopener" aria-label="小红书入口">
          <img src="./assets/xiaohongshu.png" alt="小红书">
        </a>
      </div>
    </aside>
  `;
}

function renderWorkContentV2(sectionId, animate = false) {
  const section = workSectionById(sectionId);
  const workItems = workSectionProjects(section.id).flatMap(workItemsForProject);
  const workContent = document.querySelector(".work-content");
  if (!workContent) return;

  workContent.innerHTML = `
    <div class="work-panel ${animate ? "work-panel-enter" : ""}">
      <div class="section-copy">
        <h1 class="section-head">${sectionTitleMarkup(section.title)}</h1>
        <p class="section-desc">${section.description}</p>
        <div class="section-tags" aria-label="栏目标签">
          ${section.tags.map((tag) => `<span class="section-tag">${tag}</span>`).join("")}
        </div>
      </div>
      ${workItems.length ? `
        <div class="project-grid grid-cols-${workGridColumns(section.id)}">
          ${workItems.map((entry, renderIndex) => renderWorkCard(entry, renderIndex)).join("")}
        </div>
        <div class="work-hover-label" aria-hidden="true"></div>
      ` : `
        <div class="work-empty-state">
          <p class="work-empty-title">${section.emptyTitle || "No works yet."}</p>
          <p class="work-empty-body">${section.emptyBody || "New fragments will land here soon."}</p>
        </div>
      `}
    </div>
  `;

  initVideoCovers();
  initPressFeedback(".project-card");
  initProjectHoverLabels();
  initWorkImageReveal();
}

function syncWorkSidebarV2() {
  document.querySelectorAll("[data-work-section]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.workSection === activeCategory);
    button.onclick = () => {
      if (button.dataset.workSection === activeCategory) return;
      window.location.hash = `#work/${button.dataset.workSection}`;
    };
  });
}

function renderWorkIndex() {
  const hasShell = Boolean(document.querySelector(".work-layout"));
  if (!hasShell) {
    app.innerHTML = `
      <section class="page work-layout">
        ${renderSidebarV2()}
        <div class="work-content"></div>
      </section>
    `;
  }

  syncWorkSidebarV2();
  renderWorkContentV2(activeCategory, hasShell);
}

function renderProject(id) {
  const project = projects.find((item) => item.id === id) || projects[0];
  if (!isProjectVisible(project)) {
    window.location.hash = `#work/${project.category || "brand"}`;
    return;
  }
  if (project.video) {
    renderViewer(id, 0);
    return;
  }

  const category = categories.find((item) => item.id === project.category);
  const media = mediaForProject(project);
  const heroItem = media[0];
  const galleryItems = media.slice(1);
  app.innerHTML = `
    <article class="page detail">
      <div class="detail-grid">
        <aside>
          <a class="back-link" href="#work/${project.category}">返回${cleanText(category.title)}</a>
          <h1 class="detail-title">${cleanText(project.title)}</h1>
          <p class="meta">${projectMeta(project)}</p>
        </aside>
        <div>
          <div class="detail-copy">
            <h2>项目介绍 / project introduction</h2>
            ${projectIntroParagraphs(project).map((paragraph) => `<p>${cleanText(paragraph)}</p>`).join("")}
            ${project.link ? `
              <a class="detail-external-link" href="${project.link}" target="_blank" rel="noreferrer noopener">优设-设计师私享会</a>
            ` : ""}
          </div>
          ${heroItem ? `
            <a class="detail-hero" href="#view/${project.id}/0">
              ${mediaMarkup(heroItem, "")}
            </a>
          ` : ""}
          ${galleryItems.length ? `
            <div class="detail-gallery">
              ${galleryItems.map((item, index) => `
                <a class="gallery-item reveal-on-scroll" href="#view/${project.id}/${index + 1}" style="--reveal-index:${index}">
                  ${mediaMarkup(item, "")}
                </a>
              `).join("")}
            </div>
          ` : ""}
        </div>
      </div>
    </article>
  `;

  initPressFeedback(".detail-hero, .gallery-item");
  initScrollReveal();
}

function renderViewer(id, rawIndex = 0, options = {}) {
  const { animate = true, swapDirection = "" } = options;
  const project = projects.find((item) => item.id === id) || projects[0];
  if (!isProjectVisible(project)) {
    window.location.hash = `#work/${project.category || "brand"}`;
    return;
  }
  const category = categories.find((item) => item.id === project.category);
  const media = mediaForProject(project);
  const index = Math.max(0, Math.min(Number(rawIndex) || 0, media.length - 1));
  const current = media[index];
  const prevIndex = (index - 1 + media.length) % media.length;
  const nextIndex = (index + 1) % media.length;
  const closeHref = viewerReturnHref || `#work/${project.category}`;
  const hasMultiple = media.length > 1;
  if (!viewerLayer) return;

  viewerLayer.innerHTML = `
    <section class="viewer ${animate ? "viewer-rise" : "viewer-swap"} ${swapDirection ? `viewer-swap-${swapDirection}` : ""}" aria-label="作品查看器">
      <div class="viewer-top">
        <div class="viewer-title">${cleanText(project.title)}</div>
        <div class="viewer-actions">
          <span>${cleanText(category.title.split(" — ")[0])}</span>
          <a href="${closeHref}" data-viewer-close="true">Close</a>
        </div>
      </div>
      ${hasMultiple ? `
        <a class="viewer-side viewer-side-left" href="#view/${project.id}/${prevIndex}" aria-label="上一张缩略图">
          ${thumbMarkup(media[prevIndex], project.title)}
        </a>
      ` : ""}
      <div class="viewer-main">
        ${current.type === "image"
          ? `<div class="viewer-image-shell"><img class="viewer-media viewer-image-zoomable" src="${current.src}" alt="${current.title}" loading="eager"></div>`
          : mediaMarkup(current, "viewer-media")}
      </div>
      ${hasMultiple ? `
        <a class="viewer-side viewer-side-right" href="#view/${project.id}/${nextIndex}" aria-label="下一张缩略图">
          ${thumbMarkup(media[nextIndex], project.title)}
        </a>
      ` : ""}
      <div class="viewer-bottom">
        <a href="#view/${project.id}/${prevIndex}">${hasMultiple ? "Previous" : ""}</a>
        <div class="viewer-dots ${hasMultiple ? "" : "is-hidden"}">
          ${media.map((_, dotIndex) => `<span class="${dotIndex === index ? "is-active" : ""}"></span>`).join("")}
        </div>
        <a href="#view/${project.id}/${nextIndex}">${hasMultiple ? "Next" : ""}</a>
      </div>
    </section>
  `;
  viewerLayer.classList.add("is-active");

  if (current.type === "image") {
    initViewerImageZoom();
  }
  initViewerCloseTransition();
}

function clearViewerLayer() {
  if (!viewerLayer) return;
  viewerLayer.innerHTML = "";
  viewerLayer.classList.remove("is-active");
}

function animateViewerClose(viewer, href) {
  if (!viewer || !href) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    closeViewerTo(href);
    return;
  }
  viewer.classList.add("viewer-exit-down");
  window.setTimeout(() => {
    closeViewerTo(href);
  }, viewerExitDuration);
}

function initViewerCloseTransition() {
  const viewer = document.querySelector(".viewer");
  if (!viewer) return;

  viewer.addEventListener("click", (event) => {
    const closeLink = event.target.closest(".viewer-actions a");
    if (!closeLink) return;
    const href = closeLink.getAttribute("href");
    if (!href) return;
    event.preventDefault();
    animateViewerClose(viewer, href);
  });
}

function handleViewerCloseClick(event) {
  const closeLink = event.target.closest("[data-viewer-close]");
  if (!closeLink) return;
  const viewer = closeLink.closest(".viewer");
  const href = closeLink.getAttribute("href");
  if (!viewer || !href) return;

  event.preventDefault();
  event.stopPropagation();
  animateViewerClose(viewer, href);
}

function viewerRouteForOffset(offset) {
  const match = (window.location.hash || "").match(/^#view\/([^/]+)\/?([^/]*)$/);
  if (!match) return "";
  const [, projectId, rawIndex] = match;
  const project = projects.find((item) => item.id === projectId);
  if (!project) return "";
  const media = mediaForProject(project);
  if (media.length < 2) return "";
  const index = Math.max(0, Math.min(Number(rawIndex) || 0, media.length - 1));
  const nextIndex = (index + offset + media.length) % media.length;
  return `#view/${projectId}/${nextIndex}`;
}

function initViewerKeyboardShortcuts() {
  document.addEventListener("keydown", (event) => {
    const viewer = document.querySelector(".viewer");
    if (!viewer) return;

    const target = event.target;
    if (target && typeof target === "object" && "tagName" in target) {
      const tagName = String(target.tagName || "");
      if (target.isContentEditable || tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT") {
        return;
      }
    }

    if (event.key === "Escape") {
      const closeLink = viewer.querySelector("[data-viewer-close]");
      const href = closeLink?.getAttribute("href");
      if (!href) return;
      event.preventDefault();
      animateViewerClose(viewer, href);
      return;
    }

    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    const href = viewerRouteForOffset(event.key === "ArrowRight" ? 1 : -1);
    if (!href) return;
    event.preventDefault();
    window.location.hash = href;
  });
}

function initVideoCovers() {
  const covers = Array.from(document.querySelectorAll("[data-video-cover]"));
  if (!covers.length) return;

  const hydrateCover = (coverEl) => {
    if (coverEl.dataset.ready === "true" || coverEl.dataset.loading === "true") return;
    const video = coverEl.querySelector("video");
    if (!video) return;
    const src = coverEl.dataset.videoCover;
    if (!src) return;

    coverEl.dataset.loading = "true";
    video.preload = "metadata";
    video.src = src;
    video.load();

    video.addEventListener("loadedmetadata", () => {
      const targetTime = Math.max(0.2, Math.min(1.2, (video.duration || 1) * 0.08));
      try {
        video.currentTime = targetTime;
      } catch {
        coverEl.dataset.ready = "true";
        coverEl.classList.add("is-ready");
      }
    }, { once: true });

    video.addEventListener("seeked", () => {
      video.pause();
      coverEl.dataset.ready = "true";
      coverEl.classList.add("is-ready");
    }, { once: true });

    video.addEventListener("loadeddata", () => {
      coverEl.classList.add("is-ready");
    }, { once: true });
  };

  if (!("IntersectionObserver" in window)) {
    covers.forEach(hydrateCover);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      hydrateCover(entry.target);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.2,
    rootMargin: "120px 0px",
  });

  covers.forEach((coverEl) => observer.observe(coverEl));
}

function initPressFeedback(selector) {
  document.querySelectorAll(selector).forEach((element) => {
    const clearPress = () => element.classList.remove("is-pressing");
    element.addEventListener("pointerdown", () => {
      element.classList.add("is-pressing");
    });
    element.addEventListener("pointerup", clearPress);
    element.addEventListener("pointerleave", clearPress);
    element.addEventListener("pointercancel", clearPress);
    element.addEventListener("dragstart", clearPress);
  });
}

function initScrollReveal() {
  const items = Array.from(document.querySelectorAll(".reveal-on-scroll"));
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.16,
    rootMargin: "0px 0px -8% 0px",
  });

  items.forEach((item) => observer.observe(item));
}

function initWorkImageReveal() {
  const items = Array.from(document.querySelectorAll(".work-image-reveal"));
  if (!items.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const revealItem = (item, delay = 0) => {
    window.setTimeout(() => {
      item.classList.add("is-visible");
    }, delay);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const revealDelay = Number(entry.target.style.getPropertyValue("--reveal-index")) * 70;
      revealItem(entry.target, revealDelay);
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.26,
    rootMargin: "0px 0px -4% 0px",
  });

  items.forEach((item, index) => {
    observer.observe(item);
    window.setTimeout(() => {
      if (!item.classList.contains("is-visible")) {
        revealItem(item, 0);
      }
    }, 900 + index * 40);
  });
}

function initViewerImageZoom() {
  const shell = document.querySelector(".viewer-image-shell");
  const image = document.querySelector(".viewer-image-zoomable");
  if (!shell || !image) return;

  let scale = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let startPanX = 0;
  let startPanY = 0;
  const minScale = 1;
  const maxScale = 5;

  const update = () => {
    image.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`;
    shell.style.cursor = scale > 1 ? (isDragging ? "grabbing" : "grab") : "zoom-in";
  };

  const resetPan = () => {
    panX = 0;
    panY = 0;
  };

  image.draggable = false;

  shell.addEventListener("wheel", (event) => {
    event.preventDefault();
    const rect = shell.getBoundingClientRect();
    const cursorX = event.clientX - rect.left - rect.width / 2;
    const cursorY = event.clientY - rect.top - rect.height / 2;
    const nextScale = Math.max(minScale, Math.min(maxScale, +(scale + (event.deltaY < 0 ? 0.22 : -0.22)).toFixed(2)));
    const ratio = nextScale / scale;

    panX = cursorX - (cursorX - panX) * ratio;
    panY = cursorY - (cursorY - panY) * ratio;
    scale = nextScale;
    if (scale <= 1) resetPan();
    update();
  }, { passive: false });

  shell.addEventListener("pointerdown", (event) => {
    if (scale <= 1) return;
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    startPanX = panX;
    startPanY = panY;
    shell.setPointerCapture(event.pointerId);
    update();
  });

  shell.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    panX = startPanX + event.clientX - dragStartX;
    panY = startPanY + event.clientY - dragStartY;
    update();
  });

  const stopDragging = (event) => {
    if (!isDragging) return;
    isDragging = false;
    if (shell.hasPointerCapture(event.pointerId)) {
      shell.releasePointerCapture(event.pointerId);
    }
    update();
  };

  shell.addEventListener("pointerup", stopDragging);
  shell.addEventListener("pointercancel", stopDragging);
  shell.addEventListener("pointerleave", stopDragging);

  shell.addEventListener("dblclick", () => {
    scale = scale > 1 ? 1 : 2.2;
    resetPan();
    update();
  });

  update();
}

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function blurTextMarkup(text, {
  tag = "p",
  className = "",
  step = 36,
  startDelay = 0,
} = {}) {
  let index = 0;
  const lines = String(text).split("\n");
  const linesMarkup = lines.map((line) => {
    const chars = Array.from(line).map((char) => {
      const delay = startDelay + index * step;
      index += 1;
      const content = char === " " ? "&nbsp;" : escapeHtml(char);
      return `<span class="blur-char" style="--blur-delay:${delay}ms">${content}</span>`;
    }).join("");
    return `<span class="blur-line">${chars || "&nbsp;"}</span>`;
  }).join("");
  return `<${tag} class="${className} blur-text" data-blur-text>${linesMarkup}</${tag}>`;
}

function initAboutPage() {
  const page = app.querySelector(".about-page-v2");
  if (!page) return;

  requestAnimationFrame(() => page.classList.add("is-ready"));

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const blurBlocks = Array.from(page.querySelectorAll("[data-blur-text]"));
  const photo = page.querySelector(".reveal-photo");

  if (prefersReducedMotion) {
    blurBlocks.forEach((node) => node.classList.add("is-visible"));
    if (photo) {
      photo.classList.add("is-visible");
      photo.classList.add("is-settled");
    }
  } else {
    if (photo) {
      requestAnimationFrame(() => {
        photo.classList.add("is-visible");
        window.setTimeout(() => {
          photo.classList.add("is-settled");
        }, 720);
      });
    }
    blurBlocks.forEach((node, index) => {
      window.setTimeout(() => {
        node.classList.add("is-visible");
      }, 140 + index * 110);
    });
  }

  const copied = (text) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    let toast = document.querySelector(".copy-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "copy-toast copy-toast-dark";
      toast.textContent = "Copied";
      document.body.appendChild(toast);
    }
    toast.classList.add("is-visible");
    window.clearTimeout(copied.timer);
    copied.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 1200);
  };

  const hoverCard = page.querySelector(".about-v2-hover-card");
  const hoverCardImage = page.querySelector(".about-v2-hover-card-image");

  const clampPreview = (value, min, max) => Math.min(Math.max(value, min), max);

  const placePreview = (event, width = 260) => {
    if (!hoverCard || !hoverCardImage || !event) return;
    const margin = 18;
    const rect = hoverCard.getBoundingClientRect();
    const naturalRatio = hoverCardImage.naturalWidth
      ? hoverCardImage.naturalHeight / hoverCardImage.naturalWidth
      : 1.25;
    const cardWidth = rect.width || width;
    const cardHeight = rect.height || Math.min(window.innerHeight - margin * 2, width * naturalRatio);
    let x = event.clientX + 24;
    let y = event.clientY - cardHeight / 2;

    if (x + cardWidth + margin > window.innerWidth) {
      x = event.clientX - cardWidth - 24;
    }
    if (event.clientY > window.innerHeight * 0.62) {
      y = event.clientY - cardHeight - 24;
    }

    x = clampPreview(x, margin, Math.max(margin, window.innerWidth - cardWidth - margin));
    y = clampPreview(y, margin, Math.max(margin, window.innerHeight - cardHeight - margin));
    hoverCard.style.setProperty("--card-x", `${x}px`);
    hoverCard.style.setProperty("--card-y", `${y}px`);
  };

  const setPreview = (source, event, { width = 260 } = {}) => {
    if (!hoverCard || !hoverCardImage || !source || !event) return;
    hoverCardImage.alt = "preview";
    hoverCardImage.src = source;
    hoverCard.style.setProperty("--card-width", `${width}px`);
    hoverCard.classList.add("is-visible");
    requestAnimationFrame(() => placePreview(event, width));
    if (hoverCardImage.complete) {
      placePreview(event, width);
    } else {
      hoverCardImage.onload = () => placePreview(event, width);
    }
  };

  const movePreview = (event, width = 260) => {
    if (!hoverCard || !hoverCard.classList.contains("is-visible")) return;
    placePreview(event, width);
  };

  const clearPreview = () => {
    if (!hoverCard || !hoverCardImage) return;
    hoverCard.classList.remove("is-visible");
    hoverCardImage.removeAttribute("src");
  };

  const wechat = page.querySelector(".about-v2-contact-link-wechat");
  if (wechat) {
    wechat.dataset.copy = "191-9612-2081";
    wechat.addEventListener("click", () => copied("191-9612-2081"));
    wechat.addEventListener("pointerenter", (event) => setPreview("./assets/about/qr-wechat.png", event, { width: 120 }));
    wechat.addEventListener("pointermove", (event) => movePreview(event, 120));
    wechat.addEventListener("pointerleave", clearPreview);
    wechat.addEventListener("mouseenter", (event) => setPreview("./assets/about/qr-wechat.png", event, { width: 120 }));
    wechat.addEventListener("mousemove", (event) => movePreview(event, 120));
    wechat.addEventListener("mouseleave", clearPreview);
  }

  const email = page.querySelectorAll(".about-v2-contact-link")[1];
  if (email) {
    email.dataset.copy = "997346305@qq.com";
    email.addEventListener("click", () => copied("997346305@qq.com"));
  }

  page.querySelectorAll(".about-v2-logo[data-preview]").forEach((button) => {
    const showPreview = (event) => {
      const width = button.classList.contains("about-v2-logo-rednote") ? 255 : 225;
      setPreview(button.dataset.preview, event, { width });
    };
    const moveExistingPreview = (event) => {
      const width = button.classList.contains("about-v2-logo-rednote") ? 255 : 225;
      movePreview(event, width);
    };
    button.addEventListener("pointerenter", showPreview);
    button.addEventListener("pointermove", moveExistingPreview);
    button.addEventListener("pointerleave", clearPreview);
    button.addEventListener("mouseenter", showPreview);
    button.addEventListener("mousemove", moveExistingPreview);
    button.addEventListener("mouseleave", clearPreview);
  });
}

function renderAbout() {
  const quote = "AI是一片新的视觉土壤，\n而设计，\n是让它长出秩序、风格\n与记忆点的方式。";
  app.innerHTML = `
    <section class="page about-page-v2" aria-label="关于我">
      <div class="about-stage">
        <figure class="about-v2-portrait reveal-photo">
          <img src="./assets/about/profile-new.jpg" alt="白浪人物照片" />
        </figure>

        <div class="about-v2-side">
          <div class="about-v2-copy">
            ${blurTextMarkup(quote, { tag: "h1", className: "about-v2-quote", step: 24 })}
          </div>

          <div class="about-v2-footer">
            <div class="about-v2-contact">
              ${blurTextMarkup("Wechat:191-9612-2081", { tag: "button", className: "about-v2-contact-link about-v2-contact-link-wechat", step: 16 })}
              ${blurTextMarkup("Email:997346305@qq.com", { tag: "button", className: "about-v2-contact-link", step: 14, startDelay: 120 })}
            </div>

            <div class="about-v2-actions">
              <div class="about-v2-logo-stack blur-text-static">
                <img src="./assets/about/logos-yellow.png" alt="LibTV 和 小红书" />
                <button class="about-v2-logo about-v2-logo-libtv" type="button" data-preview="./assets/about/card-libtv.png" aria-label="查看 LibTV 卡片">
                  <span class="sr-only">LibTV</span>
                </button>
                <button class="about-v2-logo about-v2-logo-rednote" type="button" data-preview="./assets/about/card-rednote.png" aria-label="查看小红书卡片">
                  <span class="sr-only">小红书</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about-v2-hover-card" aria-hidden="true">
        <img class="about-v2-hover-card-image" src="" alt="" />
      </div>
    </section>
  `;
  initAboutPage();
}

function route() {
  const hash = window.location.hash || "#home";
  const [, page, firstParam, secondParam] = hash.match(/^#([^/]+)\/?([^/]*)\/?([^/]*)$/) || [];
  applyRouteChrome(page || "home");

  if (page === "work") {
    clearViewerLayer();
    if (workSections.some((section) => section.id === firstParam)) {
      activeCategory = firstParam;
    } else if (!workSections.some((section) => section.id === activeCategory)) {
      activeCategory = "brand";
    }
    renderWorkIndex();
    previousViewState = null;
    previousPage = page;
    return;
  }

  if (page === "project") {
    clearViewerLayer();
    renderProject(firstParam);
    previousViewState = null;
    previousPage = page;
    return;
  }

  if (page === "view") {
    if (previousPage !== "view") {
      if (document.querySelector(".home")) {
        viewerReturnHref = "#home";
      } else if (document.querySelector(".work-layout")) {
        viewerReturnHref = `#work/${activeCategory}`;
      } else if (document.querySelector(".detail")) {
        viewerReturnHref = `#project/${firstParam}`;
      } else {
        const backgroundProject = projects.find((item) => item.id === firstParam) || projects[0];
        viewerReturnHref = `#work/${backgroundProject.category}`;
      }
    }
    if (!app.innerHTML.trim()) {
      const backgroundProject = projects.find((item) => item.id === firstParam) || projects[0];
      activeCategory = workSections.some((section) => section.id === backgroundProject.category)
        ? backgroundProject.category
        : "brand";
      renderWorkIndex();
    }
    const nextIndex = Math.max(0, Number(secondParam) || 0);
    let swapDirection = "";
    if (previousPage === "view" && previousViewState && previousViewState.id === firstParam) {
      const project = projects.find((item) => item.id === firstParam) || projects[0];
      const total = mediaForProject(project).length;
      const diff = (nextIndex - previousViewState.index + total) % total;
      if (diff === 1) swapDirection = "next";
      if (diff === total - 1) swapDirection = "prev";
    }
    renderViewer(firstParam, secondParam, { animate: previousPage !== "view", swapDirection });
    previousViewState = { id: firstParam, index: nextIndex };
    previousPage = page;
    return;
  }

  if (page === "about") {
    clearViewerLayer();
    renderAbout();
    previousViewState = null;
    previousPage = page;
    return;
  }

  clearViewerLayer();
  renderHome();
  previousViewState = null;
  previousPage = page || "home";
}

document.addEventListener("click", handleViewerCloseClick, true);
initViewerKeyboardShortcuts();
window.addEventListener("hashchange", route);
route();
