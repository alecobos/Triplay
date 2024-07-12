document.getElementById('internet').addEventListener("mouseover",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'block';
    document.getElementById('dato-nube').style.display = 'none';
    document.getElementById('dato-video').style.display = 'none';
    document.getElementById('dato-redes').style.display = 'none';
})

document.getElementById('nube').addEventListener("mouseover",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'none';
    document.getElementById('dato-nube').style.display = 'block';
    document.getElementById('dato-video').style.display = 'none';
    document.getElementById('dato-redes').style.display = 'none';
})

document.getElementById('vigilancia').addEventListener("mouseover",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'none';
    document.getElementById('dato-nube').style.display = 'none';
    document.getElementById('dato-video').style.display = 'block';
    document.getElementById('dato-redes').style.display = 'none';
})

document.getElementById('redes').addEventListener("mouseover",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'none';
    document.getElementById('dato-nube').style.display = 'none';
    document.getElementById('dato-video').style.display = 'none';
    document.getElementById('dato-redes').style.display = 'block';
})

const redireccion = (plan) => {
    location.href = "../pages/formulario-contacto.html"
    return (plan)
    // setTimeout(() => {
    //     // parrafo.textContent += ' y un segundo después hay más contenido';
    //     document.getElementById('plan-texto').innerText()= "nuevo"
    //     console.log("entro")
    // }, 1000);
}

const seleccion = (plan) => {
    
    document.getElementById('plan-texto').innerText()= redireccion(plan)
}