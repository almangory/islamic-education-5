import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  ArrowLeft, 
  Trophy, 
  BookOpenCheck,
  Search,
  Heart,
  Users,
  Award,
  Clock,
  ThumbsUp,
  Download,
  Info
} from 'lucide-react';
import SoundEngine from '../lib/audio';

export interface ComicStory {
  id: string;
  title: string;
  url: string;
  type: 'quran' | 'hadith' | 'creed' | 'fiqh' | 'seerah';
  typeNameAr: string;
  shortDesc: string;
  moralLessons: string[];
  quiz: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  };
}

export const comicStoriesList: ComicStory[] = [
  {
    id: "comic-infitar",
    title: "الكتاب التفاعلي الأول: تفسير وشرح سورة الانفطار 📖",
    url: "https://drive.google.com/file/d/1PIjqPA-_NbsaQEvKNzTTgt3fQVoEhwAT/view?usp=sharing",
    type: "quran",
    typeNameAr: "القرآن والتجويد",
    shortDesc: "تصفَّح كتاب شرح سورة الانفطار المصور بالمنهج، وتأمل التوجيهات الربانية حول انشطار السماء يوم الحساب وجزاء الأبرار وعمل الكرام الكاتبين.",
    moralLessons: [
      "تغير معالم الكون الهائلة وانفطار السماء يوم القيامة تذكير حاسم بطلاقة قدرة الله وزوال الحياة الدنيا.",
      "كل قول وعمل وفعل مسجل بدقة بالغة على المرء من خلال ملائكة كرام كاتبين يرافقونه بصدق ونزاهة.",
      "طاعة الله الخالق والاستعداد الدائم للحساب يجني بهما المسلم الفطن حياة الأبرار ونعيم الجنان الخالدة."
    ],
    quiz: {
      question: "ما هي المهمة الجليلة التي وكلها الله تعالى بملائكته 'الكرام الكاتبين' كما ورد بسورة الانفطار المباركة؟",
      options: [
        "كتابة وتدوين جميع أعمال وأقوال العبد وحفظها بكل دقة وأمانة ليوم الحساب والجزاء",
        "تزيين جدران المساجد وطبخ الأطعمة وحفظ الأموال بالخزائن العامة",
        "تسيير حركة الرياح وتقليب أمواج البحار وتصميم الأودية والصخور"
      ],
      correctIndex: 0,
      explanation: "الملائكة الكرام الكاتبين ملازمون للإنسان بأمر ربه ويسجلون في صحيفته كل حركة وقول وعمل يفعله في سائر حياته."
    }
  },
  {
    id: "comic-insan",
    title: "الكتاب التفاعلي الثاني: تفسير وشرح سورة الإنسان 🧭",
    url: "https://drive.google.com/file/d/1UcT36QH5qp_QeGhU1BIyG2QYpYA8Gi1f/view?usp=sharing",
    type: "quran",
    typeNameAr: "القرآن والتجويد",
    shortDesc: "تصفّح كتاب سورة الإنسان المباركة، وتعرّف على أصل النشأة البشرية، وسبل الاختبار والهداية، ووصف النعيم البهيج المعد للأبرار الصالحين.",
    moralLessons: [
      "خلق الله تبارك وتعالى الإنسان في أحسن تقويم ليمتحنه بالشرائع، فمنهم من يسلك درب الشكر، ومنهم من يكفر.",
      "إطعام الطعام للمحتاجين واليتامى والأسرى بدافع مرضاة الله وبلا طلب حمد أو شكر من شيم الأبرار الصادقين.",
      "إن جزاء الصبر ومجاهدة النفس هو النعيم العظيم الخالد والحرير والشراب الطهور بكأس كافور من رب رحيم."
    ],
    quiz: {
      question: "لمن يقدم الأبرار المتصدقون في سورة الإنسان إطعام الطعام والصدقة الصادقة حُباً لربهم وابتغاءً لمرضاته؟",
      options: [
        "للأغنياء والوجهاء من كبار التجار في مجالس المباهاة والافتخار بالمكاسب دنيوياً",
        "﴿يُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا﴾ دون طلب جزاء أو شكر دنيوي",
        "لشركات النظارات الطبية لترسيم حدود الرؤية داخل المدارس"
      ],
      correctIndex: 1,
      explanation: "إن من خيار خصال المتقين الأبرار إطعام المساكين والفقراء، واليتامى الضعفاء، والأسارى، رجاءً لثواب الله والنجاة يوم الفزع الكبير."
    }
  },
  {
    id: "comic-qiyamah",
    title: "الكتاب التفاعلي الثالث: تفسير وشرح سورة القيامة 🌅",
    url: "https://drive.google.com/file/d/12zFeCSZAqWUe_HPwMaTDBO3JA3RaMcZp/view?usp=sharing",
    type: "quran",
    typeNameAr: "القرآن والتجويد",
    shortDesc: "تأمل براهين البعث القوية وإعادة تسوية البنان ونفوس اللوامة، واستشعر لحظات الاحتضار والوديعة الأخيرة من كتاب سورة القيامة المصور.",
    moralLessons: [
      "القسم الإلهي بيوم القيامة وبالنفس اللوامة التي تعاتب المرء على المعاصي يحث على الاستقامة وصلاح القلب.",
      "القدرة الخارقة في تسوية 'البنان' (أطراف الأصابع الفردية) برهان ساطع ومبكر على عظمة إبداع الخالق وصانعه.",
      "الاستبصار الواعي برحيل الدنيا ولحظات الاحتضار الحتمية يدعو العاقل للاستعداد المبكر بالطاعة والعمل الصالح."
    ],
    quiz: {
      question: "على ماذا يدل لغوياً وعقائدياً مطلع سورة القيامة في تأكيد قدرة الخالق بقوله تعالى: ﴿بَلَىٰ قَادِرِينَ عَلَىٰ أَن نُّسَوِّيَ بَنَانَهُ﴾؟",
      options: [
        "قدرة الله المطلقة على تجميع أدق تفاصيل جسد العبد وإعادتها بدقة كاملة متناهية حتى بصمات أصابعه الفريدة",
        "تسهيل التقاط الأقلام وكتابة المقالات في الفصل فقط",
        "أهمية ارتداء الخواتم الذهبية والمجوهرات بأيدي العباد"
      ],
      correctIndex: 0,
      explanation: "تؤكد الآية الشريفة قدرة الله الفائقة على بعث الإنسان وإعادة أدق خصوصياته الجسدية الممثلة في بصمة البنان، وهو ما يذهل العقول دقةً وإعجازاً."
    }
  },
  {
    id: "comic-mudathir",
    title: "الكتاب التفاعلي الرابع: تفسير وشرح سورة المدثر ⚡",
    url: "https://drive.google.com/file/d/1VpRUmNn_pyyjRpb7J_JYj3MCOdR51iTc/view?usp=sharing",
    type: "quran",
    typeNameAr: "القرآن والتجويد",
    shortDesc: "تصفَّح التوجيهات البليغة لنبي الرحمة بالنهوض لإنذار البشرية وتطهير الثياب وترك الردى والتحذير من عواقب الإعراض عن الحق الإلهي.",
    moralLessons: [
      "القيام بمسؤولية الخير والنصح والوعظ بجد ونشاط، والابتعاد عن الكسل والتقاعس في واجبات الحياة.",
      "المحافظة الدائمة والمستمرة على طهارة الثياب والظاهر ونقاء القلب، صيانةً لرسالة ونبوغ الروح.",
      "تحذير العقول من الكبر والبعد والفرار من الحق تفادياً للخسارة وندم أصحاب سقر في الآخرة."
    ],
    quiz: {
      question: "ماذا وجَّه وأمر الله تعالى نبيه الكريم ﷺ بمفتتح سورة المدثر المباركة مباشرة بعد تأكيد رسالته الشريفة؟",
      options: [
        "﴿قُمْ فَأَنذِرْ * وَرَبَّكَ فَكَبِّرْ * وَثِيَابَكَ فَطَهِّرْ﴾ لبناء الاستعداد الدعوي والطهارة الشاملة",
        "تأخير الصلوات حتى تعود القوافل من رحلات الصيف",
        "جمع ثروات مكة وكنوزها وبناء البيوت الكبيرة الشاهقة"
      ],
      correctIndex: 0,
      explanation: "أمر الله تعالى نبيه بالقيام فوراً لإنذار المشركين، وإفراد الخالق بالتعظيم والتكبير، وصيانة ثيابه من النجاسة والحصول على النقاء الكامل."
    }
  },
  {
    id: "comic-muzammil",
    title: "الكتاب التفاعلي الخامس: تفسير وشرح سورة المزمل 🌌",
    url: "https://drive.google.com/file/d/1Rm-0kziZBPpt2-IZ-DIIalSYlKqv6bS7/view?usp=sharing",
    type: "quran",
    typeNameAr: "القرآن والتجويد",
    shortDesc: "تعلّم وصايا قيام الليل الجليلة والصبر الشامخ على المرجفين المعارضين، من خلال كتاب سورة المزمل المصور الرائع.",
    moralLessons: [
      "صلاة وتهجد قيام الليل يورث القلب هدوءاً وثباتاً ويشحن ضمير الطالب بالطهارة والقوة النفسية.",
      "قراءة القرآن بالتؤدة والترتيل تتيح العيش المتأمل للآيات وفهم معاني التوحيد والعمل بما فيها بالبيت.",
      "الصبر الحسن الجميل على الأذى والإعراض الحكيم عن الجاهلين من قيم النبوة وأدب التبليغ والإرشاد."
    ],
    quiz: {
      question: "ما هو الهدي والأمر الإلهي الوارد في سورة المزمل الذي يرشد لأسلوب وسلوك قراءة القرآن وتلاوته بالشكل الصحيح؟",
      options: [
        "تلاوة السطور على عجل ومقاطعة المستمعين بالأفكار الخاصة دمجاً",
        "﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾ أي بقراءة هادئة متمهلة تبيّن الآيات وتخشع لها القلوب",
        "ترك تلاوة الآيات مطلقاً والاكتفاء بمطالعة المجلد الخارجي للكتاب"
      ],
      correctIndex: 1,
      explanation: "أرشد الخالق نبيه والمسلمين لترتيل التنزيل المبارك بتأنٍ وتمهل ليساعد النفس على التدبر والوعي للأوامر والنواهي ونطاق الرشاد العقدي."
    }
  },
  {
    id: "comic-mulk",
    title: "الكتاب التفاعلي السادس: تفسير وشرح سورة الملك 👑",
    url: "https://drive.google.com/file/d/1XP6Vr-MgZHFmhDT_0d5c0K8Udx-fIpfz/view?usp=sharing",
    type: "quran",
    typeNameAr: "القرآن والتجويد",
    shortDesc: "استشعر من كتاب السورة الواقية المصور عظمة الملكوت الإلهي وتماسك خلق السموات كاختبار للحياة وعمار النفوس بموجبات الإيمان الصادق.",
    moralLessons: [
      "أوجد الله الموت والعيش لغاية عظيمة ممثلة بابتلاء واختبار الخلق فيمن هو أحسن وأفضل عملاً وتلاحماً.",
      "التناسق العجيب المتقن لسماوات الملكوت يخلو من العيوب والكسور، داعياً الملاحظ للتأمل بإيمان وإجلال.",
      "الخالق محيط بخبايا الصدور ونيات النفوس وسر البشر، مما يورث العبد وازعاً ذاتياً للمحاسبة الدائمة."
    ],
    quiz: {
      question: "ما هو اللقب العريض والأثر الشهير لسورة الملك في الأثر النبوي لكونها تشفع وتحرس وتنجي قارئها؟",
      options: [
        "أنها السورة الواقية المنجية من عذاب القبر لمن يواظب على تلاوتها وتدبر أحكامها بأيامه",
        "تسهل عملية تشييد المنازل والزخرفة الخارجية للمساجد للعبد",
        "أنها تساعد الطلاب على كسب الأموال الوفيرة من التجارة العاجلة بالبلاد"
      ],
      correctIndex: 0,
      explanation: "أرشد السلف بناءً على الأحاديث بأن سورة الملك تبارك هي الشافعة المنجية من الفتنة والابتلاء وعذاب القبر."
    }
  },
  {
    id: "comic-7",
    title: "الكتاب التفاعلي السابع: العبادات ونداء الجمعة وعيد المؤمنين (الوحدة الخامسة) 🕌",
    url: "https://drive.google.com/file/d/1mtx-jJtzHW-CeNl-FnBEBPcQJQbCRsAR/view?usp=sharing",
    type: "fiqh",
    typeNameAr: "الفقه والعبادات",
    shortDesc: "تصفّح أحكام وفقه العبادات من صلاة الجمعة وشروط آدابها، صلاة العيدين وتكبيراتهما ومظاهر الفرح والتواصل الاجتماعي بالمنهج الرسمي.",
    moralLessons: [
      "يوم الجمعة عيد الأسبوع للمسلمين، ويتوجب تعظيمه بالاغتسال والتطيب ولبس أحسن الثياب والتبكير التام للمسجد.",
      "صلاة العيدين سنة مؤكدة يحمد فيها المؤمن ربه على توفيق العبادة، وتكبيراتها سبع بالركعة الأولى وخمس بالثانية بعد القيام.",
      "إفشاء المحبة والصفح ونشر الابتهاج وزيارة الأقارب ومعاونة المعوزين والفقراء في الأعياد تزيد روابط التكافل الاجتماعي قوة."
    ],
    quiz: {
      question: "ما هو الأدب الواجب والشرعي الصارم على المصلين عند ارتقاء الإمام للمنبر لإلقاء خطبة الجمعة؟",
      options: [
        "الإنصات التام والسكوت المطبق وتجنب أي لغو أو عبث باليدين والجسد، وترك الهمس ولو لطلب السكوت من زميله",
        "إلقاء التحية ومناقشة دروس الدراسة بصوت منخفض لا يضر الآخرين",
        "الاستماع المشوش وتصفح الجوال لقراءة المسائل الفقهية وقت الخطبة"
      ],
      correctIndex: 0,
      explanation: "النظام والسكينة من تمام العبادة، وينهى الشارع عن أي حديث أو لغو أثناء خطبة الجمعة، فمن قال لصاحبه 'أنصت' فقد لغا وضيع أجره."
    }
  },
  {
    id: "comic-8",
    title: "الكتاب التفاعلي الثامن: رواد الهداية وعطر السير العبقة (الوحدة السادسة) 👥",
    url: "https://drive.google.com/file/d/1QjTDrpEZhICLiy52uG9umitd7zqVivlO/view?usp=sharing",
    type: "seerah",
    typeNameAr: "السيرة والشخصيات",
    shortDesc: "تصفّح روائع السيرة العطرة وصحابة النور من الوحدة السادسة بالمنهج: رحلة المعراج، بذور بيعتي العقبة المضيئة، وفداء الصديق وغرس الوفاء بجوار النبوة.",
    moralLessons: [
      "الإسراء والمعراج رحلة إعجازية وتسلية ربانية لقلب المصطفى ﷺ أكدت عظم منزلة المسجد الأقصى والقدس الرفيعة وفيها فرضت الصلوات.",
      "تأسست معالم المؤاخاة وبناء ركائز حماية الدعوة عبر بيعتي العقبة الشجاعتين بمنى إعلاناً لوحدة الصف والضمير وبناء الدولة.",
      "سير الصحابة شموس هداية للبشرية: أبو بكر الصديق صاحب الهجرة، زيد بن حارثة حِبُّ رسول الله، وأبو ذر الغفاري أصدق الناس لهجة."
    ],
    quiz: {
      question: "بماذا لقَّب صحابة النور رضوان الله عليهم بطل الوفاء والشهادة زيد بن حارثة لوفائه الاستثنائي وحبه للنبي ﷺ؟",
      options: [
        "حِبُّ رسول الله ﷺ (الحِب بن الحِب) لوفائه واختياره البقاء بجوار النبي طوعاً على العودة لأهله وحريته",
        "الفاروق العادل لشدته بالحق وهيبته",
        "ذو النورين لزهده السلوكي الفريد"
      ],
      correctIndex: 0,
      explanation: "آثر زيد بن حارثة رضي الله عنه العيش مع النبي ﷺ ممتناً بمحبته الوفية ومفضلاً جواره المكرم على الذهاب مع والده وعمه حر طليق."
    }
  },
  {
    id: "comic-lut",
    title: "الكتاب التفاعلي التاسع: قصة نبي الله لوط وقيم العفة والطهور 🕊️",
    url: "https://drive.google.com/file/d/1B0ZzV1N_Yh_TpyFmC_2vWj_YFjU_ZfgT/view?usp=sharing",
    type: "seerah",
    typeNameAr: "السيرة والشخصيات",
    shortDesc: "قصة نبي الله لوط عليه السلام وعاقبة قومه الواردة بالوحدة الثانية لترسيخ عفة وسلامة وتطهير النفوس ومحيط الحياة.",
    moralLessons: [
      "العفة والتطهر والتقوى والاستقامة الأخلاقية هي حصون الصيانة والوقاية الأساسية لسلامة وأمن وصعود الأمة.",
      "الاستسلام للأهواء الشاذة ومخالفة هدي الفطرة النقية التي فطر الله الناس عليها ذنب جسيم يورث الخسران وعقوبات التدمير العاجل.",
      "الثبات والتمسك بالطهارة ومجابهة الفساد هو هدي لوط والفئة الصالحة الصغيرة التي نجاها الله تعالى برحمته وعدله المطبق."
    ],
    quiz: {
      question: "ما هي القيمة التربوية الأسمى والعبرة الجوهرية التي نحتفظ بها من دروس قصة نبي الله لوط عليه السلام لحماية بيئاتنا؟",
      options: [
        "الحفاظ على التطهر الأخلاقي، نبذ السلوكات الشاذة المنافية للفطرة السليمة، والوقوف مع الخير والفضيلة بعزة ووعي",
        "تجاهل النصيحة وترك المعاصي تفشو دون وازع من إيمان أو رغبة إيجابية",
        "السعي خلف المكاسب المادية السريعة ولو بالتخلي عن القيم والمبادئ الأساسية"
      ],
      correctIndex: 0,
      explanation: "الإسلام يعتني بنقاء الفرد وصيانة المجتمع، وتحثنا هذه الدروس على غرس معاني العفة والتربية القويمة ورفض دعاوى الفساد الفطرية."
    }
  },
  {
    id: "comic-travel",
    title: "الكتاب التفاعلي العاشر: أدب ودعاء السفر البري والجوي 🚗",
    url: "https://drive.google.com/file/d/1XVz1BPppJglClRV9dV3gnjZjsCbEbTQT/view?usp=sharing",
    type: "hadith",
    typeNameAr: "الحديث الشريف",
    shortDesc: "حصن نفسك في السير عبر البلدان والمراكب بقراءة منهج السفر للأطفال، وتعرف على دعاء السفر المأثور لتحقيق الأمان وحفظ النفس والآداب والوعي.",
    moralLessons: [
      "دعاء السفر واللجوء لرحاب الخالق يستجلب العناية الإلهية لتبتعد الوحشة والهموم عن المسافر عبر الرحلات الشاقة.",
      "الاستشعار والحمد الدائم لتسخير دابة الركوب والوسائل الحديثة للبلد من سيارات وقطارات وطائرات لتقريب المشاق وتيسير البناء.",
      "عودة المسافر بالسلام تنمي به دافعية الشكر لربه بالعمل النافع وبناء عمار الأرض بمكارم الدين."
    ],
    quiz: {
      question: "ما هي العبرة الهامة من قراءة دعاء السفر والالتزام بالذكر المأثور عند صعود الطائرات أو ركوب الدواب بالتعليم الديني؟",
      options: [
        "استشعار معية الله وتفويض أمن الرحلة وحفظ النفس والأهل لرب العباد والشكر على تيسير ركوب الدواب والوسائط",
        "إثبات السرعة العالية للسيارة ومنافسة السائقين الآخرين",
        "النوم طيلة المسار لتفادي تحية الركاب الرفاق بمقاعد الرحلة"
      ],
      correctIndex: 0,
      explanation: "دعاء السفر يربط المسافر بالله عز وجل، ويذكره بنعمة تسخير المركبات، ويمنحه ثقة وسكينة ويحفظه من كآبة المنظر وسوء المنقلب."
    }
  },
  {
    id: "comic-rahim",
    title: "الكتاب التفاعلي الحادي عشر: أدب صلة الرحم والترابط الأسري 👨‍👩‍👧‍👦",
    url: "https://drive.google.com/file/d/1yPJvYiGttsqOBt9g4DUWUeUeWEGHxyRA/view?usp=sharing",
    type: "hadith",
    typeNameAr: "الحديث الشريف",
    shortDesc: "تعرّف على فضل صلة الأرحام والقرابات والآثار الباهرة لصلة الرحم البركة في الرزق والعمر والسلام، وبناء مجتمع مستقر متعاطف.",
    moralLessons: [
      "صلة الرحم من أعظم القربات وأوجب الإحسان للأقارب والأهل، والبر بهم يطيل العمر ويبارك في الرزق والنشاط.",
      "إفشاء المحبة والتواصل المستمر بالسؤال والزيارة يعزز التضامن الأسري ويقوي أمن المجتمع.",
      "قطع الإحسان والقطيعة يعرض صاحبها لغضب الخالق وحرمان فضل القبول والرضوان الدنيوي والأخروي."
    ],
    quiz: {
      question: "ما هو الفضل والمكافأة النبوية الكبرى لمن يداوم ويصل رحمه وأقاربه بالبر والسؤال والمحبة الصادقة؟",
      options: [
        "أن ينسأ الله في أثره (يبارك بعمره وصحته) ويبسط ويبارك في رزقه ونماء معيشته",
        "الحصول على كميات إضافية من الفضة والذهب من جيرانه",
        "الترفع والابتعاد عن العمل وملازمة الخمول والكسل بالمنزل"
      ],
      correctIndex: 0,
      explanation: "أكد المصطفى ﷺ أن صلة الرحم باب لتدفق البركة المادية والصحية: (من أحب منكم أن يبسط له في رزقه وينسأ له في أثره فليصل رحمه)."
    }
  },
  {
    id: "comic-masajid",
    title: "الكتاب التفاعلي الثاني عشر: فضل عمارة المساجد ورسالتها السامية 🕌",
    url: "https://drive.google.com/file/d/1il5apkSPw2eX1Fo8zjo7PMdgjVOGRsEd/view?usp=sharing",
    type: "hadith",
    typeNameAr: "الحديث الشريف",
    shortDesc: "تعرف على منزلة المساجد وعظم ثواب بنائها وعمارتها الحسية والمعنوية، ورسالتها السامية في رعاية الأمة وتعليم العلوم الشرعية.",
    moralLessons: [
      "المساجد هي أحب البقاع للأرض بعيون الرحمن، لأنها منارة عبادة وذكر وبناء تلاحم المسلمين ومشاريع تعليم الأخلاق.",
      "دخول المسجد بهندام نظيف ورائحة طيبة والوقوف بسكينة يعكس رقي المسلم والوقار لرب السماوات بالعبادة.",
      "صيانة بيوت الله من الضجيج واللغو والغش التجاري تضمن صيانة هيبتها ورسالتها في ترسيخ السلام الإنساني."
    ],
    quiz: {
      question: "ما هما البقعتان المحددان بالتباين بالحديث الشهير بين أحب مدائن وبقاع الأرض للخالق وأبغض المعالم وأماكنها؟",
      options: [
        "أحبها المساجد لأثرها بذكر الله المرجو، وأبغضها الأسواق لما يطرأ فيها من كذب وخصومة وغش ولهو زائل",
        "الصحاري الشاسعة للرعي هي الأحب بينما يعتبر جبل مرة للأسواق الأبغض بالبلاد",
        "الملاعب الرياضية هي الأحب والمكتبات الورقية بالمدارس هي الأبغض للتلاميذ"
      ],
      correctIndex: 0,
      explanation: "المساجد قناديل هداية عامرة تضخ النور والمحاربة للأخطاء والتقسيم وهي الأحب، في حين تبغض الأسواق لما يقع بمزاجها من خداع وبخل وتزييف للأقدار والسلع."
    }
  },
  {
    id: "comic-prayer",
    title: "الكتاب التفاعلي الثالث عشر: الصلاة وأهميتها الفذة في حياة المسلم 🛐",
    url: "https://drive.google.com/file/d/14g283gNCjtnu0Bz4gowwvFxjq0ud4vgP/view?usp=sharing",
    type: "fiqh",
    typeNameAr: "الفقه والعبادات",
    shortDesc: "تدبّر عماد الدين القائم في كتاب الصلاة المصور، وتفهم حقيقتها كطهر يومي للذنوب، ومنبع للراحة النفسية والنمو السلوكي المستبصر.",
    moralLessons: [
      "الصلاة هي عماد الإسلام الفخيم الرصين، وركوبه الأعظم، من أقامها صان عهد دينه ومكارم أخلاقه بالبلد.",
      "تمثل الصلوات الخمس شلالاً عذباً يجري على عتبات العبد، يغسل الأوزار ويزيل الأدران والخطايا عاجلاً بوقته.",
      "الحركات المتوازنة بالركوع والوقار والسجود تصون الجسد بالعافية وتضخ السكينة الهادئة للنفوس المتأرجحة."
    ],
    quiz: {
      question: "بماذا مثل وشبَّه الرسول الودود ﷺ الصلوات الخمس بالأمر لبيان أثرها الرائع بمحو ذنوب وستر السيئات للمسلم؟",
      options: [
        "بالمزار المتآكل من الرمال والأشجار المقتطعة الأقدار",
        "بنهر عذب على باب المرء، يغسل جسده ويغتسل منه كل يوم خمس مرات حتى ينقى الصدر ولا يبقى من درنه شيء",
        "بالبئر المهجورة البعيدة عن المياه العميقة بالصحراء"
      ],
      correctIndex: 1,
      explanation: "إن مثل الصلوات الخمس كنهر جارٍ غمر وعذب يستحم منه الإنسان خمس مرات لتظل طهارة روحه وثوبه وذمته نقية بيضاء وصحيفة صلاته برهان نور."
    }
  },
  {
    id: "comic-fiqh",
    title: "الكتاب التفاعلي الرابع عشر: فقه العبادات وأحكام صلاة الجماعة لتوحيد تضامن الأمة 🕌",
    url: "https://drive.google.com/file/d/1QU2DltxTpw5ANjaNWZO-hf1Dq0if32qJ/view?usp=sharing",
    type: "fiqh",
    typeNameAr: "الفقه والعبادات",
    shortDesc: "اكتشف محاسن فقه الجماعة والائتمام الصارم بالإمام لتنظيم صفوف الصالحين وتأمل مضاعفة الفضل لسبع وعشرين درجة لتوحيد صف المسلمين.",
    moralLessons: [
      "صلاة الجماعة تقيم معاني المساواة والتراحم والتلاحم، حيث يقف الطالب مع جاره والفقير بجوار الغني بلا فوارق.",
      "الالتزام الفطن باتباع الإمام في الحركات بالركوع والسجود دون تسابق أو تباطؤ يعلمنا التنظيم والنظام بكل وقار بالدار.",
      "مضاعفة الأجر الإلهي لصلاة الجماعة تفوق السعي المنفرد بسبع وعشرين ضعفاً ترغيباً لنا في المحافظة على الجمع بالمسجد."
    ],
    quiz: {
      question: "كم ضعفاً وفضلاً ينعم به المصلي بجموع صلاته للمصطفى بالمسجد مع إمام المسلمين بالمقارنة مع ثواب صلاته فذاً منفرداً؟",
      options: [
        "تفوق بهامة صلاة الجماعة صلاة المنفرد بسبع وعشرين (٢٧) مرتبة ورصيداً متضاعفاً",
        "بنسبة مماثلة تماماً بلا تفضيل بالأجور",
        "بألفي طاحونة مائية من دقيق قمح بالبادية"
      ],
      correctIndex: 0,
      explanation: "أرشدنا الهدي النبوي الكريم بأن فضل الجماعة يبلغ سبعاً وعشرين درجة، تعبيراً ورمزاً لأجر اللقاء والتأخي ونمو الطاعة مع الجموع."
    }
  },
  {
    id: "comic-raee",
    title: "الكتاب التفاعلي الخامس عشر: قصة الراعي ومسؤولية الحاكم وعمر الصديق 🐑",
    url: "https://drive.google.com/file/d/1FASZHBdyNrDqS0QTVGdiI-_p8rWHpTrS/view?usp=sharing",
    type: "seerah",
    typeNameAr: "السيرة والشخصيات",
    shortDesc: "صاحب الخليفة عمر بن الخطاب في جولاته الليلية لكشف أحوال الأمة، واقرأ مواقف الراعي ومسؤولية الحفاظ على النزاهة والعدل بجوار النبوة.",
    moralLessons: [
      "الرعاية والمسؤولية أمانة شرعية ثقيلة بالوجود، وسيسأل عنها الحاكم والأب والمربي والأم عن الرعية والتربية بوعي.",
      "العفو وحسن العمل وعين الرحمة تظهر بقصة عدل الخليفة عمر الصاحب عند حمله أكياس القمح وطبخه العشاء للأطفال بيده الكريمة.",
      "الضمير والنزاهة والعمل بصدق بلا تقاعس من هدي الصحابة وحراس الإيمان والمشاعل المنيرة لخدمة تراب الوطن."
    ],
    quiz: {
      question: "لماذا رفض الخليفة الفاروق عمر رضي الله عنه بطل الوفاء والعدالة أن يحمل خادمه 'أسلم' كيس الدقيق بالوجبة بالقصة الشهيرة؟",
      options: [
        "خشية وتذكراً للحساب والمسؤولية يوم الفزع الأكبر وقال: (أأنت تحمل وزري وحملي يوم القيامة؟!) دلالة على تحمله رعاية أمته بنفسه",
        "لقوة وضخامة يده الجسدية المادية ومحبة التفاخر أمام خادمه بذلك الوقت بقربه",
        "يريد كسب منافع سريعة لإنقاص البضائع الخاصة بالتجارة"
      ],
      correctIndex: 0,
      explanation: "جسد الفاروق رضي الله عنه ريادة وعدل الراعي الصارم خوفاً وسؤالاً من خالقه يوم الدين، حيث أصر على الطبخ وحمل الدقيق بنفسه بروح التواضع والمسؤولية المطلقة."
    }
  },
  {
    id: "comic-forgiveness",
    title: "الكتاب التفاعلي السادس عشر: العفو عند المقدرة ونبل النفوس 🤝",
    url: "https://drive.google.com/file/d/1g5lJ025ZIUKfjWLO_tsKd5fT6s9Be10Q/view?usp=sharing",
    type: "seerah",
    typeNameAr: "السيرة والشخصيات",
    shortDesc: "تصفّح قصة العفو عند المقدرة الرائعة والمصورة بالمنهج، وتأمل كيف قابل قيس بن إبراهيم الإساءة بالإحسان وعفا عن قاتل والده تبتلاً لله وتسامحاً.",
    moralLessons: [
      "العفو عند المقدرة شيمة النبلاء، يقشع البغضاء، ويطفئ نيران الفتن والثارات المظلمة بالمجتمع ليحل السلام والرحمة.",
      "كرم ضيافة الخائف الملهوف وإيثاره بالمسكن والزاد أصل متجذر من مكارم الأخلاق والمروءة والشهامة الإنسانية الصالحة.",
      "مجاهدة نوازع النفس نحو الانتقام والتجاوز لوجه الله تعالى تثبت عظمة التقوى وعمق الإيمان بقلب العبّاد الأبرار."
    ],
    quiz: {
      question: "كيف تصرّف قيس بن إبراهيم بعد أن تيقن وتأكد بأن ضيفه المستجير هو نفسه الرجل الذي قتل والده؟",
      options: [
        "عفا وسامحه لوجه الله، كتم غيظه، ووهبه مالاً ومركباً لينجو بحياته بعيداً عن طلاب الثأر وأهله",
        "سلّمه فوراً للأسرى وقام بمعاقبته بقسوة وشدة مفرطة أمام الخصوم بالبلاد",
        "طالبه بخدمة بستان التفاح طيلة الباقي من حياته بلا أجر أو معيشة"
      ],
      correctIndex: 0,
      explanation: "آثر قيس بن إبراهيم العفو والمسامحة ممتثلاً بمقام التقوى والشهامة الشاملة، مغلباً كظم الغيظ والرحمة الإنسانية المورثة لنور الرشاد."
    }
  }
];

