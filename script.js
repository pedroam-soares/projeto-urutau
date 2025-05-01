const divParaVoce = document.getElementById("div-para-voce");

function ShowDiv(divParaVoce) {
  if (divParaVoce.style.display == "hidden") {
    divParaVoce.style.display = "block";
  } else if (divParaVoce.style.display == "block") {
    divParaVoce.style.display = "hidden";
  }
}
