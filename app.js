const copy = {
  en: {
    skip: "Skip to content",
    writeNav: "Write a letter",
    eyebrow: "A participatory digital experience",
    heroLine1: "What should",
    heroLine2: "remain human?",
    heroIntro: "Technology keeps learning what we can do. This experience asks a different question: what do we still want to do ourselves?",
    begin: "Begin",
    chapter1Label: "THE PROMISE",
    chapter1A: "We built machines to save time.",
    chapter1B: "To remove repetition. To reduce friction. To make difficult things easier.",
    chapter1C: "That part worked.",
    chapter2Label: "THE SHIFT",
    chapter2Title: "Then the machines started touching the things we thought were ours.",
    wordCreate: "create",
    wordDecide: "decide",
    wordRemember: "remember",
    wordCare: "care",
    wordChoose: "choose",
    wordImagine: "imagine",
    chapter3Label: "YOUR LINE",
    boundaryTitle: "Where would you draw the line?",
    boundaryIntro: "There is no score. Choose instinctively. Your choices stay in this browser.",
    automate: "I'D AUTOMATE IT",
    keepHuman: "I'D KEEP IT HUMAN",
    automateShort: "Automate",
    humanShort: "Keep human",
    yourBoundary: "YOUR BOUNDARY",
    restart: "Try again",
    interludeSmall: "Maybe the question is not",
    interludeA: "what technology",
    interludeB: "can",
    interludeC: "do.",
    interludeD: "Maybe it is what",
    interludeE: "we choose",
    interludeF: "to keep.",
    chapter4Label: "THREE QUESTIONS",
    q1: "What would you happily automate tomorrow?",
    q2: "What would you never delegate to a machine?",
    q3: "What do you hope a child in 2040 still learns from another human?",
    chapter5Label: "YOUR LETTER",
    letterTitle: "Write something worth carrying forward.",
    letterIntro: "This preview does not publish your response. Your draft is saved only on this device until a consent-based public archive exists.",
    letterPrompt: "Dear 2040, I hope we still...",
    letterPlaceholder: "make time for people even when everything else becomes instant.",
    localOnly: "Saved locally",
    previewLetter: "Preview my letter",
    clear: "Clear",
    dear2040: "Dear 2040,",
    fromPresent: "— from the present",
    copy: "Copy",
    download: "Download .txt",
    edit: "Edit",
    closingA: "The future will be built either way.",
    closingB: "The question is whether we build it on purpose.",
    footerLine: "An evolving project about technology, choice and what we keep human.",
    copied: "Letter copied",
    cleared: "Draft cleared",
    empty: "Write something first",
    saved: "Draft saved on this device",
    resultHuman: (n, total) => `You chose to keep ${n} of ${total} moments human. There is no right boundary — only one worth noticing.`,
    resultAuto: (n, total) => `You chose to automate ${n} of ${total} moments. What matters is knowing which choices you are making on purpose.`,
    prompts: [
      "Choosing the music for someone you love",
      "Writing a birthday message",
      "Deciding who gets a job interview",
      "Remembering a family story",
      "Planning your entire week",
      "Teaching a child how to apologize"
    ]
  },
  es: {
    skip: "Saltar al contenido",
    writeNav: "Escribe una carta",
    eyebrow: "Una experiencia digital participativa",
    heroLine1: "¿Qué debería",
    heroLine2: "seguir siendo humano?",
    heroIntro: "La tecnología sigue aprendiendo lo que podemos hacer. Esta experiencia plantea otra pregunta: ¿qué seguimos queriendo hacer nosotros mismos?",
    begin: "Comenzar",
    chapter1Label: "LA PROMESA",
    chapter1A: "Construimos máquinas para ahorrar tiempo.",
    chapter1B: "Para quitar repetición. Para reducir fricción. Para hacer más fácil lo difícil.",
    chapter1C: "Esa parte funcionó.",
    chapter2Label: "EL CAMBIO",
    chapter2Title: "Después las máquinas empezaron a tocar cosas que creíamos nuestras.",
    wordCreate: "crear",
    wordDecide: "decidir",
    wordRemember: "recordar",
    wordCare: "cuidar",
    wordChoose: "elegir",
    wordImagine: "imaginar",
    chapter3Label: "TU LÍMITE",
    boundaryTitle: "¿Dónde dibujarías la línea?",
    boundaryIntro: "No hay puntuación. Elige por instinto. Tus decisiones se quedan en este navegador.",
    automate: "LO AUTOMATIZARÍA",
    keepHuman: "LO DEJARÍA HUMANO",
    automateShort: "Automatizar",
    humanShort: "Mantener humano",
    yourBoundary: "TU LÍMITE",
    restart: "Intentar de nuevo",
    interludeSmall: "Tal vez la pregunta no sea",
    interludeA: "qué",
    interludeB: "puede",
    interludeC: "hacer la tecnología.",
    interludeD: "Tal vez sea qué",
    interludeE: "elegimos",
    interludeF: "conservar.",
    chapter4Label: "TRES PREGUNTAS",
    q1: "¿Qué automatizarías felizmente mañana?",
    q2: "¿Qué nunca delegarías a una máquina?",
    q3: "¿Qué esperas que un niño en 2040 todavía aprenda de otra persona?",
    chapter5Label: "TU CARTA",
    letterTitle: "Escribe algo que valga la pena llevar al futuro.",
    letterIntro: "Este preview no publica tu respuesta. Tu borrador se guarda únicamente en este dispositivo hasta que exista un archivo público basado en consentimiento.",
    letterPrompt: "Querido 2040, espero que todavía...",
    letterPlaceholder: "hagamos tiempo para las personas aunque todo lo demás se vuelva instantáneo.",
    localOnly: "Guardado localmente",
    previewLetter: "Ver mi carta",
    clear: "Limpiar",
    dear2040: "Querido 2040,",
    fromPresent: "— desde el presente",
    copy: "Copiar",
    download: "Descargar .txt",
    edit: "Editar",
    closingA: "El futuro se va a construir de cualquier forma.",
    closingB: "La pregunta es si lo construimos a propósito.",
    footerLine: "Un proyecto en evolución sobre tecnología, decisiones y lo que elegimos mantener humano.",
    copied: "Carta copiada",
    cleared: "Borrador eliminado",
    empty: "Escribe algo primero",
    saved: "Borrador guardado en este dispositivo",
    resultHuman: (n, total) => `Elegiste mantener humanos ${n} de ${total} momentos. No existe un límite correcto; solo uno que vale la pena observar.`,
    resultAuto: (n, total) => `Elegiste automatizar ${n} de ${total} momentos. Lo importante es saber cuáles decisiones estás tomando a propósito.`,
    prompts: [
      "Elegir la música para alguien que amas",
      "Escribir un mensaje de cumpleaños",
      "Decidir quién obtiene una entrevista de trabajo",
      "Recordar una historia familiar",
      "Planear toda tu semana",
      "Enseñar a un niño a pedir perdón"
    ]
  }
};

