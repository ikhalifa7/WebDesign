
function changeColor(id)
{
  document.body.style.backgroundColor = "red";
  document.getElementsByClassName("menu").style.color ="green";

  document.getElement(id).style.color = "#ff0000"; // forecolor
  document.getElementById(id).style.backgroundColor = "#ff0000"; // backcolor
}
