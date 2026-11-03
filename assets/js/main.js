/* =========================================================
   Mohamed Ibrahim Aziz El-Din — Portfolio
   ---------------------------------------------------------
   1. SITE CONFIG  ← edit your contact details here
   2. Language engine (Arabic / English)
   3. UI interactions
   ========================================================= */

/* ---------------------------------------------------------
   1. SITE CONFIG
   Replace the values below with the real contact details.
   phone / whatsapp must be in international format with no
   spaces, plus signs or leading zeros.
   --------------------------------------------------------- */
const SITE = {
  phone: "+201026061588",
  phoneDisplay: "+20 102 606 1588",
  email: "hello@drmohamedaziz.com",
  whatsapp: "201026061588",
  instagram: "", // e.g. "https://instagram.com/your-handle"
  linkedin: ""   // e.g. "https://linkedin.com/in/your-profile"
};

/* ---------------------------------------------------------
   2. TRANSLATIONS
   The English copy lives in index.html. Arabic lives here
   in the AR map. The EN map only holds strings used by
   JavaScript — all other English text is captured from the
   HTML on load.
   --------------------------------------------------------- */
const EN = {
  "toast.opening": "Opening WhatsApp with your message…",
  "wa.greeting": "Hello Dr. Mohamed,",
  "wa.name": "Name",
  "wa.phone": "Phone",
  "wa.service": "Service",
  "wa.message": "Message",
  "meta.title": "Mohamed Ibrahim Aziz El-Din — Dentist",
  "meta.desc": "Mohamed Ibrahim Aziz El-Din, graduate of the Faculty of Oral & Dental Medicine at Ahram Canadian University, Class of 2023. Precise, human dental care in Cairo."
};

