var tagHTML = document.querySelector("html");
var selectDark = document.getElementById("select-dark");

if (localStorage.getItem("data-theme") == "darkmode") {
    tagHTML.setAttribute("data-theme", "darkmode");
    selectDark.checked = true;
  }
function selectMode() {
    if (selectDark.checked == true){
        tagHTML.setAttribute("data-theme", "darkmode");
        localStorage.setItem("data-theme", "darkmode");
    }
    else {
        tagHTML.setAttribute("data-theme", "lightmode");
        localStorage.setItem("data-theme", "lightmode");
    }  
}