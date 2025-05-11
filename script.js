
const btnMenuHeader = document.getElementById('btn-menu-header')
const menuLateral = document.getElementById('menu-lateral')

btnMenuHeader.addEventListener('click', ()=>{
    let isAberto = menuLateral.classList.toggle('menu-lateral-aberto') 
    btnMenuHeader.children[0].innerHTML = (
        isAberto ? 'close' : 'menu'
    )
    
})