/* Arabic copy */
const AR = {
  "a11y.skip": "انتقل إلى المحتوى",
  "brand.name": "محمد عزيز",
  "brand.role": "طب الفم والأسنان",
  "nav.about": "عنه",
  "nav.expertise": "الخدمات",
  "nav.education": "التعليم",
  "nav.gallery": "الأعمال",
  "nav.contact": "تواصل",
  "cta.book": "احجز موعدك",
  "ui.menu": "القائمة",
  "nav.journey": "زيارتك",
  "hero.based": "القاهرة، مصر",
  "hero.watermark": "عناية",
  "hero.status": "نستقبل مرضى جدد · القاهرة",
  "hero.eyebrow": "طبيب أسنان · دفعة ٢٠٢٣",
  "hero.first": "محمد إبراهيم",
  "hero.last": "عزيز الدين",
  "hero.headline": "ابتسامة واثقة تبدأ بأن يُنصَت إليك.",
  "hero.sub": "خريج كلية طب الفم والأسنان بجامعة أهرام كندية، دفعة ٢٠٢٣. أؤمن أن طب الأسنان أكثر من علاج؛ إنه تجربة إنسانية دقيقة تبدأ بالاستماع، وتتضح بالشرح، وتنتهي بابتسامة تشبهك.",
  "hero.cta1": "احجز استشارة",
  "hero.cta2": "تعرّف على منهجي",
  "hero.cred1": "بكالوريوس طب الفم والأسنان",
  "hero.cred2": "جامعة أهرام كندية",
  "hero.cred3": "دفعة ٢٠٢٣",
  "hero.card": "جامعة أهرام كندية",
  "hero.scroll": "مرّر للأسفل",
  "marq.1": "طب أسنان عام",
  "marq.2": "تجميل الأسنان",
  "marq.3": "علاج الجذور",
  "marq.4": "الترميم",
  "marq.5": "الوقاية",
  "marq.6": "توعية المرضى",
  "about.kicker": "عنه",
  "about.title": "أيدٍ دقيقة، شرح واضح، وخطة علاج مصممة لك.",
  "about.sign": "محمد إبراهيم",
  "about.p1": "أنا محمد إبراهيم عزيز الدين، طبيب أسنان خريج جامعة أهرام كندية عام ٢٠٢٣، حاصل على بكالوريوس طب الفم والأسنان. منهجي الإكلينيكي بسيط: أفهم أولًا، وأشرح بصدق، ثم أعالج بدقة.",
  "about.p2": "كل ابتسامة مختلفة. لذلك أمنح الوقت الكافي للاستماع إلى ما يهمك — راحةً كانت أو وظيفة أو ثقة — وأبني خطة العلاج حول حياتك، لا العكس.",
  "about.p3": "أهتم بأن تفهم ما يحدث في فمك، وأن تعرف خياراتك قبل أن تختار. لأن الرعاية الجيدة تبدأ بالوضوح، وتستمر بالثقة.",
  "about.tag1": "استماع أولًا",
  "about.tag2": "خطة واضحة",
  "about.tag3": "لمسة هادئة",
  "stats.grad.l": "سنة التخرج",
  "stats.grad.v": "٢٠٢٣",
  "stats.uni.l": "الجامعة الأم",
  "stats.deg.l": "الدرجة العلمية",
  "stats.loc.l": "مقر العمل",
  "stats.loc.v": "القاهرة",
  "exp.kicker": "الخدمات",
  "exp.title": "رعاية مدروسة، في كل مرحلة.",
  "exp.sub": "من الفحص الأول إلى المتابعة، كل خطوة تُبنى على تشخيص دقيق وحوار صريح — لأن أفضل علاج هو الذي يناسبك فعلًا.",
  "exp.1.t": "طب الأسنان العام",
  "exp.1.d": "فحص شامل، تشخيص دقيق، وخطة علاج واضحة من أول زيارة.",
  "exp.2.t": "تجميل الأسنان",
  "exp.2.d": "تبييض، عدسات، وتصميم ابتسامة يحترم ملامح وجهك.",
  "exp.3.t": "علاج الجذور",
  "exp.3.d": "علاج دقيق للب الأسنان للحفاظ على السن الطبيعي.",
  "exp.4.t": "الترميم والحشوات",
  "exp.4.d": "ترميم تجميلي متين يعيد للسن شكله ووظيفته.",
  "exp.5.t": "اللثة والوقاية",
  "exp.5.d": "تنظيف، علاج التهاب اللثة، وخطة وقاية طويلة المدى.",
  "exp.6.t": "أسنان الأطفال",
  "exp.6.d": "تجربة لطيفة وآمنة تبني علاقة إيجابية مع طبيب الأسنان.",
  "edu.kicker": "التعليم",
  "edu.title": "أساس أكاديمي من جامعة أهرام كندية.",
  "edu.lead": "بدأت رحلتي في طب الأسنان من كلية طب الفم والأسنان بجامعة أهرام كندية، حيث جمعت الدراسة بين الأساس العلمي والتدريب الإكلينيكي.",
  "edu.cv": "السيرة الذاتية الكاملة متاحة عند الطلب.",
  "edu.cvLink": "اطلب السيرة الذاتية",
  "edu.degreeLabel": "الدرجة العلمية",
  "edu.degree": "بكالوريوس طب الفم والأسنان",
  "edu.school": "كلية طب الفم والأسنان — جامعة أهرام كندية",
  "edu.desc": "تدريب أكاديمي وإكلينيكي شامل في طب الفم والأسنان، مع تركيز على الممارسة القائمة على الدليل ورعاية المريض.",
  "edu.class": "دفعة ٢٠٢٣",
  "edu.city": "القاهرة، مصر",
  "edu.focusLabel": "الاهتمام الإكلينيكي",
  "edu.chip1": "تجميل الأسنان",
  "edu.chip2": "العلاج اللبي",
  "edu.chip3": "الترميم",
  "edu.chip4": "طب الأسنان الوقائي",
  "quote.text": "أجمل ما في طب الأسنان أنك لا تعالج سنًا فقط، بل تعيد الثقة إلى وجه إنسان.",
  "quote.by": "د. محمد إبراهيم عزيز الدين",
  "quote.role": "طبيب أسنان · القاهرة",
  "phil.caption": "أدوات العمل — القاهرة",
  "gal.kicker": "الأعمال",
  "gal.title": "الحرفة، عن قرب.",
  "gal.sub": "لقطات إكلينيكية وتفاصيل من العيادة — توثيق هادئ للعمل اليومي وللدقة التي يستحقها كل سن.",
  "gal.f1": "الكل",
  "gal.f2": "إكلينيكي",
  "gal.f3": "تفاصيل",
  "gal.tagClinical": "إكلينيكي",
  "gal.1.t": "توثيق إكلينيكي · ٠١",
  "gal.1.s": "تفاصيل العلاج",
  "gal.tagDetail": "تفاصيل",
  "gal.5.t": "صينية الأدوات",
  "gal.5.s": "جاهزة للعمل",
  "gal.2.t": "توثيق إكلينيكي · ٠٢",
  "gal.2.s": "نظرة عن قرب",
  "gal.3.t": "داخل العيادة",
  "gal.3.s": "دقة في كل تفصيلة",
  "gal.6.t": "تحضير الأدوات",
  "gal.6.s": "قبل البدء",
  "gal.4.t": "تفاصيل العلاج",
  "gal.4.s": "توثيق دقيق",
  "gal.note": "توثيق إكلينيكي من العيادة. بعض الصور قد تحتوي على تفاصيل علاجية.",
  "journey.kicker": "زيارتك",
  "journey.title": "ما الذي ينتظرك، خطوة بخطوة.",
  "journey.sub": "زيارة طبيب الأسنان لا يجب أن تكون مقلقة. هذه هي الرحلة التي صممتها لتكون واضحة، هادئة، وبلا مفاجآت.",
  "journey.1.t": "الحوار",
  "journey.1.d": "نبدأ بجلسة استماع هادئة: ما الذي يزعجك، وما الذي تتمنى تغييره، وما الذي يهمك في ابتسامتك.",
  "journey.2.t": "التشخيص",
  "journey.2.d": "فحص دقيق للأسنان واللثة، مع الأشعة اللازمة عند الحاجة، لفهم الصورة كاملة قبل أي قرار.",
  "journey.3.t": "الخطة",
  "journey.3.d": "أشرح لك الخيارات المتاحة، ومدتها وتكلفتها، ثم نتفق معًا على خطة تناسب أولوياتك.",
  "journey.4.t": "الرعاية والمتابعة",
  "journey.4.d": "ننفّذ العلاج على مراحل مريحة، ونبقى على تواصل بعد الزيارة لضمان أفضل نتيجة.",
  "faq.kicker": "أسئلة",
  "faq.title": "قبل زيارتك.",
  "faq.sub": "إجابات مختصرة لأكثر ما يشغل بال المرضى قبل أول زيارة.",
  "faq.1.q": "هل أحتاج إلى حجز موعد مسبق؟",
  "faq.1.a": "نعم، الحجز المسبق يضمن وقتًا كافيًا وغير مستعجل لكل مريض. يمكنك الحجز عبر النموذج أو واتساب.",
  "faq.2.q": "ماذا أحضر معي في الزيارة الأولى؟",
  "faq.2.a": "أي أشعة أو تقارير سابقة، قائمة بالأدوية التي تتناولها، وأي أسئلة تود مناقشتها.",
  "faq.3.q": "هل العلاج مؤلم؟",
  "faq.3.a": "نستخدم التخدير الحديث ونعمل على وتيرة مريحة. أخبرني بأي قلق مسبقًا، وسنخطط للزيارة بما يناسبك.",
  "faq.4.q": "هل تستقبل الأطفال؟",
  "faq.4.a": "نعم، أحرص على تجربة لطيفة تبني علاقة إيجابية بين الطفل وطبيب الأسنان.",
  "faq.5.q": "كيف أحجز موعدي؟",
  "faq.5.a": "املأ النموذج وسيُفتح واتساب برسالتك جاهزة، أو تواصل مباشرة عبر الهاتف أو البريد.",
  "contact.kicker": "تواصل",
  "contact.title": "لنعتني بابتسامتك.",
  "contact.sub": "أخبرني بما تحتاجه، وسأعود إليك بموعد يناسبك. الزيارات بموعد مسبق لضمان وقت كافٍ لكل مريض.",
  "contact.phoneLabel": "هاتف",
  "contact.waLabel": "واتساب",
  "contact.waAction": "راسلني على واتساب",
  "contact.emailLabel": "البريد الإلكتروني",
  "contact.locLabel": "الموقع",
  "contact.locValue": "القاهرة، مصر",
  "contact.hoursLabel": "المواعيد",
  "contact.hoursValue": "الزيارات بموعد مسبق",
  "form.name": "الاسم",
  "form.errName": "يرجى كتابة الاسم.",
  "form.phone": "رقم الهاتف",
  "form.errPhone": "يرجى إدخال رقم هاتف صحيح.",
  "form.service": "الخدمة",
  "form.selectPh": "اختر الخدمة",
  "form.opt1": "طب الأسنان العام",
  "form.opt2": "تجميل الأسنان",
  "form.opt3": "علاج الجذور",
  "form.opt4": "الترميم والحشوات",
  "form.opt5": "اللثة والوقاية",
  "form.opt6": "أسنان الأطفال",
  "form.opt7": "استشارة عامة",
  "form.message": "رسالتك",
  "form.submit": "اطلب موعدًا",
  "form.note": "سيفتح النموذج واتساب برسالتك جاهزة. لا يتم تخزين أي بيانات على هذا الموقع.",
  "footer.name": "محمد إبراهيم عزيز الدين",
  "footer.tagline": "طب أسنان بهدف.",
  "footer.explore": "استكشف",
  "footer.contact": "تواصل",
  "footer.follow": "تابعني",
  "footer.rights": "محمد إبراهيم عزيز الدين. جميع الحقوق محفوظة.",
  "footer.back": "إلى الأعلى",
  "form.namePh": "اسمك الكريم",
  "form.phonePh": "+20 1X XXX XXXX",
  "form.messagePh": "أخبرني بما تحتاجه، أو بأي قلق تود مناقشته.",
  "hero.alt": "محمد إبراهيم عزيز الدين",
  "phil.alt": "أدوات طب الأسنان",
  "a11y.primaryNav": "التنقل الرئيسي",
  "a11y.mobileNav": "قائمة التنقل",
  "a11y.filters": "تصفية الأعمال",
  "gal.open": "افتح الصورة",
  "gal.alt1": "صورة إكلينيكية مقرّبة للأسنان أثناء العلاج",
  "gal.alt2": "صينية أدوات طب الأسنان",
  "gal.alt3": "صورة إكلينيكية مقرّبة للفم والأسنان",
  "gal.alt4": "طبيب أسنان يعمل داخل الفم بقفازات",
  "gal.alt5": "أدوات جراحية مرتبة على طاولة",
  "gal.alt6": "صورة إكلينيكية مقرّبة لتفاصيل العلاج",
  "a11y.lightbox": "عارض الصور الإكلينيكية",
  "a11y.close": "إغلاق",
  "a11y.prev": "الصورة السابقة",
  "a11y.next": "الصورة التالية",
  "meta.title": "محمد إبراهيم عزيز الدين — طبيب أسنان",
  "meta.desc": "محمد إبراهيم عزيز الدين، خريج كلية طب الفم والأسنان بجامعة أهرام كندية، دفعة ٢٠٢٣. رعاية أسنان دقيقة وإنسانية في القاهرة.",
  "toast.opening": "جارٍ فتح واتساب برسالتك…",
  "wa.greeting": "مرحبًا د. محمد،",
  "wa.name": "الاسم",
  "wa.phone": "الهاتف",
  "wa.service": "الخدمة",
  "wa.message": "الرسالة"
};

