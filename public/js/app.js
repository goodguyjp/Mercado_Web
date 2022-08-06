localStorage.setItem('verduras', JSON.stringify({
  "productos": []
}))

$("button").click(function (e) {
  let verduraActual = e.currentTarget.id
  //css
  if ($(`#${verduraActual}Card`).css("opacity") == 0.5) {
    $(`#${verduraActual}Card`).css("opacity", "1");
  } else {
    $(`#${verduraActual}Card`).css("opacity", "0.5");
  }
  //localstorage
  let verduras = JSON.parse(localStorage.getItem("verduras"))
  if (verduras.productos.includes(verduraActual)) {
    let index = verduras.productos.indexOf(verduraActual)
    verduras.productos.splice(index, 1)
  } else {
    verduras.productos.push(verduraActual)
  }
  localStorage.setItem("verduras", JSON.stringify(verduras))
});

$("#modalBtn").click(function (e) {
  let verduras = JSON.parse(localStorage.getItem("verduras"));
  let htmlBody = "";
  verduras.productos.forEach(element => {
    htmlBody += `<img src="/assets/img/${element}.png" class="card-img-top" alt="...">`
  });
  $("#modalBody").html(htmlBody);
});