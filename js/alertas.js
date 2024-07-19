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
    const nombre = document.getElementById("nombre").value;

    const parametros ={
        name: document.getElementById("nombre").value,
        email : document.getElementById("email").value,
    }
    console.log(nombre)
}