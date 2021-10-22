function totalapagar() {
  let cantidad = parseInt(document.getElementById("cantidad-tickets").value, 10);
  let descuento = parseInt(document.getElementById("specificSizeSelect").value, 10);
  let calculoDescuento = 0;
  let total = 0;

  if (descuento == 1) {
    calculoDescuento = (200 * 0.8) * cantidad
  } else if (descuento == 2) {
    calculoDescuento = (200 * 0.5) * cantidad
  } else if (descuento == 3) {
    calculoDescuento = (200 * 0.15) * cantidad
  }
  total = (200 * cantidad) - calculoDescuento
  document.getElementById("totalCompra").innerText = "Total a pagar: $" + total
}

function borrartotalapagar() {
  document.getElementById("totalCompra").innerText = "Total a pagar: $"
  document.getElementById("cantidad-tickets").value = ""
  document.getElementById("specificSizeSelect").value = 1
}
