// function mostrar(){
//     document.getElementById('internet').style.display = 'block';
// }



document.getElementById('internet').addEventListener("click",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'block';
    document.getElementById('dato-nube').style.display = 'none';
    document.getElementById('dato-video').style.display = 'none';
    document.getElementById('dato-redes').style.display = 'none';
})

document.getElementById('nube').addEventListener("click",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'none';
    document.getElementById('dato-nube').style.display = 'block';
    document.getElementById('dato-video').style.display = 'none';
    document.getElementById('dato-redes').style.display = 'none';
})

document.getElementById('vigilancia').addEventListener("click",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'none';
    document.getElementById('dato-nube').style.display = 'none';
    document.getElementById('dato-video').style.display = 'block';
    document.getElementById('dato-redes').style.display = 'none';
})

document.getElementById('redes').addEventListener("click",() => {
    console.log("introducir los cambios");
    document.getElementById('dato-internet').style.display = 'none';
    document.getElementById('dato-nube').style.display = 'none';
    document.getElementById('dato-video').style.display = 'none';
    document.getElementById('dato-redes').style.display = 'block';
})