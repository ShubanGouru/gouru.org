/*
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  const arrow = document.getElementById('downArrow');
  if (window.scrollY > 50) {
    hero.classList.add('scrolled');
    arrow.style.display = 'none';
  } else {
    hero.classList.remove('scrolled');
    arrow.style.display = 'flex';
  }
});

*/
(function(){
  var timer = document.getElementById('timer');
  var seconds = 15;
  function update(){
    timer.textContent = seconds;
    if(seconds <= 0){
      window.location.replace('https://gouru.com');
    }
    seconds--;
  }
  update();
  setInterval(update, 1000);
  setTimeout(function(){ window.location.replace('https://gouru.com'); }, 15000);
})();
