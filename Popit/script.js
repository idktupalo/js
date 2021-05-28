const bubble = document.getElementsByClassName("popit_bubble");
const music = new Audio('pop.mp3');

[].forEach.call(bubble,(event)=>{
    event.addEventListener('click',()=>{
        music.play();
    })
})