/* Capture English copy from the HTML */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

$$("[data-i18n]").forEach((el) => {
  EN[el.dataset.i18n] = el.textContent.trim();
});
$$("[data-i18n-placeholder]").forEach((el) => {
  EN[el.dataset.i18nPlaceholder] = el.getAttribute("placeholder") || "";
});
$$("[data-i18n-alt]").forEach((el) => {
  EN[el.dataset.i18nAlt] = el.getAttribute("alt") || "";
});
$$("[data-i18n-aria]").forEach((el) => {
  EN[el.dataset.i18nAria] = el.getAttribute("aria-label") || "";
});

let currentLang = "en";

function t(key) {
  if (currentLang === "en") return EN[key] ?? AR[key] ?? "";
  return AR[key] ?? EN[key] ?? "";
}

function applyLanguage(lang, persist = true) {
  currentLang = lang === "en" ? "en" : "ar";
  const html = document.documentElement;
  html.lang = currentLang;
  html.dir = currentLang === "ar" ? "rtl" : "ltr";
  html.dataset.lang = currentLang;
  html.dataset.dir = html.dir;

  $$("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = currentLang === "ar" ? AR[key] ?? EN[key] : EN[key] ?? AR[key];
    if (value !== undefined) el.textContent = value;
  });

  $$("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = currentLang === "ar" ? AR[key] ?? EN[key] : EN[key] ?? AR[key];
    if (value !== undefined) el.setAttribute("placeholder", value);
  });

  $$("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    const value = currentLang === "ar" ? AR[key] ?? EN[key] : EN[key] ?? AR[key];
    if (value !== undefined) el.setAttribute("alt", value);
  });

  $$("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    const value = currentLang === "ar" ? AR[key] ?? EN[key] : EN[key] ?? AR[key];
    if (value !== undefined) el.setAttribute("aria-label", value);
  });

  const caption = $("#lbCaption");
  if (caption && lightbox.classList.contains("is-open")) refreshLightbox();

  document.title = t("meta.title");

  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.content = t("meta.desc");

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.querySelector(".lang-toggle__current").textContent = currentLang === "ar" ? "EN" : "AR";
    langToggle.setAttribute("aria-label", currentLang === "ar" ? "EN — التبديل إلى الإنجليزية" : "AR — Switch to Arabic");
  }

  const menuToggle = $("#menuToggle");
  if (menuToggle) {
    menuToggle.setAttribute("aria-label",
      menuOpen
        ? (currentLang === "ar" ? "أغلق القائمة" : "Close menu")
        : (currentLang === "ar" ? "افتح القائمة" : "Open menu"));
  }

  const lbClose = $("#lbClose");
  const lbPrev = $("#lbPrev");
  const lbNext = $("#lbNext");
  if (lbClose) lbClose.setAttribute("aria-label", currentLang === "ar" ? "إغلاق" : "Close");  if (lbPrev) lbPrev.setAttribute("aria-label", currentLang === "ar" ? "الصورة السابقة" : "Previous image");
  if (lbNext) lbNext.setAttribute("aria-label", currentLang === "ar" ? "الصورة التالية" : "Next image");

  if (persist) {
    try { localStorage.setItem("aziz-lang", currentLang); } catch (e) { /* private mode */ }
  }
}

