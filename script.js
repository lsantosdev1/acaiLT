function calcularTotal() {
  let total = 0;

  let tamanho = document.querySelector('input[name="tamanho"]:checked');

  if (tamanho) {
    let valor = tamanho.value.split("|")[1];

    total += parseFloat(valor);
  }

  document.querySelectorAll("input[type=checkbox]").forEach((item) => {
    if (item.checked && item.value.includes("|")) {
      let valor = item.value.split("|")[1];

      total += parseFloat(valor);
    }
  });

  document.getElementById("total").innerText = total.toFixed(2);
}

document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("change", calcularTotal);
});

function enviarPedido() {
  let tamanho = document.querySelector('input[name="tamanho"]:checked');

  if (!tamanho) {
    alert("Escolha o tamanho do açaí");

    return;
  }

  let pedido = tamanho.value.split("|")[0] + "\n";

  let itens = [];

  document.querySelectorAll("input[type=checkbox]").forEach((item) => {
    if (item.checked) {
      itens.push(item.value.split("|")[0]);
    }
  });

  if (itens.length > 0) {
    pedido += "\nItens:\n";

    pedido += itens.join("\n");
  }

  let total = document.getElementById("total").innerText;

  pedido += "\n\nTotal: R$ " + total;

  let numero = "5521993884424";

  let url = `https://wa.me/${numero}?text=${encodeURIComponent(pedido)}`;

  window.open(url);
}
