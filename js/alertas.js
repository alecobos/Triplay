document.getElementById('btn-enviar').addEventListener("click", (evento) =>{
    evento.preventDefault();
    sendMail();
    Swal.fire({
        icon: 'success',
        title: `Se envió su solicitud, en breve nos pondremos en contacto con usted`,
        showConfirmButton: true,
    });
    setTimeout(function(){
        // console.log("Hola Mundo");
        
        redirect()
    }, 9000);
})

function redirect()
{   
window.location.href="../index.html";
}

function sendMail(){
    const nombre = document.getElementById("nombre");

    const parametros ={
        name: document.getElementById("nombre"),
        email : document.getElementById("email"),
    }
    console.log(nombre)
}