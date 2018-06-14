!function () {
  let specialTags = document.querySelectorAll('[data-x]')
  for (let i = 0; i < specialTags.length; i++) {
    specialTags[i].classList.add('offset')
  }
  findRecently()
  window.addEventListener('scroll', function () {
    findRecently()
  })
  /* Helper */
  function findRecently() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < specialTags.length; i++) {
      if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
      }
    }
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let siblings = li.parentNode.children
    for (let i = 0; i < siblings.length; i++) {
      siblings[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
}.call()
