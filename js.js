const hellokity = document.querySelector('.hellokity');
const pipe = document.querySelector('.pipe');

const jump = () => {
    hellokity.classList.add('jump');
  
  setTimeout(() => {
    hellokity.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  
    console.log(loop);
  
  const pipePosition = pipe.offsetLeft;
  const hellokityPosition = +window.getComputedStyle(hellokity).bottom.replace('px', '');
  
  console.log(hellokity);
  
  if(pipePosition <= 120 && pipePosition > 0 && hellokity < 80){
    
    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;
    
    hellokity.style.animation = 'none';
    hellokity.style.left = `${hellokity}px`
    
    hellokity.src="https://i.imgur.com/bu300gC.png";
    hellokity.style.width = '75px'
    hellokity.style.marginLeft = '50px'
    
    clearInterval(loop);
  }

}, 10)

document.addEventListener('keydown', jump);