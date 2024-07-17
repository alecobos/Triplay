document.getElementById('btn-enviar').addEventListener("click", (evento) =>{
    evento.preventDefault()
    Swal.fire({
        icon: 'success',
        title: `Se envió su solicitud, en breve nos pondremos en contacto con usted`,
        showConfirmButton: true,
    });
    setTimeout(function(){
        console.log("Hola Mundo");
        redirect()
    }, 3000);
})

function redirect()
{   
window.location.href="../index.html";
}

