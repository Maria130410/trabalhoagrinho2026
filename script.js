// Função simples para o botão principal da Hero Section
function mostrarAlerta(acao) {
    alert("Obrigado pelo interesse! Em breve você terá acesso ao nosso painel completo de sustentabilidade.");
}

// Funções para controlar o Modal interativo dos Cards
function mostrarDetalhes(titulo, texto) {
    const modal = document.getElementById("meuModal");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalTexto = document.getElementById("modalTexto");

    modalTitulo.innerText = titulo;
    modalTexto.innerText = texto;
    
    modal.style.display = "flex";
}

function fecharModal() {
    const modal = document.getElementById("meuModal");
    modal.style.display = "none";
}

// Fecha o modal se o usuário clicar fora da caixinha branca
window.onclick = function(event) {
    const modal = document.getElementById("meuModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}