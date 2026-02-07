const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = this.nome.value.trim();
    const telefone = this.telefone.value.trim();
    const duvida = this.duvida.value.trim();

    if (!nome || !telefone || !duvida) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const whatsapp = "5574981215249";

    const mensagem =
        `📋 *Pedido de Orçamento*\n\n` +
        `Nome: ${nome}\n` +
        `Telefone: ${telefone}\n` +
        `Problema: ${duvida}`

    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

    this.reset();

});


function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}
function esconderForm() {
    form.style.left = "-350px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
