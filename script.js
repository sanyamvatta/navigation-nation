const overlay = document.getElementById('overlay');
const menuBars = document.getElementById('menu-bars');
const lis = document.querySelectorAll('li')


function toggleNav(){
  // Toggle menu bars open/close
  menuBars.classList.toggle('change')
  // Menu to be active
  overlay.classList.toggle('overlay-active');
  if(overlay.classList.contains('overlay-active')){
    overlay.classList.replace('overlay-slide-left','overlay-slide-right');
    // Animate in
    lis.forEach((li,i)=>{
      li.classList.replace(`slide-out-${i+1}`,`slide-in-${i+1}`);
    })
  }else{
    overlay.classList.replace('overlay-slide-right','overlay-slide-left')
    lis.forEach((li,i)=>{
      li.classList.replace(`slide-in-${i+1}`,`slide-out-${i+1}`);
    })
  }
}
menuBars.addEventListener('click',toggleNav)
for(li of lis){
  li.addEventListener('click',toggleNav)
}