/* ---------------------------------------------------------
   3. UI
   --------------------------------------------------------- */
const body = document.body;
const header = $("#siteHeader");
const preloader = $("#preloader");
const progress = $("#scrollProgress");
const langToggle = $("#langToggle");
const menuToggle = $("#menuToggle");
const mobileMenu = $("#mobileMenu");
let menuOpen = false;

/* ---------- Contact config ---------- */
$$('[data-bind="phoneHref"]').forEach((a) => { a.href = `tel:${SITE.phone}`; });
$$('[data-bind-text="phoneDisplay"]').forEach((a) => { a.textContent = SITE.phoneDisplay; });
$$('[data-bind="waHref"]').forEach((a) => { a.href = `https://wa.me/${SITE.whatsapp}`; });
$$('[data-bind="emailHref"]').forEach((a) => { a.href = `mailto:${SITE.email}`; });
$$('[data-bind-text="email"]').forEach((a) => { a.textContent = SITE.email; });
$$("[data-social]").forEach((a) => {
  const key = a.dataset.social;
  const url = key === "whatsapp"
    ? (SITE.whatsapp ? `https://wa.me/${SITE.whatsapp}` : "")
    : SITE[key];
  if (!url) {
    a.hidden = true;
    return;
  }
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener";
});

/* ---------- Year ---------- */
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---------- Preloader ---------- */
let preloaderHidden = false;
function hidePreloader() {
  if (preloaderHidden) return;
  preloaderHidden = true;
  if (preloader) preloader.classList.add("is-done");
}
window.addEventListener("load", () => setTimeout(hidePreloader, 500));
setTimeout(hidePreloader, 2800);

