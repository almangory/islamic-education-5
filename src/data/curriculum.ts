import { Unit, Lesson } from '../types';

export const badgesList = [
  { id: 'explorer', title: 'مكتشف النور', desc: 'أكملت قراءة أول كتاب تفاعلي بنجاح في منهج الصف الخامس!', icon: '✨', starsRequired: 1, color: 'from-amber-400 to-yellow-600' },
  { id: 'quizmaster', title: 'حارس المعرفة', desc: 'حصلت على درجة كاملة (100%) في أحد الاختبارات!', icon: '🏆', starsRequired: 3, color: 'from-emerald-400 to-teal-600' },
  { id: 'hero', title: 'بطل العزم', desc: 'جمعت أكثر من 30 نجمة مضيئة من طاعات الدرس!', icon: '⭐', starsRequired: 30, color: 'from-blue-400 to-indigo-600' },
  { id: 'scholar', title: 'الفقيه الصغير', desc: 'أجبت على اختبارات كامل مقرر الصف الخامس بنجاح!', icon: '🎓', starsRequired: 15, color: 'from-purple-400 to-pink-600' }
];

export const unitsData: Unit[] = [
  {
    id: 1,
    title: "الوحدة الأولى: القرآن الكريم وعلومه تلاوة وحفظاً",
    shortTitle: "القرآن الكريم 📖",
    desc: "دراسة وتلاوة سور القرآن المقررة للصف الخامس: الانفطار، الإنسان، القيامة، المدثر، المزمل، وسور التلاوة الملك والقلم.",
    icon: "BookOpen",
    color: "emerald",
    gradient: "from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950",
    lessons: ["surat-al-infitar", "surat-al-insan", "surat-al-qiyamah", "surat-al-mudathir", "surat-al-muzammil", "surat-al-mulk", "surat-al-qalam"]
  },
  {
    id: 2,
    title: "الوحدة الثانية: من الحديث النبوي الشريف",
    shortTitle: "الحديث الشريف 💬",
    desc: "قبسات من توجيهات نبينا صلى الله عليه وسلم حول فضل الصلاة، عهد الأمانة، حب البلاد، السماحة، كتمان السر، دعاء السفر، وصلة الرحم.",
    icon: "Heart",
    color: "pink",
    gradient: "from-pink-50 to-rose-50 dark:from-pink-950 dark:to-rose-950",
    lessons: ["hadith-salat", "hadith-amanah", "hadith-places", "hadith-trade", "hadith-secret", "hadith-travel", "hadith-kinship"]
  },
  {
    id: 3,
    title: "الوحدة الثالثة: من أركان الإيمان الإسلامي",
    shortTitle: "العقيدة والتوحيد 🌟",
    desc: "تعزيز عقيدة التوحيد بالإيمان باليوم الآخر، علامات الساعة الكبرى، فعل الخيرات الحاسم، وأسرار أسماء الله الحسنى.",
    icon: "Sparkles",
    color: "amber",
    gradient: "from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950",
    lessons: ["aqeedah-day-after", "aqeedah-hour-signs", "aqeedah-good-deeds", "aqeedah-beautiful-names-1", "aqeedah-beautiful-names-2", "aqeedah-beautiful-names-3"]
  },
  {
    id: 4,
    title: "الوحدة الرابعة: ملعب الفقه ومحاسن العبادات",
    shortTitle: "الفقه والعبادات 🕌",
    desc: "أحكام صلاة الجماعة وفضيلتها، فوائد الصلاة البدنية والروحية، السنن الرواتب وصلاة الرغيبة، صلاة الشفع والوتر، قضاء الفوائت وسجود السهو.",
    icon: "Award",
    color: "purple",
    gradient: "from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950",
    lessons: ["fiqh-jamaah-prayer", "fiqh-prayer-benefits", "fiqh-sunan-rawatib", "fiqh-shaf-witr", "fiqh-qada-fawait", "fiqh-sujud-sahw"]
  },
  {
    id: 5,
    title: "الوحدة الخامسة: من مكارم الأخلاق والقصص العابرة",
    shortTitle: "مكارم الأخلاق 🤝",
    desc: "دروس بليغة من شيم الأبرار: مسؤولية الراعي الحاكم، العفو عند المقدرة، عاقبة المروءة، وبستان الأمانة وثابت بن إبراهيم.",
    icon: "CheckSquare",
    color: "indigo",
    gradient: "from-indigo-50 to-blue-50 dark:from-indigo-950 dark:to-blue-950",
    lessons: ["morals-raee-responsibility", "morals-forgiveness", "morals-knighthood", "morals-trustworthiness"]
  },
  {
    id: 6,
    title: "الوحدة السادسة: السيرة النبوية والشخصيات المضيئة",
    shortTitle: "السيرة والشخصيات 👥",
    desc: "أيام مباركة من تاريخنا: دعوة الطائف وديار عداس، سفير النور مصعب بن عمير، طالع الهجرة، والقدوات شجعان بلال وعمار وعثمان بن عفان.",
    icon: "Users",
    color: "blue",
    gradient: "from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950",
    lessons: ["seerah-offering-islam", "seerah-yathrib-delegation", "seerah-hijrah-early-waves", "seerah-companion-bilal", "seerah-companion-ammar", "seerah-companion-othman"]
  }
];

