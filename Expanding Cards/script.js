// bringing all the panels into 



// this line creates a node list -- similar to arrays selecting all the classes with panels and then can be accesed like an array 
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    panel.addEventListener('click', ()=>{
        removebakikaactiveclass()
        panel.classList.add('active')
    })
})

function removebakikaactiveclass(){
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}