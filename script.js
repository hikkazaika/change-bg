if(localStorage.getItem("bg")) {
    document.body.style.background = localStorage.getItem("bg");
    document.getElementById("btnColor").value = localStorage.getItem("bg");
}

function background() {
    var color = document.getElementById("btnColor").value;
    localStorage.setItem("bg", color);

    document.body.style.background = localStorage.getItem("bg");

    document.getElementById("btnColor").value = localStorage.getItem("bg");
}

function resetBG() {
    localStorage.clear();
    window.location.reload();
}