interface ComicLibraryProps {
  onEarnStars: (stars: number) => void;
  completedStoryIds: string[];
  onMarkAsRead: (storyId: string) => void;
}

export default function ComicLibrary({ onEarnStars, completedStoryIds, onMarkAsRead }: ComicLibraryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeReaderStory, setActiveReaderStory] = useState<ComicStory | null>(null);
  
  // Quiz specific states in reader
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);
  const [isQuizCorrect, setIsQuizCorrect] = useState<boolean>(false);
  const [quizClaimedStories, setQuizClaimedStories] = useState<string[]>(() => {
    const saved = localStorage.getItem('claimed_story_quizzes');
    return saved ? JSON.parse(saved) : [];
  });

  const getDriveEmbedUrl = (url: string) => {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }
    return url;
  };

  const getDriveDownloadUrl = (url: string) => {
    const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
      return `https://drive.google.com/uc?export=download&id=${match[1]}`;
    }
    return url;
  };

  // Filter logic
  const filteredStories = comicStoriesList.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.type === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          story.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOpenReader = (story: ComicStory) => {
    setActiveReaderStory(story);
    setSelectedQuizOption(null);
    setIsQuizSubmitted(false);
    setIsQuizCorrect(false);
    
    // Automatically trigger read achievement if not read yet
    if (!completedStoryIds.includes(story.id)) {
      onMarkAsRead(story.id);
      onEarnStars(5); // 5 stars for discovering/opening the comic book!
      SoundEngine.playSuccess();
    } else {
      SoundEngine.playSparkle();
    }
  };

  const handleBackToLibrary = () => {
    setActiveReaderStory(null);
    SoundEngine.playSparkle();
  };

  const handleSubmitQuiz = () => {
    if (selectedQuizOption === null || !activeReaderStory) return;
    
    const correct = selectedQuizOption === activeReaderStory.quiz.correctIndex;
    setIsQuizCorrect(correct);
    setIsQuizSubmitted(true);
    
    if (correct) {
      SoundEngine.playSuccess();
      if (!quizClaimedStories.includes(activeReaderStory.id)) {
        const nextClaimed = [...quizClaimedStories, activeReaderStory.id];
        setQuizClaimedStories(nextClaimed);
        localStorage.setItem('claimed_story_quizzes', JSON.stringify(nextClaimed));
        onEarnStars(5); // Additional +5 stars for correct comprehension!
        SoundEngine.playTrophy();
      }
    } else {
      SoundEngine.playFailure();
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-2 text-right relative z-10" dir="rtl" id="comic-library-root-section">
      
      <AnimatePresence mode="wait">
        {!activeReaderStory ? (
          // STORY LISTINGS MAIN VIEW
          <motion.div
            key="list-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {/* Header Jumbotron */}
            <div className="bg-gradient-to-r from-[#D48166] to-[#A05C46] p-6 rounded-[2rem] text-white mb-8 shadow-md">
              <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
                <div>
                  <h1 className="text-xl sm:text-2xl font-black font-sans tracking-tight mb-2 flex items-center gap-2">
                    <span>📚 المكتبة التفاعلية لكتب المنهج والقصص المصورة</span>
                    <span className="text-xs bg-white/20 text-yellow-300 px-2 py-0.5 rounded-full font-bold animate-pulse">منهج السودان 🇸🇩</span>
                  </h1>
                  <p className="text-[#F1EBDC] text-xs leading-relaxed max-w-xl font-medium">
                    تصفّح واقرأ كتب وحدات التربية الإسلامية للصف الخامس الابتدائي كمؤلفات تفاعلية مصوّرة عبر أدوات Google Drive المباشرة! تعلّم أصول الدين والعقيدة والفقه والحديث والقرآن الشريف بمتعة، ثم أجب عن الأسئلة البسيطة لتحرز +١٠ نجوم كاملة لكل كتاب!
                  </p>
                </div>
                <div className="bg-white/10 shrink-0 text-white font-bold px-4 py-2.5 rounded-2xl border border-white/20 text-xs flex items-center gap-1.5 shadow-inner">
                  <Trophy className="w-4.5 h-4.5 text-yellow-300" />
                  <span>مكافآت قراءات المنهج: +٨٠ نجمة ⭐</span>
                </div>
              </div>
            </div>

            {/* Filter controls & Search */}
            <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-5 rounded-3xl mb-8 flex flex-col gap-5 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                
                {/* Custom input bar */}
                <div className="relative w-full md:w-1/3">
                  <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-[#8E8268]">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="ابحث بالاسم أو موضوع الدرس عن الكتاب والمحور..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#F7F3E9] text-[#4A453E] text-xs py-2.5 pr-10 pl-4 rounded-xl border border-[#DCD3C1] outline-none focus:border-[#D48166] focus:bg-white transition"
                    id="search-comics-input"
                  />
                </div>

                {/* Filter tags pill row */}
                <div className="flex flex-wrap gap-1.5 justify-end w-full md:w-auto">
                  <button
                    onClick={() => { setSelectedCategory('all'); SoundEngine.playSparkle(); }}
                    className={`text-[10px] font-black py-2 px-4 rounded-xl border transition cursor-pointer ${
                      selectedCategory === 'all'
                        ? 'bg-[#D48166] text-white border-[#D48166]'
                        : 'border-[#DCD3C1] hover:bg-[#E9E1CD] text-[#4A453E]'
                    }`}
                  >
                    تفحص كل الكتب 🌈
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('quran'); SoundEngine.playSparkle(); }}
                    className={`text-[10px] font-black py-2 px-3.5 rounded-xl border transition flex items-center gap-1 cursor-pointer ${
                      selectedCategory === 'quran'
                        ? 'bg-[#5A6B47] text-white border-[#5A6B47]'
                        : 'border-[#DCD3C1] hover:bg-[#E9E1CD]/30 text-[#5A6B47]'
                    }`}
                  >
                    <BookOpenCheck className="w-3.5 h-3.5" />
                    <span>القرآن والتجويد</span>
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('hadith'); SoundEngine.playSparkle(); }}
                    className={`text-[10px] font-black py-2 px-3.5 rounded-xl border transition flex items-center gap-1 cursor-pointer ${
                      selectedCategory === 'hadith'
                        ? 'bg-[#5A6B47] text-white border-[#5A6B47]'
                        : 'border-[#DCD3C1] hover:bg-[#E9E1CD]/30 text-[#8E8268]'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>الحديث الشريف</span>
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('creed'); SoundEngine.playSparkle(); }}
                    className={`text-[10px] font-black py-2 px-3.5 rounded-xl border transition flex items-center gap-1 cursor-pointer ${
                      selectedCategory === 'creed'
                        ? 'bg-[#5A6B47] text-white border-[#5A6B47]'
                        : 'border-[#DCD3C1] hover:bg-[#E9E1CD]/30 text-[#8E8268]'
                    }`}
                  >
                    <Heart className="w-3.5 h-3.5" />
                    <span>العقيدة الإسلامية</span>
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('fiqh'); SoundEngine.playSparkle(); }}
                    className={`text-[10px] font-black py-2 px-3.5 rounded-xl border transition flex items-center gap-1 cursor-pointer ${
                      selectedCategory === 'fiqh'
                        ? 'bg-[#5A6B47] text-white border-[#5A6B47]'
                        : 'border-[#DCD3C1] hover:bg-[#E9E1CD]/30 text-[#5A6B47]'
                    }`}
                  >
                    <span>🕌 الفقه والعبادات</span>
                  </button>
                  <button
                    onClick={() => { setSelectedCategory('seerah'); SoundEngine.playSparkle(); }}
                    className={`text-[10px] font-black py-2 px-3.5 rounded-xl border transition flex items-center gap-1 cursor-pointer ${
                      selectedCategory === 'seerah'
                        ? 'bg-[#5A6B47] text-white border-[#5A6B47]'
                        : 'border-[#DCD3C1] hover:bg-[#E9E1CD]/30 text-[#5A6B47]'
                    }`}
                  >
                    <span>👥 السيرة والصحابة</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Stories Grid cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="comics-visual-grid">
              {filteredStories.map((story) => {
                const isRead = completedStoryIds.includes(story.id);
                const isQuizCompleted = quizClaimedStories.includes(story.id);

                return (
                  <motion.div
                    key={story.id}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="bg-[#FAF9F6] border border-[#DCD3C1] hover:border-[#D48166] rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-[250px]"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className={`text-[9px] font-black py-0.5 px-2 rounded-full border ${
                          isRead 
                            ? 'bg-[#5A6B47]/10 text-[#5A6B47] border-[#5A6B47]/20'
                            : 'bg-amber-100 text-amber-700 border-amber-200 animate-pulse'
                        }`}>
                          {isRead ? "تمت قراءتها 📖 +٥ نجوم" : "قصة جديدة ✨"}
                        </span>
                        
                        <span className="text-[9px] bg-[#E9E1CD] text-[#8E8268] border border-[#DCD3C1] py-0.5 px-2 rounded">
                          {story.typeNameAr}
                        </span>
                      </div>

                      <h3 className="font-extrabold text-[#3A452E] text-xs sm:text-sm line-clamp-2 leading-snug mb-2 font-sans">
                        {story.title}
                      </h3>
                      <p className="text-[#8E8268] text-xs leading-relaxed line-clamp-3">
                        {story.shortDesc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#DCD3C1] flex items-center justify-between">
                      <span className="text-[10px] text-[#A05C46] font-bold flex items-center gap-0.5">
                        {isQuizCompleted ? "✅ اختبرت بنجاح" : "✍️ سؤال بانتظارك"}
                      </span>
                      
                      <button
                        onClick={() => handleOpenReader(story)}
                        className="bg-[#D48166] hover:bg-[#C26F54] text-white font-extrabold text-[10px] sm:text-xs py-2 px-3 rounded-xl transition flex items-center gap-1 cursor-pointer"
                      >
                        <span>اقرأ القصة المصورة 🎨</span>
                        <BookOpen className="w-3.5 h-3.5 shrink-0" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}

              {filteredStories.length === 0 && (
                <div className="col-span-full bg-[#FAF9F6] border border-[#DCD3C1] p-12 text-center rounded-3xl">
                  <span className="text-4xl mb-2 inline-block">📔</span>
                  <h4 className="font-bold text-sm text-[#3A452E]">لم نعثر على قصص تطابق كلمات البحث</h4>
                  <p className="text-xs text-[#8E8268] max-w-sm mx-auto leading-relaxed mt-1">
                    أعد تصفية الاختيارات أو تصفية البحث لتشاهد الشرائح الرائعة المتاحة لغرس قيم الإيمان.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          
          // DETAILED CARD COMPACT READER MODE
          <motion.div
            key="reader-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          >
            {/* Left Column / Main visual reader */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Toolbar */}
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-4 rounded-2xl flex items-center justify-between gap-4">
                <button
                  onClick={handleBackToLibrary}
                  className="text-xs text-[#8E8268] hover:text-[#3A452E] font-black flex items-center gap-1 px-3 py-1.5 bg-[#F1EBDC] hover:bg-[#E9E1CD] rounded-xl transition cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4 text-[#8E8268]" />
                  <span>العودة لكتالوج القصص</span>
                </button>
                
                <h2 className="font-extrabold text-[11px] sm:text-xs text-[#3A452E] truncate max-w-xs sm:max-w-md">
                  {activeReaderStory.title}
                </h2>

                <div className="flex items-center gap-2">
                  <a 
                    href={activeReaderStory.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] text-white font-bold bg-[#D48166] hover:bg-[#C26F54] px-3 py-1.5 rounded-xl transition flex items-center gap-1 cursor-pointer"
                  >
                    <span>عرض بكامل الشاشة 🌐</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Reader embedded Frame */}
              <div className="bg-[#FAF9F6] border-2 border-[#DCD3C1] rounded-[2rem] overflow-hidden shadow-md relative h-[500px] sm:h-[650px] flex flex-col bg-stone-100">
                <iframe
                  src={getDriveEmbedUrl(activeReaderStory.url)}
                  className="w-full h-full border-none"
                  allow="autoplay"
                  referrerPolicy="no-referrer"
                  title={activeReaderStory.title}
                />
              </div>

              {/* Safety notification tip underneath */}
              <div className="bg-[#FAF9F6]/80 border border-[#DCD3C1] p-4 rounded-2xl text-xs text-[#8E8268] flex items-start gap-2.5">
                <Info className="w-5 h-5 text-[#D48166] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  إذا لم يتم تحميل الكتاب المصوّر تلقائياً بسبب سياسة حماية المتصفحات، لا تقلق أبداً! يمكنك النقر مباشرة على زر 
                  <strong className="text-[#3A452E]"> "عرض بكامل الشاشة 🌐" </strong> 
                  في الأعلى ليفتح الملف فوراً في نافذة تابعة لقوقل درايف، ثم عد مجدداً لهنا لتجتاز الاختبار وتفوز بالنجوم!
                </p>
              </div>
            </div>

            {/* Right Column / Moral Lessons checklist & Comprehension Game */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Card 1: Moral points */}
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-5 rounded-3xl">
                <h3 className="font-black text-sm text-[#3A452E] mb-3 pr-2.5 border-r-4 border-[#5A6B47] flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#5A6B47]" />
                  <span>الدروس والعبر التربوية 💡</span>
                </h3>
                <p className="text-[10px] text-[#8E8268] mb-4">تدبر هذه الأخلاق لتنال النجاة والسعادة وتكسب محبة القريب والغريب:</p>
                
                <div className="space-y-3">
                  {activeReaderStory.moralLessons.map((lesson, idx) => (
                    <div key={idx} className="p-3 bg-[#F1EBDC]/40 border border-[#DCD3C1]/50 rounded-2xl text-xs flex gap-2.5 items-start">
                      <span className="w-5 h-5 rounded-full bg-[#5A6B47] text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="font-medium text-[#4A453E] leading-relaxed">
                        {lesson}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Interactive quiz for +5 Stars */}
              <div className="bg-[#FAF9F6] border border-[#D48166] p-5 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-[#D48166]/10 rounded-full blur-xl pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-extrabold text-xs sm:text-sm text-[#3A452E] flex items-center gap-1.5">
                    <Trophy className="w-4 h-4 text-[#D48166]" />
                    <span>تحدي المعلم الصغير الذكي 🧠</span>
                  </h3>
                  
                  {quizClaimedStories.includes(activeReaderStory.id) && (
                    <span className="text-[9px] font-black text-[#5A6B47] bg-[#5A6B47]/10 py-0.5 px-2 rounded-full border border-[#5A6B47]/20">
                      مكتمل +٥ نجوم ⭐
                    </span>
                  )}
                </div>

                <p className="text-xs text-[#8E8268] mb-4">
                  أثبت استيعابك لأخلاق هذه القصة لتفوز بـ ٥ نجوم مباركة تنظم لعداد رصيدك!
                </p>

                {/* Question box */}
                <div className="bg-white/80 border border-[#DCD3C1] p-3.5 rounded-2xl text-xs font-bold leading-relaxed mb-4 text-[#3A452E]">
                  {activeReaderStory.quiz.question}
                </div>

                {/* Option radios */}
                <div className="space-y-2">
                  {activeReaderStory.quiz.options.map((option, oIdx) => {
                    const isSelected = selectedQuizOption === oIdx;
                    let optionStyle = "border-[#DCD3C1] hover:bg-[#E9E1CD]/30 text-[#4A453E] bg-white";
                    
                    if (isSelected) {
                      optionStyle = "border-[#D48166] bg-[#D48166]/5 text-[#A05C46] font-black";
                    }

                    if (isQuizSubmitted) {
                      const isCorrectAnswer = oIdx === activeReaderStory.quiz.correctIndex;
                      if (isCorrectAnswer) {
                        optionStyle = "border-[#5A6B47] bg-[#5A6B47]/10 text-[#3A452E] font-black";
                      } else if (isSelected) {
                        optionStyle = "border-red-300 bg-red-50 text-red-700";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={isQuizSubmitted}
                        onClick={() => setSelectedQuizOption(oIdx)}
                        className={`w-full p-3 rounded-xl border text-right text-xs transition flex gap-2 items-center ${optionStyle} ${
                          !isQuizSubmitted ? 'pointer-events-auto cursor-pointer' : 'pointer-events-none'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'border-[#D48166] text-[#D48166]' : 'border-[#DCD3C1]'
                        }`}>
                          {isSelected && <div className="w-2.5 h-2.5 bg-[#D48166] rounded-full"></div>}
                        </div>
                        <span className="leading-snug">{option}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Submit / Status overlay */}
                <div className="mt-4">
                  {!isQuizSubmitted ? (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={selectedQuizOption === null}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-black text-white transition ${
                        selectedQuizOption !== null
                          ? 'bg-[#D48166] hover:bg-[#C26F54] shadow-sm cursor-pointer'
                          : 'bg-[#DCD3C1] cursor-not-allowed'
                      }`}
                    >
                      تحقق من صحة الجواب وبث نجومي ⭐
                    </button>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-3.5 rounded-2xl border text-xs text-right space-y-1.5 ${
                        isQuizCorrect
                          ? 'bg-[#5A6B47]/5 border-[#5A6B47] text-[#3A452E]'
                          : 'bg-red-50 border-red-200 text-red-900'
                      }`}
                    >
                      <div className="font-extrabold flex items-center gap-1 text-[11px] sm:text-xs">
                        <span>{isQuizCorrect ? "🎉 إجابة موفقة وعظيمة!" : "⚠️ إجابة بحاجة لمراجعة."}</span>
                        {isQuizCorrect && !quizClaimedStories.includes(activeReaderStory.id) && (
                          <span className="text-yellow-600 font-bold">حصدت +٥ نجوم!</span>
                        )}
                      </div>
                      <p className="leading-relaxed text-[10px] sm:text-xs text-[#8E8268]">
                        <strong>التوضيح:</strong> {activeReaderStory.quiz.explanation}
                      </p>
                      
                      {!isQuizCorrect && (
                        <button
                          onClick={() => {
                            setSelectedQuizOption(null);
                            setIsQuizSubmitted(false);
                            SoundEngine.playSparkle();
                          }}
                          className="text-[10px] font-black text-red-700 hover:underline mt-1.5"
                        >
                          حاول مجدداً 🔁
                        </button>
                      )}
                    </motion.div>
                  )}
                </div>

              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
