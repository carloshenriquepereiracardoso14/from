const snps = document.querySelector('.sinopse');
const btn = document.querySelector('.btn');
const btnClose = document.querySelector('.btnclose');

function abrirSinopse(){
    btn.addEventListener('click', () => {
        snps.style.display = 'flex';
    })
}

function fecharSinopse(){
    btnClose.addEventListener('click', () =>{
        snps.style.display = 'none'
    })
}