export const lessonsData: Lesson[] = [
  // ==================== UNIT 1: Quran Surahs ====================
  {
    id: "surat-al-infitar",
    title: "سورة الانفطار: أهوال القيامة وتسجيل الأعمال",
    shortDesc: "تأمل تغير معالم الكون وانفطار السماء يوم الحساب، وتوثيق الكرام الكاتبين لأقوالنا.",
    unitId: 1,
    type: "quran",
    icon: "MoonStar",
    colorName: "emerald",
    gradientClasses: "from-emerald-500 to-teal-600",
    slides: [
      {
        id: 1,
        title: "انفطار السماء وتبعثر النجوم",
        narrative: "تبدأ السورة الشريفة بوصف أهوال يوم القيامة، حيث تتفكك أجزاء السماء وتتساقط الكواكب من مداراتها، وتفجر المياه بالبحار وتخرج أجساد الأموات من القبور أحياء للحساب والتقويم العادل.",
        highlightVerse: "إِذَا ٱلسَّمَآءُ ٱنفَطَرَتْ * وَإِذَا ٱلْكَوَٰكِبُ ٱنتَثَرَتْ * وَإِذَا ٱلْبِحَارُ فُجِّرَتْ * وَإِذَا ٱلْقُبُورُ بُعْثِرَتْ",
        imageUrl: "space_stars_nebula",
        illustrationType: "space"
      }
    ],
    vocabulary: [
      { word: "ٱنفَطَرَتْ", meaning: "انشقت وتصدعت لهول يوم القيامة." },
      { word: "ٱنتَثَرَتْ", meaning: "تفرقت وتساقطت وذهب ضياؤها." }
    ],
    quiz: [
      { id: 1, question: "ما معنى انشقت السماء بحدث يوم القيامة؟", options: ["انفطرت", "انتثرت", "فجرت"], correctAnswer: 0 }
    ]
  },
  {
    id: "surat-al-insan",
    title: "سورة الإنسان: نشأة البشر وجزاء الأبرار",
    shortDesc: "تتراوح الآيات بين نشأة الإنسان من نطفة أمشاج ونعيم المتقين الأبرار في الفردوس.",
    unitId: 1,
    type: "quran",
    icon: "Compass",
    colorName: "emerald",
    gradientClasses: "from-emerald-600 to-teal-700",
    slides: [
      {
        id: 1,
        title: "من قطرة ماء للاستخلاف والتكليف",
        narrative: "تذكرنا الآية بنعمة الخلق من العدم، فقد خلق الله الإنسان من قطرة مائية ممتزجة (نطفة أمشاج) ليهديه ويبتليه ويقيس شكره وإيمانه بحسن صلاته وأخلاقه.",
        highlightVerse: "إِنَّا خَلَقْنَا ٱلْإِنسَٰنَ مِن نُّطْفَةٍ أَمْشَاجٍ نَّبْتَلِيهِ",
        imageUrl: "earth_ocean_waves",
        illustrationType: "water"
      }
    ],
    vocabulary: [
      { word: "أَمْشَاجٍ", meaning: "أخلاط ممتزجة من نطفة الرجل والمرأة." },
      { word: "نَّبْتَلِيهِ", meaning: "نختبره بالتكاليف الشرعية العظيمة." }
    ],
    quiz: [
      { id: 1, question: "مما خُلق الإنسان كإبداع إلهي؟", options: ["نطفة أمشاج ممتزجة", "الذهب", "النور فقط"], correctAnswer: 0 }
    ]
  },
  {
    id: "surat-al-qiyamah",
    title: "سورة القيامة: إثبات البعث ومصير الوجوه",
    shortDesc: "القسم العظيم بيوم الساعة والنفس اللوامة، وتفصيل لمعان وجوه المؤمنين عند لقاء ربهم.",
    unitId: 1,
    type: "quran",
    icon: "Activity",
    colorName: "emerald",
    gradientClasses: "from-teal-500 to-emerald-600",
    slides: [
      {
        id: 1,
        title: "القسم بيوم البعث والنفس التقية",
        narrative: "يقسم الله بالقيامة الحتمية وبالنفوس اللوامة المستغفرة دلالة على إهانة ودمار حجج منكري البعث، وتؤكد الآيات بلى قادرين على تسوية بنانه بدقة خارقة وبصمات فريدة.",
        highlightVerse: "لَآ أُقْسِمُ بِيَوْمِ ٱلْقِيَٰمَةِ * وَلَآ أُقْسِمُ بِٱلنَّفْسِ ٱللَّوَّامَةِ",
        imageUrl: "space_stars_nebula",
        illustrationType: "stars"
      }
    ],
    vocabulary: [
      { word: "ٱللَّوَّامَةِ", meaning: "التي تلوم لوم الندم صاحبها على الذنب والتقصير." },
      { word: "بَنَانَهُۥ", meaning: "أطراف أصابعه وبصماته الدقيقة." }
    ],
    quiz: [
      { id: 1, question: "ما هي البنان التي يسويها الخالق بدقة؟", options: ["عظام الصدر", "أطراف أصابعه وبصماته", "شعر البدائن"], correctAnswer: 1 }
    ]
  },
  {
    id: "surat-al-mudathir",
    title: "سورة المدثر: القيام بالإنذار والتعظيم",
    shortDesc: "موعظة القيام بالإنذار ونشر رسالة الإسلام بتعظيم البارئ وتطهير الثياب وصدق الدعوة.",
    unitId: 1,
    type: "quran",
    icon: "Flame",
    colorName: "emerald",
    gradientClasses: "from-emerald-700 to-teal-800",
    slides: [
      {
        id: 1,
        title: "يا أيها المستتر انهض دعوة بالهدى",
        narrative: "تخليداً لبدء نزول عهود الوحي، ينادي الله نبيه محمداً وهو ملتف بثيابه طالباً منه القيام لتبليغ الدين، تكبير ربه وتعظيمه، وتصفية بواطنه وظواهره من النجاسات (وثيابك فطهر).",
        highlightVerse: "يَٰٓأَيُّهَا ٱلْمُدَّثِّرُ * قُمْ فَأَنذِرْ * وَرَبَّكَ فَكَبِّرْ * وَثِيَابَكَ فَطَهِّرْ",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "ٱلْمُدَّثِّرُ", meaning: "المتغطي والمستتر بثيابه الشريفة." },
      { word: "وَرَبَّكَ فَكَبِّرْ", meaning: "خص ربك وحده بالتعظيم والتوحيد." }
    ],
    quiz: [
      { id: 1, question: "ما معنى اللقب الشريف المدثر؟", options: ["المتغطي بثيابه", "السائح بالنهار", "صاحب المال"], correctAnswer: 0 }
    ]
  },
  {
    id: "surat-al-muzammil",
    title: "سورة المزمل: قيام معظم الليل ترتيلاً",
    shortDesc: "توجيهات ربانية لقيام الليل وقراءة القرآن بتدبر، طاعة وتهيئة للقول الثقيل.",
    unitId: 1,
    type: "quran",
    icon: "Moon",
    colorName: "emerald",
    gradientClasses: "from-teal-600 to-emerald-700",
    slides: [
      {
        id: 1,
        title: "ورتل القرآن ترتيلاً هادئاً",
        narrative: "تدعو السورة للتهجد والصلاة بالليل لصفاء النفس وحفظ الضمير، والقيام بترتيل آيات التوحيد بتؤدة وتمهل لينفذ الوعي لتبعات العهد الإلهي ورشاده الشامخ.",
        highlightVerse: "يَٰٓأَيُّهَا ٱلْمُزَّمِّلُ * قُمِ ٱلَّيْلَ إِلَّا قَلِيلًا * أَوْ زِدْ عَلَيْهِ وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا",
        imageUrl: "stars_galaxy_cosmos",
        illustrationType: "stars"
      }
    ],
    vocabulary: [
      { word: "ٱلْمُزَّمِّلُ", meaning: "الملتف الملتحف بكسائه المبارك." },
      { word: "تَرْتِيلًا", meaning: "قراءته بتؤدة وطمأنينة وتدبر قلبي حاضر." }
    ],
    quiz: [
      { id: 1, question: "كيف يطالب العبد بترتيل القرآن؟", options: ["بسرعة عشوائية", "بتؤدة وطمأنينة وتدبر", "بصوت خافت بلا نطق"], correctAnswer: 1 }
    ]
  },
  {
    id: "surat-al-mulk",
    title: "سورة الملك: تبارك المتصرف بالملكوت",
    shortDesc: "سورة الملك الواقية تبين اختبار الوجود، إحياء الموت والعيش وحكمة الطيور الباسطة.",
    unitId: 1,
    type: "quran",
    icon: "Award",
    colorName: "emerald",
    gradientClasses: "from-emerald-500 to-cyan-600",
    slides: [
      {
        id: 1,
        title: "خلق الحياة والموت لاختيار الإخلاص",
        narrative: "تأمل ملكوت الله الواسع، وتفرده سبحانه بإيجاد الموت والحياة اختباراً للعبد أينا أحسن وأخلص وأتقى عملاً وسلوكاً للآخرة المعمرة للوجود.",
        highlightVerse: "تَبَٰرَكَ ٱلَّذِى بِيَدِهِ ٱلْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ * ٱلَّذِى خَلَقَ ٱلْمَوْتَ وَٱلْحَيَوٰةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
        imageUrl: "earth_sun_horizon",
        illustrationType: "balance"
      }
    ],
    vocabulary: [
      { word: "تَبَٰرَكَ", meaning: "تنزه وكثر خيره وبركته المطلقة." },
      { word: "لِيَبْلُوَكُمْ", meaning: "ليختبركم ويمتحنكم بالالتزام." }
    ],
    quiz: [
      { id: 1, question: "لماذا خلق الله الموت والحياة بالبلاد؟", options: ["لاختبار أخلص وأحسن العباد عملاً", "لتحصيل ثروات الذهب", "بلا غرض عقدي"], correctAnswer: 0 }
    ]
  },
  {
    id: "surat-al-qalam",
    title: "سورة القلم: إثبات النقاء والخلق العظيم",
    shortDesc: "تنزيه الحبيب عن افتراءات الجنون بقسم القلم، وتأكيد ووسام خلقه الباهق العظيم.",
    unitId: 1,
    type: "quran",
    icon: "PenTool",
    colorName: "emerald",
    gradientClasses: "from-teal-700 to-emerald-900",
    slides: [
      {
        id: 1,
        title: "ن والقلم وسطور العلوم المعمرة للعقل",
        narrative: "تقر السورة بالقسم بالقلم وسطور العلوم دحضاً لشبه كفار مكة، ويمجد الله آداب وشمائل نبيه محمد بوسام الخلود (وإنك لعلى خلق عظيم) كأكبر قدوة عبر الأزمان.",
        highlightVerse: "نْ ۚ وَٱلْقَلَمِ وَمَا يَسْطُرُونَ * مَآ أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ * وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
        imageUrl: "knowledge_book_rose",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "مَا يَسْطُرُونَ", meaning: "ما يكتبه الكُتاب والحفظة من المعارف والدين." },
      { word: "خُلُقٍ عَظِيمٍ", meaning: "شيم الكمال وآداب الصدق والصبر الرفيع." }
    ],
    quiz: [
      { id: 1, question: "بم أقسم الله تعالى بمفتتح سورة القلم؟", options: ["بالقلم وسطور العلم", "بالماشية والجمال", "بقصور مكة الذهب"], correctAnswer: 0 }
    ]
  },

  // ==================== UNIT 2: Prophetic Hadiths ====================
  {
    id: "hadith-salat",
    title: "حديث فضل الصلاة: عماد المحافظة والنجاة",
    shortDesc: "الحديث الموصي بصيانة الصلاة غدوة لتكون للعبد بكفيل نوره وبرهانه يوم الحساب.",
    unitId: 2,
    type: "hadith",
    icon: "Activity",
    colorName: "pink",
    gradientClasses: "from-pink-500 to-rose-600",
    slides: [
      {
        id: 1,
        title: "الصلاة نور ساطع وبرهان حارس",
        narrative: "يرشدنا نبي الهدى بأنه من صان وحافظ على الصلوات كانت له ضياءً ونوراً ساطعاً بقلبه وسلوكه، وشهادة صدق لصدقه بالآخرة، ودرجة الفوز بحوض الرحمة بغير نكال.",
        highlightVerse: "من حافظ عليها كانت له نوراً وبرهاناً ونجاة يوم القيام الصارم.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "بُرْهَاناً", meaning: "دليلاً ساطعاً وحجة بيِّنة لحسن إيمانه." },
      { word: "نَجَاةً", meaning: "سلامة وخلاصاً تاماً من غل ونكال يوم الحساب." }
    ],
    quiz: [
      { id: 1, question: "ما جزاء من حافظ على صلاته بحضور قلبه؟", options: ["تكون له نوراً وبرهاناً ونجاة", "الحوز المالي بالسوق", "الهروب بلا حساب"], correctAnswer: 0 }
    ]
  },
  {
    id: "hadith-amanah",
    title: "حديث عهد الأمانة: رأس الإيمان ورباط العقيدة",
    shortDesc: "تلاحم فريد يؤكد تلازم الأمانة بالإيمان الحقيقي ووجوب حفظ الودائع والعهود بالبلد.",
    unitId: 2,
    type: "hadith",
    icon: "Shield",
    colorName: "pink",
    gradientClasses: "from-rose-500 to-pink-600",
    slides: [
      {
        id: 1,
        title: "لا إيمان لمن لا أمانة له بالحق",
        narrative: "يبين نبينا أن خلة الأمانة ورأس صيانة العهود أساسية في العقيدة كقائد لسلام الفرد والمجتمع، فمن خان ودائعه ونقض أقواله تضعضع دينه وضعف إيمانه بالكلية.",
        highlightVerse: "لا إيمان لمن لا أمانة له، ولا دين لمن لا عهد له بالصدق الرفيع.",
        imageUrl: "handshake_trust_blue",
        illustrationType: "balance"
      }
    ],
    vocabulary: [
      { word: "لا أَمَانَةَ لَهُ", meaning: "من يخون الذمم والودائع بالمعاملات." },
      { word: "لا عَهْدَ لَهُ", meaning: "من ينقض عهوده ووعوده للمجتمع والرفقاء." }
    ],
    quiz: [
      { id: 1, question: "ما حكم من خان وديعته بالشرع؟", options: ["نقص إيمانه وفارقه كمال الأمانة", "حكمه حسن وفضل", "لا حساب عليه"], correctAnswer: 0 }
    ]
  },
  {
    id: "hadith-places",
    title: "حديث أحب البلاد إلى الله: عمار مساجد الوجود",
    shortDesc: "موازين تفضيلية تكشف جلال وعمار المساجد وهيبة بنائها، وتنبيه من غش الأسواق.",
    unitId: 2,
    type: "hadith",
    icon: "MapPin",
    colorName: "pink",
    gradientClasses: "from-pink-600 to-rose-700",
    slides: [
      {
        id: 1,
        title: "المساجد قناديل الهدى العامرة غدوة",
        narrative: "يوضح الرسول الكريم أن المساجد أحب بقاع الأرض لله لأنها مراكز العلم والذكر والتلاحم الإنساني، في حين يبغض الأسواق لما يرى فيها من سخب وكذب وتلاعب مالي فج.",
        highlightVerse: "أحب البلاد إلى الله مساجدها، وأبغض البلاد إلى الله أسواقها.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "أَحَبَّ البلاد", meaning: "البقاع الأكثر تقرباً وعناية بفضل طاعة الخاشعين." },
      { word: "أَبْغَضَ البلاد", meaning: "الأماكن التي يكثر فيها لغو وجلب وأكل ومكائد الباطل." }
    ],
    quiz: [
      { id: 1, question: "ما هي أحب بقاع وبلاد الأرض إلى الله؟", options: ["أسواقها المالية", "مساجدها ومحاريب العلم", "شواطئ الرمضاء"], correctAnswer: 1 }
    ]
  },
  {
    id: "hadith-trade",
    title: "حديث السماحة بالبيع: تيسير الأخوة والبركة",
    shortDesc: "دعوة نبوية طاهرة بالبركة والرحمة للمتعامل السمح تيسيراً وبناء لجدار الطمأنينة.",
    unitId: 2,
    type: "hadith",
    icon: "DollarSign",
    colorName: "pink",
    gradientClasses: "from-rose-600 to-pink-700",
    slides: [
      {
        id: 1,
        title: "رحم الله عبداً سمح التعامل غدقاً",
        narrative: "يمد الحديث جسور السماحة والأخوة في المعاملات المالية، واعداً بالرحمة لكل من يبيع بصدق، ويشتري بغير تقتير ومكابرة، ويقضي حقوقه حليماً طالباً للألفة والكرامة الشرعية.",
        highlightVerse: "رحم الله رجلاً سمحاً إذا باع، وإذا اشترى، وإذا اقتضى.",
        imageUrl: "trade_bazaar_peace",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "سَمْحاً", meaning: "سهلاً ميسّراً ليناً لطيفاً بالتعامل والأقساط." },
      { word: "اقتضى", meaning: "طلب واسترد حقه وقرضه المالي من المدين." }
    ],
    quiz: [
      { id: 1, question: "بم دعا النبي صلى الله عليه وسلم لكل متعامل سمح يسير؟", options: ["دعا له بالرحمة الشاملة والبركة", "دعا بمقاطعة دياره", "بالبقاء وحيداً بكبرياء"], correctAnswer: 0 }
    ]
  },
  {
    id: "hadith-secret",
    title: "حديث المجالس أمانات: صيانة الكلم والسر",
    shortDesc: "الأدب الحكيم بحفظ الأسرار والالتفات الجسدي الضامن لخصوصية ونقاء الكلام.",
    unitId: 2,
    type: "hadith",
    icon: "Lock",
    colorName: "pink",
    gradientClasses: "from-pink-500 to-teal-600",
    slides: [
      {
        id: 1,
        title: "إذا التفت الرفيق فالسر حق لازم الصون",
        narrative: "يعلمنا نبي المروءة صدقاً هيبة صون كلام المجالس، فحين ينطق رفيقك بحديث ويلفت عينيه أو بدنه وجلاً، غدا حديثه وداعاً وسراً أمانة في عنقك يحرم كشفه للغير.",
        highlightVerse: "إذا حدث الرجل بحديث ثم التفت فهي أمانة حتمية.",
        imageUrl: "stars_galaxy_cosmos",
        illustrationType: "stars"
      }
    ],
    vocabulary: [
      { word: "الْتَفَتَ", meaning: "توجه بوجهه يميناً ويساراً خشية أن يرقبه ويسمعه سواه." },
      { word: "أَمَانَةٌ", meaning: "حق لازم الحفظ الصارم يحرم إشاعته وكشف عورته." }
    ],
    quiz: [
      { id: 1, question: "ما حكم الحديث الذي يدور سراً ويلتفت قائله؟", options: ["أمانة ممهدة لازمة العهد", "كلام عادي يجوز إفشاؤه", "لا مبالاة شرعية به"], correctAnswer: 0 }
    ]
  },
  {
    id: "hadith-travel",
    title: "حديث دعاء السفر: تسخير الدواب وقهر المشاق",
    shortDesc: "ابتهال التوكل بالتكبير واستدعاء السكينة الربانية لتسهيل مشاق السفر.",
    unitId: 2,
    type: "hadith",
    icon: "Compass",
    colorName: "pink",
    gradientClasses: "from-teal-500 to-rose-600",
    slides: [
      {
        id: 1,
        title: "سبحان الذي طوع لنا المراكب عافية",
        narrative: "قبل البدء بمهام المسافات، يكبر المؤمن ثلاثاً معيداً شكر تسخير الدواب والسفن والمركبات، طالباً من عزة البارئ طوق الأمان والبر بالخطوات وعافية الأهل والمسكن.",
        highlightVerse: "سُبْحَانَ ٱلَّذِى سَخَّرَ لَنَا هَٰذَا وَمَا كُنَّا لَهُۥ مُقْرِنِينَ * وَإِنَّآ إِلَىٰ رَبِّنَا لَمُنقَلِبُونَ",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "سَخَّرَ لَنَا", meaning: "ذلل ويسر وطوع لنفعنا ومعاشنا المراكب." },
      { word: "مُقْرِنِينَ", meaning: "مطيقين وقادرين بقوة وشكر النعمة." }
    ],
    quiz: [
      { id: 1, question: "ما معنى مقرنين بالدعاء الحكيم؟", options: ["مطيقين وقادرين", "عاجزين عن السفر", "طائرين بالهواء"], correctAnswer: 0 }
    ]
  },
  {
    id: "hadith-kinship",
    title: "حديث صلة الرحم: مفتاح بركة العمر والرزق",
    shortDesc: "الرابط العقدي الفريد الواعد بمحامد ورفاهية الرزق وتمديد البركة بعمر واصل قرابته.",
    unitId: 2,
    type: "hadith",
    icon: "HeartHandshake",
    colorName: "pink",
    gradientClasses: "from-rose-500 to-teal-600",
    slides: [
      {
        id: 1,
        title: "من أحب سعة عيشه ونماء طيات عمره",
        narrative: "تحثنا النبوة بصلة القربى ومواساة الوالدين والإخوة المحتاجين بالمال والرعاية العلوية، واعداً إياه بأن يصل الله أسبابه ويسيل رزقه ويمدد ذكره الحسن بدهره.",
        highlightVerse: "من سره أن يبسط له في رزقه، وينسأ له في أثره، فليصل رحمه.",
        imageUrl: "knowledge_book_rose",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "يُنْسَأَ لَهُ في أَثَرِهِ", meaning: "يؤخر له في أجله ويبارك في عمره وصالح ذريته." },
      { word: "يُبْسَطَ لَهُ", meaning: "يوسع ويكثر رزقه وبركة عيشه اليومي بالبلاد." }
    ],
    quiz: [
      { id: 1, question: "ما جزاء واصل الرحم والأقارب البررة؟", options: ["بسط رزقه والبركة في أجله وعمره", "صفرة بدنه", "حرمان الرزق بالسوق"], correctAnswer: 0 }
    ]
  },

  // ==================== UNIT 3: Pillars of Faith ====================
  {
    id: "aqeedah-day-after",
    title: "الإيمان باليوم الآخر: نهاية الدنيا والحساب",
    shortDesc: "ركن الإيمان الحاسم بحتمية فناء المعاش، والنشور لقيام ميزان العدل والجزاء.",
    unitId: 3,
    type: "aqeedah",
    icon: "ShieldAlert",
    colorName: "amber",
    gradientClasses: "from-amber-500 to-yellow-600",
    slides: [
      {
        id: 1,
        title: "فناء البسيطة ورجوع الخلائق للتقويم",
        narrative: "يقيم الإسلام ضرورة الاعتقاد بالبعث والآخرة والنشور، لتجلب الحياة الدنيا غايات عزة التوحيد والتزام العباد بفعل الخيرات وهجر الزلات طلباً للفوز بالجنان.",
        highlightVerse: "لكل بداية نهاية، فاليوم الآخر ركن يوجب يقظة وسلامة الضمير.",
        imageUrl: "space_stars_nebula",
        illustrationType: "space"
      }
    ],
    vocabulary: [
      { word: "الْيَوْمِ الآخِرِ", meaning: "يوم البعث بعد الموت والحساب العادل للخلائق." },
      { word: "الْبَعْثِ", meaning: "إحياء وإرجاع الموتى وبث نفوسهم عاقب تلاشي الأبدان." }
    ],
    quiz: [
      { id: 1, question: "ما غاية الإيمان باليوم الآخر للضمير الصالح؟", options: ["تربية الخوف وحث النفس على الصالحات والعدل", "تعجيز الطلاب بالدروس", "جمع أموال الأسواق"], correctAnswer: 0 }
    ]
  },
  {
    id: "aqeedah-hour-signs",
    title: "علامات الساعة الكبرى: التغيرات الجسيمة والبعث",
    shortDesc: "تأمل العلامات الحاسمة الممهدة للساعة كخروج الدجال والمهدي وطلوع الشمس مغرباة.",
    unitId: 3,
    type: "aqeedah",
    icon: "AlertCircle",
    colorName: "amber",
    gradientClasses: "from-yellow-600 to-amber-700",
    slides: [
      {
        id: 1,
        title: "معالم وقرب الساعة الكبرى بالوجود",
        narrative: "العشر الكبرى المروية بكتاب الدرس تأتي متتالية كالعقد لتعلمنا انتهاء زمن رخصة العمل، فمن خروج الدجال عماوة للمهدي، طلوع الشمس من مغربها، ونزول عيسى رسول السلام والتوحيد بلقاء الحق.",
        highlightVerse: "إشارات جسيمة تتحدى المجرى المعتاد وتعلن تلاشي المعاش وقرب الحساب.",
        imageUrl: "earth_sun_horizon",
        illustrationType: "balance"
      }
    ],
    vocabulary: [
      { word: "السَّاعَةِ الكُبْرى", meaning: "العلامات الجسيمة الملاصقة ليوم البعث والنشور." },
      { word: "الدَّجَّالِ", meaning: "فتنة عظمى كاذبة تبتغي تزييف التوحيد في القلوب." }
    ],
    quiz: [
      { id: 1, question: "من العلامات العشر الكبرى الحاسمة لقيام قيامة الوجود؟", options: ["طلوع الشمس من مغربها", "ألعاب الأطفال بالشارع", "بناء السقوف الذهب بالمسكن"], correctAnswer: 0 }
    ]
  },
  {
    id: "aqeedah-good-deeds",
    title: "فعل الخيرات: دواء القلوب وباب الرفعة",
    shortDesc: "التعريف الشرعي بمسمى فعل الخير بالوجود وثماره العظمى برضا الرب ونقاء الأمة.",
    unitId: 3,
    type: "aqeedah",
    icon: "Heart",
    colorName: "amber",
    gradientClasses: "from-amber-500 to-orange-600",
    slides: [
      {
        id: 1,
        title: "صنائع المعروف تقي مصارع السوء كرامة",
        narrative: "يتسع معنى فعل الخير ليشمل كل سعي يبتغي عون الضعيف، كفالة مساكين البلد، صدق الأرحام والرفق بالحيوان، ليجلب حب الخالق ودوام عافية البدن وهداية الصدر.",
        highlightVerse: "وافعلوا الخير لعلكم تفلحون رائد الفلاح بالدنيا والآخرة.",
        imageUrl: "knowledge_book_rose",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "فِعْلِ الْخَيْرَاتِ", meaning: "كل بذل نافع يحسن عيش الفرد ويبني الألفة بالأوطان." },
      { word: "مَصَارِعَ السُّوءِ", meaning: "ميتات الوباء والشدائد والزلات المخزية الحاطة بالبشر." }
    ],
    quiz: [
      { id: 1, question: "ما ثمار صنائع المعروف وفعل الخير للفاعل بالقلب؟", options: ["تقي فواجع ومصارع السوء وتجلب الرحمة", "لا عاقبة لها سوى الشهرة", "تجمع له أكياس المال فقط غنوة"], correctAnswer: 0 }
    ]
  },
  {
    id: "aqeedah-beautiful-names-1",
    title: "أسماء الله الحسنى (1): العظيم، الحفيظ، الرقيب",
    shortDesc: "جلال كمال العظمة الإلهية الحافلة برعاية الحفيظ وشهادة الرقيب بخلجات قلوبنا.",
    unitId: 3,
    type: "aqeedah",
    icon: "ShieldAlert",
    colorName: "amber",
    gradientClasses: "from-orange-500 to-yellow-600",
    slides: [
      {
        id: 1,
        title: "العظيم بجلال صفاته المحمي بنقاء حفظه",
        narrative: "العظيم يوجب منتهى الصمت والتبتل والوقار، والحفيظ صائن الوجود والرزق ورافع بواعث الأمان بالصحارى، والرقيب المطلع على خفق وحركات العظام بغير معجزة.",
        highlightVerse: "وهو العلي العظيم، كان الله على كل شيء رقيباً.",
        imageUrl: "earth_mountains_peace",
        illustrationType: "balance"
      }
    ],
    vocabulary: [
      { word: "الْعَظِيمُ", meaning: "المستحق لكمال الإجلال والتنزيه لعظم وسعة جلاله." },
      { word: "الرَّقِيبُ", meaning: "المطلع على سائر حركات وسعي ونبض الصدور المؤمنة." }
    ],
    quiz: [
      { id: 1, question: "من هو الحفيظ بعقيدتنا النقية؟", options: ["صائن الرازق لكل خلائق الوجود من البلوى والضياع", "جندي المحفل", "خازن قمح البلاد مكة"], correctAnswer: 0 }
    ]
  },
  {
    id: "aqeedah-beautiful-names-2",
    title: "أسماء الله الحسنى (2): الواسع، الوكيل، القوي",
    shortDesc: "سعة رزق البارئ لخلائقه وتكفل الوكيل بتدبير معاشنا وعزة القوي الغالب.",
    unitId: 3,
    type: "aqeedah",
    icon: "ShieldCheck",
    colorName: "amber",
    gradientClasses: "from-amber-600 to-teal-600",
    slides: [
      {
        id: 1,
        title: "تكفل الوكيل وهيبة القوة المطلقة",
        narrative: "الواسع وسع علمه وفضله ورحمته سائر البسيطة، والوكيل الحامي المفوض بتيسير الحركات، والقوي صاحب القدرة البالغة المستبشرة بالحسم لعزتها التي لا تقهر.",
        highlightVerse: "إن الله هو الرزاق ذو القوة المتين، وكفى بالله وكيلاً.",
        imageUrl: "stars_galaxy_cosmos",
        illustrationType: "stars"
      }
    ],
    vocabulary: [
      { word: "الْوَاسِعُ", meaning: "الذي عم علمه ورحمته وفضله كافة كائنات وجود الأرض." },
      { word: "الْوَكِيلُ", meaning: "الكفيل بتيسير شؤون عباده المعتمد بقلوبهم بالتوكل." }
    ],
    quiz: [
      { id: 1, question: "ما معنى اسم الوداد الإلهي الوكيل؟", options: ["المتكفل الكفيل بجميل شؤون خلقه تدبيراً ومعاشاً", "المبخل بمسبحة الأودية", "من لا يحاسب أحداً"], correctAnswer: 0 }
    ]
  },
  {
    id: "aqeedah-beautiful-names-3",
    title: "أسماء الله الحسنى (3): المحيي، المبدئ، المعيد",
    shortDesc: "سر خلق الحياة من لا شيء أركاناً، وإعادتهم بالبعث يوم الحساب للبعث البهي.",
    unitId: 3,
    type: "aqeedah",
    icon: "RefreshCw",
    colorName: "amber",
    gradientClasses: "from-teal-600 to-orange-600",
    slides: [
      {
        id: 1,
        title: "إبداع المحيي وإرجاع المعيد ليوم الجزاء",
        narrative: "المحيي واهب النسمة وسر الحياة بكائنات البسيطة، والمبدئ الخالق للأجزاء والبدايات الأولى صمتاً، والمعيد القائم بجمع البدن ونفخ الأرواح للوعد الخالد بالآخرة.",
        highlightVerse: "وهو الذي يبدأ الخلق ثم يعيده وهو أهون عليه.",
        imageUrl: "earth_ocean_waves",
        illustrationType: "water"
      }
    ],
    vocabulary: [
      { word: "الْمُحْيِي", meaning: "الخالق الباعث للحياة والنمو بكائنات وجود الأرض." },
      { word: "الْمعِيدُ", meaning: "الذي يرجع الخلائق أحياء يوم البعث والنشور بعد تلاشيها." }
    ],
    quiz: [
      { id: 1, question: "ما دلالة إرجاع الخلائق بعد فنائها ليوم البعث؟", options: ["تثبت كمال عهد المعيد والقدرة المطلقة", "لا ميعاد لها بالشرع", "عشوائية بلا حكمة"], correctAnswer: 0 }
    ]
  },

  // ==================== UNIT 4: Fiqh ====================
  {
    id: "fiqh-jamaah-prayer",
    title: "صلاة الجماعة: فضيلتها ومحاسن الاجتماع بوقار",
    shortDesc: "تعلم فضل صلاة الجماعة الفارق بسبع وعشرين مرقاة من أجر الفرد، وبناء مساواة القلوب.",
    unitId: 4,
    type: "fiqh",
    icon: "Users",
    colorName: "purple",
    gradientClasses: "from-purple-500 to-indigo-600",
    slides: [
      {
        id: 1,
        title: "سبع وعشرون درجة من الأجر الواثق",
        narrative: "توجب الجماعة شرف اللقاء بالمسجد في متراصين، وتضاعف للشعيرة خصل المحبة بسبع وعشرين درجة تفضيلاً لصلاة الفرد المنفرد، لتبني صرح الألفة بين الصغير والوزير ومساواة المؤمنين بالحق.",
        highlightVerse: "صلاة الجماعة تفضل صلاة الفذ بسبع وعشرين درجة بالحديث الشريف.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "الْفَذِّ", meaning: "المصلي المنفرد لوحده دون رفق بالمسجد الشريف." },
      { word: "درجة", meaning: "مرقاة ومراتب مضاعفة لخيرات الأجر والثواب عند البارئ." }
    ],
    quiz: [
      { id: 1, question: "كم تضاعف صلاة الجماعة من مراتب الأجر على الفرد؟", options: ["بسبع وعشرين درجة فضلى", "بثلاثة درجات عشوائية", "لا مضاعفة لها بالبلد"], correctAnswer: 0 }
    ]
  },
  {
    id: "fiqh-prayer-benefits",
    title: "فوائد الصلاة: غذاء الروح وصلاح الأبدان",
    shortDesc: "مظاهر النماء والفوائد البدنية والصحية، والتأهيل الأخلاقي لواق الفحشاء والزلات.",
    unitId: 4,
    type: "fiqh",
    icon: "Activity",
    colorName: "purple",
    gradientClasses: "from-teal-600 to-purple-600",
    slides: [
      {
        id: 1,
        title: "طهارة دائمة وراحة للنفس العابرة",
        narrative: "تقف بصلاتك خاشعاً طاهراً بركوعك لتدرب المفاصل، وتغسل أوزار النفوس وتطهر عورات الفهم كأريج يفوح حباً، وتعصم الضمير عن مقاربة الفحشاء والمنكر وسوء القول بالبلد.",
        highlightVerse: "إن الصلاة تنهى عن الفحشاء والمنكر ولذكر الله أكبر.",
        imageUrl: "knowledge_book_rose",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "تَنْهَىٰ", meaning: "تعصم وتقي الضمير والبدن من ارتكاب المعاصي المفسدة." },
      { word: "الْفَحْشَاءِ", meaning: "قبيح القول والزلات وسلسلة السلوك الخائب الضال." }
    ],
    quiz: [
      { id: 1, question: "ما ملامح التغيير الأخلاقي للصلاة بالنفوس الحرة؟", options: ["تعصم وتنهى البدن والضمير عن ارتكاب القبائح", "لا تؤثر سوى وقتياً", "تجلب طمع الصديق"], correctAnswer: 0 }
    ]
  },
  {
    id: "fiqh-sunan-rawatib",
    title: "السنن الرواتب وصلاة الرغيبة: سياج الفريضة الواقي",
    shortDesc: "تعرف على ركعات النوافل التابعة للصلوات، وفضل رغيبة الفجر القبلية الخفيفة.",
    unitId: 4,
    type: "fiqh",
    icon: "Sun",
    colorName: "purple",
    gradientClasses: "from-purple-600 to-rose-600",
    slides: [
      {
        id: 1,
        title: "عشر ركعات لينة تحمي صلاتك الفريضة",
        narrative: "تدرس السنن الرواتب التابعة المعتمدة بعشر ركعات تزيد وتحرس النقص بالفرائض، مع الحفظ الشامخ لسنة الرغيبة ركعتي الفجر القبلية الخفيفة التي هما خير من الدنيا وما بها بحديث النبوة.",
        highlightVerse: "ركعتا الفجر (الرغيبة) خير من الدنيا وما فيها بالفوز البهي.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "الرَّوَاتِبُ", meaning: "السنن المؤكدة المرتبطة التابعة لفرائض الصلاة باليوم والليلة." },
      { word: "الرَّغِيبَةُ", meaning: "سنة ركعتي الفجر القبلية الخفيفة الفضلى المأثورة." }
    ],
    quiz: [
      { id: 1, question: "ما مقدار السنن الرواتب المقررة باليوم والليلة؟", options: ["عشر ركعات مؤكدة تحرس الفريضة", "خمسة وعشرون ركعة", "لا يوجد سنن تابعة بالشرع"], correctAnswer: 0 }
    ]
  },
  {
    id: "fiqh-shaf-witr",
    title: "صلاة الشفع والوتر: مسك ختام التعبد بالليل",
    shortDesc: "تعلم صفة ووقت الركعات الوترية الخاتمة لتعبد الأبرار، وسور الأعلى والجهود المباركة.",
    unitId: 4,
    type: "fiqh",
    icon: "MoonStar",
    colorName: "purple",
    gradientClasses: "from-indigo-600 to-purple-600",
    slides: [
      {
        id: 1,
        title: "اجعلوا آخر صلاتكم بالليل وتراً",
        narrative: "يبتدأ وقت الوتر الحكيم عقب الفراغ من صلاة العشاء ممتداً حتى الفجر، ليرتل المصلي سورة الأعلى والكافرون بشفع الركعتين الطاهرة، وسورة الإخلاص بوتر ربه الأوحد إجلالاً وتنمية.",
        highlightVerse: "إن الله وتر يحب الوتر الموصوف بالآداب الرفيعة بالليل.",
        imageUrl: "stars_galaxy_cosmos",
        illustrationType: "stars"
      }
    ],
    vocabulary: [
      { word: "الشَّفْعُ", meaning: "صلاة ركعتين زوجيتين تؤدى قبل ركعة الوتر تعظيماً." },
      { word: "الْوِتْرُ", meaning: "الركعة الفردية الخاتمة المأثورة بالليل ترحاباً." }
    ],
    quiz: [
      { id: 1, question: "ما وقت صلاة الوتر بالفقه والدرس؟", options: ["عقب صلاة العشاء ويمتد حتى قبيل الفجر", "عند زوال الشمس بلهيبه", "بلا وقت شرعي محدد"], correctAnswer: 0 }
    ]
  },
  {
    id: "fiqh-qada-fawait",
    title: "قضاء الفوائت: جبر التقصير بوقار الترتيب",
    shortDesc: "رخصة جبر الفريضة المتروكة بنسيان أو نوم، وكيف يصف الترتيب بالأبكر فالأخف.",
    unitId: 4,
    type: "fiqh",
    icon: "Clock",
    colorName: "purple",
    gradientClasses: "from-purple-600 to-teal-600",
    slides: [
      {
        id: 1,
        title: "قضاء الصلاة الفائتة فور التذكر واليقظة بسلام",
        narrative: "إذا نسي المؤمن أو غلبه النوم ففاتته صلة مكتوبة، وجب عليه قضاؤها فور استحضار ضميره ويقظته بغير تكاسل، مرتباً للركعات كما فاتت (الظهر ثم العصر ثم المغرب) كعيون الأوفياء بالعهد.",
        highlightVerse: "من نسي صلاة فليصلها إذا ذكرها بحديث الصادق.",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "الْفَوَائِتُ", meaning: "الصلوات المفروضة المكتوبة التي خرج وقتها ولم تؤدَّ." },
      { word: "التَّرْتِيبُ", meaning: "أداؤها بالتسلسل الزمني لأوقاتها الأصلية كما فاتت بوقار." }
    ],
    quiz: [
      { id: 1, question: "كيف يقضي المصلي صلاة فاتت لو نام عنها؟", options: ["يقضيها فور اليقظة والتذكر متأدباً برخصته", "يجلس بلا قضاء", "يؤخرها لعام جديد"], correctAnswer: 0 }
    ]
  },
  {
    id: "fiqh-sujud-sahw",
    title: "سجود السهو: جبر النقص والزيادة لترغيم الشيطان",
    shortDesc: "سجدتا الجبر الإيماني للنقص والشك بالصلاة، وتفريق موقعهما قبل أو بعد السلام.",
    unitId: 4,
    type: "fiqh",
    icon: "RefreshCw",
    colorName: "purple",
    gradientClasses: "from-purple-500 to-orange-600",
    slides: [
      {
        id: 1,
        title: "سجدتان للسهو كحب الشريعة في جبر الصالحات",
        narrative: "سجود السهو سجدتان لطيفان تؤدى لجبر الخلل والشك، فيسجد المصلي قبل منطقه بالسلام ليعوض نقصاً (كنسيان ركعة أو تشهد أول)، ويسجد عاقب السلام رداً للزيادة كركعة إضافية رغماً للشيطان.",
        highlightVerse: "سجدتان تجبران الخلل والنسيان طمأنينةً للمصلي الخاشع.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "السَّهْوُ", meaning: "الذهول والنسيان المؤقت الحاط بالمصلي بصعوبة صلاته." },
      { word: "التَّرْغِيمُ", meaning: "إذلال الشيطان وتخييب مسعاه لإفساد طمأنينة صلاة المصلين." }
    ],
    quiz: [
      { id: 1, question: "متى يشرع ويسجد المصلي سجود السهو قبل السلام؟", options: ["عند حدوث وتذكر نقص بالركعات أو السنن في صلاته", "عند طرو زيادة مؤكدة بالصلاة", "في سائر الصلوات عشوائياً بدون شك"], correctAnswer: 0 }
    ]
  },

  // ==================== UNIT 5: Noble Ethics ====================
  {
    id: "morals-raee-responsibility",
    title: "مسؤولية الراعي: عدل عمر وحصاد الرعاية",
    shortDesc: "تأمل بطولة عمر وتفقده للأطفال الجياع وحمل الدقيق تعليماً للمسؤولية الحقة.",
    unitId: 5,
    type: "story",
    icon: "CheckSquare",
    colorName: "indigo",
    gradientClasses: "from-indigo-500 to-blue-600",
    slides: [
      {
        id: 1,
        title: "عدل وحمل الدقيق بنقاء الضمير",
        narrative: "يقص الدرس نبأ الفاروق عمر وهو يتفقد الديار بالليل فرأى أطفالاً يبكون حول قدر مائي، فبادر بجلب الطحين بظهره الوفي، كافلاً ومطبوخاً لهم، عازفاً عن حمل خادمه لوزره يوم الحشر.",
        highlightVerse: "كلكم راع وكلكم مسؤول عن رعيته بحديث نبي الرحمة.",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "رَّاعٍ", meaning: "كل من وُلّي أمراً أو رعاية وحفظاً لمصالح العباد بالعدل." },
      { word: "الوَزْرُ", meaning: "الذنب والثقل العقابي المحاسب عليه العبد يوم الحشر وصعوبته." }
    ],
    quiz: [
      { id: 1, question: "لماذا رفض الخليفة الفاروق حمل كيس الدقيق عنه؟", options: ["خشية وتذكراً للحساب والوزير يوم القيامة", "لقوة كيس القمح المادي", "عدم حبه لخادمه سالم"], correctAnswer: 0 }
    ]
  },
  {
    id: "morals-forgiveness",
    title: "العفو عند المقدرة: نبل النفوس وقوة الحلم",
    shortDesc: "تأثير وسلوك العفو الشجاع في إذهاب الشقاق كقصة بن إبراهيم وعفوه عن قاتل أبيه.",
    unitId: 5,
    type: "story",
    icon: "HeartHandshake",
    colorName: "indigo",
    gradientClasses: "from-teal-600 to-indigo-600",
    slides: [
      {
        id: 1,
        title: "حماية الخصم التائه وهدية النبل والرحمة",
        narrative: "القصة تروي إيواء بن إبراهيم لخصم مكروب مقتيل لوالده، فلما تيقن واقتدر، اختار العفو النبيل والمسامحة دافعاً له مالاً لينجو ببدنه طاعةً لمقام التقوى بقلبه الراضي.",
        highlightVerse: "وأن تعفوا أقرب للتقوى رائد الرفقة والوداد الإنساني.",
        imageUrl: "knowledge_book_rose",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "المَقْدِرَةُ", meaning: "التمكين القوي للقدرة على تصفية الخصوم وتفعيل الثأر." },
      { word: "العَفْوُ", meaning: "التجاوز والمسامحة الوجدية مع نبذ رغبات وعواطف الانتقام." }
    ],
    quiz: [
      { id: 1, question: "كيف تجلت حكمة البطل بالقصة تجاه طارح عهده؟", options: ["عفا وسامحه ووهبه وسام مال للنجاة", "سجنه بقسوة", "طلب تجهيز جلبة بالشارع"], correctAnswer: 0 }
    ]
  },
  {
    id: "morals-knighthood",
    title: "عاقبة المروءة: علوان الصالح ووفاق الألفة",
    shortDesc: "إيواء غريبة محتاجة ببيت علوان والوفاق البهي بزواجه من أخت الملك.",
    unitId: 5,
    type: "story",
    icon: "Compass",
    colorName: "indigo",
    gradientClasses: "from-indigo-600 to-pink-600",
    slides: [
      {
        id: 1,
        title: "أصيل المروءة ترد بالمسك والبهجة للأفاق",
        narrative: "علوان وأخته يرعيان ببيتهم الصغير غريبة جرباء جائعة، دون علم بأنها أخت الملك قمر الشاردة، لتعود لأهلها فخراً ويرفأ للملك النبيل مكارم جود علوان بالزواج الباهر واليسر.",
        highlightVerse: "ما جزاء الإحسان إلا الإحسان برهان فلاح المروءة بالمجتمعات.",
        imageUrl: "earth_ocean_waves",
        illustrationType: "water"
      }
    ],
    vocabulary: [
      { word: "فَاقَتُهُمَا", meaning: "حالة الفقر الشديدة وشهامة الحرمان لتأمين الضعيف بيقين." },
      { word: "المُرُوءَةُ", meaning: "آداب وشمائل الشهامة وإسعاف الملهوف بالبسيطة غدوة." }
    ],
    quiz: [
      { id: 1, question: "من هي الغريبة التي آواها علوان الصالح ببيته؟", options: ["أخت الملك الضائعة رثة الثياب", "ماشية تائهة بالصحراء", "جارة مألوفة بالسياج"], correctAnswer: 0 }
    ]
  },
  {
    id: "morals-trustworthiness",
    title: "جزاء الأمانة: رحلة ثابت بن إبراهيم وتفاحة الكوفة",
    shortDesc: "ورع ثابت بن إبراهيم وسعيه للتحليل من نصف تفاحة، وعفاف البنت الصالحة الكريمة.",
    unitId: 5,
    type: "story",
    icon: "Award",
    colorName: "indigo",
    gradientClasses: "from-indigo-700 to-teal-800",
    slides: [
      {
        id: 1,
        title: "عفاف وبستان الكوفة البديع غداة التبتل",
        narrative: "أكل ثابت نصف تفاحة سقطت ببستان، تملكه الرعب فمشى مئات مسافات الكوفة ليطلب تحليلها من صاحب الشجر، فزوجه بنته (العفيفة عمياء الكبر وبكماء الزور) ليعمر بيته بنسل العلماء بمكة.",
        highlightVerse: "ومن يتق الله يجعل له مخرجاً ويرزقه من حيث لا يحتسب.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "الْوَرَعُ", meaning: "تجنب وكف النفس عن كل ما فيه شبهة كراهية وخوف حرمان الحق." },
      { word: "عَفِيفَةُ", meaning: "متحلية بمكارم صيانة العين والسمع لغض البصر عن المعاصي." }
    ],
    quiz: [
      { id: 1, question: "ما معنى وصف البنت بأنها عمياء صماء مقعدة بالرمز بالأمانة؟", options: ["أن جوانحها مصونة عن لغو ومحرمات الخالق تبتلاً", "عقم الحركة الفسيحة بالبدن", "المرض والعجز الكلي بالدار"], correctAnswer: 0 }
    ]
  },

  // ==================== UNIT 6: Prophetic Biography ====================
  {
    id: "seerah-offering-islam",
    title: "دعوة الطائف: الصبر البهيج ورحمة نبي الهدى",
    shortDesc: "معاناة الرسول بالطائف وصبره المعجز، وإسلام عداس العراقي بفضل عنقود العنب.",
    unitId: 6,
    type: "seerah",
    icon: "Compass",
    colorName: "blue",
    gradientClasses: "from-blue-500 to-indigo-600",
    slides: [
      {
        id: 1,
        title: "برء الرحمة برياح الطائف وديار البلاء",
        narrative: "حصار مكة يدفع بنبينا لرحلة الصحراء لدعوة قبائل ثقيف بالطائف، فسلط الأعمى عليه الغلمان فرجموه بقطع الحجارة شجاجاً، فدعا البارئ بتذلل مفيضاً إسلام الغلام عداس الوفي المصلح بغير معاصي.",
        highlightVerse: "اللهم إني أشكو إليك ضعف قوتي وقلة حيلتي بالدعاء الشذي النبيل الطهور.",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "شِجَاجاً", meaning: "جراح بدنية غائرة بدم يسيل عاقبة الرجم بالأجحار بالسفر." },
      { word: "عَدَّاسُ", meaning: "الغلام العراقي الموقر لرسول الله وإسلامه الشامخ بالطائف." }
    ],
    quiz: [
      { id: 1, question: "كيف تصرف نبي الهدى حيال أذى رجم قبائل وثقيف الطائف؟", options: ["عفا ورحم ولم يعذب الطائف بملك الجبال طمعاً بورعهم", "بمصادرتهم بالحروب العارمة", "بالأبصار بلا مبالاة"], correctAnswer: 0 }
    ]
  },
  {
    id: "seerah-yathrib-delegation",
    title: "سفير النور بالمدينة: وفد يثرب وبطولة مصعب بن عمير",
    shortDesc: "إسلام ستة نفر من يثرب أولاً بمنى، وقصة ريادة سفير الإسلام مصعب بالدليل وعفاف منطقه.",
    unitId: 6,
    type: "seerah",
    icon: "Users",
    colorName: "blue",
    gradientClasses: "from-teal-600 to-blue-600",
    slides: [
      {
        id: 1,
        title: "بيعة العقبة وبشائر ترحاب سفارة الدين",
        narrative: "بعد بيعة منى لستة فتيان من الخزرج، أوفد الرسول الشاب البطل مصعب بن عمير يعلمهم الفقه ويدور بالآيات، فعم بآدابه وعقله الواسع كل بيوت المدينة توحيداً بغير شقاق.",
        highlightVerse: "مصعب بن عمير سفير الإسلام الأول الموثق بلقب 'الْمُقرِئ'.",
        imageUrl: "trade_bazaar_peace",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "الْمُقْرِئُ", meaning: "المنعوت به سفير الإسلام مصعب بن عمير لإقرائه القرآن بالبشائر." },
      { word: "بَيْعَةٌ", meaning: "ميثاق التآخي والطاعة الموثق يداً بيد لقائد ونبي التوحيد." }
    ],
    quiz: [
      { id: 1, question: "من هو سفير الإسلام والنور الأول بالدليل؟", options: ["مصعب بن عمير رضي الله عنه", "زيد بن حارثة رائد الخيل", "بلال الحبشي عزة"], correctAnswer: 0 }
    ]
  },
  {
    id: "seerah-hijrah-early-waves",
    title: "مواكب المهاجرين: صبر أم سلمة وبيع صهيب الرابح",
    shortDesc: "ملحمة الهجرة وصعوبة طوق أم سلمة وعفتها، وبث صهيب ثروته بمكة رباحاً.",
    unitId: 6,
    type: "seerah",
    icon: "Compass",
    colorName: "blue",
    gradientClasses: "from-blue-600 to-rose-600",
    slides: [
      {
        id: 1,
        title: "سياق الصبر الفريد وبطولات مواكب الهجرة",
        narrative: "تصف الهجرة حرمان أم سلمة من ولدها بمكة لعام تبكي، وبتر صهيب ماله البليغ لكفار قريش ليحظى بجر هجرته، ليبشره حبيب الوجود بوسام عزة (ربح البيع أبا يحيى) ثناء على ورعه.",
        highlightVerse: "ربح البيع أبا يحيى، ربح البيع وبشراه النبوية المخلدة بالخلد.",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "ربح البيع", meaning: "الثناء بالبركة والصفقة الرابحة بالتفاني بدين الله القوي." },
      { word: "شَتَاتَهَا", meaning: "تفرق أوصال عائلتها ورباط ولدها قسوة لعام بمكة." }
    ],
    quiz: [
      { id: 1, question: "بماذا وصف وبشر النبي صلى الله عليه وسلم هجرة صهيب الرومي الصابر؟", options: ["ربح البيع أبا يحيى لتقديمه ماله كفراً بالثروة", "الحرمان البدني نكالاً", "التراجع خائب الرجاء لمكة"], correctAnswer: 0 }
    ]
  },
  {
    id: "seerah-companion-bilal",
    title: "بلال بن رباح: عزيمة الأذان وأحد أحد الخالدة",
    shortDesc: "الرائد بلال الحبشي مؤذن النبوة الشريف الصابر وصيحة توحيده وعزة اعتلائه الكعبة.",
    unitId: 6,
    type: "seerah",
    icon: "Volume2",
    colorName: "blue",
    gradientClasses: "from-blue-500 to-cyan-600",
    slides: [
      {
        id: 1,
        title: "من صخرة الرمضاء بمنى لأعالي كعبة التوحيد مكة",
        narrative: "تحمل بلال رضي الله عنه عذاب الباطل بالصخرة المحمية منادياً (أحد أحد) بعقيدة لا تميز الأجساد، ليصعد عاقب نصر الإسلام الأكبر فوق ظهر الكعبة الشريفة مطلقاً أذانه الفسيح بوقار.",
        highlightVerse: "أحد أحد، الكلمة الخالدة التي قضت على غرور مكة والباطل.",
        imageUrl: "mosque_peace_lighting",
        illustrationType: "prayer"
      }
    ],
    vocabulary: [
      { word: "أَحَدٌ أَحَدٌ", meaning: "الكلمة الخالدة لتوحيد الله الأوحد الرافضة لعلاقات الشرك." },
      { word: "مَوْلَىٰ", meaning: "العبد البار الذي اشتراه تائباً أبو بكر رغبةً بنقاء حريته شرعاً." }
    ],
    quiz: [
      { id: 1, question: "من هو مؤذن النبوة الشريف رائد صوت التوحيد؟", options: ["بلال بن رباح رضي الله عنه", "معاذ بساحات الشام", "عثمان بن عفان الكريمة"], correctAnswer: 0 }
    ]
  },
  {
    id: "seerah-companion-ammar",
    title: "عمار بن ياسر: جهاد آل ياسر ومنتهى الصبر",
    shortDesc: "تضحيات آل عمار أول مستشهدين بالإسلام سمية وياسر، وجهاده الوفي بصفين.",
    unitId: 6,
    type: "seerah",
    icon: "Shield",
    colorName: "blue",
    gradientClasses: "from-blue-600 to-teal-700",
    slides: [
      {
        id: 1,
        title: "صبراً آل ياسر موعدكم الجنة الموعودة بالبشرى",
        narrative: "عمار وعائلته يتلقون ويلات التعذيب، ويقدمان والدته سمية كأول شهيدة بالبسيطة، ويسير عمار بوقاره مجاهداً باهراً باليمامة والخلافة حتى استشهاده بجمال جلاله بعمر أربعة وتسعون عاماً.",
        highlightVerse: "صبراً آل ياسر فإن موعدكم الجنة الموصوفة بآيات الصدق المعجز بالقرآن.",
        imageUrl: "desert_sand_sun",
        illustrationType: "desert"
      }
    ],
    vocabulary: [
      { word: "آلُ يَاسِرٍ", meaning: "بيت عمار الصابرين الأوفياء بمكة المكرمين بالشهادة الأولى." },
      { word: "شَهِيْدَةُ", meaning: "مقتل المسلم في سبيل حماية دينه وعقيدته بوقار الأفاق." }
    ],
    quiz: [
      { id: 1, question: "من هي أول مستشهدة وشهيدة بالتاريخ الإسلامي الشامخ بروداه الأبرار؟", options: ["سيدتنا أم سلمة", "سيدتنا سمية والدة عمار بن ياسر غنوة", "عائشة بالمدينة"], correctAnswer: 1 }
    ]
  },
  {
    id: "seerah-companion-othman",
    title: "عثمان بن عفان: ذو النورين وبذل جوار بئر رومة والدقيق",
    shortDesc: "تأمل سخاء عثمان ذو النورين بجيش تبوك وبئره رومة وسر إنقاذه لفقر الأزمة بالمدينة.",
    unitId: 6,
    type: "seerah",
    icon: "Award",
    colorName: "blue",
    gradientClasses: "from-blue-700 to-teal-900",
    slides: [
      {
        id: 1,
        title: "تجهيز جيش العسرة وقافلة طحين قحط الأوطان مجاناً",
        narrative: "التاجر البار عثمان يمد المراكب والجيوش بتبوك برصيد ماله البيلغ، ويشري بئر رومة واهباً ماءها العذب لرواد المدينة، ويتصدق بثمانمائة حمل طعام بقحط خلافته لإنقاذ فقراء البلد بلا طمع مادي.",
        highlightVerse: "ما ضر عثمان ما فعل بعد اليوم، شهادة وسام نبوية مخلدة بالوجدان.",
        imageUrl: "knowledge_book_rose",
        illustrationType: "rose"
      }
    ],
    vocabulary: [
      { word: "ذُو النُّورَيْنِ", meaning: "اللقب الشريف لسيدنا عثمان لزواجه الشريف من البنتين رقية وأم كلثوم." },
      { word: "العُسْرَةِ", meaning: "مشاق الفقر والضيق الحاطة بجند تبوك بالمسافة بصعوبة دهرهم." }
    ],
    quiz: [
      {
        id: 1,
        question: "ما الذي اشتراه وتبرع به ذو النورين عثمان رضي الله عنه مروياً للمسلمين مجاناً؟",
        options: [
          "بئر رومة ومائها الروى",
          "ماشية الحج والعشائر",
          "بناء قلاع الشام الذهب"
        ],
        correctAnswer: 0
      }
    ]
  }
];
