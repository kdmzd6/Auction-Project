document.getElementById("Enter").onclick = function() { 
  var grabmenu = document.getElementById("home")
  var login = {}
  login.name = document.getElementById("loginname").value
  if (login.name == kdmzd6) {
    grabmenu.innerHTML = "<a href='Home.html'>Closer</a>"
    }
  else {
    alert ("Fail")
  }
