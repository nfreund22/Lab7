function init(){
//add your javascrip between these two lines of code
  
  function myFunction() {
    alert ("Natalie Freund: " + document.getElementById("entryinput").value);
    document.getElementById("textoutput").innerHTML = document.getElementById("entryinput").value;
  }
  
  document.getElementById("entrybutton").addEventListener("click", myFunction());

}
window.addEventListener('load', init);