/* ---------- Scroll: header, progress, parallax, nav ---------- */
const navLinks = $$(".desktop-nav a");
const navSections = navLinks
  .map((link) => ({ link, section: $(link.getAttribute("href")) }))
  .filter((item) => item.section);
const parallaxImg = $("[data-parallax]");

let scrollTicking = false;
function onScroll() {
  const y = window.scrollY || window.pageYOffset;
  if (header) header.classList.toggle("is-scrolled", y > 24);

  if (progress) {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? Math.min(100, (y / max) * 100) : 0;
    progress.style.width = `${pct}%`;
  }

  if (parallaxImg && !reducedMotion && window.innerWidth > 820) {
    parallaxImg.style.transform = `scale(1.07) translateY(${Math.min(y * 0.035, 26)}px)`;
  }

  let active = null;
  navSections.forEach(({ link, section }) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.38 && rect.bottom > window.innerHeight * 0.38) {
      active = link;
    }
  });
  navLinks.forEach((link) => link.classList.toggle("is-active", link === active));

  scrollTicking = false;
}
window.addEventListener("scroll", () => {
  if (!scrollTicking) {
    scrollTicking = true;
    window.requestAnimationFrame(onScroll);
  }
}, { passive: true });
onScroll();

/* ---------- Reveal on scroll ---------- */
const revealEls = $$("[data-reveal]");
if (reducedMotion || !("IntersectionObserver" in window)) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  revealEls.forEach((el) => io.observe(el));
}

