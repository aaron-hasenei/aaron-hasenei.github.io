//Creates and alert
alert('Welcome to my research page!')
function openMenu(){
    var x = document.getElementById("portfolioTopnav");
    if (x.className === "Topnav") {
        x.className += "responsive";
    } else {
        x.className = "Topnav"
    }
}