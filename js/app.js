// Select draggable elements
var draggableElems = document.querySelectorAll('.draggable')
var draggies = []
for (var i = 0, len = draggableElems.length; i < len; i++) {
  var draggableElem = draggableElems[i]
  var draggie = new Draggabilly(draggableElem, {})
  draggies.push(draggie)
}

// 1. when we click on the CD, show album-info
const aboutLink = document.querySelector('.about a')
const aboutModal = document.querySelector('.about-modal')
const close = document.querySelector('.close')

// Code for Modal
aboutLink.addEventListener('click', function() {
  aboutModal.classList.remove('d-none')
})

close.addEventListener('click', function() {
  aboutModal.classList.add('d-none')
})

// CODE FOR ALBUM INFO
// when we click on the CD, remove d-none class from album-info

const albums = document.querySelectorAll('.album')
const bodyTag = document.querySelector('body')
let z = 100

albums.forEach(album => {

  const albumInfo = album.querySelector('.album-info')
  const draggie = new Draggabilly(album, {})
  draggie.on('staticClick', function() {

    albumInfo.classList.toggle('d-none')
    album.style.zIndex = z
    z = z + 1
  })
  
  // Create random positioning for the CDs
  const divWidth = album.getBoundingClientRect().width
  const divHeight = album.getBoundingClientRect().height
  const x = Math.random() * (window.innerWidth - divWidth - 150) 
  const y = Math.random() * (window.innerHeight - divHeight - 50)
  

  album.style.left = x + 'px'
  album.style.top = y + 'px'
  
})

// Loading Animation 
// after 3 seconds do something

setTimeout(function () {
  document.querySelector('.loading').classList.add('hidden')
}, 3500)

