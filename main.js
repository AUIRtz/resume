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
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i =1; i<specialTags.length; i++){
      if(Math.abs(specialTags[i].offsetTop-window.scrollY) < Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
        minIndex = i 
      }
    }
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id +'"]')
    let li = a.parentNode
    let siblings = li.parentNode.children
    for(let i = 0; i<siblings.length; i++){
      siblings[i].classList.remove('active')
    }
    li.classList.add('active')
    console.log(li)
}
let liTags = document.querySelectorAll('nav.menu>ul>li')
for(let i = 0; i<liTags.length; i++){
  liTags[i].onmouseenter = function(x){
    x.currentTarget.classList.add('active')
  }
  liTags[i].onmouseleave = function(x){
    x.currentTarget.classList.remove('active') //
  }
}
let aTags = document.querySelectorAll('nav.menu>ul>li>a')
for(let i = 0; i<aTags.length; i++)
aTags[i].onclick = function(x){
  x.preventDefault()
  let scroll = x.currentTarget
  let href = scroll.getAttribute('href')
  let element = document.querySelector(href)
  let top = element.offsetTop

  let n = 25 //一共动多少次
  let duration = 500 / n //多长时间动一次
  let currentTop = window.scrollY
  let targetTop = top-80
  let distance = (targetTop-currentTop) / n
  let i = 0
  let intervalId = setInterval(()=>{
    if(i == n){
      window.clearInterval(intervalId)
    }
    i = i + 1
    window.scrollTo(0, currentTop + distance *i)},duration)
}