/* ---------- Marquee duplicate ---------- */
const marqueeTrack = $("#marqueeTrack");
if (marqueeTrack) {
  marqueeTrack.innerHTML += marqueeTrack.innerHTML;
}

/* ---------- Mobile menu ---------- */
const firstMenuLink = mobileMenu ? $(".mobile-menu__nav a", mobileMenu) : null;

function setMenu(open) {
  menuOpen = open;
  body.classList.toggle("menu-open", open);
  body.classList.toggle("is-locked", open);
  if (mobileMenu) {
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", String(!open));
  }
  if (menuToggle) {
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open
      ? (currentLang === "ar" ? "أغلق القائمة" : "Close menu")
      : (currentLang === "ar" ? "افتح القائمة" : "Open menu"));
  }
  if (open && firstMenuLink) {
    setTimeout(() => firstMenuLink.focus(), 380);
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => setMenu(!menuOpen));
}
if (mobileMenu) {
  $$(".mobile-menu__nav a, .mobile-menu__foot .btn", mobileMenu).forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
}

/* Escape closes menu / lightbox */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOpen) setMenu(false);
});

/* ---------- Language toggle ---------- */
if (langToggle) {
  langToggle.addEventListener("click", () => {
    applyLanguage(currentLang === "ar" ? "en" : "ar");
  });
}

/* ---------- FAQ ---------- */
$$(".faq-item").forEach((item) => {
  const btn = $(".faq-q", item);
  if (!btn) return;
  btn.addEventListener("click", () => {
    const wasOpen = item.classList.contains("is-open");
    $$(".faq-item").forEach((other) => {
      other.classList.remove("is-open");
      const otherBtn = $(".faq-q", other);
      if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
    }
  });
});

/* ---------- Gallery filters ---------- */
const galleryItems = $$(".gallery-item");
$$(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    $$(".filter").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const filter = btn.dataset.filter;
    galleryItems.forEach((item) => {
      const show = filter === "all" || item.dataset.cat === filter;
      item.classList.toggle("is-hidden", !show);
    });
  });
});

/* ---------- Lightbox ---------- */
const lightbox = $("#lightbox");
const lbImage = $("#lbImage");
const lbCaption = $("#lbCaption");
const lbCounter = $("#lbCounter");
const lbClose = $("#lbClose");
const lbPrev = $("#lbPrev");
const lbNext = $("#lbNext");
let lbItems = [];
let lbIndex = 0;
let lastFocused = null;

function visibleGalleryItems() {
  return $$(".gallery-item").filter((item) => !item.classList.contains("is-hidden"));
}

function refreshLightbox() {
  if (!lbItems.length) return;
  const item = lbItems[lbIndex];
  const img = $(".gallery-btn img", item);
  const title = $("figcaption span", item);
  const sub = $("figcaption em", item);
  if (!img) return;
  lbImage.src = img.currentSrc || img.src;
  lbImage.alt = img.alt;
  lbCaption.textContent = [title?.textContent, sub?.textContent].filter(Boolean).join(" — ");
  lbCounter.textContent = `${String(lbIndex + 1).padStart(2, "0")} / ${String(lbItems.length).padStart(2, "0")}`;
}

function openLightbox(item) {
  lbItems = visibleGalleryItems();
  lbIndex = Math.max(0, lbItems.indexOf(item));
  lastFocused = document.activeElement;
  refreshLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  body.classList.add("is-locked");
  setTimeout(() => lbClose?.focus(), 120);
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  body.classList.remove("is-locked");
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

function stepLightbox(dir) {
  if (!lbItems.length) return;
  lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
  refreshLightbox();
}

$$("[data-lightbox]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".gallery-item");
    if (item) openLightbox(item);
  });
});

