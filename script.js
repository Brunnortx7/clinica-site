const divServicos = document.getElementById("divServicos");

function criarServico(icone, tituloTexto, descricaoTexto, tagTexto){
  const card = document.createElement("article");
  card.classList.add("service-card", "depo-card");
  card.setAttribute("role", "button");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-expanded", "false");

  const top = document.createElement("div");
  top.classList.add("depo-top");

  const avatar = document.createElement("div");
  avatar.classList.add("avatar");
  avatar.textContent = icone;

  const meta = document.createElement("div");
  meta.classList.add("depo-meta");

  const titulo = document.createElement("strong");
  titulo.textContent = tituloTexto;

  const tag = document.createElement("span");
  tag.textContent = tagTexto;

  meta.appendChild(titulo);
  meta.appendChild(tag);

  top.appendChild(avatar);
  top.appendChild(meta);

  const descricao = document.createElement("p");
  descricao.classList.add("depo-text", "service-desc");
  descricao.textContent = descricaoTexto;

  const hint = document.createElement("div");
  hint.classList.add("service-hint");
  hint.textContent = "Toque/clique para ver detalhes";

  card.appendChild(top);
  card.appendChild(descricao);
  card.appendChild(hint);

  // Começa recolhido
  let aberto = false;
  const atualizar = () => {
    aberto = !aberto;
    card.classList.toggle("is-open", aberto);
    card.setAttribute("aria-expanded", String(aberto));
  };

  card.addEventListener("click", atualizar);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      atualizar();
    }
  });

  divServicos.appendChild(card);
}

criarServico("🩺", "Clínica geral", "Avaliação completa, orientação e encaminhamentos quando necessário. Ideal para check-up e acompanhamento contínuo.", "Check-up e rotina");
criarServico("🧪", "Exames e laudos", "Solicitação e acompanhamento de exames, com suporte para entender resultados e próximos passos.", "Apoio diagnóstico");
criarServico("💉", "Vacinação", "Orientação e aplicação conforme disponibilidade e calendário recomendado para diferentes idades.", "Prevenção");
criarServico("👩‍⚕️", "Especialidades", "Rede de profissionais parceiros para atendimentos específicos, de acordo com sua necessidade.", "Equipe multidisciplinar");

const modal = document.getElementById("modalContato");
const abrirModal = document.getElementById("abrirModal");
const fecharModal = document.getElementById("fecharModal");

abrirModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

fecharModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
