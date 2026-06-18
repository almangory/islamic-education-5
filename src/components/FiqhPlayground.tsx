import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  HelpCircle, 
  HeartHandshake, 
  Check, 
  Flame, 
  Sparkles, 
  Info, 
  X,
  Volume2,
  Bookmark,
  Users,
  Clock,
  MoonStar,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import SoundEngine from '../lib/audio';

// ============== GAME 1: Congregational Positioning / Rules Data ==============
interface CongregationQuiz {
  id: number;
  scenario: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const congregationScenarios: CongregationQuiz[] = [
  {
    id: 1,
    scenario: "يقف الإمام ليصلي بالناس، وجاء مأموم واحد منفرد ليدخل في الصلاة معه.",
    question: "أين يجب أن يقف المأموم الواحد بجانب الإمام بوقار وسكينة؟",
    options: [
      "خلف الإمام مباشرة بمسافة متر",
      "على يمين الإمام مساوياً له أو متأخراً عنه يسيراً",
      "على يسار الإمام متقدماً عنه"
    ],
    correctAnswer: 1,
    explanation: "السنة الصحيحة للمأموم الواحد أن يقف عن يمين الإمام، وإذا جاء مأموم ثانٍ يرجع كلاهما خلف الإمام."
  },
  {
    id: 2,
    scenario: "صلاة الجماعة هي مظهر عظيم يحقق الألفة والمساواة بين المسلمين.",
    question: "ما هو الحد الأدنى لمنعزل أو رفقاء لتنعقد وتصح به صلاة الجماعة بالشرع؟",
    options: [
      "اثنان فقط (الإمام ومأموم واحد معه)",
      "ثلاثة مصلين على الأقل",
      "عشرة رجاء متفقين"
    ],
    correctAnswer: 0,
    explanation: "تنعقد الجماعة باثنين فصاعداً (إمام ومعه مأموم واحد)، وكلما كثر المصلون كان أحب للبارئ وأكثر أجراً."
  },
  {
    id: 3,
    scenario: "رجل اعتاد صلاة الجماعة بالمسجد ورجل آخر يصلي غائباً منفرداً بالبيت كبراً.",
    question: "بكم درجة تفضل صلاة الجماعة صلاة الفرد المنفرد في ميزان الأجر الإلهي؟",
    options: [
      "تفضلها بسبع وعشرين (٢٧) درجة من الخير",
      "تفضلها بثلاثة درجات فقط",
      "تتساوى الصلاتين بالأجر"
    ],
    correctAnswer: 0,
    explanation: "بين نبينا أن صلاة الجماعة تفضل وتزيد عن صلاة الفرد بـ ٢٧ مرقاة تشجيعاً للقاء الإيماني اليومي الحاسم."
  }
];

// ============== GAME 2: Sunan & Witr Sorter Data ==============
interface PrayerTypeItem {
  id: number;
  name: string;
  desc: string;
  category: 'rawatib' | 'raghibah' | 'shaf_witr' | 'fard';
}

const prayerTypeItems: PrayerTypeItem[] = [
  { id: 1, name: "ركعتان خفيفتان قبل الفجر المكتوب", desc: "آكد النوافل وهي خير من الدنيا وما فيها بحديث نبي الرحمة.", category: 'raghibah' },
  { id: 2, name: "أربع ركعات قبل الظهر وركعتان بعدها", desc: "من السنن الرواتب التابعة الملازمة للفريضة لمغفرة الزلات.", category: 'rawatib' },
  { id: 3, name: "صلاة ركعتين زوجيتين بركوب سورتي الأعلى والكافرون بالليل", desc: "الشفع المبارك كمسك تعبد قبل ركعة ختام الليل بالتوحيد.", category: 'shaf_witr' },
  { id: 4, name: "ركعة فردية نختم بها صلوات الليل بعد الإخلاص والمعوذتين", desc: "صلاة الوتر التي يحبها البارئ واصطفاها ختاماً للعبادة.", category: 'shaf_witr' },
  { id: 5, name: "ركعتان بعد صلاة المغرب المكتوبة وركعتان بعد العشاء", desc: "سن رواتب ملاصقة للفريضة لجبر النواقص وحراسة الأجور.", category: 'rawatib' },
  { id: 6, name: "صلاة العصر المكتوبة ٤ ركعات غدوة", desc: "فريضة حاسمة يوجب أداؤها بوقتها الشرعي الكامل بوقار.", category: 'fard' }
];

// ============== GAME 3: Sujud Al-Sahw Decision Data ==============
interface SahwQuiz {
  id: number;
  scenario: string;
  issue: string; // "قصور/نقص" or "طرو زيادة"
  options: string[]; // ["سجود قبل السلام", "سجود بعد السلام"]
  correctIdx: number;
  explanation: string;
}

const sahwScenarios: SahwQuiz[] = [
  {
    id: 1,
    scenario: "نسي المصلي قراءة التشهد الأول بالجلوس بالركعة الثانية وقام مباشرة للثالثة سهواً.",
    issue: "نقص أحد سنن الصلاة المؤكدة بالسهو",
    options: ["سجود قبل السلام (جبران النقص)", "سجود بعد السلام (ترغيم الزيادة)"],
    correctIdx: 0,
    explanation: "يسجد المصلي سجدتي السهو قبل السلام إذا طرأ نقص في الصلاة (كنسيان التشهد الأول) تعويضاً وجبراً لها."
  },
  {
    id: 2,
    scenario: "صلى الظهر خمس ركعات سهواً بدلاً عن أربع ركعات، وتذكر ذلك أثناء تشهده الأخير.",
    issue: "زيادة ركن فعلي بالصلاة بالسهو",
    options: ["سجود قبل السلام (تعويض التقصير)", "سجود بعد السلام (ترغيم الزيادة وإذلال الشيطان)"],
    correctIdx: 1,
    explanation: "يسجد المصلي سجدتي السهو بعد السلام إذا طرأ زيادة في الصلاة (كركعة كاملة أو سجدة زائدة) تنظيماً للأحكام."
  },
  {
    id: 3,
    scenario: "شك المصلي في صلاته الثنائية هل صلى ركعة واحدة أم ركعتين، وبنى على اليقين وهو الأقل (ركعة واحدة).",
    issue: "الشك المصحوب ببناء طهارة اليقين",
    options: ["سجود قبل السلام لتمام الجبر", "سجود بعد السلام للفرح"],
    correctIdx: 0,
    explanation: "إذا شك المصلي بالعدد بنى على الأقل وسجد سجدتين للسهو قبل السلام لجبر الاحتمال الناقص بصلاته."
  },
  {
    id: 4,
    scenario: "أنس بصلاته فسلم سهواً من ركعتين في صلاة العشاء، ثم تذكره الناس فوراً فقام فأتم الركعتين الباقيتين.",
    issue: "السلام والزيادة اللفظية سهواً بالوسط",
    options: ["سجود قبل السلام", "سجود بعد السلام لرد الفراغ والزيادة"],
    correctIdx: 1,
    explanation: "عند حدوث سلام مبكر ثم الإتمام فوراً، يكون السجود بعد السلام لوقوع لفظ السلام الزائد بوسط الصلاة."
  }
];

// ============== GAME 4: Missed Prayers Timeline Data ==============
interface MissedPrayer {
  id: string;
  name: string;
  order: number; // Correct theological sequence
  color: string;
}

const initialMissedPrayers: MissedPrayer[] = [
  { id: 'asr', name: "صلاة العصر 🌅", order: 2, color: "from-amber-400 to-orange-500" },
  { id: 'maghrib', name: "صلاة المغرب 🌇", order: 3, color: "from-rose-400 to-pink-500" },
  { id: 'isha', name: "صلاة العشاء 🌃", order: 4, color: "from-indigo-400 to-purple-600" },
  { id: 'dhuhr', name: "صلاة الظهر ☀️", order: 1, color: "from-yellow-400 to-amber-500" }
];

// ============== GAME 5: Disruptors Radar Data ==============
interface UpgradedRadarItem {
  id: number;
  action: string;
  type: 'invalidates' | 'disliked' | 'forbidden';
  desc: string;
}

const upgradedRadarItems: UpgradedRadarItem[] = [
  { id: 1, action: "الضحك بصوت عالٍ والقهقهة أثناء السجود", type: "invalidates", desc: "الأصوات والمجال المضحك يبطل هيبة الخشوع والصلاة كلياً وتوجب الإعادة." },
  { id: 2, action: "مسابقة المأموم لإمامه بالركوع والسجود عمداً", type: "forbidden", desc: "تحرم مسابقة الإمام لقول نبينا: إنما جعل الإمام ليؤتم به فاحذروا تسبيقه." },
  { id: 3, action: "الالتفات يميناً ويساراً بدون حاجة ملحة بالوجه", type: "disliked", desc: "ينقص ثواب وأجر المصلي الخشع، لكنه لا يبطل الصلاة بالبدن." },
  { id: 4, action: "الكلام خارج أذكار صلاتك عمداً للرفيق", type: "invalidates", desc: "الحديث بكلام الخلائق والناس يبطل الصلاة ويفسد صلة البارئ فوراً." },
  { id: 5, action: "الحديث واللغو وخطيب الجمعة يلقي خطبته بالمنبر", type: "forbidden", desc: "من لغى وتكلم وصاحبه يخطب فقد لغت جمعته وذهب عنه فضل المحفل." },
  { id: 6, action: "تشبيك الأصابع وفرقعة المفاصل بالركعات", type: "disliked", desc: "تشغل المصلي عن مراقبة موضع تبتله وخوف ربه، وهي مكروهة نادرة الفلاح." },
  { id: 7, action: "التبسم البسيط الخفيف الخفي بلا صوت مسموع", type: "disliked", desc: "لا ينقض الصلاة ما دام صامتاً كلياً بغير أحرف تصدر وتسمع." }
];

export default function FiqhPlayground({ onEarnStars }: { onEarnStars: (stars: number) => void }) {
  const [activeSubTab, setActiveSubTab] = useState<'congregation' | 'sorter' | 'sahw' | 'foat' | 'radar'>('congregation');

  // Game 1 State: Congregational Positioning
  const [congIdx, setCongIdx] = useState<number>(0);
  const [congScore, setCongScore] = useState<number>(0);
  const [congAnswers, setCongAnswers] = useState<{ scenario: CongregationQuiz; correct: boolean }[]>([]);
  const [congComplete, setCongComplete] = useState<boolean>(false);

  // Game 2 State: Sunan & Witr Sorter
  const [sorterIndex, setSorterIndex] = useState<number>(0);
  const [sorterStarsEarned, setSorterStarsEarned] = useState<boolean>(false);
  const [sorterClassification, setSorterClassification] = useState<Record<number, string>>({});
  const [sorterComplete, setSorterComplete] = useState<boolean>(false);
  const [sorterScore, setSorterScore] = useState<number>(0);

  // Game 3 State: Sujud Al-Sahw Decision
  const [sahwIdx, setSahwIdx] = useState<number>(0);
  const [sahwPoints, setSahwPoints] = useState<number>(0);
  const [sahwAnswers, setSahwAnswers] = useState<{ q: SahwQuiz; userCorrect: boolean }[]>([]);
  const [sahwComplete, setSahwComplete] = useState<boolean>(false);

  // Game 4 State: Missed Prayers Timeline
  const [missedTimeline, setMissedTimeline] = useState<MissedPrayer[]>(() => {
    return [...initialMissedPrayers].sort(() => Math.random() - 0.5);
  });
  const [timelineSolved, setTimelineSolved] = useState<boolean>(false);
  const [timelineStarsClaimed, setTimelineStarsClaimed] = useState<boolean>(false);

  // Game 5 State: Upgraded Disruptors Radar
  const [radarIndex, setRadarIdx] = useState<number>(0);
  const [radarPoints, setRadarPoints] = useState<number>(0);
  const [radarAnswers, setRadarAnswers] = useState<{ item: UpgradedRadarItem; correct: boolean }[]>([]);
  const [radarComplete, setRadarComplete] = useState<boolean>(false);

  // ==================== Game 1 Logic (Congregational) ====================
  const handleCongregationChoice = (choiceIdx: number) => {
    const curScenario = congregationScenarios[congIdx];
    const isCorrect = choiceIdx === curScenario.correctAnswer;
    
    let curScore = congScore;
    if (isCorrect) {
      curScore += 1;
      setCongScore(curScore);
      SoundEngine.playSuccess();
    } else {
      SoundEngine.playFailure();
    }

    setCongAnswers(prev => [...prev, { scenario: curScenario, correct: isCorrect }]);

    if (congIdx < congregationScenarios.length - 1) {
      setCongIdx(prev => prev + 1);
    } else {
      setCongComplete(true);
      SoundEngine.playTrophy();
      // Calculate and reward stars
      const stars = curScore === congregationScenarios.length ? 4 : 2;
      onEarnStars(stars);
    }
  };

  const resetCongregationGame = () => {
    setCongIdx(0);
    setCongScore(0);
    setCongAnswers([]);
    setCongComplete(false);
    SoundEngine.playSparkle();
  };

  // ==================== Game 2 Logic (Sorter) ====================
  const handleSorterClassification = (category: 'rawatib' | 'raghibah' | 'shaf_witr' | 'fard') => {
    const item = prayerTypeItems[sorterIndex];
    const isCorrect = item.category === category;

    let computedScore = sorterScore;
    if (isCorrect) {
      computedScore += 10;
      setSorterScore(computedScore);
      SoundEngine.playSuccess();
    } else {
      SoundEngine.playFailure();
    }

    setSorterClassification(prev => ({ ...prev, [item.id]: category }));

    if (sorterIndex < prayerTypeItems.length - 1) {
      setSorterIndex(prev => prev + 1);
    } else {
      setSorterComplete(true);
      SoundEngine.playTrophy();
      if (!sorterStarsEarned) {
        // If they classify accurately
        const stars = computedScore >= 40 ? 4 : 2;
        onEarnStars(stars);
        setSorterStarsEarned(true);
      }
    }
  };

  const resetSorterGame = () => {
    setSorterIndex(0);
    setSorterScore(0);
    setSorterClassification({});
    setSorterComplete(false);
    SoundEngine.playSparkle();
  };

  // ==================== Game 3 Logic (Sujud Al-Sahw) ====================
  const handleSahwChoice = (idx: number) => {
    const curQ = sahwScenarios[sahwIdx];
    const isCorrect = idx === curQ.correctIdx;

    let computedPoints = sahwPoints;
    if (isCorrect) {
      computedPoints += 15;
      setSahwPoints(computedPoints);
      SoundEngine.playSuccess();
    } else {
      SoundEngine.playFailure();
    }

    setSahwAnswers(prev => [...prev, { q: curQ, userCorrect: isCorrect }]);

    if (sahwIdx < sahwScenarios.length - 1) {
      setSahwIdx(prev => prev + 1);
    } else {
      setSahwComplete(true);
      SoundEngine.playTrophy();
      const stars = computedPoints >= 45 ? 5 : 2;
      onEarnStars(stars);
    }
  };

  const resetSahwGame = () => {
    setSahwIdx(0);
    setSahwPoints(0);
    setSahwAnswers([]);
    setSahwComplete(false);
    SoundEngine.playSparkle();
  };

  // ==================== Game 4 Logic (Timeline) ====================
  const moveTimelineItem = (currIdx: number, targetIdx: number) => {
    if (targetIdx < 0 || targetIdx >= missedTimeline.length) return;
    const items = [...missedTimeline];
    const [temp] = items.splice(currIdx, 1);
    items.splice(targetIdx, 0, temp);
    setMissedTimeline(items);
    SoundEngine.playSparkle();
  };

  const checkTimelineSequence = () => {
    // Check if the order strictly goes 1, 2, 3, 4
    const isCorrect = missedTimeline.every((item, idx) => item.order === idx + 1);

    if (isCorrect) {
      setTimelineSolved(true);
      SoundEngine.playTrophy();
      if (!timelineStarsClaimed) {
        onEarnStars(3);
        setTimelineStarsClaimed(true);
      }
    } else {
      SoundEngine.playFailure();
      // Show failure prompt
      alert("الترتيب غير صحيح! تذكر وجوب قضاء الأبكر فالأخف زمنياً (الظهر أولاً، ثم العصر، ثم المغرب، ثم العشاء) جبراناً للفريضة.");
    }
  };

  const resetTimelineGame = () => {
    setMissedTimeline([...initialMissedPrayers].sort(() => Math.random() - 0.5));
    setTimelineSolved(false);
    SoundEngine.playSparkle();
  };

  // ==================== Game 5 Logic (Disruptors Radar) ====================
  const handleRadarChoice = (choice: 'invalidates' | 'disliked' | 'forbidden') => {
    const item = upgradedRadarItems[radarIndex];
    const isCorrect = item.type === choice;

    let computedPoints = radarPoints;
    if (isCorrect) {
      computedPoints += 10;
      setRadarPoints(computedPoints);
      SoundEngine.playSuccess();
    } else {
      SoundEngine.playFailure();
    }

    setRadarAnswers(prev => [...prev, { item, correct: isCorrect }]);

    if (radarIndex < upgradedRadarItems.length - 1) {
      setRadarIdx(prev => prev + 1);
    } else {
      setRadarComplete(true);
      SoundEngine.playTrophy();
      const obtainedStars = computedPoints >= 50 ? 5 : 2;
      onEarnStars(obtainedStars);
    }
  };

  const resetRadarGame = () => {
    setRadarIdx(0);
    setRadarPoints(0);
    setRadarAnswers([]);
    setRadarComplete(false);
    SoundEngine.playSparkle();
  };

  return (
    <div className="max-w-4xl mx-auto py-2 pr-1 pl-1 text-right relative z-10" dir="rtl" id="fiqh-playground-main">
      {/* Title & Welcome */}
      <div className="bg-gradient-to-r from-[#5A6B47] to-[#3A452E] p-6 rounded-[2rem] text-[#FAF9F6] mb-6 shadow-md border border-white/5">
        <div className="flex justify-between items-center gap-4 flex-col sm:flex-row">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 text-yellow-300 py-1 px-2.5 rounded-full mb-2 inline-block">
              المنهج الفقهي للأبرار
            </span>
            <h1 className="text-xl sm:text-2xl font-black font-sans tracking-tight mb-2">🕌 مَلعب الفقه والعبادات التفاعلي 🕌</h1>
            <p className="text-[#E9E1CD] text-xs leading-relaxed max-w-xl font-medium">
              أهلاً بك في ساحتنا التطبيقية المتكاملة لمنهج الصف الخامس الابتدائي! درب مهاراتك الفقهية بفرز صلوات الجماعة، وأوقات السنن والشفع والوتر، وفهم كاشف سجود السهو، وترتيب الفوائت لتحظى برضا خالقك وتجمع +١٥ جولة نجوم مضيئة ⭐
            </p>
          </div>
          <div className="bg-white/10 shrink-0 text-[#FAF9F6] font-bold px-4 py-2 rounded-2xl border border-white/20 text-xs flex items-center gap-1.5 shadow-inner">
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
            <span>نجوم بانتظارك! +١٥ نجمة ⭐</span>
          </div>
        </div>
      </div>

      {/* Modern Horizontal Navigation List */}
      <div className="flex gap-2 mb-6 bg-[#FAF9F6] border border-[#DCD3C1] p-1.5 rounded-2xl overflow-x-auto scroller-hidden">
        <button
          onClick={() => { setActiveSubTab('congregation'); SoundEngine.playSparkle(); }}
          className={`py-2 px-3 rounded-xl text-[10px] sm:text-xs font-black transition flex items-center gap-1.5 cursor-pointer outline-none whitespace-nowrap ${
            activeSubTab === 'congregation'
              ? 'bg-[#E9E1CD] text-[#3A452E] shadow-sm border border-[#DCD3C1]'
              : 'text-[#8E8268] hover:text-[#3A452E]'
          }`}
          id="btn-subtab-congregation"
        >
          <Users className="w-3.5 h-3.5 shrink-0 text-[#5A6B47]" />
          <span>ملعب صلاة الجماعة 👥</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('sorter'); SoundEngine.playSparkle(); }}
          className={`py-2 px-3 rounded-xl text-[10px] sm:text-xs font-black transition flex items-center gap-1.5 cursor-pointer outline-none whitespace-nowrap ${
            activeSubTab === 'sorter'
              ? 'bg-[#E9E1CD] text-[#3A452E] shadow-sm border border-[#DCD3C1]'
              : 'text-[#8E8268] hover:text-[#3A452E]'
          }`}
          id="btn-subtab-sorter"
        >
          <Bookmark className="w-3.5 h-3.5 shrink-0 text-[#8E8268]" />
          <span>فارز السنن والوتر ✨</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('sahw'); SoundEngine.playSparkle(); }}
          className={`py-2 px-3 rounded-xl text-[10px] sm:text-xs font-black transition flex items-center gap-1.5 cursor-pointer outline-none whitespace-nowrap ${
            activeSubTab === 'sahw'
              ? 'bg-[#E9E1CD] text-[#3A452E] shadow-sm border border-[#DCD3C1]'
              : 'text-[#8E8268] hover:text-[#3A452E]'
          }`}
          id="btn-subtab-sahw"
        >
          <Info className="w-3.5 h-3.5 shrink-0 text-amber-500" />
          <span>كاشف سجود السهو ⚠️</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('foat'); SoundEngine.playSparkle(); }}
          className={`py-2 px-3 rounded-xl text-[10px] sm:text-xs font-black transition flex items-center gap-1.5 cursor-pointer outline-none whitespace-nowrap ${
            activeSubTab === 'foat'
              ? 'bg-[#E9E1CD] text-[#3A452E] shadow-sm border border-[#DCD3C1]'
              : 'text-[#8E8268] hover:text-[#3A452E]'
          }`}
          id="btn-subtab-foat"
        >
          <Clock className="w-3.5 h-3.5 shrink-0 text-indigo-500" />
          <span>ترتيب قضاء الفوائت 🕒</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('radar'); SoundEngine.playSparkle(); }}
          className={`py-2 px-3 rounded-xl text-[10px] sm:text-xs font-black transition flex items-center gap-1.5 cursor-pointer outline-none whitespace-nowrap ${
            activeSubTab === 'radar'
              ? 'bg-[#E9E1CD] text-[#3A452E] shadow-sm border border-[#DCD3C1]'
              : 'text-[#8E8268] hover:text-[#3A452E]'
          }`}
          id="btn-subtab-radar"
        >
          <Flame className="w-3.5 h-3.5 shrink-0 text-[#D48166]" />
          <span>رادار المبطلات والمكروهات 📡</span>
        </button>
      </div>

      {/* Tab Area Layout */}
      <AnimatePresence mode="wait">

        {/* ===================== GAME 1: Congregational Arena ===================== */}
        {activeSubTab === 'congregation' && (
          <motion.div
            key="game-congregation"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-2xl mx-auto"
          >
            {!congComplete ? (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-6 rounded-3xl shadow-sm text-right">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs bg-[#E9E1CD] text-[#3A452E] px-3 py-1.5 rounded-full font-black border border-[#DCD3C1]/50">
                    سيناريوهات الجماعة: {congIdx + 1} من {congregationScenarios.length}
                  </span>
                  <span className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    النقاط الصحيحة: {congScore}
                  </span>
                </div>

                <div className="p-4 bg-[#F1EBDC] rounded-2xl mb-6 border border-[#DCD3C1]">
                  <h3 className="font-bold text-xs text-[#8E8268] mb-1">الوضعية المقترحة:</h3>
                  <p className="text-xs text-[#3A452E] leading-relaxed font-semibold">
                    {congregationScenarios[congIdx].scenario}
                  </p>
                </div>

                <h4 className="text-sm sm:text-base font-black text-[#3A452E] mb-6 leading-relaxed">
                  ❓ {congregationScenarios[congIdx].question}
                </h4>

                <div className="space-y-3">
                  {congregationScenarios[congIdx].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleCongregationChoice(idx)}
                      className="w-full text-right p-4 bg-white hover:bg-[#E9E1CD]/50 border border-[#DCD3C1] hover:border-[#5A6B47] rounded-2xl text-xs font-extrabold text-[#4A453E] transition duration-200 shadow-sm cursor-pointer outline-none block"
                    >
                      <span className="inline-block w-6 h-6 rounded-full bg-[#E9E1CD] text-[#3A452E] text-center leading-6 font-serif ml-3 font-black">
                        {idx === 0 ? 'أ' : idx === 1 ? 'ب' : 'ج'}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-8 rounded-3xl shadow-sm text-center">
                <span className="text-4xl block mb-2">👥</span>
                <h3 className="font-sans text-xl font-bold mb-2 text-[#3A452E]">مبارك يا فقيه الأوطان!</h3>
                <p className="text-xs text-[#8E8268] mb-6 font-medium">
                  لقد فرزت آداب ومواقف صلاة الجماعة الفضلى بالمسجد.
                </p>

                <div className="inline-flex flex-col items-center bg-[#E9E1CD] border border-[#DCD3C1] p-4 rounded-3xl mb-6 min-w-[200px]">
                  <span className="text-3xl font-black font-sans text-[#3A452E] mb-1">{congScore} / {congregationScenarios.length}</span>
                  <span className="text-xs text-[#5A6B47] font-bold">حصدت {congScore === congregationScenarios.length ? "٤ نجوم" : "نجمتين"} لدربك ⭐</span>
                </div>

                <div className="space-y-3 text-right max-h-[180px] overflow-y-auto border-t border-[#DCD3C1] pt-4 pr-1">
                  {congAnswers.map((ans, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-[#DCD3C1]/50 mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-[#8E8268]">سيناريو {i + 1}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${ans.correct ? 'bg-[#5A6B47]/10 text-[#5A6B47]' : 'bg-[#D48166]/10 text-[#D48166]'}`}>
                          {ans.correct ? 'إجابة صحيحة ✓' : 'لم تصب ✗'}
                        </span>
                      </div>
                      <p className="text-xs text-[#3A452E] font-medium leading-relaxed">{ans.scenario.scenario}</p>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-1">💡 {ans.scenario.explanation}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={resetCongregationGame}
                  className="bg-[#5A6B47] hover:bg-[#465337] text-white font-black py-2.5 px-6 rounded-xl mt-6 text-xs transition cursor-pointer outline-none"
                >
                  إعادة اختبار صلاة الجماعة 🔄
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ===================== GAME 2: Sunan Sorter ===================== */}
        {activeSubTab === 'sorter' && (
          <motion.div
            key="game-sorter"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-xl mx-auto"
          >
            {!sorterComplete ? (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-6 rounded-3xl shadow-sm text-center">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs bg-[#E9E1CD] text-[#3A452E] px-3 py-1.5 rounded-full font-black border border-[#DCD3C1]/50">
                    تصنيف الصلوات: {sorterIndex + 1} من {prayerTypeItems.length}
                  </span>
                  <span className="text-xs text-amber-600 font-bold bg-amber-50 border border-amber-100 px-3 py-1.5 rounded-full">
                    النقاط: {sorterScore} / {prayerTypeItems.length * 10}
                  </span>
                </div>

                <div className="bg-white border border-[#DCD3C1] p-8 rounded-2xl mb-6 shadow-inner text-center">
                  <span className="text-3xl block mb-2">✨</span>
                  <h3 className="font-bold text-[#3A452E] text-sm sm:text-base leading-relaxed mb-2">
                    « {prayerTypeItems[sorterIndex].name} »
                  </h3>
                  <p className="text-xs text-[#8E8268] max-w-sm mx-auto font-medium">
                    {prayerTypeItems[sorterIndex].desc}
                  </p>
                </div>

                <h4 className="text-xs text-[#8E8268] mb-4 font-black">ما هو التصنيف الفقهي الصحيح لهذه الصلاة؟</h4>

                <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                  <button
                    onClick={() => handleSorterClassification('rawatib')}
                    className="p-3 bg-white hover:bg-emerald-50 border border-[#DCD3C1] hover:border-emerald-600 text-[#3A452E] text-xs font-black rounded-xl cursor-pointer transition outline-none"
                  >
                    السنن الرواتب (١٠ ركعات)
                  </button>
                  <button
                    onClick={() => handleSorterClassification('raghibah')}
                    className="p-3 bg-white hover:bg-amber-50 border border-[#DCD3C1] hover:border-amber-500 text-[#3A452E] text-xs font-black rounded-xl cursor-pointer transition outline-none"
                  >
                    رغيبة الفجر القبلية
                  </button>
                  <button
                    onClick={() => handleSorterClassification('shaf_witr')}
                    className="p-3 bg-white hover:bg-indigo-50 border border-[#DCD3C1] hover:border-indigo-600 text-[#3A452E] text-xs font-black rounded-xl cursor-pointer transition outline-none"
                  >
                    صلاة الشفع والوتر
                  </button>
                  <button
                    onClick={() => handleSorterClassification('fard')}
                    className="p-3 bg-white hover:bg-rose-50 border border-[#DCD3C1] hover:border-rose-600 text-[#3A452E] text-xs font-black rounded-xl cursor-pointer transition outline-none"
                  >
                    صلاة الفريضة المكتوبة
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-8 rounded-3xl shadow-sm text-center">
                <span className="text-4xl block mb-2">🏆</span>
                <h3 className="font-sans text-xl font-bold mb-2 text-[#3A452E]">رائع! فرزت لينة الصلوات</h3>
                <p className="text-xs text-[#8E8268] mb-6 font-medium">
                  الآن تميز تماماً السنن الرواتب التابعة وصلاة الشفع والوتر ورغيبة الفجر القبلية.
                </p>

                <div className="inline-flex flex-col items-center bg-[#E9E1CD] border border-[#DCD3C1] p-4 rounded-3xl mb-6 min-w-[200px]">
                  <span className="text-3xl font-black font-sans text-[#3A452E] mb-1">{sorterScore} / {prayerTypeItems.length * 10}</span>
                  <span className="text-xs text-[#5A6B47] font-bold">حصدت {sorterScore >= 40 ? "٤ نجوم" : "نجمتين"} لدربك ⭐</span>
                </div>

                <button
                  onClick={resetSorterGame}
                  className="bg-[#5A6B47] hover:bg-[#465337] text-white font-black py-2.5 px-6 rounded-xl mt-4 text-xs transition cursor-pointer outline-none block mx-auto"
                >
                  إعادة تصنيف السنن والوتر 🔄
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ===================== GAME 3: Sujud Al-Sahw ===================== */}
        {activeSubTab === 'sahw' && (
          <motion.div
            key="game-sahw"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-2xl mx-auto"
          >
            {!sahwComplete ? (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-6 rounded-3xl shadow-sm text-right">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs bg-amber-100 text-[#3A452E] px-3 py-1.5 rounded-full font-black border border-amber-200">
                    أحوال السهو {sahwIdx + 1} من {sahwScenarios.length}
                  </span>
                  <span className="text-xs text-amber-700 font-bold bg-[#FAF9F6] border border-[#DCD3C1] px-3 py-1.5 rounded-full flex items-center gap-1">
                    النقاط: {sahwPoints} / 60
                  </span>
                </div>

                <div className="p-5 bg-white rounded-2xl mb-6 border border-[#DCD3C1] shadow-inner text-center">
                  <span className="text-3xl block mb-2">🤔</span>
                  <h4 className="font-bold text-[#3A452E] text-xs sm:text-sm leading-relaxed mb-1">
                    الحالة السهوية بالصلاة:
                  </h4>
                  <p className="text-xs text-amber-800 leading-normal max-w-sm mx-auto font-black">
                    {sahwScenarios[sahwIdx].scenario}
                  </p>
                  <p className="text-[10px] text-gray-500 mt-2">خلل يخص: {sahwScenarios[sahwIdx].issue}</p>
                </div>

                <h4 className="text-xs font-black text-[#3A452E] mb-6 text-center leading-relaxed">
                  ❓ كيف يجبر ويصحح المصلي هذا السهو شرعاً كمنهج الصف الخامس؟
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                  {sahwScenarios[sahwIdx].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSahwChoice(idx)}
                      className="text-center p-4 bg-white hover:bg-amber-50/50 border-2 border-dashed border-[#DCD3C1] hover:border-amber-500 rounded-2xl text-xs font-extrabold text-[#4A453E] transition duration-200 shadow-sm cursor-pointer outline-none block"
                    >
                      <span className="block text-xl mb-1">{idx === 0 ? '👈 قبل' : '👉 بعد'}</span>
                      <span className="block font-black text-[#3A452E]">{option}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-8 rounded-3xl shadow-sm text-center">
                <span className="text-4xl block mb-2">📡</span>
                <h3 className="font-sans text-xl font-bold mb-2 text-[#3A452E]">أكملت كاشف السهو بنجاح!</h3>
                <p className="text-xs text-[#8E8268] mb-6 font-medium">
                  صلاة المصلي مجبورة دائماً بسجدتي السهو ببركة الشريعة.
                </p>

                <div className="inline-flex flex-col items-center bg-[#E9E1CD] border border-[#DCD3C1] p-4 rounded-3xl mb-6 min-w-[200px]">
                  <span className="text-3xl font-black font-sans text-[#3A452E] mb-1">{sahwPoints} / 60</span>
                  <span className="text-xs text-[#5A6B47] font-bold">حصدت {sahwPoints >= 45 ? "٥ نجوم" : "نجمتين"} لدربك ⭐</span>
                </div>

                <div className="space-y-3 text-right max-h-[180px] overflow-y-auto border-t border-[#DCD3C1] pt-4 pr-1">
                  {sahwAnswers.map((ans, i) => (
                    <div key={i} className="bg-white p-3 rounded-xl border border-[#DCD3C1]/50 mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-bold text-[#8E8268]">الحالة {i + 1}</span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${ans.userCorrect ? 'bg-[#5A6B47]/10 text-[#5A6B47]' : 'bg-[#D48166]/10 text-[#D48166]'}`}>
                          {ans.userCorrect ? 'صواب✓' : 'خطأ✗'}
                        </span>
                      </div>
                      <p className="text-xs text-[#3A452E] font-medium leading-relaxed">{ans.q.scenario}</p>
                      <p className="text-[10px] text-emerald-700 font-semibold mt-1">💡 {ans.q.explanation}</p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={resetSahwGame}
                  className="bg-[#5A6B47] hover:bg-[#465337] text-white font-black py-2.5 px-6 rounded-xl mt-6 text-xs transition cursor-pointer outline-none"
                >
                  إعادة اختبار سجود السهو 🔄
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* ===================== GAME 4: Missed Prayers Timeline ===================== */}
        {activeSubTab === 'foat' && (
          <motion.div
            key="game-foat"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-6 rounded-3xl shadow-sm">
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <div>
                  <h3 className="font-bold text-sm text-[#3A452E] flex items-center gap-1">
                    <span>خط الزمن لقضاء الصلوات الفوائت</span>
                  </h3>
                  <p className="text-[#8E8268] text-[10px] mt-0.5 leading-relaxed font-semibold">
                    إذا نام مصلي ففاتته صلوات، يجب قضاؤها بترتيب وجوبي كما فاتت (الأبكر فالأبكر). رتب البطاقات من الأعلى (الأبكر) إلى الأسفل (الأحدث)!
                  </p>
                </div>
                {timelineSolved && (
                  <span className="text-[10px] font-black text-emerald-600 bg-emerald-50 border border-emerald-100 py-1 px-2.5 rounded-full animate-bounce">
                    نجاح الترتيب المرتب! +٣ نجوم ⭐
                  </span>
                )}
              </div>

              {/* Solved notification or instruction */}
              {timelineSolved ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-center py-6 mb-4">
                  <span className="text-3xl block mb-2">🎉</span>
                  <h4 className="font-black text-xs sm:text-sm mb-1">أحسنت الترتيب الشرعي لقضاء الفوائت البهية!</h4>
                  <p className="text-[10px] text-emerald-700 leading-relaxed max-w-xs mx-auto font-medium">
                    رتبت قضائها بالترتيب: الظهر أولاً ثم العصر ثم المغرب ثم العشاء، وهذا هو السلوك الفقهي السليم لجبر الذمة بوقار.
                  </p>
                  <button
                    onClick={resetTimelineGame}
                    className="bg-white hover:bg-emerald-100/50 text-emerald-800 font-bold border border-emerald-200 rounded-xl px-4 py-1.5 text-[10px] mt-4 cursor-pointer"
                  >
                    إعادة تجربة التحدي 🔄
                  </button>
                </div>
              ) : (
                <div className="space-y-2.5 mb-6" id="missed-prayers-timeline-list">
                  {missedTimeline.map((prayer, idx) => (
                    <div
                      key={prayer.id}
                      className="p-3 bg-white border border-[#DCD3C1] rounded-2xl flex items-center justify-between shadow-sm hover:border-[#5A6B47] transition duration-150"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 bg-[#3A452E] text-white text-xs font-serif rounded-full flex items-center justify-center font-bold">
                          {idx + 1}
                        </span>
                        <span className="text-xs font-extrabold text-[#3A452E]">
                          {prayer.name}
                        </span>
                      </div>

                      {/* Control buttons for ascending/descending sorting */}
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => moveTimelineItem(idx, idx - 1)}
                          disabled={idx === 0}
                          className="w-7 h-7 bg-[#E9E1CD] text-[#3A452E] disabled:opacity-20 text-[10px] font-black rounded-lg cursor-pointer hover:bg-[#FAF9F6]"
                        >
                          ▲
                        </button>
                        <button
                          onClick={() => moveTimelineItem(idx, idx + 1)}
                          disabled={idx === missedTimeline.length - 1}
                          className="w-7 h-7 bg-[#E9E1CD] text-[#3A452E] disabled:opacity-20 text-[10px] font-black rounded-lg cursor-pointer hover:bg-[#FAF9F6]"
                        >
                          ▼
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!timelineSolved && (
                <button
                  onClick={checkTimelineSequence}
                  className="w-full bg-[#5A6B47] hover:bg-[#465337] text-white font-black py-3 rounded-2xl text-xs sm:text-sm shadow transition duration-200 cursor-pointer outline-none"
                >
                  التحقق من صحة ترتيب قضاء الفوائت 🔍
                </button>
              )}
            </div>
          </motion.div>
        )}

        {/* ===================== GAME 5: Disruptors Radar ===================== */}
        {activeSubTab === 'radar' && (
          <motion.div
            key="game-radar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="max-w-2xl mx-auto"
          >
            {!radarComplete ? (
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-6 rounded-3xl shadow-sm text-center">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs bg-[#E9E1CD] text-[#3A452E] px-3 py-1.5 rounded-full font-black border border-[#DCD3C1]/50">
                    حالة الكاشف {radarIndex + 1} من {upgradedRadarItems.length}
                  </span>
                  <span className="text-xs text-[#D48166] font-bold bg-[#FAF9F6] border border-[#DCD3C1] px-3 py-1.5 rounded-full flex items-center gap-1">
                    النقاط: {radarPoints}
                  </span>
                </div>

                {/* Focus text item */}
                <h3 className="text-base sm:text-lg font-black text-[#3A452E] mb-2 leading-relaxed">
                  « {upgradedRadarItems[radarIndex].action} »
                </h3>
                <p className="text-xs text-[#8E8268] max-w-sm mx-auto mb-8 font-medium">
                  كيف تصنف الشريعة الإسلامية هذا الفعل في وقار الصلاة وقيم خطبتي الجمعة؟
                </p>

                {/* Big Tri-Sorting triggers */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
                  <button
                    onClick={() => handleRadarChoice('invalidates')}
                    className="p-4 bg-white hover:bg-[#D48166]/10 border-2 border-dashed border-[#D48166]/40 hover:border-[#D48166] text-[#D48166] font-black rounded-2xl text-xs transition text-center cursor-pointer outline-none"
                  >
                    <span className="block text-xl mb-1">❌</span>
                    <span>مبطلات الصلاة</span>
                    <span className="block text-[8px] font-medium text-[#8E8268] mt-1">تلغي الصلاة وتوجب الإعادة كلياً</span>
                  </button>

                  <button
                    onClick={() => handleRadarChoice('disliked')}
                    className="p-4 bg-white hover:bg-[#8E8268]/10 border-2 border-dashed border-[#DCD3C1] hover:border-[#8E8268] text-[#8E8268] font-black rounded-2xl text-xs transition text-center cursor-pointer outline-none"
                  >
                    <span className="block text-xl mb-1">⚠️</span>
                    <span>مكروهات الصلاة</span>
                    <span className="block text-[8px] font-medium text-[#8E8268] mt-1">تقلل الأجر ويجب كف النفس عنها</span>
                  </button>

                  <button
                    onClick={() => handleRadarChoice('forbidden')}
                    className="p-4 bg-white hover:bg-rose-50 border-2 border-dashed border-rose-200 hover:border-rose-600 text-rose-600 font-black rounded-2xl text-xs transition text-center cursor-pointer outline-none"
                  >
                    <span className="block text-xl mb-1">🚫</span>
                    <span>محرمات الجماعة</span>
                    <span className="block text-[8px] font-medium text-gray-500 mt-1">تفوت فضل الجمعة أو الجماعة إثماً</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Completion screen */
              <div className="bg-[#FAF9F6] border border-[#DCD3C1] p-8 rounded-3xl shadow-sm text-center">
                <span className="text-4xl block mb-2">📡</span>
                <h3 className="font-sans text-xl font-bold mb-2 text-[#3A452E]">أكملت فحص الرادار بنجاح!</h3>
                <p className="text-xs text-[#8E8268] mb-6 font-medium">
                  لقد فرزت كل الممارسات الخاطئة والمبطلة والمحرمة في صلاة الجماعة وفريضة الصلاة والجمعة.
                </p>

                <div className="inline-flex flex-col items-center bg-[#E9E1CD] border border-[#DCD3C1] p-4 rounded-3xl mb-6 min-w-[150px]">
                  <span className="text-3xl font-black font-sans text-[#3A452E] mb-1">{radarPoints} / {upgradedRadarItems.length * 10}</span>
                  <span className="text-xs text-[#5A6B47] font-bold">حصدت {radarPoints >= 50 ? "٥ نجوم" : "نجمتين"} لدرب معرفتك ⭐</span>
                </div>

                <div className="space-y-2 mt-4 max-h-[160px] overflow-y-auto border-t border-[#DCD3C1] pt-4" id="radar-answers-log">
                  {radarAnswers.map((ans, i) => (
                    <div key={i} className="flex justify-between items-center text-xs text-right py-1 pr-1 border-b border-[#DCD3C1]/20">
                      <span className="font-sans font-medium text-[#4A453E]">{ans.item.action}</span>
                      <span className={`font-bold px-2 py-0.5 rounded ${ans.correct ? 'bg-[#5A6B47]/10 text-[#5A6B47]' : 'bg-[#D48166]/10 text-[#D48166]'}`}>
                        {ans.correct ? 'صواب' : 'خطأ'}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={resetRadarGame}
                  className="bg-[#5A6B47] hover:bg-[#465337] text-white font-black py-2.5 px-6 rounded-xl mt-6 text-xs transition cursor-pointer outlook-none"
                >
                  إعادة تدريب الرادار 🔄
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
