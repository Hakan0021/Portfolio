// ============================================================================
// 1. Static UI Translations Dictionary (Default Language: 'en')
// ============================================================================
const translations = {
  en: {
    // Navbar
    "nav.projects": "Games & Prototypes",
    "nav.skills": "Skill Set",
    "nav.contact": "Get in Touch",
    "nav.themeDark": "Dark",
    "nav.themeLight": "Light",

    // Hero Section
    "hero.badge": "DIGITAL GAME DESIGNER & DEVELOPER",
    "hero.titleLine1": "Coding Mechanics,",
    "hero.titleLine2": "Designing Worlds",
    "hero.subtitle": "Development portfolio focused on gameplay systems, UI architecture, level design, and interactive game audio.",
    "hero.ctaPrimary": "Explore Projects",
    "hero.ctaSecondary": "GitHub Profile",

    // Projects, Search & Filters
    "projects.title": "Featured Projects",
    "projects.searchPlaceholder": "Search games, engines, or tags...",
    "projects.filterAll": "All",
    "projects.filterSystem": "Systems & UI",
    "projects.viewDetails": "Explore & Details →",
    "projects.sourceCode": "Source Code (GitHub)",
    "projects.noResults": "No games or prototypes match your search criteria.",

    // Skills Section
    "skills.title": "Development Tools & Skills",
    "skills.engines": "Game Engines",
    "skills.programming": "Programming & Systems",
    "skills.tagInventory": "Inventory & UI Systems",
    "skills.tagGameplay": "Gameplay Mechanics",
    "skills.designAudio": "Design & Audio",
    "skills.workflow": "Workflow & Version Control",
    "skills.tagAgile": "Agile / Team Collaboration",

    // Footer Section
    "footer.title": "Let's Build Games Together",
    "footer.subtitle": "Feel free to reach out for collaborations, game dev teams, or studio opportunities.",
    "footer.email": "Email",
    "footer.copyEmail": "Copy Email",
    "footer.emailCopied": "Email copied!",
    "footer.copyright": "© 2026 Game Dev Portfolio. All Rights Reserved.",

    // Dedicated Project Detail View & Lightbox
    "detail.back": "← Back to Projects",
    "detail.prevGame": "← Previous Game",
    "detail.nextGame": "Next Game →",
    "detail.playDemo": "Play Demo / Itch.io",
    "detail.readGdd": "Read GDD (PDF)",
    "detail.expandMedia": "⤢ Click to Expand",
    "detail.galleryEyebrow": "MEDIA & SCREENSHOT GALLERY",
    "detail.galleryHint": "Select a thumbnail to switch the active preview or click Inspect for full-screen",
    "detail.openLightbox": "Inspect",
    "detail.prevSlide": "← Prev",
    "detail.nextSlide": "Next →",
    "detail.metricRole": "Role",
    "detail.metricEngine": "Engine & Core Tech",
    "detail.metricTeam": "Team & Scope",
    "detail.metricTimeline": "Timeline & Status",
    "detail.architectureEyebrow": "01 / SYSTEM ENGINEERING",
    "detail.architectureTitle": "Deep Technical Architecture",
    "detail.gameplayLoopEyebrow": "02 / INTERACTIVE FLOW INSPECTOR",
    "detail.gameplayLoopTitle": "Core Gameplay & System Loop",
    "detail.loopClickHint": "Click any step to expand its Input Trigger, System Logic, and Visual & Audio Feedback:",
    "detail.loopInputTrigger": "Input Trigger",
    "detail.loopSystemLogic": "System Logic",
    "detail.loopVisualAudioFeedback": "Visual & Audio Feedback",
    "detail.gddEyebrow": "03 / DESIGN DOCUMENTATION",
    "detail.gddTitle": "GDD & Design Breakdown",
    "detail.techStackEyebrow": "04 / IMPLEMENTATION & STACK",
    "detail.techStackTitle": "Tech Stack & Key Mechanics",

    // Interactive Mechanics Sandbox
    "sandbox.eyebrow": "05 / INTERACTIVE SANDBOX",
    "sandbox.title": "Live Mechanics & Feel Simulator",
    "sandbox.subtitle": "Tune the sliders, then click the canvas to take control: move with ← → or A / D, jump with W / ↑ / Space, and fire with F. When idle, the entity runs an auto-demo.",
    "sandbox.triggerAction": "▶ Test / Trigger Action",
    "sandbox.resetBtn": "Reset",
    "sandbox.paramSpeed": "Movement Speed / Velocity",
    "sandbox.paramJump": "Jump / Impulse Force",
    "sandbox.paramFireRate": "Cooldown / Fire Rate",
    "sandbox.metricCooldown": "Weapon Cooldown",
    "sandbox.statApex": "Jump Apex:",
    "sandbox.statFireRate": "Fire Rate:",
    "sandbox.controlsHint": "Click canvas · ← → / A D move · W / ↑ / Space jump · F fire",
    "sandbox.statusDemo": "AUTO DEMO",
    "sandbox.statusPlayer": "PLAYER CONTROL",

    // Interactive Developer Debug Console
    "console.toggleBtn": "Console",
    "console.title": "DEV_ENGINE_CONSOLE v2.5 (Press / or ~ to toggle)",
    "console.quickCommands": "Quick Commands:",
    "console.placeholder": "Type a command (help, list, open 1, theme, lang)...",
    "console.run": "Run",
    "console.welcome": "Engine Telemetry Online. Type 'help' or click a preset command chip above.",
    "console.helpText": "Available commands: help | list | open <1-4> | home | theme | lang | clear",
    "console.unknownCmd": "Unknown command. Type 'help' to see available commands.",
    "console.openedProject": "Navigating to project:",
    "console.returnedHome": "Returned to Main Portfolio Grid.",
    "console.themeSwitched": "Active theme switched to:",
    "console.langSwitched": "Active language switched to:"
  },
  tr: {
    // Navbar
    "nav.projects": "Oyunlar & Prototipler",
    "nav.skills": "Yetenek Seti",
    "nav.contact": "İletişime Geç",
    "nav.themeDark": "Koyu",
    "nav.themeLight": "Açık",

    // Hero Section
    "hero.badge": "DİJİTAL OYUN TASARIMCISI & GELİŞTİRİCİ",
    "hero.titleLine1": "Mekanikleri Kodluyor,",
    "hero.titleLine2": "Dünyaları Tasarlıyorum",
    "hero.subtitle": "Oynanış sistemleri, kullanıcı arayüzü mimarisi, bölüm tasarımı ve interaktif oyun sesleri üzerine odaklanan geliştirme portfolyosu.",
    "hero.ctaPrimary": "Projeleri İncele",
    "hero.ctaSecondary": "GitHub Profilim",

    // Projects, Search & Filters
    "projects.title": "Öne Çıkan Projeler",
    "projects.searchPlaceholder": "Oyun, motor veya etiket ara...",
    "projects.filterAll": "Tümü",
    "projects.filterSystem": "Sistem & UI",
    "projects.viewDetails": "İncele & Detaylar →",
    "projects.sourceCode": "Kaynak Kod (GitHub)",
    "projects.noResults": "Arama kriterlerinize uygun oyun veya prototip bulunamadı.",

    // Skills Section
    "skills.title": "Geliştirme Araçları & Yetenekler",
    "skills.engines": "Oyun Motorları",
    "skills.programming": "Programlama & Sistem",
    "skills.tagInventory": "Envanter & UI Sistemleri",
    "skills.tagGameplay": "Oynanış Mekanikleri",
    "skills.designAudio": "Tasarım & Ses",
    "skills.workflow": "İş Akışı & Versiyon Kontrolü",
    "skills.tagAgile": "Agile / Ekip Çalışması",

    // Footer Section
    "footer.title": "Birlikte Oyun Geliştirelim",
    "footer.subtitle": "Yeni projeler, oyun geliştirme ekipleri veya stüdyo fırsatları için bana ulaşabilirsiniz.",
    "footer.email": "E-Posta",
    "footer.copyEmail": "E-postayı Kopyala",
    "footer.emailCopied": "E-posta kopyalandı!",
    "footer.copyright": "© 2026 Game Dev Portfolio. Tüm Hakları Saklıdır.",

    // Dedicated Project Detail View & Lightbox
    "detail.back": "← Projelere Dön",
    "detail.prevGame": "← Önceki Oyun",
    "detail.nextGame": "Sonraki Oyun →",
    "detail.playDemo": "Demoyu Oyna / Itch.io",
    "detail.readGdd": "GDD Oku (PDF)",
    "detail.expandMedia": "⤢ Büyütmek İçin Tıkla",
    "detail.galleryEyebrow": "MEDYA & EKRAN GÖRÜNTÜSÜ GALERİSİ",
    "detail.galleryHint": "Aktif önizlemeyi değiştirmek için küçük resme tıklayın veya Tam Ekran için Büyüt'e basın",
    "detail.openLightbox": "Büyüt",
    "detail.prevSlide": "← Önceki",
    "detail.nextSlide": "Sonraki →",
    "detail.metricRole": "Rol",
    "detail.metricEngine": "Oyun Motoru & Teknolojiler",
    "detail.metricTeam": "Ekip & Kapsam",
    "detail.metricTimeline": "Süreç & Durum",
    "detail.architectureEyebrow": "01 / SİSTEM MÜHENDİSLİĞİ",
    "detail.architectureTitle": "Derin Teknik Mimari",
    "detail.gameplayLoopEyebrow": "02 / ETKİLEŞİMLİ AKIŞ İNCELEYİCİ",
    "detail.gameplayLoopTitle": "Temel Oynanış & Sistem Döngüsü",
    "detail.loopClickHint": "Girdi Tetikleyicisi, Sistem Mantığı ve Görsel & İşitsel Geri Bildirimi görmek için bir adıma tıklayın:",
    "detail.loopInputTrigger": "Girdi Tetikleyicisi",
    "detail.loopSystemLogic": "Sistem Mantığı",
    "detail.loopVisualAudioFeedback": "Görsel & İşitsel Geri Bildirim",
    "detail.gddEyebrow": "03 / TASARIM DOKÜMANTASYONU",
    "detail.gddTitle": "GDD & Tasarım Analizi",
    "detail.techStackEyebrow": "04 / UYGULAMA & TEKNOLOJİ YIĞINI",
    "detail.techStackTitle": "Teknoloji Yığını & Temel Mekanikler",

    // Interactive Mechanics Sandbox
    "sandbox.eyebrow": "05 / İNTERAKTİF TEST ALANI",
    "sandbox.title": "Canlı Mekanik & Hissiyat Simülatörü",
    "sandbox.subtitle": "Kaydırıcıları ayarlayın, ardından kontrolü almak için tuvale tıklayın: ← → veya A / D ile hareket edin, W / ↑ / Boşluk ile zıplayın, F ile ateş edin. Boşta kaldığında varlık otomatik demo oynatır.",
    "sandbox.triggerAction": "▶ Test Et / Aksiyon Tetikle",
    "sandbox.resetBtn": "Sıfırla",
    "sandbox.paramSpeed": "Hareket Hızı / Sürat",
    "sandbox.paramJump": "Zıplama / İtme Kuvveti",
    "sandbox.paramFireRate": "Bekleme Süresi / Atış Hızı",
    "sandbox.metricCooldown": "Silah Bekleme Süresi",
    "sandbox.statApex": "Zıplama Tepe Noktası:",
    "sandbox.statFireRate": "Atış Hızı:",
    "sandbox.controlsHint": "Tuvale tıkla · ← → / A D hareket · W / ↑ / Boşluk zıpla · F ateş",
    "sandbox.statusDemo": "OTOMATİK DEMO",
    "sandbox.statusPlayer": "OYUNCU KONTROLÜ",

    // Interactive Developer Debug Console
    "console.toggleBtn": "Konsol",
    "console.title": "GELISTIRICI_KONSOLU v2.5 (Aç/Kapat için / veya ~ tuşu)",
    "console.quickCommands": "Hızlı Komutlar:",
    "console.placeholder": "Komut yazın (help, list, open 1, theme, lang)...",
    "console.run": "Çalıştır",
    "console.welcome": "Motor Telemetrisi Aktif. 'help' yazın veya yukarıdaki hazır komutlardan birine tıklayın.",
    "console.helpText": "Kullanılabilir komutlar: help | list | open <1-4> | home | theme | lang | clear",
    "console.unknownCmd": "Bilinmeyen komut. Komutları görmek için 'help' yazın.",
    "console.openedProject": "Proje açılıyor:",
    "console.returnedHome": "Ana Portfolyo Görünümüne dönüldü.",
    "console.themeSwitched": "Aktif tema değiştirildi:",
    "console.langSwitched": "Aktif dil değiştirildi:"
  }
};

