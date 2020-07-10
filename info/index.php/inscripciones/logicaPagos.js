const mostrarPagos = id => {

    switch (id) {
        case 'formularioTarjeta':
            document.getElementById('formularioTarjeta').classList.remove("visibilidad");
            document.getElementById('formularioOxxo').classList.add("visibilidad");
            document.getElementById('formularioTransferencia').classList.add("visibilidad")
            break
        case 'formularioOxxo':
            document.getElementById('formularioOxxo').classList.remove("visibilidad");
            document.getElementById('formularioTarjeta').classList.add("visibilidad");
            document.getElementById('formularioTransferencia').classList.add("visibilidad")
            break
        case 'formularioTransferencia':
            document.getElementById('formularioTransferencia').classList.remove("visibilidad")
            document.getElementById('formularioOxxo').classList.add("visibilidad");
            document.getElementById('formularioTarjeta').classList.add("visibilidad");
            break
    }
}