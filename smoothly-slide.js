!function () {
  let liTags = document.querySelectorAll('nav.menu>ul>li')
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
      x.currentTarget.classList.remove('active')
    }
  }
  let aTags = document.querySelectorAll('nav.menu>ul>li>a')
  for (let i = 0; i < aTags.length; i++)
    aTags[i].onclick = function (x) {
      x.preventDefault()
      let scroll = x.currentTarget
      let href = scroll.getAttribute('href')
      let element = document.querySelector(href)
      let top = element.offsetTop

      let n = 25 //一共动多少次
      let duration = 500 / n //多长时间动一次
      let currentTop = window.scrollY
      let targetTop = top - 80
      let distance = (targetTop - currentTop) / n
      let i = 0
      let intervalId = setInterval(() => {
        if (i == n) {
          window.clearInterval(intervalId)
        }
        i = i + 1
        window.scrollTo(0, currentTop + distance * i)
      }, duration)
    }
}.call()
