function init(){
//add your javascrip between these two lines of code

  document.getElementById("entrybutton").addEventListener("click", function() {
    alert("Natalie Freund: " + document.getElementById("entryinput").value);
    document.getElementById("entryoutput").innerHTML = document.getElementById("entryinput").value;
  }, true);







window.addEventListener('load', init);
