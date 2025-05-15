function toggleVisibility(
  divPrincipal,
  setaPrincipal,
  divSecundaria,
  setaSecundaria,
  divTercearia,
  setaTercearia
) {
  const divPrincipalId = document.getElementById(divPrincipal);
  const divSecundariaId = document.getElementById(divSecundaria);
  const divTerceariaId = document.getElementById(divTercearia);
  const setaPrincipalId = document.getElementById(setaPrincipal);
  const setaSecundariaId = document.getElementById(setaSecundaria);
  const setaTerceariaId = document.getElementById(setaTercearia);

  if (divPrincipalId.classList.contains("hidden")) {
    divPrincipalId.classList.remove("hidden");
    setaPrincipalId.classList.add("rotate-180");
    divPrincipalId.classList.add("flex");

    divSecundariaId.classList.remove("flex");
    setaSecundariaId.classList.remove("rotate-180");
    divSecundariaId.classList.add("hidden");

    divTerceariaId.classList.remove("flex");
    setaTerceariaId.classList.remove("rotate-180");
    divTerceariaId.classList.add("hidden");
  } else {
    divPrincipalId.classList.remove("flex");
    setaPrincipalId.classList.remove("rotate-180");
    divPrincipalId.classList.add("hidden");
  }
}