// ============================================================================
// 2. Bilingual Game Projects Data Array (Generic Templates: Game 1..4 / Oyun 1..4)
// ============================================================================
const gameProjects = [
  {
    id: 1,
    category: "unity",
    engine: "Unity / HTML5 Canvas",
    tags: ["C#", "Playable Mini-Game", "2D Arcade Action", "State Machines"],
    gallery: ["playable-minigame", "placeholder-2", "placeholder-3"],
    links: {
      github: "https://github.com/",
      details: "#project-1",
      demo: "#play-game-1",
      doc: "#"
    },
    i18n: {
      en: {
        title: "Game 1",
        role: "Game Designer & Developer",
        description: "Playable 2D Arcade Survival mini-game! Move with WASD/Arrows or Mouse, dash with SPACE, collect energy orbs to build your combo multiplier, and dodge seeker hazards.",
        mediaPlaceholder: "▶ [Game 1 — Click to Play Interactive Mini-Game]",
        galleryLabels: [
          "[Game 1 — Slot 01: Playable 2D Arcade Mini-Game]",
          "[Game 1 — Slot 02: Wave Spawner & Combo Telemetry]",
          "[Game 1 — Slot 03: UI & HUD Architecture]"
        ],
        overview: "Game 1 features a directly playable 2D arcade survival prototype right in the banner below. Pilot the core entity using WASD, Arrow Keys, or mouse/touch tracking, trigger invulnerable dashes with Spacebar, chain energy orb pickups for score multipliers, and survive escalating waves of hazard drones.",
        metrics: {
          team: "Solo Developer (Playable Prototype)",
          timeline: "Playable In-Browser Build"
        },
        architecture: "Built around a decoupled 60FPS update/render loop with entity pooling, distance-squared collision checks, combo decay timers, and persistent high-score serialization via localStorage.",
        architecturePoints: [
          "Modular State Machine: Clean separation between Title Screen, Active Wave Loop, Dash Invulnerability, and Game Over states",
          "Dynamic Wave Director: Escalates hazard spawn cadence and drone velocity based on current score and wave timer",
          "Combo & Multiplier System: Chaining orb pickups within the decay window scales score output up to 5x",
          "Zero-Allocation Particle Pool: Burst particles, dash afterimages, and floating score popups recycled smoothly at 60FPS"
        ],
        gameplayLoop: [
          {
            step: "Step 01 — Movement & Spatial Positioning",
            desc: "Navigate the arena using WASD/Arrow keys or smooth cursor tracking to stay clear of incoming hazard trajectories.",
            inputTrigger: "WASD / Arrow keys directional vector or pointer coordinates inside the arena.",
            systemLogic: "Normalized velocity interpolation with arena boundary clamping and dash cooldown tracking.",
            visualAudioFeedback: "Responsive core glow, directional thruster trail, and smooth velocity easing."
          },
          {
            step: "Step 02 — Dash Evasion & Invulnerability",
            desc: "Press Spacebar (or click) to burst through tight hazard clusters with brief invulnerability frames (i-frames).",
            inputTrigger: "Spacebar key press or primary pointer click while dash cooldown is ready.",
            systemLogic: "Applies 2.6x velocity impulse for 0.18s and enables i-frame collision bypass.",
            visualAudioFeedback: "Cyan afterimage rings, shockwave particle burst, and HUD cooldown bar refill."
          },
          {
            step: "Step 03 — Orb Collection & Combo Chaining",
            desc: "Collect golden energy orbs before your combo timer expires to multiply your score up to 5x.",
            inputTrigger: "Player bounding circle intersects an active Energy Orb or Shield Cell.",
            systemLogic: "Increments combo counter (max 5x), adds multiplied points, and spawns a replacement orb.",
            playerFeedback: "Floating '+10 xCombo' popup text, expanding collection ring, and HUD score pop.",
            visualAudioFeedback: "Floating '+10 xCombo' popup text, expanding collection ring, and HUD score pop."
          },
          {
            step: "Step 04 — Wave Escalation & High Score",
            desc: "Survive faster hazard waves and compete to beat your persisted High Score.",
            inputTrigger: "Wave timer milestone reached or player HP reaches zero.",
            systemLogic: "Increases hazard speed/count per wave; saves new record to localStorage on Game Over.",
            visualAudioFeedback: "Wave banner notification, screen-shake on hit, and High Score trophy badge."
          }
        ],
        gddSummary: "Designed as a fast-paced '30-second fun loop' arcade prototype emphasizing responsive movement, risk-reward dash timing, and instant visual feedback.",
        gddPillars: [
          "Design Pillar 01: Instant playability with zero loading screens and intuitive keyboard + mouse controls",
          "Design Pillar 02: High risk-versus-reward tension when dashing near hazards to keep a 5x combo alive",
          "Design Pillar 03: Clear visual color coding — Cyan/Orange player, Gold orbs, Green shields, Crimson hazards"
        ],
        features: [
          "Playable 60FPS 2D Arcade Mini-Game embedded directly in the project showcase banner",
          "WASD / Arrow Keys + Mouse movement with Spacebar invulnerable Dash mechanic",
          "Combo multiplier system, wave progression, shield pickups, and saved High Score"
        ]
      },
      tr: {
        title: "Oyun 1",
        role: "Oyun Tasarımcısı & Geliştirici",
        description: "Oynanabilir 2D Arcade Hayatta Kalma mini oyunu! WASD/Ok tuşları veya Fare ile hareket edin, BOŞLUK ile atılın (Dash), enerji kürelerini toplayarak kombo yapın ve tehlikelerden kaçın.",
        mediaPlaceholder: "▶ [Oyun 1 — İnteraktif Mini Oyunu Oynamak İçin Tıklayın]",
        galleryLabels: [
          "[Oyun 1 — Kare 01: Oynanabilir 2D Arcade Mini Oyun]",
          "[Oyun 1 — Kare 02: Dalga (Wave) & Kombo Telemetrisi]",
          "[Oyun 1 — Kare 03: Kullanıcı Arayüzü & HUD Görünümü]"
        ],
        overview: "Oyun 1, aşağıdaki vitrin alanında doğrudan oynayabileceğiniz 2D arcade hayatta kalma prototipidir. WASD, Ok Tuşları veya fare takibiyle karakterinizi yönlendirin, Boşluk (Space) tuşuyla dokunulmaz atılma (Dash) yapın, enerji kürelerini toplayarak çarpanınızı artırın ve zorlaşan dalgalarda hayatta kalın.",
        metrics: {
          team: "Bireysel Geliştirici (Oynanabilir Prototip)",
          timeline: "Tarayıcı İçi Oynanabilir Sürüm"
        },
        architecture: "60FPS güncelleme/çizim döngüsü, mesafe-kare çarpışma kontrolü, kombo zamanlayıcısı ve localStorage tabanlı yüksek skor kaydı üzerine kurgulandı.",
        architecturePoints: [
          "Modüler Durum Makinesi: Başlangıç Ekranı, Aktif Dalga Döngüsü, Dash Dokunulmazlığı ve Oyun Sonu durumları arasında temiz ayrım",
          "Dinamik Dalga Yöneticisi: Mevcut skora ve süreye göre düşman hızını ve doğma sıklığını ölçeklendirir",
          "Kombo & Çarpan Sistemi: Süre dolmadan toplanan her küre skor çarpanını 5x'e kadar yükseltir",
          "Performans Odaklı Parçacık Havuzu: Patlama efektleri, Dash izleri ve yüzen skor metinleri 60FPS'de akıcı çalışır"
        ],
        gameplayLoop: [
          {
            step: "Adım 01 — Hareket & Konumlanma",
            desc: "WASD/Ok tuşları veya fare imleci ile arenada manevra yaparak gelen tehlikelerden uzak durun.",
            inputTrigger: "WASD / Ok tuşları yön vektörü veya arena içi fare konumu.",
            systemLogic: "Normalize edilmiş hız interpolasyonu, arena sınır kontrolü ve Dash bekleme süresi takibi.",
            visualAudioFeedback: "Duyarlı çekirdek parlaması, hareket izi parçacıkları ve akıcı ivmelenme."
          },
          {
            step: "Adım 02 — Dash (Atılma) & Dokunulmazlık",
            desc: "Boşluk (Space) tuşuna veya sol tık'a basarak kısa süreli dokunulmazlıkla tehlikelerin içinden geçin.",
            inputTrigger: "Dash bekleme süresi doluyken Boşluk tuşu veya fare tıklaması.",
            systemLogic: "0.18 saniye boyunca 2.6x hız ivmesi uygular ve çarpışma hasarını devre dışı bırakır.",
            visualAudioFeedback: "Turkuaz halka izleri, şok dalgası parçacıkları ve HUD bekleme çubuğu dolumu."
          },
          {
            step: "Adım 03 — Küre Toplama & Kombo Zinciri",
            desc: "Kombo süresi bitmeden altın enerji kürelerini toplayarak skor çarpanınızı 5x'e çıkarın.",
            inputTrigger: "Oyuncu çemberinin aktif bir Enerji Küresi veya Kalkan Hücresi ile temas etmesi.",
            systemLogic: "Kombo sayacını artırır (maks. 5x), çarpanlı puanı ekler ve yeni küre oluşturur.",
            visualAudioFeedback: "Yüzen '+10 xKombo' metni, genişleyen toplama halkası ve HUD skor animasyonu."
          },
          {
            step: "Adım 04 — Dalga İlerlemesi & Yüksek Skor",
            desc: "Hızlanan tehlike dalgalarında hayatta kalın ve kaydedilen Yüksek Skorunuzu (High Score) geçin.",
            inputTrigger: "Dalga süresi eşiğine ulaşılması veya oyuncu canının sıfırlanması.",
            systemLogic: "Her dalgada tehlike hızını artırır; oyun sonunda yeni rekoru localStorage'a kaydeder.",
            visualAudioFeedback: "Dalga geçiş bildirimi, hasar anında ekran sarsıntısı ve Yüksek Skor rozeti."
          }
        ],
        gddSummary: "Anında tepki veren kontroller, risk-ödül odaklı Dash zamanlaması ve net görsel geri bildirim üzerine kurulu hızlı tempolu bir arcade prototipi.",
        gddPillars: [
          "Tasarım Sütunu 01: Yükleme ekranı olmadan klavye ve fare ile anında oynanabilirlik",
          "Tasarım Sütunu 02: 5x komboyu korumak için tehlikelerin yakınından Dash atarken oluşan yüksek heyecan",
          "Tasarım Sütunu 03: Net renk kodlaması — Turuncu/Turkuaz oyuncu, Altın küreler, Yeşil kalkanlar, Kırmızı tehlikeler"
        ],
        features: [
          "Proje vitrininde doğrudan oynanabilen 60FPS 2D Arcade Mini Oyun",
          "WASD / Ok Tuşları + Fare kontrolü ve Boşluk tuşuyla dokunulmaz Dash mekaniği",
          "Kombo çarpan sistemi, dalga ilerlemesi, kalkan ödülleri ve kalıcı Yüksek Skor kaydı"
        ]
      }
    }
  },
  {
    id: 2,
    category: "system",
    engine: "Unity",
    tags: ["C#", "UI Architecture", "Inventory System", "ScriptableObjects"],
    gallery: ["placeholder-1", "placeholder-2", "placeholder-3"],
    links: {
      github: "https://github.com/",
      details: "#project-2",
      demo: "#",
      doc: "#"
    },
    i18n: {
      en: {
        title: "Game 2",
        role: "Systems & UI Programmer",
        description: "Introduction and short summary for Game 2. Describe the core gameplay systems, UI architecture, or modular mechanics built for this project.",
        mediaPlaceholder: "[Game 2 — Gameplay Preview / Screenshot]",
        galleryLabels: [
          "[Game 2 — Slot 01: Interactive System & UI Layout]",
          "[Game 2 — Slot 02: Drag-and-Drop / Slot Logic Preview]",
          "[Game 2 — Slot 03: Data Inspector & ScriptableObject Schema]"
        ],
        overview: "Detailed project overview for Game 2. Use this section to explain the core systems engineering, user interface responsiveness, and reusable modular architecture designed for this project.",
        metrics: {
          team: "Solo Systems Architecture",
          timeline: "Reusable Production Module"
        },
        architecture: "Explain the technical architecture of Game 2 here. Highlight how the backend data model is decoupled from the frontend UI views and input handlers.",
        architecturePoints: [
          "MVC / MVP Inspired Separation: Pure C# data containers independent from Canvas UI rendering components",
          "Polymorphic Item & Action Schema: Extensible base classes for equipment, consumables, and interactive abilities",
          "Event-Driven UI Refresh: Zero per-frame polling; UI elements redraw strictly on state mutation events",
          "Serialization Ready: Structured JSON / binary save-load compatibility for persistent player state"
        ],
        gameplayLoop: [
          {
            step: "Step 01 — Trigger & Acquisition",
            desc: "Describe how the player interacts with world objects or triggers a system state update.",
            inputTrigger: "World pickup collider event or inventory shortcut key press.",
            systemLogic: "Item data reference lookup and container slot availability scan.",
            visualAudioFeedback: "Pickup notification toast, slot highlight pulse, and acquisition sound cue."
          },
          {
            step: "Step 02 — Validation & Processing",
            desc: "Explain how the backend validates capacity, stacking rules, cooldowns, or stat requirements.",
            inputTrigger: "Data container mutation request from gameplay or UI controller.",
            systemLogic: "Stack limit arithmetic, weight/capacity check, and unique ID verification.",
            visualAudioFeedback: "Updated stack badge counter or invalid-action shake feedback."
          },
          {
            step: "Step 03 — Interactive UI Manipulation",
            desc: "Detail how the user reorganizes slots, inspects tooltips, or binds shortcuts in the interface.",
            inputTrigger: "Pointer drag-and-drop gesture, hover event, or quick-slot keybind.",
            systemLogic: "Slot index swap/merge operation and dynamic tooltip position clamping.",
            visualAudioFeedback: "Smooth ghost-icon drag preview, comparison stat delta colors, and crisp click audio."
          },
          {
            step: "Step 04 — Runtime Execution",
            desc: "Describe how active selections immediately modify character stats, equipment, or world behavior.",
            inputTrigger: "Hotbar slot activation or equipment confirmation event.",
            systemLogic: "Polymorphic Use()/Equip() invocation and character attribute recalculation.",
            visualAudioFeedback: "Active slot border glow, cooldown radial sweep, and character model/stat update."
          }
        ],
        gddSummary: "Summarize the UX & System Design specifications for Game 2 here. Focus on usability heuristics, input latency targets, and designer-friendly tooling.",
        gddPillars: [
          "Design Pillar 01: Zero-latency UI feedback with clear visual affordances during drag, hover, and selection",
          "Design Pillar 02: Plug-and-play modularity so designers can add new items or skills in seconds",
          "Design Pillar 03: Clean visual hierarchy that keeps critical gameplay information readable under pressure"
        ],
        features: [
          "Modular slot, hotbar, and container management written in clean C#",
          "Dynamic tooltip and comparison overlay with automatic screen-edge clamping",
          "Full keyboard shortcut and gamepad navigation support"
        ]
      },
      tr: {
        title: "Oyun 2",
        role: "Sistem & UI Programcısı",
        description: "Oyun 2 için kısa giriş ve özet metni. Bu projede geliştirilen temel oynanış sistemlerini, UI mimarisini veya modüler mekanikleri buraya yazın.",
        mediaPlaceholder: "[Oyun 2 — Oynanış Önizlemesi / Ekran Görüntüsü]",
        galleryLabels: [
          "[Oyun 2 — Kare 01: Etkileşimli Sistem & Arayüz Yerleşimi]",
          "[Oyun 2 — Kare 02: Sürükle-Bırak & Slot Mantığı Önizlemesi]",
          "[Oyun 2 — Kare 03: Veri Şeması & ScriptableObject Yapısı]"
        ],
        overview: "Oyun 2 için detaylı proje genel bakış metni. Bu bölümü projede geliştirilen sistem mühendisliği, arayüz tepkiselliği ve yeniden kullanılabilir modüler mimariyi anlatmak için kullanın.",
        metrics: {
          team: "Bireysel Sistem Mimarisi",
          timeline: "Yeniden Kullanılabilir Üretim Modülü"
        },
        architecture: "Oyun 2'nin teknik mimarisini burada açıklayın. Arka plan veri modelinin ön yüz UI bileşenlerinden ve girdi yöneticilerinden nasıl ayrıldığını vurgulayın.",
        architecturePoints: [
          "MVC / MVP Tabanlı Ayrım: Canvas UI bileşenlerinden bağımsız saf C# veri konteynerleri",
          "Polimorfik Eşya & Aksiyon Şeması: Ekipmanlar, tüketilebilirler ve yetenekler için genişletilebilir temel sınıflar",
          "Olay Güdümlü UI Yenileme: Her karede gereksiz kontrol yapılmaz; arayüz yalnızca durum değiştiğinde güncellenir",
          "Kayıt Sistemi Uyumluluğu: Kalıcı oyuncu verileri için yapılandırılmış JSON / ikili kayıt-yükleme desteği"
        ],
        gameplayLoop: [
          {
            step: "Adım 01 — Tetikleme & Edinme",
            desc: "Oyuncunun dünya nesneleriyle nasıl etkileşime girdiğini veya sistem güncellemesini nasıl başlattığını açıklayın.",
            inputTrigger: "Dünya içi nesne etkileşimi veya envanter kısayol tuşu tetiklemesi.",
            systemLogic: "Eşya veri referansı sorgusu ve uygun envanter slotu taraması.",
            visualAudioFeedback: "Eşya alındı bildirimi, slot parlama efekti ve edinme ses geri bildirimi."
          },
          {
            step: "Adım 02 — Doğrulama & İşleme",
            desc: "Arka plan sisteminin kapasite, yığınlama kuralları veya bekleme sürelerini nasıl doğruladığını belirtin.",
            inputTrigger: "Oynanış veya arayüz kontrolcüsünden gelen veri güncelleme isteği.",
            systemLogic: "Yığın (Stack) limiti hesaplaması, kapasite kontrolü ve benzersiz kimlik doğrulaması.",
            visualAudioFeedback: "Güncellenen miktar göstergesi veya geçersiz işlem uyarı animasyonu."
          },
          {
            step: "Adım 03 — Etkileşimli UI Yönetimi",
            desc: "Kullanıcının slotları nasıl düzenlediğini, bilgi pencerelerini nasıl incelediğini veya kısayolları nasıl atadığını yazın.",
            inputTrigger: "Sürükle-bırak hareketi, imleç üzerine gelme (Hover) veya hızlı slot tuş ataması.",
            systemLogic: "Slot indekslerinin yer değiştirmesi/birleşmesi ve dinamik bilgi penceresi konumlandırması.",
            visualAudioFeedback: "Akıcı sürükleme önizlemesi, istatistik karşılaştırma renkleri ve net arayüz sesleri."
          },
          {
            step: "Adım 04 — Çalışma Zamanı Uygulaması",
            desc: "Aktif seçimlerin karakter istatistiklerini, ekipmanlarını veya oyun dünyasını anında nasıl değiştirdiğini anlatın.",
            inputTrigger: "Hızlı erişim slotu kullanımı veya ekipman kuşanma onayı.",
            systemLogic: "Polimorfik Use()/Equip() metodunun çağrılması ve karakter niteliklerinin yeniden hesaplanması.",
            visualAudioFeedback: "Aktif slot çerçeve vurgusu, bekleme süresi göstergesi ve karakter istatistik güncellemesi."
          }
        ],
        gddSummary: "Oyun 2'nin UX ve Sistem Tasarımı dokümantasyonunu burada özetleyin. Kullanılabilirlik ilkelerini, girdi tepki sürelerini ve tasarımcı dostu araçları vurgulayın.",
        gddPillars: [
          "Tasarım Sütunu 01: Sürükleme, üzerine gelme ve seçim anlarında sıfır gecikmeli görsel geri bildirim",
          "Tasarım Sütunu 02: Tasarımcıların saniyeler içinde yeni öğe ekleyebileceği tak-çalıştır modüler yapı",
          "Tasarım Sütunu 03: Kritik oynanış bilgilerini her koşulda okunaklı tutan temiz görsel hiyerarşi"
        ],
        features: [
          "Temiz C# ile yazılmış modüler slot, hızlı erişim çubuğu ve envanter yönetimi",
          "Ekran sınırlarına duyarlı dinamik bilgi penceresi (Tooltip) ve karşılaştırma arayüzü",
          "Tam klavye kısayolu ve kontrolcü (Gamepad) navigasyon desteği"
        ]
      }
    }
  },
  {
    id: 3,
    category: "unreal",
    engine: "Unreal Engine 5 / UEFN",
    tags: ["Blueprints", "Level Design", "World Building", "Gameplay Prototyping"],
    gallery: ["placeholder-1", "placeholder-2", "placeholder-3"],
    links: {
      github: "https://github.com/",
      details: "#project-3",
      demo: "#",
      doc: "#"
    },
    i18n: {
      en: {
        title: "Game 3",
        role: "Level & Technical Designer",
        description: "Introduction and short summary for Game 3. Describe the Unreal Engine / UEFN environment, level design flow, and Blueprint mechanics here.",
        mediaPlaceholder: "[Game 3 — Gameplay Preview / Screenshot]",
        galleryLabels: [
          "[Game 3 — Slot 01: Level Greybox & Sightlines]",
          "[Game 3 — Slot 02: Blueprint Interactive Logic]",
          "[Game 3 — Slot 03: Lighting & Atmosphere Pass]"
        ],
        overview: "Detailed project overview for Game 3. Replace this placeholder with details about your Unreal Engine 5 or UEFN prototype, focusing on spatial pacing, encounter design, and interactive Blueprint actors.",
        metrics: {
          team: "Solo Level & Blueprint Prototype",
          timeline: "Iterative Greybox to Polish"
        },
        architecture: "Explain the Blueprint and level scripting architecture of Game 3 here. Detail how trigger volumes, custom actors, and game mode managers coordinate player flow.",
        architecturePoints: [
          "Modular Blueprint Actors: Reusable interactive doors, switches, hazards, and objective spawners",
          "Event Dispatcher Network: Level-wide objective tracking without hard actor references",
          "Greybox Metric Standardization: Consistent jump distances, cover heights, and sightline corridors",
          "Lighting & Post-Process Volumes: Dynamic visual guidance directing player attention naturally"
        ],
        gameplayLoop: [
          {
            step: "Step 01 — Spatial Orientation",
            desc: "Describe how architectural framing and lighting guide the player toward the primary objective.",
            inputTrigger: "Player spawn event or entry into a new landmark zone trigger volume.",
            systemLogic: "Level streaming state check, camera framing adjustment, and ambient audio cue activation.",
            visualAudioFeedback: "High-contrast Lumen lighting focal point and clear architectural sightline toward the goal."
          },
          {
            step: "Step 02 — Traversal & Encounter",
            desc: "Detail the movement mechanics, verticality, or combat/puzzle arena the player navigates.",
            inputTrigger: "Sprint, jump, mantle, or tactical positioning within the encounter space.",
            systemLogic: "Blueprint encounter manager tracks player zone occupancy and hazard/AI state.",
            visualAudioFeedback: "Dynamic cover lines, elevation advantage indicators, and responsive environmental audio."
          },
          {
            step: "Step 03 — Dynamic World State Change",
            desc: "Explain how completing an objective triggers Blueprint events that transform the environment.",
            inputTrigger: "Objective node activation or puzzle sequence completion.",
            systemLogic: "Event Dispatcher broadcasts completion signal to linked doors, bridges, and lighting actors.",
            visualAudioFeedback: "Mechanical gate animation, lighting color shift, and spatial rumble/SFX."
          },
          {
            step: "Step 04 — Zone Transition",
            desc: "Outline how the level pacing resets tension and leads the player into the next landmark area.",
            inputTrigger: "Player crosses the unlocked threshold into the next progression corridor.",
            systemLogic: "Checkpoint update, encounter cleanup, and next-zone objective initialization.",
            visualAudioFeedback: "Pacing cooldown vista, updated objective prompt, and seamless music transition."
          }
        ],
        gddSummary: "Summarize the Level Design Document and top-down layout map for Game 3 here. Include notes on player pathing, choke points, and encounter pacing.",
        gddPillars: [
          "Design Pillar 01: Intuitive environmental navigation without relying on intrusive UI waypoints",
          "Design Pillar 02: Balanced verticality and cover placement supporting multiple playstyles",
          "Design Pillar 03: Rapid greybox iteration validated through playtest telemetry before art pass"
        ],
        features: [
          "Playable Unreal Engine 5 / UEFN level with custom Blueprint objective logic",
          "Standardized modular blockout kit for rapid spatial iteration",
          "Optimized Lumen lighting and atmospheric post-processing setup"
        ]
      },
      tr: {
        title: "Oyun 3",
        role: "Bölüm & Teknik Tasarımcı",
        description: "Oyun 3 için kısa giriş ve özet metni. Unreal Engine / UEFN ortamını, bölüm tasarımı akışını ve Blueprint mekaniklerini buraya yazın.",
        mediaPlaceholder: "[Oyun 3 — Oynanış Önizlemesi / Ekran Görüntüsü]",
        galleryLabels: [
          "[Oyun 3 — Kare 01: Bölüm Greybox & Görüş Hatları]",
          "[Oyun 3 — Kare 02: Blueprint Etkileşim Mantığı]",
          "[Oyun 3 — Kare 03: Işıklandırma & Atmosfer Çalışması]"
        ],
        overview: "Oyun 3 için detaylı proje genel bakış metni. Bu alanı Unreal Engine 5 veya UEFN prototipinizin mekânsal temposu, karşılaşma tasarımı ve etkileşimli Blueprint aktörleri ile güncelleyin.",
        metrics: {
          team: "Bireysel Bölüm & Blueprint Prototipi",
          timeline: "İteratif Greybox & Görsel Cilalama"
        },
        architecture: "Oyun 3'ün Blueprint ve bölüm içi kodlama mimarisini burada açıklayın. Tetikleyici hacimlerin (Trigger Volumes), özel aktörlerin ve oyun modu yöneticilerinin oyuncu akışını nasıl koordine ettiğini detaylandırın.",
        architecturePoints: [
          "Modüler Blueprint Aktörleri: Yeniden kullanılabilir etkileşimli kapılar, mekanizmalar, tehlikeler ve görev noktaları",
          "Event Dispatcher Ağı: Katı referans bağımlılığı olmadan bölüm genelinde görev ve durum takibi",
          "Standart Greybox Metrikleri: Tutarlı zıplama mesafeleri, siper yükseklikleri ve görüş koridorları",
          "Işıklandırma & Post-Process Hacimleri: Oyuncu dikkatini doğal biçimde yönlendiren dinamik görsel rehberlik"
        ],
        gameplayLoop: [
          {
            step: "Adım 01 — Mekânsal Yönelim",
            desc: "Mimari çerçeveleme ve ışıklandırmanın oyuncuyu ana hedefe nasıl yönlendirdiğini açıklayın.",
            inputTrigger: "Oyuncunun başlangıç noktasına doğması veya yeni bir odak bölgesi hacmine girmesi.",
            systemLogic: "Bölüm durum kontrolü, kamera çerçeveleme ayarı ve ortam sesi tetiklemesi.",
            visualAudioFeedback: "Lumen ışıklandırma odak noktası ve hedefi vurgulayan net mimari görüş hattı."
          },
          {
            step: "Adım 02 — Hareket & Karşılaşma",
            desc: "Oyuncunun deneyimlediği hareket mekaniklerini, dikeyliği veya çatışma/bulmaca alanını detaylandırın.",
            inputTrigger: "Koşma, zıplama, tırmanma veya karşılaşma alanı içinde taktiksel konumlanma.",
            systemLogic: "Blueprint karşılaşma yöneticisinin oyuncu konumunu ve çevre durumunu takip etmesi.",
            visualAudioFeedback: "Dinamik siper hatları, yükseklik avantajı ipuçları ve duyarlı çevresel sesler."
          },
          {
            step: "Adım 03 — Dinamik Dünya Değişimi",
            desc: "Bir görevi tamamlamanın çevreyi dönüştüren Blueprint olaylarını nasıl tetiklediğini belirtin.",
            inputTrigger: "Görev düğümünün etkinleştirilmesi veya bulmaca dizisinin tamamlanması.",
            systemLogic: "Event Dispatcher üzerinden kapı, köprü ve ışık aktörlerine tamamlanma sinyali gönderilmesi.",
            visualAudioFeedback: "Mekanik kapı animasyonu, ışık renk değişimi ve uzamsal ses/sarsıntı efekti."
          },
          {
            step: "Adım 04 — Bölge Geçişi",
            desc: "Bölüm temposunun gerilimi nasıl dengelediğini ve oyuncuyu sonraki ana alana nasıl taşıdığını yazın.",
            inputTrigger: "Oyuncunun açılan geçitten sonraki ilerleme koridoruna adım atması.",
            systemLogic: "Kontrol noktası (Checkpoint) kaydı, önceki alanın temizlenmesi ve yeni görevin başlatılması.",
            visualAudioFeedback: "Manzara açılımı ile tempo dengelenmesi, görev güncellemesi ve kesintisiz müzik geçişi."
          }
        ],
        gddSummary: "Oyun 3'ün Bölüm Tasarım Dokümanını ve kuşbakışı harita planını burada özetleyin. Oyuncu rotaları, darboğazlar ve karşılaşma temposu hakkındaki notları ekleyin.",
        gddPillars: [
          "Tasarım Sütunu 01: Arayüz işaretçilerine bağımlı kalmadan sezgisel çevresel yönlendirme",
          "Tasarım Sütunu 02: Farklı oynanış stillerini destekleyen dengeli dikeylik ve siper yerleşimi",
          "Tasarım Sütunu 03: Sanat detaylandırması öncesinde oynanış testleriyle doğrulanan hızlı greybox iterasyonu"
        ],
        features: [
          "Özel Blueprint görev mantığıyla kurgulanmış oynanabilir Unreal Engine 5 / UEFN bölümü",
          "Hızlı mekânsal iterasyon için standartlaştırılmış modüler blokaj kiti",
          "Optimize edilmiş Lumen aydınlatması ve atmosferik post-process kurulumu"
        ]
      }
    }
  },
  {
    id: 4,
    category: "unity",
    engine: "Unity & FMOD Studio",
    tags: ["C#", "FMOD Studio", "Interactive Audio", "Gameplay Polish"],
    gallery: ["placeholder-1", "placeholder-2", "placeholder-3"],
    links: {
      github: "https://github.com/",
      details: "#project-4",
      demo: "#",
      doc: "#"
    },
    i18n: {
      en: {
        title: "Game 4",
        role: "Gameplay & Audio Designer",
        description: "Introduction and short summary for Game 4. Describe the gameplay mechanics, adaptive audio integration, or combat/movement feel of this project here.",
        mediaPlaceholder: "[Game 4 — Gameplay Preview / Screenshot]",
        galleryLabels: [
          "[Game 4 — Slot 01: Gameplay & Combat Feel Preview]",
          "[Game 4 — Slot 02: FMOD Studio Adaptive Parameter Graph]",
          "[Game 4 — Slot 03: VFX, Camera Shake & Audio Sync]"
        ],
        overview: "Detailed project overview for Game 4. Replace this placeholder with a breakdown of how gameplay programming, game feel (juice), and adaptive FMOD Studio audio work together in this project.",
        metrics: {
          team: "Solo or Collaborative Prototype",
          timeline: "Vertical Slice / Audio-Visual Polish"
        },
        architecture: "Explain the gameplay and adaptive audio architecture of Game 4 here. Detail how runtime game parameters drive FMOD Studio events, mixers, and real-time DSP effects.",
        architecturePoints: [
          "FMOD Parameter Bridge: C# wrapper syncing player velocity, health, and combat intensity to FMOD parameters",
          "Surface-Aware Footstep & Impact System: Raycast physical material detection triggering layered audio banks",
          "Dynamic Mixer Snapshots: Smooth ducking and filter transitions during pause states, low health, or cutscenes",
          "Game Feel Synchronization: Frame-accurate coordination between animation events, hit-stop, camera shake, and SFX"
        ],
        gameplayLoop: [
          {
            step: "Step 01 — Ambient Exploration",
            desc: "Describe how spatial 3D audio and subtle environmental cues establish mood and directional awareness.",
            inputTrigger: "Player movement across varied physical surface materials and acoustic zones.",
            systemLogic: "Raycast surface tag detection and FMOD 3D attenuation/reverb zone parameter update.",
            visualAudioFeedback: "Material-accurate footsteps, spatial ambient beds, and subtle visual dust particles."
          },
          {
            step: "Step 02 — Action & Escalation",
            desc: "Detail how entering combat or high-speed movement smoothly transitions adaptive music layers.",
            inputTrigger: "Combat engagement trigger or velocity threshold crossed.",
            systemLogic: "C# intensity manager interpolates FMOD continuous parameter from Calm (0.0) to Action (1.0).",
            visualAudioFeedback: "Seamless percussion/synth stem crossfade and dynamic camera FOV widening."
          },
          {
            step: "Step 03 — Tactile Impact Feedback",
            desc: "Explain how every hit, dash, or ability combines randomized pitch SFX, VFX, and camera impulse.",
            inputTrigger: "Collision contact event or ability release frame.",
            systemLogic: "Hit-stop coroutine pause, impulse vector calculation, and FMOD multi-instrument trigger.",
            visualAudioFeedback: "Crisp pitch-modulated impact SFX, directional screen shake, and synchronized spark VFX."
          },
          {
            step: "Step 04 — Resolution & Cooldown",
            desc: "Outline how audio parameters ramp down seamlessly as the encounter concludes.",
            inputTrigger: "Final target cleared or player exits active hazard radius.",
            systemLogic: "Mixer snapshot restoration and smooth parameter decay curve back to exploration state.",
            visualAudioFeedback: "Musical resolution stinger, UI tension fade-out, and calm ambient restoration."
          }
        ],
        gddSummary: "Summarize the Gameplay & Audio Direction document for Game 4 here. Include adaptive music state matrices, sound cue priority rules, and game feel benchmarks.",
        gddPillars: [
          "Design Pillar 01: Every player action produces immediate, synchronized visual, mechanical, and acoustic feedback",
          "Design Pillar 02: Non-repetitive soundscapes using randomized multi-instrument layers and pitch modulation",
          "Design Pillar 03: Clean frequency separation ensuring critical gameplay cues cut through busy mixes"
        ],
        features: [
          "Full FMOD Studio integration with real-time parameter-driven music and SFX",
          "Physics-based surface detection system for footsteps, impacts, and environmental foley",
          "Tunable game-feel controller combining hit-stop, screen shake, and audio-visual cues"
        ]
      },
      tr: {
        title: "Oyun 4",
        role: "Oynanış & Ses Tasarımcısı",
        description: "Oyun 4 için kısa giriş ve özet metni. Projenin oynanış mekaniklerini, adaptif ses entegrasyonunu veya vuruş/hareket hissiyatını buraya yazın.",
        mediaPlaceholder: "[Oyun 4 — Oynanış Önizlemesi / Ekran Görüntüsü]",
        galleryLabels: [
          "[Oyun 4 — Kare 01: Oynanış & Vuruş Hissiyatı Önizlemesi]",
          "[Oyun 4 — Kare 02: FMOD Studio Adaptif Parametre Grafiği]",
          "[Oyun 4 — Kare 03: VFX, Kamera Sarsıntısı & Ses Senkronizasyonu]"
        ],
        overview: "Oyun 4 için detaylı proje genel bakış metni. Bu alanı oynanış programlama, oyun hissiyatı (Game Feel) ve FMOD Studio adaptif ses tasarımının projede nasıl birleştiğini anlatmak için kullanın.",
        metrics: {
          team: "Bireysel veya Ortak Prototip",
          timeline: "Dikey Kesit / Görsel-İşitsel Cilalama"
        },
        architecture: "Oyun 4'ün oynanış ve adaptif ses mimarisini burada açıklayın. Çalışma zamanı oyun parametrelerinin FMOD Studio olaylarını, mikserlerini ve gerçek zamanlı DSP efektlerini nasıl sürdüğünü detaylandırın.",
        architecturePoints: [
          "FMOD Parametre Köprüsü: Oyuncu hızı, can durumu ve çatışma yoğunluğunu FMOD parametrelerine bağlayan C# katmanı",
          "Yüzey Duyarlı Adım & Çarpışma Sistemi: Raycast ile fiziksel materyal algılayarak katmanlı ses bankalarını tetikleme",
          "Dinamik Mikser Enstantaneleri: Duraklatma, düşük can veya ara sahnelerde yumuşak frekans filtreleme geçişleri",
          "Oyun Hissiyatı Senkronizasyonu: Animasyon olayları, hit-stop, kamera sarsıntısı ve ses efektleri arasında kare hassasiyetinde uyum"
        ],
        gameplayLoop: [
          {
            step: "Adım 01 — Atmosferik Keşif",
            desc: "3B uzamsal seslerin ve çevresel ipuçlarının atmosferi ve yön algısını nasıl oluşturduğunu açıklayın.",
            inputTrigger: "Oyuncunun farklı fiziksel yüzey materyalleri ve akustik bölgeler üzerinde hareket etmesi.",
            systemLogic: "Raycast yüzey etiketi algılaması ve FMOD 3B mesafe/yankı parametrelerinin güncellenmesi.",
            visualAudioFeedback: "Materyale özgü adım sesleri, uzamsal ambiyans katmanları ve hafif toz parçacık efektleri."
          },
          {
            step: "Adım 02 — Aksiyon & Gerilim Artışı",
            desc: "Çatışmaya girmenin veya hızlanmanın adaptif müzik katmanlarını nasıl yumuşakça değiştirdiğini detaylandırın.",
            inputTrigger: "Çatışma başlangıcı tetikleyicisi veya hız eşiğinin aşılması.",
            systemLogic: "C# yoğunluk yöneticisinin FMOD parametresini Sakin (0.0) durumdan Aksiyon (1.0) durumuna taşıması.",
            visualAudioFeedback: "Kesintisiz ritim/enstrüman katmanı geçişi ve dinamik kamera görüş açısı (FOV) genişlemesi."
          },
          {
            step: "Adım 03 — Dokunsal Etki Geri Bildirimi",
            desc: "Her vuruş, atılma veya yeteneğin rastgele perde (Pitch) değişimli SFX, VFX ve kamera tepkisini nasıl birleştirdiğini yazın.",
            inputTrigger: "Çarpışma temas olayı veya yetenek kullanım karesi.",
            systemLogic: "Hit-stop duraksaması, darbe vektörü hesaplaması ve FMOD çoklu ses tetiklemesi.",
            visualAudioFeedback: "Perde modülasyonlu net darbe sesi, yönlü kamera sarsıntısı ve senkronize kıvılcım efektleri."
          },
          {
            step: "Adım 04 — Çözülme & Sakinleşme",
            desc: "Karşılaşma sona erdiğinde ses parametrelerinin nasıl doğal biçimde sakinleştiğini belirtin.",
            inputTrigger: "Son hedefin tamamlanması veya oyuncunun tehlike bölgesinden çıkması.",
            systemLogic: "Mikser enstantanesinin normale dönmesi ve parametrelerin keşif durumuna yumuşak geçişi.",
            visualAudioFeedback: "Karşılaşma bitiş müziği (Stinger), arayüz gerilim efektinin sönümlenmesi ve sakin ambiyans."
          }
        ],
        gddSummary: "Oyun 4'ün Oynanış ve Ses Yönetimi dokümanını burada özetleyin. Adaptif müzik durum matrislerini, ses öncelik kurallarını ve oyun hissiyatı hedeflerini ekleyin.",
        gddPillars: [
          "Tasarım Sütunu 01: Her oyuncu aksiyonunun anında, senkronize görsel, mekanik ve işitsel geri bildirim üretmesi",
          "Tasarım Sütunu 02: Çoklu katman ve perde modülasyonu ile tekrara düşmeyen dinamik ses dünyası",
          "Tasarım Sütunu 03: Yoğun anlarda bile kritik oynanış seslerinin net duyulmasını sağlayan frekans ayrımı"
        ],
        features: [
          "Gerçek zamanlı parametre güdümlü müzik ve ses efektleriyle tam FMOD Studio entegrasyonu",
          "Adım sesleri ve çarpışmalar için fizik tabanlı yüzey algılama sistemi",
          "Hit-stop, ekran sarsıntısı ve görsel-işitsel ipuçlarını birleştiren ayarlanabilir oyun hissiyatı kontrolcüsü"
        ]
      }
    }
  }
];

