function cerrarSesion() {
    if (window.confirm("¿Estás seguro de cerrar sesión?")) {
        let localStorage = window.localStorage;
        localStorage.removeItem('_id');
        window.location.href = "../../index.html"
    }
}