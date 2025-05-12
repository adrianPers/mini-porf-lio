
const btnMenuHeader = document.getElementById('btn-menu-header')
const menuLateral = document.getElementById('menu-lateral')

btnMenuHeader.addEventListener('click', ()=>{

    let isAberto = menuLateral.classList.toggle('menu-lateral-aberto') 
    btnMenuHeader.children[0].innerHTML = (
        isAberto ? 'close' : 'menu'
    )
    
})

const imgsServicos = [...document.querySelectorAll('.servico > img')]
const listasServicos = [...document.querySelectorAll('.servico > ul')]

imgsServicos.map((el, indice) => {

    el.addEventListener('click', () => {

        el.classList.remove('mostrar-img')
        el.classList.add('ocultar-img')
        listasServicos[indice].classList.add('mostrar-lista')

    })

})

listasServicos.map((el, indice) => {

    el.addEventListener('click', () => {

        el.classList.remove('mostrar-lista')
        el.classList.add('ocultar-lista')
        imgsServicos[indice].classList.add('mostrar-img')

    })

})

// listasServicos.map((el, indice) => {

//     el.addEventListener('click', () => {

//         imgsServicos[indice].style.transform = 'rotateY(0deg)'
//         imgsServicos[indice].style.opacity = '1'
//         el.style.opacity ='0'


//     })

// })