const state = {
  lang: localStorage.getItem("letters2040:lang") || "en",
  promptIndex: 0,
  choices: []
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const langToggle = $("#langToggle");
const promptStack = $("#promptStack");
const automateBtn = $("#automateBtn");
const humanBtn = $("#humanBtn");
const boundaryResult = $("#boundaryResult");
const boundarySummary = $("#boundarySummary");
const restartBoundary = $("#restartBoundary");
const letterForm = $("#letterForm");
const letterText = $("#letterText");
const charCount = $("#charCount");
const clearLetter = $("#clearLetter");
const letterOutput = $("#letterOutput");
const letterRendered = $("#letterRendered");
const copyLetter = $("#copyLetter");
const downloadLetter = $("#downloadLetter");
const editLetter = $("#editLetter");
const toast = $("#toast");
const progressBar = $("#progressBar");

function t(key) {
  return copy[state.lang][key];
}

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("letters2040:lang", lang);
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  $$("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (typeof copy[lang][key] === "string") node.textContent = copy[lang][key];
  });

  $$("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = copy[lang][node.dataset.i18nPlaceholder];
  });

  $$("[data-lang-option]").forEach((node) => {
    node.classList.toggle("is-active", node.dataset.langOption === lang);
  });

  $("#letterLanguageMark").textContent = lang.toUpperCase();
  renderPrompt();
  if (!boundaryResult.hidden) renderBoundaryResult();
}

