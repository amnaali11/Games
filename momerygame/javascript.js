
let container = document.querySelector('.container');
let score = 0;
let blocks = Array.from(container.children);

function stop() {
  blocks.forEach(block => {
    block.classList.add("nonclick");



    setTimeout(() => {
      block.classList.remove("nonclick");


    }, 1020);

  })

};
function move() {
  let movearr = [];

  let current = 16;

  while (current--) {
    let randnum = Math.floor(Math.random() * current)
    movearr.push(randnum);


  }
  blocks.forEach((block, index) => {

    block.style.order = movearr[index];

  })
}
function newgame() {
  setTimeout(() => {

    location.reload();



  },3000)




}
function start() {
  move()
  let button = document.getElementsByTagName('button')[0];
  let divscore = document.getElementsByClassName('score')[0];
  let rightdiv = document.getElementById('score');
  divscore.style.display = 'block';

  button.style.display = 'none';

  blocks.forEach(block => {
    block.addEventListener('click', (block) => {
      block.currentTarget.style.transform = 'rotateY(180deg)';
      block.currentTarget.classList.add("flipped");

      let FlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('flipped'));


      if (FlippedBlocks.length == 2 && FlippedBlocks[0].getAttribute('data') === FlippedBlocks[1].getAttribute('data')) {
        let win=document.getElementById('win');
        win.play();
        score += 2;
        rightdiv.innerText = score;
       
        if (score == 16) {
        win.play();
          newgame();
        }
        FlippedBlocks[0].classList.remove('flipped');
        FlippedBlocks[1].classList.remove('flipped');
        FlippedBlocks = [];


      } else {
        if (FlippedBlocks.length == 2) {
          let fail=document.getElementById('fail');
        fail.play();
          stop();
          rightdiv.innerText = score;
          

          setTimeout(() => {
            FlippedBlocks[0].classList.remove('flipped');
            FlippedBlocks[1].classList.remove('flipped');
            FlippedBlocks[0].classList.remove('nonclick');
            FlippedBlocks[1].classList.remove('nonclick');

            FlippedBlocks[0].style.transform = 'rotateY(360deg)';
            FlippedBlocks[1].style.transform = 'rotateY(360deg)';
            FlippedBlocks = [];

          }
            ,700)
        }
      }

    })
  });
}
