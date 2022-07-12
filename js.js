"use strict"
const head = document.createElement("div")
head.classList.add('header')
head.textContent = 'Dom Example'
document.body.append(head)
const node = document.createElement("div")
document.body.appendChild(node)

const diup = () => {
 for (let i = 0; i <= 5; i++) {
  let cardDiv = document.createElement("div")
  let cardTitle = document.createElement("h1")
  let cardCaption = document.createElement("h4")
  let cardImage = document.createElement("img")
  let cardDescription = document.createElement("p")
  document.body.append(cardDiv)
  cardTitle.textContent = 'Article Header'
  cardCaption.textContent = 'Caption'
  cardDescription.textContent = "Here is some text.Here is some text.Here is some text"
  cardDiv.append(cardTitle)
  cardDiv.append(cardImage)
  cardDiv.append(cardCaption)
  cardDiv.append(cardDescription)
  cardImage.setAttribute('src', 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png')
  cardDiv.classList.add('container')
 }
};
diup()
const xddsxdxd = document.querySelectorAll(".container")
xddsxdxd.forEach(e=>{
 node.append(e)
    }
)
node.classList.add('container-node')
const footer = document.createElement('div')
document.body.append(footer)
footer.classList.add('footer')
footer.textContent= "this is footer"