if (lbClose) lbClose.addEventListener("click", closeLightbox);
if (lbPrev) lbPrev.addEventListener("click", () => stepLightbox(-1));
if (lbNext) lbNext.addEventListener("click", () => stepLightbox(1));
if (lightbox) {
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}

document.addEventListener("keydown", (e) => {
  if (!lightbox || !lightbox.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") stepLightbox(-1);
  if (e.key === "ArrowRight") stepLightbox(1);
  if (e.key === "Tab") {
    const focusables = [lbClose, lbPrev, lbNext].filter(Boolean);
    if (!focusables.length) return;
    const idx = focusables.indexOf(document.activeElement);
    e.preventDefault();
    if (e.shiftKey) {
      focusables[(idx - 1 + focusables.length) % focusables.length].focus();
    } else {
      focusables[(idx + 1) % focusables.length].focus();
    }
  }
});

/* ---------- Toast ---------- */
const toast = $("#toast");
const toastText = $("#toastText");
let toastTimer = null;
function showToast(message) {
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 4200);
}

/* ---------- Booking form ---------- */
const form = $("#bookingForm");
if (form) {
  const nameInput = $("#name");
  const phoneInput = $("#phone");
  const serviceInput = $("#service");
  const messageInput = $("#message");

  const clearError = (input) => {
    input.removeAttribute("aria-invalid");
    input.closest(".field")?.classList.remove("has-error");
  };

  [nameInput, phoneInput].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", () => clearError(input));
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    const name = nameInput.value.trim();
    if (name.length < 2) {
      nameInput.setAttribute("aria-invalid", "true");
      nameInput.closest(".field")?.classList.add("has-error");
      valid = false;
    } else {
      clearError(nameInput);
    }

    const phoneDigits = phoneInput.value.replace(/\D/g, "");
    if (phoneDigits.length < 8) {
      phoneInput.setAttribute("aria-invalid", "true");
      phoneInput.closest(".field")?.classList.add("has-error");
      valid = false;
    } else {
      clearError(phoneInput);
    }

    if (!valid) {
      (nameInput.getAttribute("aria-invalid") === "true" ? nameInput : phoneInput).focus();
      return;
    }

    const selectedOption = serviceInput.options[serviceInput.selectedIndex];
    const service = serviceInput.value ? selectedOption.textContent.trim() : t("form.opt7");
    const message = messageInput.value.trim();

    const lines = [
      t("wa.greeting"),
      "",
      `${t("wa.name")}: ${name}`,
      `${t("wa.phone")}: ${phoneInput.value.trim()}`,
      `${t("wa.service")}: ${service}`
    ];
    if (message) lines.push(`${t("wa.message")}: ${message}`);

    const url = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    showToast(t("toast.opening"));
    window.open(url, "_blank", "noopener");
  });
}

/* ---------- Custom cursor ---------- */
const cursor = $("#cursor");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (cursor && finePointer && !reducedMotion) {
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  let tx = cx;
  let ty = cy;
  let raf = null;

  const loop = () => {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    if (Math.abs(tx - cx) > 0.2 || Math.abs(ty - cy) > 0.2) {
      raf = requestAnimationFrame(loop);
    } else {
      raf = null;
    }
  };

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX;
    ty = e.clientY;
    cursor.classList.add("is-active");
    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });

  document.addEventListener("mouseleave", () => cursor.classList.remove("is-active"));
  document.addEventListener("mouseover", (e) => {
    const interactive = e.target.closest("a, button, .gallery-btn, input, select, textarea");
    cursor.classList.toggle("is-hover", Boolean(interactive));
  });
}

/* ---------- Smooth anchor focus for a11y ---------- */
$$('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = $(id);
    if (target) {
      target.setAttribute("tabindex", "-1");
      setTimeout(() => target.focus({ preventScroll: true }), 600);
    }
  });
});

/* ---------- Initial language ---------- */
let savedLang = null;
try { savedLang = localStorage.getItem("aziz-lang"); } catch (e) { /* ignore */ }
const urlLang = new URLSearchParams(window.location.search).get("lang");
applyLanguage(urlLang === "ar" || (!urlLang && savedLang === "ar") ? "ar" : "en", false);
