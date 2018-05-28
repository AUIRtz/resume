portfolioAll.onclick= function(){
    portfolioBar.className = 'scrollBar state-1'
  }
  portfolioFramework.onclick= function(){
    portfolioBar.className = 'scrollBar state-2'
  }
  portfolioVllina.onclick= function(){
    portfolioBar.className = 'scrollBar state-3'
  }
window.onscroll = function(){
    if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
    }else{
    topNavBar.classList.remove('sticky')
    } 
}
let liTags = document.querySelectorAll('nav.menu>ul>li')
for(let i = 0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active')
  }
}