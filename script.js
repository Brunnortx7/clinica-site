const WHATSAPP = "5541984534917";

const SERVICOS = [
  ["🩺", "Clínica geral", "Check-up e rotina", "Avaliação completa, orientação e encaminhamentos quando necessário. Ideal para check-up e acompanhamento contínuo."],
  ["🧪", "Exames e laudos", "Apoio diagnóstico", "Solicitação e acompanhamento de exames, com suporte para entender resultados e próximos passos."],
  ["💉", "Vacinação", "Prevenção", "Orientação e aplicação conforme disponibilidade e calendário recomendado para diferentes idades."],
  ["👩‍⚕️", "Especialidades", "Equipe multidisciplinar", "Rede de profissionais parceiros para atendimentos específicos, de acordo com sua necessidade."],
];

const divServicos = document.getElementById("divServicos");
const DICA_ABRIR = "Toque/clique para ver detalhes";
const DICA_FECHAR = "Toque/clique para recolher";

function el(tag, classes, text) {
  const e = document.createElement(tag);
  if (classes) e.className = classes;
  if (text) e.textContent = text;
  return e;
}

function criarServico([icone, titulo, tag, descricao]) {
  const card = el("article", "service-card depo-card");
  card.setAttribute("role", "button");
  card.tabIndex = 0;
  card.setAttribute("aria-expanded", "false");

  const meta = el("div", "depo-meta");
  meta.append(el("strong", "", titulo), el("span", "", tag));
  const top = el("div", "depo-top");
  top.append(el("div", "avatar", icone), meta);

  const hint = el("div", "service-hint", DICA_ABRIR);
  card.append(top, el("p", "depo-text service-desc", descricao), hint);

  const alternar = () => {
    const aberto = card.classList.toggle("is-open");
    card.setAttribute("aria-expanded", String(aberto));
    hint.textContent = aberto ? DICA_FECHAR : DICA_ABRIR;
  };
  card.addEventListener("click", alternar);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); alternar(); }
  });
  divServicos.appendChild(card);
}
SERVICOS.forEach(criarServico);

const modal = document.getElementById("modalContato");
const abrirBtn = document.getElementById("abrirModal");
const form = document.getElementById("formContato");

function abrir() {
  modal.style.display = "flex";
  document.getElementById("inputNome").focus();
}
function fechar() {
  modal.style.display = "none";
  abrirBtn.focus();
}
abrirBtn.addEventListener("click", abrir);
document.getElementById("fecharModal").addEventListener("click", fechar);
modal.addEventListener("click", (e) => { if (e.target === modal) fechar(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "flex") fechar();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nome = form.nome.value.trim();
  const assunto = form.observacao.value.trim();
  if (!nome || !assunto) return;
  const texto = `Olá! Meu nome é ${nome}.\nServiço procurado: ${assunto}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
  form.reset();
  fechar();
});
