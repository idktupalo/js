let chess = Array(8).fill(Array(8).fill(0));

function draw(){
    let out = '';
    let m = 0;
    for(let i in chess){
        let arr = chess[i];
        for(let k in arr){
            if(m%2==0){
                out+=`<div class = "chess-block bg-tree" data-x = "${k}" data-y="${i}" "></div>`;
            }else{
                out+=`<div class = "chess-block bg-black" data-x = "${k}" data-y="${i}"></div>`;
            }
            m++;
        }
        m++;
    }
    document.querySelector('#field').innerHTML = out;
    document.querySelectorAll('.chess-block').forEach(function(element){
        element.onclick = horse;
    });
}

function horse(){
    document.querySelectorAll('.chess-block.green').forEach(e=>e.classList.remove('green'));
    document.querySelectorAll('.chess-block.active').forEach(e=>e.classList.remove('active'));
    let x = parseInt(this.dataset.x);
    let y = parseInt(this.dataset.y);
    this.classList.add('green');
    if (+x + 2 < 8 && +y + 1 < 8) {
        document.querySelector('.chess-block[data-x="' + (x + 2) + '"][data-y="' + (y + 1) + '"]').classList.add('active');
    }
    if (+x + 2 < 8 && +y - 1 >= 0) {
        document.querySelector('.chess-block[data-x="' + (x + 2) + '"][data-y="' + (y - 1) + '"]').classList.add('active');
    }
    if (+x + 1 < 8 && +y + 2 < 8) {
        console.log(document.querySelector('.chess-block[data-x="' + (+x + 1) + '"][data-y="' + (+y + 2) + '"]'));
        document.querySelector('.chess-block[data-x="' + (x + 1) + '"][data-y="' + (y + 2) + '"]').classList.add('active');
    }
    if (x - 1 >= 0 && +y + 2 < 8) {
        document.querySelector('.chess-block[data-x="' + (x - 1) + '"][data-y="' + (y + 2) + '"]').classList.add('active');
    }
    if (x - 2 >= 0 && +y + 1 < 8) {
        document.querySelector('.chess-block[data-x="' + (x - 2) + '"][data-y="' + (y + 1) + '"]').classList.add('active');
    }
    if (x - 2 >= 0 && y - 1 >= 0) {
        document.querySelector('.chess-block[data-x="' + (x - 2) + '"][data-y="' + (y - 1) + '"]').classList.add('active');
    }
    if (+x + 1 < 8 && y - 2 >= 0) {
        document.querySelector('.chess-block[data-x="' + (x + 1) + '"][data-y="' + (y - 2) + '"]').classList.add('active');
    }
    if (x - 1 >= 0 && y - 2 >= 0) {
        document.querySelector('.chess-block[data-x="' + (x - 1) + '"][data-y="' + (y - 2) + '"]').classList.add('active');
    }
}

draw();