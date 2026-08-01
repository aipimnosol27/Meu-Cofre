const senha = "amor";
let senhainp = 0;

function entrar() {
    senhainp = document.getElementById("senhaInp").value;

    if (senhainp === senha) {
        location.href = "index2.html"
    } else {
        location.reload()
    }
}