// ============================================================================
// 3. Application Controller (i18n Engine, Search/Filter, Detail View, Sandbox & Console)
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Strictly default to 'en' unless a valid language was saved in localStorage
  const savedLang = localStorage.getItem("site_lang");
  let currentLang = savedLang === "tr" || savedLang === "en" ? savedLang : "en";

  // Default to 'dark' theme unless a valid theme was saved in localStorage
  const savedTheme = localStorage.getItem("site_theme");
  let currentTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

  let currentFilter = "all";
  let currentSearchQuery = "";
  let activeProjectId = null;
  let activeGalleryIndex = 0;
  let activeLoopStepIndex = 0;
  let toastTimeoutId = null;

  // Core DOM Elements
  const portfolioHomeView = document.getElementById("portfolioHomeView");
  const projectDetailView = document.getElementById("projectDetailView");
  const projectsGrid = document.getElementById("projectsGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectSearchInput = document.getElementById("projectSearchInput");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const siteLogo = document.getElementById("siteLogo");
  const themeToggle = document.getElementById("themeToggle");
  const themeLabel = document.getElementById("themeLabel");
  const langToggle = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");
  const langSubLabel = document.getElementById("langSubLabel");

  // Dedicated Detail View DOM Elements
  const backToProjectsBtn = document.getElementById("backToProjectsBtn");
  const prevProjectBtn = document.getElementById("prevProjectBtn");
  const nextProjectBtn = document.getElementById("nextProjectBtn");
  const detailEngineBadge = document.getElementById("detailEngineBadge");
  const detailRoleBadge = document.getElementById("detailRoleBadge");
  const detailTitle = document.getElementById("detailTitle");
  const detailOverview = document.getElementById("detailOverview");
  const metricRoleVal = document.getElementById("metricRoleVal");
  const metricEngineVal = document.getElementById("metricEngineVal");
  const metricTeamVal = document.getElementById("metricTeamVal");
  const metricTimelineVal = document.getElementById("metricTimelineVal");
  const detailMediaBanner = document.getElementById("detailMediaBanner");
  const detailBannerEngine = document.getElementById("detailBannerEngine");
  const detailBannerRole = document.getElementById("detailBannerRole");
  const detailBannerStage = document.getElementById("detailBannerStage");
  const detailMediaPlaceholder = document.getElementById("detailMediaPlaceholder");
  const detailGalleryGrid = document.getElementById("detailGalleryGrid");
  const detailArchitectureText = document.getElementById("detailArchitectureText");
  const detailArchitecturePoints = document.getElementById("detailArchitecturePoints");
  const detailGameplayLoop = document.getElementById("detailGameplayLoop");
  const detailGddSummary = document.getElementById("detailGddSummary");
  const detailGddPillars = document.getElementById("detailGddPillars");
  const detailTechTags = document.getElementById("detailTechTags");
  const detailFeaturesList = document.getElementById("detailFeaturesList");
  const detailDemoBtn = document.getElementById("detailDemoBtn");
  const detailDocBtn = document.getElementById("detailDocBtn");
  const detailGithubBtn = document.getElementById("detailGithubBtn");

  // Interactive Mechanics Sandbox DOM Elements
  const sandboxCanvas = document.getElementById("sandboxCanvas");
  const sandboxSpeedSlider = document.getElementById("sandboxSpeedSlider");
  const sandboxJumpSlider = document.getElementById("sandboxJumpSlider");
  const sandboxFireRateSlider = document.getElementById("sandboxFireRateSlider");
  const sandboxSpeedVal = document.getElementById("sandboxSpeedVal");
  const sandboxJumpVal = document.getElementById("sandboxJumpVal");
  const sandboxFireRateVal = document.getElementById("sandboxFireRateVal");
  const sandboxCooldownBar = document.getElementById("sandboxCooldownBar");
  const sandboxApexStat = document.getElementById("sandboxApexStat");
  const sandboxFireRateStat = document.getElementById("sandboxFireRateStat");
  const sandboxStatusPill = document.getElementById("sandboxStatusPill");
  const sandboxTriggerBtn = document.getElementById("sandboxTriggerBtn");
  const sandboxResetBtn = document.getElementById("sandboxResetBtn");

  // Lightbox Modal DOM Elements
  const mediaLightbox = document.getElementById("mediaLightbox");
  const lightboxBackdrop = document.getElementById("lightboxBackdrop");
  const lightboxCloseBtn = document.getElementById("lightboxCloseBtn");
  const lightboxStage = document.getElementById("lightboxStage");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const lightboxPrevBtn = document.getElementById("lightboxPrevBtn");
  const lightboxNextBtn = document.getElementById("lightboxNextBtn");

  // Developer Debug Console DOM Elements
  const debugConsoleToggle = document.getElementById("debugConsoleToggle");
  const debugConsoleModal = document.getElementById("debugConsoleModal");
  const consoleBackdrop = document.getElementById("consoleBackdrop");
  const consoleCloseBtn = document.getElementById("consoleCloseBtn");
  const consoleOutput = document.getElementById("consoleOutput");
  const consoleForm = document.getElementById("consoleForm");
  const consoleCommandInput = document.getElementById("consoleCommandInput");
  const consolePresetChips = document.querySelectorAll(".console-chip");

  // Footer Copy Email & Scroll-to-Top DOM Elements
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const toastNotification = document.getElementById("toastNotification");
  const toastMessage = document.getElementById("toastMessage");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Helper to get localized project object safely
  function getLocalizedProject(project, lang = currentLang) {
    if (!project || !project.i18n) return {};
    return project.i18n[lang] || project.i18n.en || {};
  }

  // --------------------------------------------------------------------------
  // Mobile Navigation Menu & View Restoration on Nav Click
  // --------------------------------------------------------------------------
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      const isExpanded = navLinks.classList.toggle("active");
      menuToggle.setAttribute("aria-expanded", String(isExpanded));
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        if (activeProjectId !== null) {
          closeProjectDetailView(false);
        }
      });
    });
  }

  if (siteLogo) {
    siteLogo.addEventListener("click", event => {
      if (activeProjectId !== null) {
        event.preventDefault();
        closeProjectDetailView(true);
      }
    });
  }

  // --------------------------------------------------------------------------
  // Media Helper (Supports lazy-loaded GIF/Image & Hover-to-Play MP4/WebM)
  // --------------------------------------------------------------------------
  function buildMediaContent(project, localized) {
    const projectTitle = localized.title || (project.i18n && project.i18n.en && project.i18n.en.title) || `Game ${project.id}`;
    if (project.video) {
      return `<video class="media-preview" src="${project.video}" muted loop playsinline preload="none" loading="lazy"></video>`;
    }
    if (project.image) {
      return `<img class="media-preview" src="${project.image}" alt="${projectTitle}" loading="lazy" />`;
    }
    if (Array.isArray(project.gallery) && project.gallery[0] === "playable-minigame") {
      const badgeLabel = currentLang === "tr" ? "▶ OYNANABİLİR MİNİ-OYUN" : "▶ PLAYABLE MINI-GAME";
      const subLabel = currentLang === "tr"
        ? "Detay sayfasını açarak tarayıcıda hemen oynayın (WASD / Fare + Dash)"
        : "Click card to play Orb Runner directly in browser (WASD / Mouse + Dash)";
      return `
        <div class="card-minigame-preview">
          <span class="card-minigame-pill">${badgeLabel}</span>
          <strong class="card-minigame-title">${localized.mediaPlaceholder}</strong>
          <span class="card-minigame-sub">${subLabel}</span>
        </div>
      `;
    }
    return `<span class="media-placeholder">${localized.mediaPlaceholder}</span>`;
  }

  function isImagePath(entry) {
    return typeof entry === "string" && /\.(png|jpe?g|gif|webp|svg|avif)$/i.test(entry);
  }

  function getGallerySlotLabel(project, localized, index) {
    if (Array.isArray(localized.galleryLabels) && localized.galleryLabels[index]) {
      return localized.galleryLabels[index];
    }
    return `${localized.mediaPlaceholder} (${index + 1})`;
  }

  // --------------------------------------------------------------------------
  // Game 1: Playable 2D Arcade Survival & Dash Mini-Game ("Orb Runner")
  // --------------------------------------------------------------------------
  const GAME1_BEST_SCORE_KEY = "portfolio_game1_best_score";
  let game1RafId = null;
  let game1CleanupFns = [];
  let game1StartFn = null;

  function stopGame1MiniGame() {
    if (game1RafId) {
      cancelAnimationFrame(game1RafId);
      game1RafId = null;
    }
    game1CleanupFns.forEach(fn => {
      try {
        fn();
      } catch (_e) {
        // ignore cleanup errors
      }
    });
    game1CleanupFns = [];
    game1StartFn = null;
    if (detailMediaBanner) {
      detailMediaBanner.classList.remove("has-playable-minigame");
    }
  }

  function mountGame1PlayableMiniGame(container) {
    stopGame1MiniGame();
    if (!container) return;

    if (detailMediaBanner) {
      detailMediaBanner.classList.add("has-playable-minigame");
    }

    const isTr = currentLang === "tr";
    const uiText = {
      badge: isTr ? "OYNANABİLİR 2D ARCADE MİNİ-OYUN" : "PLAYABLE 2D ARCADE MINI-GAME",
      title: isTr ? "OYUN 1: KÜRE AVCISI (ORB RUNNER)" : "GAME 1: ORB RUNNER",
      desc: isTr
        ? "Altın enerji kürelerini toplayarak kombonuzu katlayın (x1–x5). Kırmızı tehlike dronlarından kaçının veya SPACE / Sol Tık ile içlerinden DASH atarak onları parçalayın!"
        : "Collect golden energy orbs to build your combo multiplier (x1–x5). Dodge crimson hazard drones—or DASH straight through them while invulnerable to shatter them for bonus points!",
      controls: isTr
        ? "Hareket: WASD / Ok Tuşları / Fare · Dash (Atılma): SPACE / Sol Tık · Duraklat: P"
        : "Move: WASD / Arrow Keys / Mouse · Phase Dash: SPACE / Click · Pause: P",
      startBtn: isTr ? "▶ Oyunu Başlat" : "▶ Start Mini-Game",
      retryBtn: isTr ? "↻ Tekrar Oyna" : "↻ Play Again",
      resumeBtn: isTr ? "▶ Devam Et" : "▶ Resume Game",
      gameOverTitle: isTr ? "OYUN BİTTİ!" : "SYSTEM OVERLOAD — GAME OVER",
      pausedTitle: isTr ? "OYUN DURAKLATILDI" : "GAME PAUSED",
      scoreLabel: isTr ? "SKOR" : "SCORE",
      comboLabel: isTr ? "KOMBO" : "COMBO",
      waveLabel: isTr ? "DALGA" : "WAVE",
      hpLabel: isTr ? "CAN" : "HP",
      bestLabel: isTr ? "REKOR" : "BEST",
      dashReady: isTr ? "DASH: HAZIR" : "DASH: READY",
      dashCooldown: isTr ? "DASH: DOLUYOR" : "DASH: RECHARGING",
      pauseBtn: isTr ? "⏸ Duraklat" : "⏸ Pause"
    };

    let bestScore = 0;
    try {
      bestScore = Number(localStorage.getItem(GAME1_BEST_SCORE_KEY) || 0);
    } catch (_e) {
      bestScore = 0;
    }

    container.innerHTML = `
      <div class="game1-minigame-wrapper" id="game1MiniGameWrapper">
        <div class="game1-hud" role="status" aria-live="polite">
          <div class="game1-hud-group">
            <span class="game1-hud-pill">
              <small>${uiText.scoreLabel}</small>
              <strong id="game1ScoreVal">0</strong>
            </span>
            <span class="game1-hud-pill game1-hud-combo">
              <small>${uiText.comboLabel}</small>
              <strong id="game1ComboVal">x1</strong>
            </span>
            <span class="game1-hud-pill">
              <small>${uiText.waveLabel}</small>
              <strong id="game1WaveVal">1</strong>
            </span>
            <span class="game1-hud-pill game1-hud-hp">
              <small>${uiText.hpLabel}</small>
              <strong id="game1HpVal">♥♥♥</strong>
            </span>
          </div>
          <div class="game1-hud-group">
            <span class="game1-hud-pill game1-hud-dash" id="game1DashPill">${uiText.dashReady}</span>
            <span class="game1-hud-pill">
              <small>${uiText.bestLabel}</small>
              <strong id="game1BestVal">${bestScore}</strong>
            </span>
            <button type="button" class="game1-pause-btn" id="game1PauseBtn">${uiText.pauseBtn}</button>
          </div>
        </div>

        <canvas id="game1Canvas" class="game1-canvas" width="900" height="400" tabindex="0" aria-label="${uiText.title}"></canvas>

        <div class="game1-overlay" id="game1Overlay">
          <div class="game1-overlay-card">
            <span class="game1-overlay-badge">${uiText.badge}</span>
            <h3 class="game1-overlay-title" id="game1OverlayTitle">${uiText.title}</h3>
            <p class="game1-overlay-desc" id="game1OverlayDesc">${uiText.desc}</p>
            <div class="game1-overlay-controls">${uiText.controls}</div>
            <div class="game1-overlay-actions">
              <button type="button" class="btn-primary game1-start-btn" id="game1StartBtn">${uiText.startBtn}</button>
            </div>
          </div>
        </div>
      </div>
    `;

    const wrapper = container.querySelector("#game1MiniGameWrapper");
    const canvas = container.querySelector("#game1Canvas");
    const ctx = canvas ? canvas.getContext("2d") : null;
    const overlay = container.querySelector("#game1Overlay");
    const overlayTitle = container.querySelector("#game1OverlayTitle");
    const overlayDesc = container.querySelector("#game1OverlayDesc");
    const startBtn = container.querySelector("#game1StartBtn");
    const pauseBtn = container.querySelector("#game1PauseBtn");

    const scoreEl = container.querySelector("#game1ScoreVal");
    const comboEl = container.querySelector("#game1ComboVal");
    const waveEl = container.querySelector("#game1WaveVal");
    const hpEl = container.querySelector("#game1HpVal");
    const bestEl = container.querySelector("#game1BestVal");
    const dashPillEl = container.querySelector("#game1DashPill");

    if (!canvas || !ctx || !wrapper) return;

    const state = {
      mode: "idle", // "idle" | "playing" | "paused" | "gameover"
      width: 900,
      height: 400,
      score: 0,
      best: bestScore,
      combo: 1,
      comboTimer: 0,
      maxComboTime: 4.5,
      wave: 1,
      hp: 3,
      maxHp: 3,
      invulnTimer: 0,
      screenShake: 0,
      player: {
        x: 450,
        y: 200,
        vx: 0,
        vy: 0,
        radius: 13,
        speed: 265,
        dashTimer: 0,
        dashCooldown: 0,
        dashDirX: 1,
        dashDirY: 0,
        trail: []
      },
      keys: {
        up: false,
        down: false,
        left: false,
        right: false
      },
      pointer: {
        active: false,
        x: 450,
        y: 200
      },
      orbs: [],
      healPickups: [],
      drones: [],
      particles: [],
      popups: [],
      stars: []
    };

    function resizeArena() {
      const rect = wrapper.getBoundingClientRect();
      const targetW = Math.max(320, Math.round(rect.width || 900));
      const targetH = Math.max(240, Math.round(rect.height || 400));
      if (canvas.width !== targetW || canvas.height !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
      }
      state.width = canvas.width;
      state.height = canvas.height;
      state.player.x = Math.max(state.player.radius, Math.min(state.width - state.player.radius, state.player.x));
      state.player.y = Math.max(54 + state.player.radius, Math.min(state.height - state.player.radius, state.player.y));
    }

    resizeArena();

    for (let i = 0; i < 36; i += 1) {
      state.stars.push({
        x: Math.random() * state.width,
        y: Math.random() * state.height,
        r: 0.8 + Math.random() * 1.6,
        alpha: 0.15 + Math.random() * 0.45
      });
    }

    function spawnOrb() {
      const margin = 36;
      const topSafe = 64;
      state.orbs.push({
        x: margin + Math.random() * Math.max(60, state.width - margin * 2),
        y: topSafe + Math.random() * Math.max(60, state.height - topSafe - margin),
        radius: 9,
        pulse: Math.random() * Math.PI * 2,
        isBonus: Math.random() < 0.2
      });
    }

    function spawnHealPickup() {
      if (state.healPickups.length >= 1 || state.hp >= state.maxHp) return;
      const margin = 42;
      const topSafe = 68;
      state.healPickups.push({
        x: margin + Math.random() * Math.max(60, state.width - margin * 2),
        y: topSafe + Math.random() * Math.max(60, state.height - topSafe - margin),
        radius: 10,
        pulse: 0
      });
    }

    function spawnDrone() {
      const side = Math.floor(Math.random() * 4);
      let x = 0;
      let y = 0;
      const topMin = 56;
      if (side === 0) {
        x = 22;
        y = topMin + Math.random() * (state.height - topMin - 22);
      } else if (side === 1) {
        x = state.width - 22;
        y = topMin + Math.random() * (state.height - topMin - 22);
      } else if (side === 2) {
        x = 22 + Math.random() * (state.width - 44);
        y = topMin + 14;
      } else {
        x = 22 + Math.random() * (state.width - 44);
        y = state.height - 22;
      }

      // Ensure drone doesn't spawn directly on top of player
      const dxToPlayer = state.player.x - x;
      const dyToPlayer = state.player.y - y;
      if (Math.hypot(dxToPlayer, dyToPlayer) < 120) {
        x = state.player.x > state.width * 0.5 ? 28 : state.width - 28;
      }

      const angle = Math.atan2(state.player.y - y, state.player.x - x) + (Math.random() - 0.5) * 0.55;
      const baseSpeed = 105 + state.wave * 16 + Math.random() * 35;
      const isSeeker = Math.random() < Math.min(0.55, 0.2 + state.wave * 0.06);

      state.drones.push({
        x,
        y,
        vx: Math.cos(angle) * baseSpeed,
        vy: Math.sin(angle) * baseSpeed,
        speed: baseSpeed,
        radius: isSeeker ? 11 : 12,
        isSeeker,
        spin: Math.random() * Math.PI * 2
      });
    }

    function addBurst(x, y, color, count = 14) {
      for (let i = 0; i < count; i += 1) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const speed = 45 + Math.random() * 145;
        state.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 0.42 + Math.random() * 0.25,
          maxLife: 0.65,
          color,
          size: 2 + Math.random() * 3
        });
      }
    }

    function addPopup(x, y, text, color = "#FBBF24") {
      state.popups.push({
        x,
        y,
        text,
        color,
        life: 0.75,
        maxLife: 0.75
      });
    }

    function updateHud() {
      if (scoreEl) scoreEl.textContent = String(state.score);
      if (comboEl) comboEl.textContent = `x${state.combo}`;
      if (waveEl) waveEl.textContent = String(state.wave);
      if (hpEl) {
        const fullHearts = "♥".repeat(Math.max(0, state.hp));
        const emptyHearts = "♡".repeat(Math.max(0, state.maxHp - state.hp));
        hpEl.textContent = fullHearts + emptyHearts;
      }
      if (bestEl) bestEl.textContent = String(state.best);
      if (dashPillEl) {
        const ready = state.player.dashCooldown <= 0.01;
        dashPillEl.textContent = ready ? uiText.dashReady : uiText.dashCooldown;
        dashPillEl.classList.toggle("is-cooldown", !ready);
      }
    }

    function triggerDash() {
      if (state.mode !== "playing") return;
      if (state.player.dashCooldown > 0 || state.player.dashTimer > 0) return;

      let dirX = state.player.dashDirX;
      let dirY = state.player.dashDirY;

      const keyX = (state.keys.right ? 1 : 0) - (state.keys.left ? 1 : 0);
      const keyY = (state.keys.down ? 1 : 0) - (state.keys.up ? 1 : 0);

      if (keyX !== 0 || keyY !== 0) {
        const len = Math.hypot(keyX, keyY) || 1;
        dirX = keyX / len;
        dirY = keyY / len;
      } else if (state.pointer.active) {
        const dx = state.pointer.x - state.player.x;
        const dy = state.pointer.y - state.player.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 4) {
          dirX = dx / dist;
          dirY = dy / dist;
        }
      }

      state.player.dashDirX = dirX;
      state.player.dashDirY = dirY;
      state.player.dashTimer = 0.22;
      state.player.dashCooldown = 1.05;
      state.invulnTimer = Math.max(state.invulnTimer, 0.26);

      addBurst(state.player.x, state.player.y, "#38BDF8", 12);
      updateHud();
    }

    function startNewRun() {
      resizeArena();
      state.mode = "playing";
      state.score = 0;
      state.combo = 1;
      state.comboTimer = 0;
      state.wave = 1;
      state.hp = 3;
      state.invulnTimer = 0.6;
      state.screenShake = 0;

      state.player.x = state.width * 0.5;
      state.player.y = Math.max(120, state.height * 0.55);
      state.player.vx = 0;
      state.player.vy = 0;
      state.player.dashTimer = 0;
      state.player.dashCooldown = 0;
      state.player.trail = [];

      state.orbs = [];
      state.healPickups = [];
      state.drones = [];
      state.particles = [];
      state.popups = [];

      for (let i = 0; i < 4; i += 1) spawnOrb();
      for (let i = 0; i < 3; i += 1) spawnDrone();

      if (overlay) overlay.classList.add("is-hidden");
      updateHud();
      canvas.focus({ preventScroll: true });
    }

    game1StartFn = startNewRun;

    function togglePause() {
      if (state.mode === "playing") {
        state.mode = "paused";
        if (overlay && overlayTitle && overlayDesc && startBtn) {
          overlayTitle.textContent = uiText.pausedTitle;
          overlayDesc.textContent = isTr
            ? `Güncel Skor: ${state.score} · Dalga: ${state.wave} · Rekor: ${state.best}`
            : `Current Score: ${state.score} · Wave: ${state.wave} · Best: ${state.best}`;
          startBtn.textContent = uiText.resumeBtn;
          overlay.classList.remove("is-hidden");
        }
      } else if (state.mode === "paused") {
        state.mode = "playing";
        if (overlay) overlay.classList.add("is-hidden");
        canvas.focus({ preventScroll: true });
      }
    }

    function triggerGameOver() {
      state.mode = "gameover";
      if (state.score > state.best) {
        state.best = state.score;
        try {
          localStorage.setItem(GAME1_BEST_SCORE_KEY, String(state.best));
        } catch (_e) {
          // ignore storage quota errors
        }
      }
      updateHud();

      if (overlay && overlayTitle && overlayDesc && startBtn) {
        overlayTitle.textContent = uiText.gameOverTitle;
        overlayDesc.textContent = isTr
          ? `Final Skorunuz: ${state.score} · Ulaşılan Dalga: ${state.wave} · En Yüksek Rekor: ${state.best}`
          : `Final Score: ${state.score} · Wave Reached: ${state.wave} · High Score: ${state.best}`;
        startBtn.textContent = uiText.retryBtn;
        overlay.classList.remove("is-hidden");
      }
    }

    if (startBtn) {
      startBtn.addEventListener("click", event => {
        event.stopPropagation();
        if (state.mode === "paused") {
          togglePause();
        } else {
          startNewRun();
        }
      });
    }

    if (pauseBtn) {
      pauseBtn.addEventListener("click", event => {
        event.stopPropagation();
        if (state.mode === "playing" || state.mode === "paused") {
          togglePause();
        }
      });
    }

    const onKeyDown = event => {
      if (activeProjectId !== 1 || activeGalleryIndex !== 0) return;
      const activeTag = document.activeElement ? document.activeElement.tagName : "";
      if (activeTag === "INPUT" || activeTag === "TEXTAREA") return;

      const code = event.code;
      if (code === "KeyW" || code === "ArrowUp") {
        state.keys.up = true;
        state.pointer.active = false;
        if (state.mode === "playing") event.preventDefault();
      } else if (code === "KeyS" || code === "ArrowDown") {
        state.keys.down = true;
        state.pointer.active = false;
        if (state.mode === "playing") event.preventDefault();
      } else if (code === "KeyA" || code === "ArrowLeft") {
        state.keys.left = true;
        state.pointer.active = false;
        if (state.mode === "playing") event.preventDefault();
      } else if (code === "KeyD" || code === "ArrowRight") {
        state.keys.right = true;
        state.pointer.active = false;
        if (state.mode === "playing") event.preventDefault();
      } else if (code === "Space" || code === "ShiftLeft" || code === "ShiftRight") {
        if (state.mode === "playing") {
          event.preventDefault();
          triggerDash();
        }
      } else if (code === "KeyP") {
        if (state.mode === "playing" || state.mode === "paused") {
          event.preventDefault();
          togglePause();
        }
      }
    };

    const onKeyUp = event => {
      const code = event.code;
      if (code === "KeyW" || code === "ArrowUp") state.keys.up = false;
      else if (code === "KeyS" || code === "ArrowDown") state.keys.down = false;
      else if (code === "KeyA" || code === "ArrowLeft") state.keys.left = false;
      else if (code === "KeyD" || code === "ArrowRight") state.keys.right = false;
    };

    const updatePointerCoords = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / Math.max(1, rect.width);
      const scaleY = canvas.height / Math.max(1, rect.height);
      state.pointer.x = (clientX - rect.left) * scaleX;
      state.pointer.y = (clientY - rect.top) * scaleY;
      state.pointer.active = true;
    };

    canvas.addEventListener("mousemove", event => {
      if (state.mode !== "playing") return;
      updatePointerCoords(event.clientX, event.clientY);
    });

    canvas.addEventListener("mousedown", event => {
      event.stopPropagation();
      if (state.mode === "playing") {
        updatePointerCoords(event.clientX, event.clientY);
        triggerDash();
      }
    });

    canvas.addEventListener(
      "touchmove",
      event => {
        if (state.mode !== "playing" || !event.touches[0]) return;
        event.preventDefault();
        const touch = event.touches[0];
        updatePointerCoords(touch.clientX, touch.clientY);
      },
      { passive: false }
    );

    const onResize = () => resizeArena();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("resize", onResize);

    game1CleanupFns.push(() => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("resize", onResize);
    });

    let lastTimestamp = performance.now();

    function stepArena(dt) {
      if (state.mode !== "playing") return;

      const topBoundary = 52;
      const p = state.player;

      if (p.dashCooldown > 0) {
        const prevCd = p.dashCooldown;
        p.dashCooldown = Math.max(0, p.dashCooldown - dt);
        if (prevCd > 0 && p.dashCooldown === 0) updateHud();
      }
      if (state.invulnTimer > 0) {
        state.invulnTimer = Math.max(0, state.invulnTimer - dt);
      }
      if (state.screenShake > 0) {
        state.screenShake = Math.max(0, state.screenShake - dt * 22);
      }

      if (state.combo > 1) {
        state.comboTimer -= dt;
        if (state.comboTimer <= 0) {
          state.combo = 1;
          state.comboTimer = 0;
          updateHud();
        }
      }

      // Movement
      if (p.dashTimer > 0) {
        p.dashTimer = Math.max(0, p.dashTimer - dt);
        const dashSpeed = 670;
        p.vx = p.dashDirX * dashSpeed;
        p.vy = p.dashDirY * dashSpeed;
      } else {
        const keyX = (state.keys.right ? 1 : 0) - (state.keys.left ? 1 : 0);
        const keyY = (state.keys.down ? 1 : 0) - (state.keys.up ? 1 : 0);

        if (keyX !== 0 || keyY !== 0) {
          const len = Math.hypot(keyX, keyY) || 1;
          const nx = keyX / len;
          const ny = keyY / len;
          p.vx = nx * p.speed;
          p.vy = ny * p.speed;
          p.dashDirX = nx;
          p.dashDirY = ny;
        } else if (state.pointer.active) {
          const dx = state.pointer.x - p.x;
          const dy = state.pointer.y - p.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 6) {
            const nx = dx / dist;
            const ny = dy / dist;
            const factor = Math.min(1, dist / 48);
            p.vx = nx * p.speed * factor;
            p.vy = ny * p.speed * factor;
            p.dashDirX = nx;
            p.dashDirY = ny;
          } else {
            p.vx *= 0.8;
            p.vy *= 0.8;
          }
        } else {
          p.vx *= 0.84;
          p.vy *= 0.84;
        }
      }

      p.x += p.vx * dt;
      p.y += p.vy * dt;

      p.x = Math.max(p.radius + 8, Math.min(state.width - p.radius - 8, p.x));
      p.y = Math.max(topBoundary + p.radius + 6, Math.min(state.height - p.radius - 8, p.y));

      p.trail.push({
        x: p.x,
        y: p.y,
        isDash: p.dashTimer > 0,
        alpha: p.dashTimer > 0 ? 0.65 : 0.32
      });
      if (p.trail.length > 12) p.trail.shift();

      // Orbs collection
      for (let i = state.orbs.length - 1; i >= 0; i -= 1) {
        const orb = state.orbs[i];
        orb.pulse += dt * 4.5;
        const dist = Math.hypot(p.x - orb.x, p.y - orb.y);
        if (dist <= p.radius + orb.radius + 3) {
          const basePts = orb.isBonus ? 20 : 10;
          const pts = basePts * state.combo;
          state.score += pts;
          state.combo = Math.min(5, state.combo + 1);
          state.comboTimer = state.maxComboTime;

          addBurst(orb.x, orb.y, orb.isBonus ? "#38BDF8" : "#FBBF24", 15);
          addPopup(orb.x, orb.y - 8, `+${pts} (x${state.combo})`, orb.isBonus ? "#38BDF8" : "#FBBF24");

          state.orbs.splice(i, 1);
          spawnOrb();

          const targetWave = 1 + Math.floor(state.score / 120);
          if (targetWave > state.wave) {
            state.wave = targetWave;
            addPopup(
              state.width * 0.5,
              topBoundary + 34,
              isTr ? `DALGA ${state.wave}!` : `WAVE ${state.wave}!`,
              "#34D399"
            );
            if (state.hp < state.maxHp && Math.random() < 0.65) {
              spawnHealPickup();
            }
          }

          if (state.score > state.best) {
            state.best = state.score;
          }
          updateHud();
        }
      }

      // Heal Pickups
      for (let i = state.healPickups.length - 1; i >= 0; i -= 1) {
        const heal = state.healPickups[i];
        heal.pulse += dt * 5;
        const dist = Math.hypot(p.x - heal.x, p.y - heal.y);
        if (dist <= p.radius + heal.radius + 3) {
          state.hp = Math.min(state.maxHp, state.hp + 1);
          addBurst(heal.x, heal.y, "#34D399", 16);
          addPopup(heal.x, heal.y - 8, "+1 HP ♥", "#34D399");
          state.healPickups.splice(i, 1);
          updateHud();
        }
      }

      // Target drone count scales with wave
      const desiredDrones = Math.min(9, 2 + state.wave);
      while (state.drones.length < desiredDrones) {
        spawnDrone();
      }

      // Update Hazard Drones
      for (let i = state.drones.length - 1; i >= 0; i -= 1) {
        const d = state.drones[i];
        d.spin += dt * 5;

        if (d.isSeeker) {
          const angleToPlayer = Math.atan2(p.y - d.y, p.x - d.x);
          const targetVx = Math.cos(angleToPlayer) * d.speed;
          const targetVy = Math.sin(angleToPlayer) * d.speed;
          d.vx += (targetVx - d.vx) * Math.min(1, dt * 1.9);
          d.vy += (targetVy - d.vy) * Math.min(1, dt * 1.9);
        }

        d.x += d.vx * dt;
        d.y += d.vy * dt;

        if (d.x < d.radius + 8) {
          d.x = d.radius + 8;
          d.vx = Math.abs(d.vx);
        } else if (d.x > state.width - d.radius - 8) {
          d.x = state.width - d.radius - 8;
          d.vx = -Math.abs(d.vx);
        }

        if (d.y < topBoundary + d.radius + 6) {
          d.y = topBoundary + d.radius + 6;
          d.vy = Math.abs(d.vy);
        } else if (d.y > state.height - d.radius - 8) {
          d.y = state.height - d.radius - 8;
          d.vy = -Math.abs(d.vy);
        }

        const dist = Math.hypot(p.x - d.x, p.y - d.y);
        if (dist <= p.radius + d.radius) {
          if (p.dashTimer > 0) {
            // Player dashed through the hazard drone -> shatter drone for bonus!
            const crushPts = 25 * state.combo;
            state.score += crushPts;
            if (state.score > state.best) state.best = state.score;
            addBurst(d.x, d.y, "#38BDF8", 18);
            addPopup(d.x, d.y - 10, isTr ? `DASH KIRMA +${crushPts}` : `DASH CRUSH +${crushPts}`, "#38BDF8");
            state.drones.splice(i, 1);
            spawnDrone();
            updateHud();
          } else if (state.invulnTimer <= 0) {
            state.hp -= 1;
            state.combo = 1;
            state.comboTimer = 0;
            state.invulnTimer = 1.15;
            state.screenShake = 7;
            addBurst(p.x, p.y, "#EF4444", 22);
            addPopup(p.x, p.y - 12, isTr ? "-1 CAN!" : "-1 HP!", "#EF4444");
            d.vx = -d.vx;
            d.vy = -d.vy;
            updateHud();

            if (state.hp <= 0) {
              triggerGameOver();
              return;
            }
          }
        }
      }

      // Particles
      for (let i = state.particles.length - 1; i >= 0; i -= 1) {
        const pt = state.particles[i];
        pt.x += pt.vx * dt;
        pt.y += pt.vy * dt;
        pt.vx *= 0.94;
        pt.vy *= 0.94;
        pt.life -= dt;
        if (pt.life <= 0) state.particles.splice(i, 1);
      }

      // Floating Score Popups
      for (let i = state.popups.length - 1; i >= 0; i -= 1) {
        const pop = state.popups[i];
        pop.y -= 28 * dt;
        pop.life -= dt;
        if (pop.life <= 0) state.popups.splice(i, 1);
      }
    }

    function drawArena() {
      ctx.save();
      if (state.screenShake > 0) {
        const sx = (Math.random() - 0.5) * state.screenShake;
        const sy = (Math.random() - 0.5) * state.screenShake;
        ctx.translate(sx, sy);
      }

      // Background gradient
      const bgGrad = ctx.createLinearGradient(0, 0, 0, state.height);
      bgGrad.addColorStop(0, "#090D16");
      bgGrad.addColorStop(1, "#111827");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, state.width, state.height);

      // Subtle cyber grid
      ctx.strokeStyle = "rgba(148, 163, 184, 0.08)";
      ctx.lineWidth = 1;
      const gridStep = 40;
      for (let x = 0; x < state.width; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 50);
        ctx.lineTo(x, state.height);
        ctx.stroke();
      }
      for (let y = 50; y < state.height; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(state.width, y);
        ctx.stroke();
      }

      // Stars
      state.stars.forEach(s => {
        ctx.fillStyle = `rgba(226, 232, 240, ${s.alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Combo Timer Bar along top arena border
      if (state.combo > 1 && state.comboTimer > 0) {
        const ratio = Math.max(0, Math.min(1, state.comboTimer / state.maxComboTime));
        ctx.fillStyle = "rgba(251, 191, 36, 0.22)";
        ctx.fillRect(10, 50, state.width - 20, 4);
        ctx.fillStyle = "#FBBF24";
        ctx.fillRect(10, 50, (state.width - 20) * ratio, 4);
      }

      // Energy Orbs
      state.orbs.forEach(orb => {
        const r = orb.radius + Math.sin(orb.pulse) * 2;
        ctx.save();
        ctx.shadowColor = orb.isBonus ? "#38BDF8" : "#FBBF24";
        ctx.shadowBlur = 14;
        ctx.fillStyle = orb.isBonus ? "#38BDF8" : "#FBBF24";
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, r, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FEF3C7";
        ctx.beginPath();
        ctx.arc(orb.x - 2, orb.y - 2, r * 0.42, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Heal Pickups
      state.healPickups.forEach(heal => {
        const r = heal.radius + Math.sin(heal.pulse) * 2;
        ctx.save();
        ctx.shadowColor = "#34D399";
        ctx.shadowBlur = 14;
        ctx.fillStyle = "#10B981";
        ctx.beginPath();
        ctx.arc(heal.x, heal.y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#ECFDF5";
        ctx.font = "bold 11px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("+", heal.x, heal.y + 0.5);
        ctx.restore();
      });

      // Hazard Drones
      state.drones.forEach(d => {
        ctx.save();
        ctx.translate(d.x, d.y);
        ctx.rotate(d.spin);
        ctx.shadowColor = d.isSeeker ? "#F43F5E" : "#EF4444";
        ctx.shadowBlur = 12;

        ctx.fillStyle = d.isSeeker ? "#F43F5E" : "#EF4444";
        ctx.beginPath();
        const spikes = 4;
        for (let s = 0; s < spikes * 2; s += 1) {
          const rad = s % 2 === 0 ? d.radius + 3 : d.radius * 0.58;
          const ang = (s * Math.PI) / spikes;
          const px = Math.cos(ang) * rad;
          const py = Math.sin(ang) * rad;
          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "#FCA5A5";
        ctx.beginPath();
        ctx.arc(0, 0, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Player Trail
      const p = state.player;
      p.trail.forEach((pt, idx) => {
        const ratio = (idx + 1) / p.trail.length;
        ctx.fillStyle = pt.isDash
          ? `rgba(56, 189, 248, ${ratio * 0.45})`
          : `rgba(52, 211, 153, ${ratio * 0.25})`;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, p.radius * ratio * 0.85, 0, Math.PI * 2);
        ctx.fill();
      });

      // Player Core
      const blinkSkip = state.invulnTimer > 0 && p.dashTimer <= 0 && Math.floor(state.invulnTimer * 18) % 2 === 0;
      if (!blinkSkip) {
        ctx.save();
        const isDashing = p.dashTimer > 0;
        ctx.shadowColor = isDashing ? "#38BDF8" : "#34D399";
        ctx.shadowBlur = isDashing ? 20 : 14;

        if (isDashing) {
          ctx.strokeStyle = "rgba(56, 189, 248, 0.85)";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius + 6, 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.fillStyle = isDashing ? "#38BDF8" : "#10B981";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#ECFEFF";
        ctx.beginPath();
        ctx.arc(p.x + p.dashDirX * 3, p.y + p.dashDirY * 3, p.radius * 0.46, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Particles
      state.particles.forEach(pt => {
        const alpha = Math.max(0, pt.life / pt.maxLife);
        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      // Floating Score Popups
      state.popups.forEach(pop => {
        const alpha = Math.max(0, pop.life / pop.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.font = "bold 13px 'JetBrains Mono', monospace";
        ctx.fillStyle = pop.color;
        ctx.textAlign = "center";
        ctx.fillText(pop.text, pop.x, pop.y);
        ctx.restore();
      });

      ctx.restore();
    }

    function loop(now) {
      const dt = Math.min(0.05, Math.max(0.001, (now - lastTimestamp) / 1000));
      lastTimestamp = now;

      stepArena(dt);
      drawArena();

      game1RafId = requestAnimationFrame(loop);
    }

    game1RafId = requestAnimationFrame(loop);
  }

  // --------------------------------------------------------------------------
  // Interactive Gallery & Full-Screen Lightbox Logic
  // --------------------------------------------------------------------------
  function updateBannerMediaSlot(project, slotIndex) {
    if (!project) return;
    const localized = getLocalizedProject(project);
    const galleryItems = Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : ["placeholder-1", "placeholder-2", "placeholder-3"];

    const safeIndex = ((slotIndex % galleryItems.length) + galleryItems.length) % galleryItems.length;
    activeGalleryIndex = safeIndex;

    const rawItem = galleryItems[safeIndex];
    const slotLabel = getGallerySlotLabel(project, localized, safeIndex);

    if (detailBannerStage) {
      if (rawItem === "playable-minigame") {
        mountGame1PlayableMiniGame(detailBannerStage);
      } else {
        stopGame1MiniGame();
        if (isImagePath(rawItem)) {
          detailBannerStage.innerHTML = `<img class="media-preview" src="${rawItem}" alt="${slotLabel}" loading="lazy" />`;
        } else {
          detailBannerStage.innerHTML = `<span class="media-placeholder" id="detailMediaPlaceholder">${slotLabel}</span>`;
        }
      }
    } else if (detailMediaPlaceholder) {
      stopGame1MiniGame();
      detailMediaPlaceholder.textContent = slotLabel;
    }

    if (detailGalleryGrid) {
      const thumbButtons = detailGalleryGrid.querySelectorAll(".gallery-thumb");
      thumbButtons.forEach((btn, idx) => {
        btn.classList.toggle("active", idx === safeIndex);
        btn.setAttribute("aria-selected", String(idx === safeIndex));
      });
    }
  }

  function renderDetailGallery(project) {
    if (!detailGalleryGrid || !project) return;

    const localized = getLocalizedProject(project);
    const dict = translations[currentLang] || translations.en;
    const inspectText = dict["detail.openLightbox"] || "Inspect";
    const galleryItems = Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : ["placeholder-1", "placeholder-2", "placeholder-3"];

    detailGalleryGrid.innerHTML = galleryItems
      .map((item, idx) => {
        const slotLabel = getGallerySlotLabel(project, localized, idx);
        const isActive = idx === activeGalleryIndex;
        const isPlayableSlot = item === "playable-minigame";
        const actionBtnLabel = isPlayableSlot
          ? (currentLang === "tr" ? "▶ Oyna" : "▶ Play")
          : `⤢ ${inspectText}`;
        const thumbVisual = isImagePath(item)
          ? `<img class="gallery-thumb-img" src="${item}" alt="${slotLabel}" loading="lazy" />`
          : `<span class="gallery-thumb-placeholder">${slotLabel}</span>`;

        return `
          <div class="gallery-thumb ${isActive ? "active" : ""}" role="button" tabindex="0" data-gallery-index="${idx}" aria-selected="${isActive}">
            <div class="gallery-thumb-top">
              <span class="gallery-slot-badge">0${idx + 1}</span>
              <button type="button" class="gallery-expand-btn" data-expand-index="${idx}" aria-label="${actionBtnLabel}">
                ${actionBtnLabel}
              </button>
            </div>
            <div class="gallery-thumb-stage">
              ${thumbVisual}
            </div>
          </div>
        `;
      })
      .join("");

    detailGalleryGrid.querySelectorAll(".gallery-thumb").forEach(thumb => {
      const idx = Number(thumb.getAttribute("data-gallery-index") || 0);

      thumb.addEventListener("click", event => {
        if (event.target.closest(".gallery-expand-btn")) return;
        updateBannerMediaSlot(project, idx);
      });

      thumb.addEventListener("dblclick", () => {
        updateBannerMediaSlot(project, idx);
        if (galleryItems[idx] !== "playable-minigame") {
          openLightbox(idx);
        }
      });

      thumb.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          updateBannerMediaSlot(project, idx);
        }
      });
    });

    detailGalleryGrid.querySelectorAll(".gallery-expand-btn").forEach(expandBtn => {
      expandBtn.addEventListener("click", event => {
        event.stopPropagation();
        const idx = Number(expandBtn.getAttribute("data-expand-index") || 0);
        updateBannerMediaSlot(project, idx);
        if (galleryItems[idx] === "playable-minigame") {
          if (detailMediaBanner) {
            detailMediaBanner.scrollIntoView({ behavior: "smooth", block: "center" });
          }
          if (typeof game1StartFn === "function") {
            game1StartFn();
          }
        } else {
          openLightbox(idx);
        }
      });
    });
  }

  function renderLightboxSlide() {
    if (activeProjectId === null || !lightboxStage || !lightboxCaption) return;
    const project = gameProjects.find(item => item.id === activeProjectId);
    if (!project) return;

    const localized = getLocalizedProject(project);
    const galleryItems = Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : ["placeholder-1", "placeholder-2", "placeholder-3"];

    const rawItem = galleryItems[activeGalleryIndex];
    const slotLabel = getGallerySlotLabel(project, localized, activeGalleryIndex);

    if (isImagePath(rawItem)) {
      lightboxStage.innerHTML = `<img class="lightbox-img" src="${rawItem}" alt="${slotLabel}" loading="lazy" />`;
    } else {
      lightboxStage.innerHTML = `<span class="media-placeholder">${slotLabel}</span>`;
    }

    lightboxCaption.textContent = `${localized.title} — 0${activeGalleryIndex + 1} / 0${galleryItems.length}`;
  }

  function openLightbox(slotIndex = activeGalleryIndex) {
    if (!mediaLightbox || activeProjectId === null) return;
    const project = gameProjects.find(item => item.id === activeProjectId);
    if (!project) return;

    updateBannerMediaSlot(project, slotIndex);
    renderLightboxSlide();

    mediaLightbox.classList.add("active");
    mediaLightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!mediaLightbox) return;
    mediaLightbox.classList.remove("active");
    mediaLightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function stepLightboxSlide(direction) {
    if (activeProjectId === null) return;
    const project = gameProjects.find(item => item.id === activeProjectId);
    if (!project) return;
    updateBannerMediaSlot(project, activeGalleryIndex + direction);
    renderLightboxSlide();
  }

  if (detailMediaBanner) {
    detailMediaBanner.addEventListener("click", event => {
      if (detailMediaBanner.classList.contains("has-playable-minigame")) {
        return;
      }
      if (event.target.closest("#game1MiniGameWrapper")) {
        return;
      }
      openLightbox(activeGalleryIndex);
    });
    detailMediaBanner.addEventListener("keydown", event => {
      if (detailMediaBanner.classList.contains("has-playable-minigame")) {
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(activeGalleryIndex);
      }
    });
  }

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener("click", closeLightbox);
  }
  if (lightboxBackdrop) {
    lightboxBackdrop.addEventListener("click", closeLightbox);
  }
  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener("click", () => stepLightboxSlide(-1));
  }
  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener("click", () => stepLightboxSlide(1));
  }

  // --------------------------------------------------------------------------
  // Interactive Gameplay Loop Stepper (Expandable Step Sub-Panels)
  // --------------------------------------------------------------------------
  function setActiveLoopStep(stepIndex) {
    if (!detailGameplayLoop) return;
    const stepEls = detailGameplayLoop.querySelectorAll(".loop-step");
    if (stepEls.length === 0) return;

    const safeIndex = ((stepIndex % stepEls.length) + stepEls.length) % stepEls.length;
    activeLoopStepIndex = safeIndex;

    stepEls.forEach((el, idx) => {
      const isSelected = idx === safeIndex;
      el.classList.toggle("active", isSelected);
      el.setAttribute("aria-expanded", String(isSelected));
    });
  }

  function renderGameplayLoopSteps(project) {
    if (!detailGameplayLoop || !project) return;
    const localized = getLocalizedProject(project);
    const dict = translations[currentLang] || translations.en;
    const loopSteps = Array.isArray(localized.gameplayLoop) ? localized.gameplayLoop : [];

    detailGameplayLoop.innerHTML = loopSteps
      .map(
        (item, idx) => `
          <div class="loop-step" role="button" tabindex="0" data-step-index="${idx}" aria-expanded="false">
            <div class="loop-step-head">
              <span class="loop-step-index">0${idx + 1}</span>
              <div class="loop-step-body">
                <span class="loop-step-title">${item.step}</span>
                <span class="loop-step-desc">${item.desc}</span>
              </div>
              <span class="loop-step-chevron" aria-hidden="true">▾</span>
            </div>
            <div class="loop-step-details">
              <div class="loop-detail-item">
                <span class="loop-detail-label">${dict["detail.loopInputTrigger"]}</span>
                <p class="loop-detail-value">${item.inputTrigger || "-"}</p>
              </div>
              <div class="loop-detail-item">
                <span class="loop-detail-label">${dict["detail.loopSystemLogic"]}</span>
                <p class="loop-detail-value">${item.systemLogic || "-"}</p>
              </div>
              <div class="loop-detail-item">
                <span class="loop-detail-label">${dict["detail.loopVisualAudioFeedback"]}</span>
                <p class="loop-detail-value">${item.visualAudioFeedback || "-"}</p>
              </div>
            </div>
          </div>
        `
      )
      .join("");

    detailGameplayLoop.querySelectorAll(".loop-step").forEach(stepEl => {
      const idx = Number(stepEl.getAttribute("data-step-index") || 0);
      stepEl.addEventListener("click", () => setActiveLoopStep(idx));
      stepEl.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setActiveLoopStep(idx);
        } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const nextIdx = idx + (event.key === "ArrowDown" ? 1 : -1);
          setActiveLoopStep(nextIdx);
          const target = detailGameplayLoop.querySelector(`.loop-step[data-step-index="${activeLoopStepIndex}"]`);
          if (target) target.focus();
        }
      });
    });

    setActiveLoopStep(activeLoopStepIndex);
  }

  // --------------------------------------------------------------------------
  // Interactive Mechanics Sandbox — Live 2D Platformer Feel Simulator (Canvas)
  // --------------------------------------------------------------------------
  const SANDBOX_DEFAULTS = { speed: 180, jump: 420, fireRate: 30 };
  const SANDBOX_GRAVITY = 1400;
  const SANDBOX_GROUND_OFFSET = 34;
  const SANDBOX_IDLE_TO_DEMO_MS = 3500;

  const sandbox = {
    speed: SANDBOX_DEFAULTS.speed,
    jump: SANDBOX_DEFAULTS.jump,
    cooldown: SANDBOX_DEFAULTS.fireRate / 100,
    width: 0,
    height: 0,
    dpr: 1,
    player: { x: 80, y: 0, vx: 0, vy: 0, size: 22, onGround: true, facing: 1, squash: 0 },
    cooldownTimer: 0,
    projectiles: [],
    particles: [],
    keys: new Set(),
    lastInputAt: 0,
    demo: { dir: 1, jumpTimer: 1.2, fireTimer: 0.6 },
    pendingJump: false,
    pendingFire: false,
    pillKey: "",
    lastTimestamp: performance.now()
  };

  function isSandboxDemoMode() {
    return performance.now() - sandbox.lastInputAt > SANDBOX_IDLE_TO_DEMO_MS;
  }

  function resizeSandboxCanvas() {
    if (!sandboxCanvas) return false;
    const cssW = sandboxCanvas.clientWidth;
    const cssH = sandboxCanvas.clientHeight;
    if (cssW === 0 || cssH === 0) return false;

    const dpr = window.devicePixelRatio || 1;
    if (cssW !== sandbox.width || cssH !== sandbox.height || dpr !== sandbox.dpr) {
      sandbox.width = cssW;
      sandbox.height = cssH;
      sandbox.dpr = dpr;
      sandboxCanvas.width = Math.round(cssW * dpr);
      sandboxCanvas.height = Math.round(cssH * dpr);
      const groundY = cssH - SANDBOX_GROUND_OFFSET;
      sandbox.player.x = Math.min(Math.max(sandbox.player.x, 30), cssW - 30);
      if (sandbox.player.onGround) sandbox.player.y = groundY;
    }
    return true;
  }

  function syncSandboxReadouts() {
    if (sandboxSpeedSlider) sandbox.speed = Number(sandboxSpeedSlider.value);
    if (sandboxJumpSlider) sandbox.jump = Number(sandboxJumpSlider.value);
    if (sandboxFireRateSlider) sandbox.cooldown = Number(sandboxFireRateSlider.value) / 100;

    const apexPx = Math.round((sandbox.jump * sandbox.jump) / (2 * SANDBOX_GRAVITY));
    const shotsPerSec = (1 / sandbox.cooldown).toFixed(1);

    if (sandboxSpeedVal) sandboxSpeedVal.textContent = `${sandbox.speed} px/s`;
    if (sandboxJumpVal) sandboxJumpVal.textContent = `${sandbox.jump} N`;
    if (sandboxFireRateVal) sandboxFireRateVal.textContent = `${sandbox.cooldown.toFixed(2)} s`;
    if (sandboxApexStat) sandboxApexStat.textContent = `${apexPx} px`;
    if (sandboxFireRateStat) sandboxFireRateStat.textContent = `${shotsPerSec} /s`;
  }

  function spawnSandboxParticles(x, y, count, spread, colorRgb, speedMin, speedMax, upwardBias = 0) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = speedMin + Math.random() * (speedMax - speedMin);
      sandbox.particles.push({
        x: x + (Math.random() - 0.5) * spread,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - upwardBias,
        life: 1,
        decay: 1.6 + Math.random() * 1.2,
        size: 1.5 + Math.random() * 2.5,
        color: colorRgb
      });
    }
  }

  function sandboxTryJump() {
    const p = sandbox.player;
    if (!p.onGround) return false;
    p.vy = -sandbox.jump;
    p.onGround = false;
    p.squash = -0.35;
    spawnSandboxParticles(p.x, p.y, 10, p.size, "148, 163, 184", 30, 110, 40);
    return true;
  }

  function sandboxTryFire() {
    if (sandbox.cooldownTimer > 0) return false;
    const p = sandbox.player;
    sandbox.cooldownTimer = sandbox.cooldown;
    sandbox.projectiles.push({
      x: p.x + p.facing * (p.size / 2 + 4),
      y: p.y - p.size / 2,
      vx: p.facing * (420 + sandbox.speed),
      life: 1.4
    });
    spawnSandboxParticles(p.x + p.facing * (p.size / 2 + 4), p.y - p.size / 2, 6, 4, "249, 115, 22", 40, 140);
    return true;
  }

  function registerSandboxInput() {
    sandbox.lastInputAt = performance.now();
  }

  function resetSandbox() {
    if (sandboxSpeedSlider) sandboxSpeedSlider.value = String(SANDBOX_DEFAULTS.speed);
    if (sandboxJumpSlider) sandboxJumpSlider.value = String(SANDBOX_DEFAULTS.jump);
    if (sandboxFireRateSlider) sandboxFireRateSlider.value = String(SANDBOX_DEFAULTS.fireRate);
    syncSandboxReadouts();

    const p = sandbox.player;
    p.x = 80;
    p.vx = 0;
    p.vy = 0;
    p.facing = 1;
    p.onGround = true;
    p.y = sandbox.height ? sandbox.height - SANDBOX_GROUND_OFFSET : 0;
    sandbox.projectiles = [];
    sandbox.particles = [];
    sandbox.cooldownTimer = 0;
    sandbox.keys.clear();
    sandbox.lastInputAt = 0;
  }

  [sandboxSpeedSlider, sandboxJumpSlider, sandboxFireRateSlider].forEach(slider => {
    if (slider) slider.addEventListener("input", syncSandboxReadouts);
  });

  if (sandboxTriggerBtn) {
    sandboxTriggerBtn.addEventListener("click", () => {
      registerSandboxInput();
      sandbox.pendingJump = true;
      sandbox.pendingFire = true;
      if (sandboxCanvas) sandboxCanvas.focus({ preventScroll: true });
    });
  }

  if (sandboxResetBtn) {
    sandboxResetBtn.addEventListener("click", resetSandbox);
  }

  const SANDBOX_KEY_MAP = {
    arrowleft: "left",
    a: "left",
    arrowright: "right",
    d: "right",
    arrowup: "jump",
    w: "jump",
    " ": "jump",
    f: "fire",
    j: "fire",
    enter: "fire"
  };

  if (sandboxCanvas) {
    sandboxCanvas.addEventListener("keydown", event => {
      const action = SANDBOX_KEY_MAP[event.key.toLowerCase()];
      if (!action) return;
      event.preventDefault();
      event.stopPropagation();
      registerSandboxInput();

      if (action === "jump" && !event.repeat) sandbox.pendingJump = true;
      if (action === "fire") sandbox.keys.add("fire");
      if (action === "left" || action === "right") sandbox.keys.add(action);
    });

    sandboxCanvas.addEventListener("keyup", event => {
      const action = SANDBOX_KEY_MAP[event.key.toLowerCase()];
      if (!action) return;
      event.preventDefault();
      sandbox.keys.delete(action);
    });

    sandboxCanvas.addEventListener("blur", () => sandbox.keys.clear());
    sandboxCanvas.addEventListener("pointerdown", () => {
      registerSandboxInput();
      sandboxCanvas.focus({ preventScroll: true });
    });
  }

  function updateSandboxStatusPill(isDemo) {
    if (!sandboxStatusPill) return;
    const key = `${isDemo ? "demo" : "player"}-${currentLang}`;
    if (key === sandbox.pillKey) return;
    sandbox.pillKey = key;
    const dict = translations[currentLang] || translations.en;
    sandboxStatusPill.textContent = isDemo ? dict["sandbox.statusDemo"] : dict["sandbox.statusPlayer"];
    sandboxStatusPill.classList.toggle("is-player", !isDemo);
  }

  function stepSandboxSimulation(dt) {
    const p = sandbox.player;
    const W = sandbox.width;
    const groundY = sandbox.height - SANDBOX_GROUND_OFFSET;
    const isDemo = isSandboxDemoMode();

    // Resolve horizontal intent (player input or auto-demo AI)
    let moveDir = 0;
    if (isDemo) {
      moveDir = sandbox.demo.dir;
      if (p.x > W - 60) sandbox.demo.dir = -1;
      if (p.x < 60) sandbox.demo.dir = 1;

      sandbox.demo.jumpTimer -= dt;
      if (sandbox.demo.jumpTimer <= 0) {
        sandbox.pendingJump = true;
        sandbox.demo.jumpTimer = 1.4 + Math.random() * 1.6;
      }
      sandbox.demo.fireTimer -= dt;
      if (sandbox.demo.fireTimer <= 0) {
        sandbox.pendingFire = true;
        sandbox.demo.fireTimer = Math.max(sandbox.cooldown, 0.35) + Math.random() * 0.4;
      }
    } else {
      if (sandbox.keys.has("left")) moveDir -= 1;
      if (sandbox.keys.has("right")) moveDir += 1;
      if (sandbox.keys.has("fire")) sandbox.pendingFire = true;
    }

    // Snappy acceleration toward target velocity (tighter on ground, floatier in air)
    const targetVx = moveDir * sandbox.speed;
    const accel = p.onGround ? 14 : 6;
    p.vx += (targetVx - p.vx) * Math.min(1, accel * dt);
    if (moveDir !== 0) p.facing = moveDir;

    if (sandbox.pendingJump) {
      sandboxTryJump();
      sandbox.pendingJump = false;
    }
    if (sandbox.pendingFire) {
      sandboxTryFire();
      sandbox.pendingFire = false;
    }

    // Integrate physics
    const wasOnGround = p.onGround;
    p.vy += SANDBOX_GRAVITY * dt;
    p.x += p.vx * dt;
    p.y += p.vy * dt;

    if (p.y >= groundY) {
      p.y = groundY;
      if (!wasOnGround && p.vy > 200) {
        p.squash = Math.min(0.45, p.vy / 1600);
        spawnSandboxParticles(p.x, groundY, 12, p.size, "148, 163, 184", 40, 150, 60);
      }
      p.vy = 0;
      p.onGround = true;
    } else {
      p.onGround = false;
    }

    const halfSize = p.size / 2;
    if (p.x < halfSize + 4) {
      p.x = halfSize + 4;
      p.vx = 0;
    } else if (p.x > W - halfSize - 4) {
      p.x = W - halfSize - 4;
      p.vx = 0;
    }

    // Movement trail while running fast on ground
    if (p.onGround && Math.abs(p.vx) > 120 && Math.random() < dt * 30) {
      spawnSandboxParticles(p.x - p.facing * halfSize, groundY, 1, 4, "99, 102, 241", 10, 40, 20);
    }

    p.squash += (0 - p.squash) * Math.min(1, 10 * dt);
    sandbox.cooldownTimer = Math.max(0, sandbox.cooldownTimer - dt);

    // Projectiles with particle trails
    for (let i = sandbox.projectiles.length - 1; i >= 0; i--) {
      const proj = sandbox.projectiles[i];
      proj.x += proj.vx * dt;
      proj.life -= dt;
      if (Math.random() < dt * 60) {
        sandbox.particles.push({
          x: proj.x,
          y: proj.y + (Math.random() - 0.5) * 3,
          vx: -proj.vx * 0.05,
          vy: (Math.random() - 0.5) * 20,
          life: 0.8,
          decay: 3,
          size: 1.5 + Math.random() * 1.5,
          color: "249, 115, 22"
        });
      }
      const hitWall = proj.x < 2 || proj.x > W - 2;
      if (hitWall) {
        spawnSandboxParticles(Math.min(Math.max(proj.x, 2), W - 2), proj.y, 10, 2, "251, 146, 60", 50, 180);
      }
      if (hitWall || proj.life <= 0) {
        sandbox.projectiles.splice(i, 1);
      }
    }

    // Particles
    for (let i = sandbox.particles.length - 1; i >= 0; i--) {
      const pt = sandbox.particles[i];
      pt.vy += 380 * dt;
      pt.x += pt.vx * dt;
      pt.y = Math.min(pt.y + pt.vy * dt, groundY);
      pt.life -= pt.decay * dt;
      if (pt.life <= 0) sandbox.particles.splice(i, 1);
    }
    if (sandbox.particles.length > 400) {
      sandbox.particles.splice(0, sandbox.particles.length - 400);
    }

    updateSandboxStatusPill(isDemo);

    if (sandboxCooldownBar) {
      const readyPct = sandbox.cooldown > 0 ? (1 - sandbox.cooldownTimer / sandbox.cooldown) * 100 : 100;
      sandboxCooldownBar.style.width = `${readyPct}%`;
    }
  }

  function drawSandbox(ctx) {
    const W = sandbox.width;
    const H = sandbox.height;
    const groundY = H - SANDBOX_GROUND_OFFSET;
    const isLight = currentTheme === "light";
    const p = sandbox.player;

    ctx.setTransform(sandbox.dpr, 0, 0, sandbox.dpr, 0, 0);

    // Background & grid
    ctx.fillStyle = isLight ? "#1C1917" : "#090E1A";
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = isLight ? "rgba(250, 249, 246, 0.06)" : "rgba(148, 163, 184, 0.07)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let gx = 0; gx <= W; gx += 28) {
      ctx.moveTo(gx + 0.5, 0);
      ctx.lineTo(gx + 0.5, groundY);
    }
    for (let gy = 0; gy <= groundY; gy += 28) {
      ctx.moveTo(0, gy + 0.5);
      ctx.lineTo(W, gy + 0.5);
    }
    ctx.stroke();

    // Jump apex guide line
    const apexY = groundY - (sandbox.jump * sandbox.jump) / (2 * SANDBOX_GRAVITY) - p.size;
    if (apexY > 4) {
      ctx.setLineDash([4, 6]);
      ctx.strokeStyle = "rgba(99, 102, 241, 0.45)";
      ctx.beginPath();
      ctx.moveTo(0, apexY + 0.5);
      ctx.lineTo(W, apexY + 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Ground
    ctx.fillStyle = isLight ? "rgba(250, 249, 246, 0.08)" : "rgba(30, 41, 59, 0.85)";
    ctx.fillRect(0, groundY, W, H - groundY);
    ctx.strokeStyle = "#EA580C";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY + 1);
    ctx.lineTo(W, groundY + 1);
    ctx.stroke();

    // Particles
    sandbox.particles.forEach(pt => {
      ctx.fillStyle = `rgba(${pt.color}, ${Math.max(0, pt.life)})`;
      ctx.fillRect(pt.x - pt.size / 2, pt.y - pt.size / 2, pt.size, pt.size);
    });

    // Projectiles with glow
    sandbox.projectiles.forEach(proj => {
      ctx.save();
      ctx.shadowColor = "rgba(249, 115, 22, 0.9)";
      ctx.shadowBlur = 12;
      ctx.fillStyle = "#FDBA74";
      ctx.fillRect(proj.x - 7, proj.y - 2, 14, 4);
      ctx.restore();
    });

    // Player entity with squash & stretch
    const stretchY = 1 + p.squash * -1;
    const stretchX = 1 + p.squash;
    const drawW = p.size * stretchX;
    const drawH = p.size * stretchY;

    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.shadowColor = "rgba(234, 88, 12, 0.55)";
    ctx.shadowBlur = 14;
    ctx.fillStyle = "#EA580C";
    ctx.beginPath();
    if (ctx.roundRect) {
      ctx.roundRect(-drawW / 2, -drawH, drawW, drawH, 5);
    } else {
      ctx.rect(-drawW / 2, -drawH, drawW, drawH);
    }
    ctx.fill();
    ctx.shadowBlur = 0;

    // Eye showing facing direction
    ctx.fillStyle = "#FAF9F6";
    ctx.fillRect(p.facing * drawW * 0.12 - 2.5, -drawH * 0.72, 5, 5);
    ctx.restore();

    // Cooldown ring above the entity
    if (sandbox.cooldownTimer > 0) {
      const progress = 1 - sandbox.cooldownTimer / sandbox.cooldown;
      ctx.strokeStyle = "rgba(99, 102, 241, 0.9)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y - p.size - 12, 6, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * progress);
      ctx.stroke();
    }
  }

  function animateSandboxCanvas(now) {
    const dt = Math.min(0.033, Math.max(0.001, (now - sandbox.lastTimestamp) / 1000));
    sandbox.lastTimestamp = now;

    if (sandboxCanvas && activeProjectId !== null && resizeSandboxCanvas()) {
      const ctx = sandboxCanvas.getContext("2d");
      if (ctx) {
        stepSandboxSimulation(dt);
        drawSandbox(ctx);
      }
    }

    requestAnimationFrame(animateSandboxCanvas);
  }

  syncSandboxReadouts();
  requestAnimationFrame(animateSandboxCanvas);

  // --------------------------------------------------------------------------
  // Dedicated Immersive Project Detail View Logic
  // --------------------------------------------------------------------------
  function populateDetailView(project) {
    if (!project || !projectDetailView) return;

    const localized = getLocalizedProject(project);
    const metrics = localized.metrics || {};

    if (detailEngineBadge) detailEngineBadge.textContent = project.engine;
    if (detailRoleBadge) detailRoleBadge.textContent = localized.role;
    if (detailTitle) detailTitle.textContent = localized.title;
    if (detailOverview) detailOverview.textContent = localized.overview || localized.description;

    // Metrics Strip
    if (metricRoleVal) metricRoleVal.textContent = localized.role;
    if (metricEngineVal) metricEngineVal.textContent = project.engine;
    if (metricTeamVal) metricTeamVal.textContent = metrics.team || "-";
    if (metricTimelineVal) metricTimelineVal.textContent = metrics.timeline || "-";

    // Media Banner & Gallery Thumbnails
    if (detailBannerEngine) detailBannerEngine.textContent = project.engine;
    if (detailBannerRole) detailBannerRole.textContent = localized.role;
    updateBannerMediaSlot(project, activeGalleryIndex);
    renderDetailGallery(project);

    // 1. Deep Architecture
    if (detailArchitectureText) {
      detailArchitectureText.textContent = localized.architecture || "";
    }
    if (detailArchitecturePoints) {
      const archPoints = Array.isArray(localized.architecturePoints) ? localized.architecturePoints : [];
      detailArchitecturePoints.innerHTML = archPoints.map(item => `<li>${item}</li>`).join("");
    }

    // 2. Interactive Core Gameplay Loop Steps & Inspector
    renderGameplayLoopSteps(project);

    // 3. GDD & Design Breakdown
    if (detailGddSummary) {
      detailGddSummary.textContent = localized.gddSummary || "";
    }
    if (detailGddPillars) {
      const pillars = Array.isArray(localized.gddPillars) ? localized.gddPillars : [];
      detailGddPillars.innerHTML = pillars.map(item => `<li>${item}</li>`).join("");
    }

    // 4. Tech Stack & Key Mechanics
    if (detailTechTags) {
      detailTechTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
    }
    if (detailFeaturesList) {
      const features = Array.isArray(localized.features) ? localized.features : [];
      detailFeaturesList.innerHTML = features.map(item => `<li>${item}</li>`).join("");
    }

    // Footer Resource Links (Demo, GDD PDF, GitHub)
    if (project.links) {
      if (detailDemoBtn) detailDemoBtn.href = project.links.demo || "#";
      if (detailDocBtn) detailDocBtn.href = project.links.doc || "#";
      if (detailGithubBtn) detailGithubBtn.href = project.links.github || "https://github.com/";
    }
  }

  function getProjectIdFromHash(hashString = window.location.hash) {
    const match = /^#project-(\d+)$/.exec(hashString);
    return match ? Number(match[1]) : null;
  }

  function openProjectDetailView(projectId, pushHistory = true) {
    const project = gameProjects.find(item => item.id === Number(projectId));
    if (!project || !projectDetailView || !portfolioHomeView) return;

    activeProjectId = project.id;
    activeGalleryIndex = 0;
    activeLoopStepIndex = 0;
    populateDetailView(project);

    portfolioHomeView.classList.remove("view-active");
    portfolioHomeView.setAttribute("aria-hidden", "true");

    projectDetailView.classList.add("view-active");
    projectDetailView.setAttribute("aria-hidden", "false");

    if (pushHistory) {
      const targetHash = (project.links && project.links.details) || `#project-${project.id}`;
      if (window.location.hash !== targetHash) {
        history.pushState({ view: "project", projectId: project.id }, "", targetHash);
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closeProjectDetailView(scrollToProjects = true, pushHistory = true) {
    if (!projectDetailView || !portfolioHomeView) return;

    stopGame1MiniGame();
    closeLightbox();

    projectDetailView.classList.remove("view-active");
    projectDetailView.setAttribute("aria-hidden", "true");

    portfolioHomeView.classList.add("view-active");
    portfolioHomeView.setAttribute("aria-hidden", "false");

    activeProjectId = null;

    if (pushHistory && window.location.hash.startsWith("#project-")) {
      history.pushState({ view: "home" }, "", window.location.pathname + window.location.search);
    }

    if (scrollToProjects) {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }

  function switchAdjacentProject(offset) {
    if (activeProjectId === null || gameProjects.length === 0) return;
    const currentIndex = gameProjects.findIndex(item => item.id === activeProjectId);
    if (currentIndex === -1) return;

    const nextIndex = ((currentIndex + offset) % gameProjects.length + gameProjects.length) % gameProjects.length;
    const targetProject = gameProjects[nextIndex];
    if (targetProject) {
      openProjectDetailView(targetProject.id, true);
    }
  }

  // Top Back Button, Play Demo Button & Bottom Previous / Next Game Buttons
  if (detailDemoBtn) {
    detailDemoBtn.addEventListener("click", event => {
      if (activeProjectId === 1) {
        event.preventDefault();
        const project = gameProjects.find(item => item.id === 1);
        if (project) {
          updateBannerMediaSlot(project, 0);
        }
        if (detailMediaBanner) {
          detailMediaBanner.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        if (typeof game1StartFn === "function") {
          game1StartFn();
        }
      }
    });
  }
  if (backToProjectsBtn) {
    backToProjectsBtn.addEventListener("click", () => {
      closeProjectDetailView(true, true);
    });
  }
  if (prevProjectBtn) {
    prevProjectBtn.addEventListener("click", () => {
      switchAdjacentProject(-1);
    });
  }
  if (nextProjectBtn) {
    nextProjectBtn.addEventListener("click", () => {
      switchAdjacentProject(1);
    });
  }

  // Browser Native Back / Forward Button Support (History API)
  window.addEventListener("popstate", event => {
    const stateProjectId =
      (event.state && event.state.projectId) || getProjectIdFromHash(window.location.hash);

    if (stateProjectId) {
      openProjectDetailView(stateProjectId, false);
    } else if (activeProjectId !== null) {
      closeProjectDetailView(true, false);
    }
  });

  // --------------------------------------------------------------------------
  // Dynamic Project Cards Rendering, Category Filtering & Real-Time Search
  // --------------------------------------------------------------------------
  function renderProjects(filterType = currentFilter, searchQuery = currentSearchQuery) {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = "";

    const normalizedQuery = (searchQuery || "").trim().toLowerCase();

    const filteredProjects = gameProjects.filter(project => {
      const matchesCategory = filterType === "all" || project.category === filterType;
      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const localized = getLocalizedProject(project);
      const enTitle = project.i18n && project.i18n.en ? project.i18n.en.title : "";
      const trTitle = project.i18n && project.i18n.tr ? project.i18n.tr.title : "";

      const haystack = [
        localized.title,
        enTitle,
        trTitle,
        project.engine,
        project.category,
        localized.role,
        localized.description,
        ...(project.tags || [])
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });

    const dict = translations[currentLang] || translations.en;

    if (filteredProjects.length === 0) {
      const emptyState = document.createElement("div");
      emptyState.className = "projects-empty-state";
      emptyState.textContent = dict["projects.noResults"];
      projectsGrid.appendChild(emptyState);
      return;
    }

    const viewDetailsText = dict["projects.viewDetails"];
    const sourceCodeText = dict["projects.sourceCode"];

    filteredProjects.forEach((project, index) => {
      const localized = getLocalizedProject(project);
      const tagsHtml = project.tags.map(tag => `<span>${tag}</span>`).join("");
      const mediaHtml = buildMediaContent(project, localized);

      const card = document.createElement("article");
      card.className = "project-card";
      card.style.animationDelay = `${index * 60}ms`;
      card.innerHTML = `
        <div class="project-media">
          <span class="engine-badge">${project.engine}</span>
          <span class="role-badge">${localized.role}</span>
          ${mediaHtml}
        </div>
        <div class="project-body">
          <h3>${localized.title}</h3>
          <p>${localized.description}</p>
          <div class="tag-list">${tagsHtml}</div>
          <div class="project-links">
            <a href="${project.links.details}" class="details-trigger" data-project-id="${project.id}">${viewDetailsText}</a>
            <a href="${project.links.github}" target="_blank" rel="noopener">${sourceCodeText}</a>
          </div>
        </div>
      `;

      // Hover-to-play video preview support when a video source is present
      const videoPreview = card.querySelector("video.media-preview");
      if (videoPreview) {
        card.addEventListener("mouseenter", () => {
          videoPreview.play().catch(() => {});
        });
        card.addEventListener("mouseleave", () => {
          videoPreview.pause();
          videoPreview.currentTime = 0;
        });
      }

      // Attach Dedicated Detail View trigger listener (whole card + stretched link)
      const detailsLink = card.querySelector(".details-trigger");
      const githubLink = card.querySelector(".project-links a:not(.details-trigger)");

      if (githubLink) {
        githubLink.addEventListener("click", event => {
          event.stopPropagation();
        });
      }

      if (detailsLink) {
        detailsLink.addEventListener("click", event => {
          event.preventDefault();
          event.stopPropagation();
          openProjectDetailView(project.id, true);
        });
      }

      card.addEventListener("click", event => {
        if (event.target.closest("a:not(.details-trigger)")) return;
        openProjectDetailView(project.id, true);
      });

      projectsGrid.appendChild(card);
    });
  }

  // --------------------------------------------------------------------------
  // Theme Switcher (Dark Mode / Light Mode with localStorage Persistence)
  // --------------------------------------------------------------------------
  function updateThemeButtonLabel() {
    if (!themeLabel) return;
    const dict = translations[currentLang] || translations.en;
    themeLabel.textContent = currentTheme === "dark" ? dict["nav.themeDark"] : dict["nav.themeLight"];
  }

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    localStorage.setItem("site_theme", currentTheme);

    document.documentElement.classList.remove("dark", "light");
    document.body.classList.remove("dark", "light");
    document.documentElement.classList.add(currentTheme);
    document.body.classList.add(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
    }

    updateThemeButtonLabel();
    updateSandboxStatusPill(isSandboxDemoMode());
  }

  // --------------------------------------------------------------------------
  // Bilingual i18n Engine & Language Switcher
  // --------------------------------------------------------------------------
  function applyLanguage(lang) {
    currentLang = translations[lang] ? lang : "en";
    localStorage.setItem("site_lang", currentLang);
    document.documentElement.lang = currentLang;

    // Update Navbar Language Indicator
    if (langLabel && langSubLabel) {
      if (currentLang === "en") {
        langLabel.textContent = "EN";
        langSubLabel.textContent = "TR";
      } else {
        langLabel.textContent = "TR";
        langSubLabel.textContent = "EN";
      }
    }

    updateThemeButtonLabel();
    updateSandboxStatusPill(isSandboxDemoMode());

    // Update all static UI elements with data-i18n attribute
    const i18nElements = document.querySelectorAll("[data-i18n]");
    i18nElements.forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (key && translations[currentLang] && translations[currentLang][key]) {
        el.textContent = translations[currentLang][key];
      }
    });

    // Update all input placeholders with data-i18n-placeholder attribute
    const i18nPlaceholders = document.querySelectorAll("[data-i18n-placeholder]");
    i18nPlaceholders.forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key && translations[currentLang] && translations[currentLang][key]) {
        el.setAttribute("placeholder", translations[currentLang][key]);
      }
    });

    // Re-render project cards in the active language ("Game 1" <-> "Oyun 1")
    renderProjects(currentFilter, currentSearchQuery);

    // Sync active detail view & lightbox if user switches language while viewing a project
    if (activeProjectId !== null) {
      const activeProject = gameProjects.find(item => item.id === activeProjectId);
      if (activeProject) {
        populateDetailView(activeProject);
        if (mediaLightbox && mediaLightbox.classList.contains("active")) {
          renderLightboxSlide();
        }
      }
    }
  }

  // Theme Toggle Click Listener
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
    });
  }

  // Language Toggle Click Listener
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = currentLang === "en" ? "tr" : "en";
      applyLanguage(nextLang);
    });
  }

  // Filter Buttons Click Listener
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        currentFilter = button.getAttribute("data-filter") || "all";
        renderProjects(currentFilter, currentSearchQuery);
      });
    });
  }

  // Real-Time Search Input Listener
  if (projectSearchInput) {
    projectSearchInput.addEventListener("input", event => {
      currentSearchQuery = event.target.value || "";
      renderProjects(currentFilter, currentSearchQuery);
    });
  }

  // --------------------------------------------------------------------------
  // Interactive Developer Debug Console (Easter Egg & Quick Navigation)
  // --------------------------------------------------------------------------
  function appendConsoleLine(text, type = "system") {
    if (!consoleOutput) return;
    const line = document.createElement("div");
    line.className = `console-line console-${type}`;
    line.textContent = text;
    consoleOutput.appendChild(line);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
  }

  function openDebugConsole() {
    if (!debugConsoleModal) return;
    debugConsoleModal.classList.add("active");
    debugConsoleModal.setAttribute("aria-hidden", "false");
    if (consoleOutput && consoleOutput.children.length === 0) {
      const dict = translations[currentLang] || translations.en;
      appendConsoleLine(dict["console.welcome"], "info");
    }
    if (consoleCommandInput) {
      setTimeout(() => consoleCommandInput.focus(), 40);
    }
  }

  function closeDebugConsole() {
    if (!debugConsoleModal) return;
    debugConsoleModal.classList.remove("active");
    debugConsoleModal.setAttribute("aria-hidden", "true");
  }

  function toggleDebugConsole() {
    if (!debugConsoleModal) return;
    if (debugConsoleModal.classList.contains("active")) {
      closeDebugConsole();
    } else {
      openDebugConsole();
    }
  }

  function executeConsoleCommand(rawCommand) {
    const cmd = (rawCommand || "").trim();
    if (!cmd) return;

    appendConsoleLine(`>_ ${cmd}`, "cmd");
    const lower = cmd.toLowerCase();
    const dict = translations[currentLang] || translations.en;

    if (lower === "help") {
      appendConsoleLine(dict["console.helpText"], "info");
      return;
    }

    if (lower === "clear") {
      if (consoleOutput) consoleOutput.innerHTML = "";
      return;
    }

    if (lower === "list") {
      gameProjects.forEach(proj => {
        const loc = getLocalizedProject(proj);
        appendConsoleLine(`[#${proj.id}] ${loc.title} — ${proj.engine} (${loc.role})`, "success");
      });
      return;
    }

    if (lower === "home") {
      closeProjectDetailView(true, true);
      appendConsoleLine(dict["console.returnedHome"], "success");
      return;
    }

    if (lower === "theme") {
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      appendConsoleLine(`${dict["console.themeSwitched"]} ${nextTheme.toUpperCase()}`, "success");
      return;
    }

    if (lower === "lang") {
      const nextLang = currentLang === "en" ? "tr" : "en";
      applyLanguage(nextLang);
      const updatedDict = translations[currentLang] || translations.en;
      appendConsoleLine(`${updatedDict["console.langSwitched"]} ${currentLang.toUpperCase()}`, "success");
      return;
    }

    const openMatch = /^open\s+(\d+)$/.exec(lower);
    if (openMatch) {
      const targetId = Number(openMatch[1]);
      const targetProject = gameProjects.find(item => item.id === targetId);
      if (targetProject) {
        const loc = getLocalizedProject(targetProject);
        openProjectDetailView(targetProject.id, true);
        appendConsoleLine(`${dict["console.openedProject"]} ${loc.title}`, "success");
        setTimeout(closeDebugConsole, 320);
        return;
      }
    }

    appendConsoleLine(dict["console.unknownCmd"], "warn");
  }

  if (debugConsoleToggle) {
    debugConsoleToggle.addEventListener("click", toggleDebugConsole);
  }
  if (consoleCloseBtn) {
    consoleCloseBtn.addEventListener("click", closeDebugConsole);
  }
  if (consoleBackdrop) {
    consoleBackdrop.addEventListener("click", closeDebugConsole);
  }
  if (consoleForm) {
    consoleForm.addEventListener("submit", event => {
      event.preventDefault();
      if (!consoleCommandInput) return;
      executeConsoleCommand(consoleCommandInput.value);
      consoleCommandInput.value = "";
    });
  }
  if (consolePresetChips.length > 0) {
    consolePresetChips.forEach(chip => {
      chip.addEventListener("click", () => {
        const cmd = chip.getAttribute("data-cmd") || "";
        executeConsoleCommand(cmd);
      });
    });
  }

  // Global Keyboard Shortcuts (Slash / or Tilde ~ for Console, Escape, Lightbox Arrows)
  document.addEventListener("keydown", event => {
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : "";
    const isTypingInInput = activeTag === "input" || activeTag === "textarea" || activeTag === "select";

    if ((event.key === "/" || event.key === "~" || event.key === "`") && !isTypingInInput) {
      event.preventDefault();
      toggleDebugConsole();
      return;
    }

    if (debugConsoleModal && debugConsoleModal.classList.contains("active")) {
      if (event.key === "Escape") {
        closeDebugConsole();
      }
      return;
    }

    if (mediaLightbox && mediaLightbox.classList.contains("active")) {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        stepLightboxSlide(-1);
      } else if (event.key === "ArrowRight") {
        stepLightboxSlide(1);
      }
      return;
    }

    if (event.key === "Escape" && activeProjectId !== null) {
      closeProjectDetailView(true, true);
    }
  });

  // --------------------------------------------------------------------------
  // Copy Email to Clipboard & Toast Notification
  // --------------------------------------------------------------------------
  function showToastMessage() {
    if (!toastNotification) return;
    const dict = translations[currentLang] || translations.en;
    if (toastMessage) {
      toastMessage.textContent = dict["footer.emailCopied"];
    }
    toastNotification.classList.add("show");
    toastNotification.setAttribute("aria-hidden", "false");

    if (toastTimeoutId) {
      clearTimeout(toastTimeoutId);
    }
    toastTimeoutId = setTimeout(() => {
      toastNotification.classList.remove("show");
      toastNotification.setAttribute("aria-hidden", "true");
    }, 2600);
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const emailToCopy = copyEmailBtn.getAttribute("data-email") || "example@mail.com";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(emailToCopy).then(showToastMessage).catch(() => {
          showToastMessage();
        });
      } else {
        const tempInput = document.createElement("textarea");
        tempInput.value = emailToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        try {
          document.execCommand("copy");
        } catch (err) {
          // Ignore fallback errors
        }
        document.body.removeChild(tempInput);
        showToastMessage();
      }
    });
  }

  // --------------------------------------------------------------------------
  // Floating Scroll-to-Top Button
  // --------------------------------------------------------------------------
  if (scrollTopBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 360) {
        scrollTopBtn.classList.add("visible");
      } else {
        scrollTopBtn.classList.remove("visible");
      }
    });

    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Initialize Portfolio Theme, Language & Sync Initial URL State
  applyTheme(currentTheme);
  applyLanguage(currentLang);

  const initialProjectId = getProjectIdFromHash(window.location.hash);
  if (initialProjectId) {
    history.replaceState({ view: "project", projectId: initialProjectId }, "", window.location.hash);
    openProjectDetailView(initialProjectId, false);
  } else {
    history.replaceState({ view: "home" }, "", window.location.pathname + window.location.search + window.location.hash);
  }
});
