document.getElementById("search-btn").addEventListener("click", function () {
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;

  if (brand === "") {
    document.getElementById("results").innerHTML =
      "Por favor, selecciona una marca.";
    return;
  }

  document.getElementById(
    "results"
  ).innerHTML = `📱 Resultados para: <b>${brand}</b> en el rango de precio <b>${price}</b>.`;
});