langToggle.addEventListener("click", () => applyLanguage(state.lang === "en" ? "es" : "en"));

function renderPrompt() {
  promptStack.innerHTML = "";
  if (state.promptIndex >= t("prompts").length) {
    renderBoundaryResult();
    return;
  }

  const card = document.createElement("div");
  card.className = "prompt-card";
  card.innerHTML = `<p>${t("prompts")[state.promptIndex]}</p>`;
  promptStack.append(card);
}

function choose(side) {
  const card = $(".prompt-card");
  if (!card) return;

  state.choices.push(side);
  card.classList.add(side === "human" ? "is-right" : "is-left");

  window.setTimeout(() => {
    state.promptIndex += 1;
    renderPrompt();
  }, 250);
}

automateBtn.addEventListener("click", () => choose("auto"));
humanBtn.addEventListener("click", () => choose("human"));

function renderBoundaryResult() {
  const total = state.choices.length;
  if (!total) return;

  const human = state.choices.filter((choice) => choice === "human").length;
  const automated = total - human;
  const summary = human >= automated ? t("resultHuman")(human, total) : t("resultAuto")(automated, total);

  boundarySummary.textContent = summary;
  $("#boundaryGame").hidden = true;
  boundaryResult.hidden = false;
}

restartBoundary.addEventListener("click", () => {
  state.promptIndex = 0;
  state.choices = [];
  boundaryResult.hidden = true;
  $("#boundaryGame").hidden = false;
  renderPrompt();
});

const savedDraft = localStorage.getItem("letters2040:draft") || "";
letterText.value = savedDraft;
updateCount();

let saveTimer;
letterText.addEventListener("input", () => {
  updateCount();
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    localStorage.setItem("letters2040:draft", letterText.value);
  }, 250);
});

function updateCount() {
  charCount.textContent = `${letterText.value.length} / 600`;
}

letterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = letterText.value.trim();

  if (!value) {
    showToast(t("empty"));
    letterText.focus();
    return;
  }

  localStorage.setItem("letters2040:draft", value);
  letterRendered.textContent = value;
  letterForm.hidden = true;
  letterOutput.hidden = false;
  showToast(t("saved"));
});

clearLetter.addEventListener("click", () => {
  letterText.value = "";
  localStorage.removeItem("letters2040:draft");
  updateCount();
  showToast(t("cleared"));
});

editLetter.addEventListener("click", () => {
  letterOutput.hidden = true;
  letterForm.hidden = false;
  letterText.focus();
});

function fullLetter() {
  return `${t("dear2040")}\n\n${letterText.value.trim()}\n\n${t("fromPresent")}\n\nLetters to 2040`;
}

copyLetter.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(fullLetter());
    showToast(t("copied"));
  } catch {
    showToast(t("copied"));
  }
});

downloadLetter.addEventListener("click", () => {
  const blob = new Blob([fullLetter()], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `letter-to-2040-${state.lang}.txt`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
});

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function updateProgress() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, progress)}%`;
}

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const revealTargets = $$(".chapter-meta, .statement, .split-copy, .word-stream, .boundary-header, .boundary-game, .interlude-small, .interlude-large, .question-card, .letter-intro, .letter-form, .closing-copy");
revealTargets.forEach((node) => node.classList.add("reveal"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .16 });

revealTargets.forEach((node) => observer.observe(node));

applyLanguage(state.lang);
renderPrompt();