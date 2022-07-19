let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
  
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  })
  });

  const baseUrl = 'http://localhost:3000/toys'


fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(dataArray => {
        dataArray.forEach(dataObj =>{
          renderToyCard(dataObj)
  })
    })

function renderToyCard(dataObj) {

  const toyCardContainer = document.getElementById("toy-collection")
  const toyCard = document.createElement('div')
  toyCard.className = 'card'
  toyCardContainer.append(toyCard)

  const toyName = document.createElement('h2')
  toyName.textContent = dataObj.name

  const toyImage = document.createElement('img')
  toyImage.src = dataObj.image
  toyImage.className = "toy-avatar"

  const toyLikes = document.createElement('p')
  toyLikes.textContent = "0 likes"

  const likesBtn = document.createElement('button')
  likesBtn.textContent = "like"
  likesBtn.setAttribute('id', "like-btn" )

  toyCard.append(toyName, toyImage, toyLikes, likesBtn)
}

const formElement = document.querySelector(".add-toy-form")

formElement.addEventListener('submit', e => {
    e.preventDefault()
    const newToyObj = {
      name: e.target.name.value,
      image: e.target.image.value
    }
    renderToyCard(freshToy)
    console.log("hello!")
    formElement.reset()

})


likesBtn.addEventListener('click', e => {


  console.log("hello")
  // const stringArray = toyLikes.split( ' ' )
  // const oldLikesNumber = parseInt.stringArray([0])
  // const newLikesNumber = oldLikesArray + 1


  // // const toyLikes = document.createElement('p')
  // // toyLikes.textContent = "0 likes"

})
console.log(likesBtn)

//2. enable a form to add a new toy to the dom [bonus: also persist w/POST request]


//grabbed an array of 23 objects
// 0:
// id: 1
// image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
// likes: 5
// name: "Woody"
// [[Prototype]]: Object

/* <form class="add-toy-form">
        <h3>Create a toy!</h3>

        <input
          type="text"
          name="name"
          value=""
          placeholder="Enter a toy's name..."
          class="input-text"
        />
        <br />
        <input
          type="text"
          name="image"
          value=""
          placeholder="Enter a toy's image URL..."
          class="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create Toy"
          class="submit"
        />
      </form> */
  
//3. enable an event listener to "like" a toy, with a counter that works [bonus PATCH request to persist]

























































//   const toysURL = 'http://localhost:3000/toys'

//   const toysContainer = document.getElementById("toy-collection")

//   fetch('http://localhost:3000/toys')
//     .then(respObj => respObj.json())
//     .then(toyArray => {
//       toyArray.forEach (toyObj => {

//         renderToy(toyObj)

//       })
//     })

// function renderToy (toyObj) {
//     const divCard = document.createElement('div')
//     divCard.classname ='card'
//     const nameElement = document.createElement('h2')
//     const imageElement = document.createElement('img')
//     const likesElement = document.createElement('p')
//     likesElement.id = toyObj.id
//     const buttonElement = document.createElement('button')
//     buttonElement.classname = 'like-btn'
  
//     nameElement.textContent = toyObj.name
//     imageElement.src = toyObj.image
//     imageElement.className = 'toy-avatar'
//     likesElement.textContent = toyObj.likes
//     buttonElement.textContent = 'Like ❤️'

//     divCard.append(nameElement, imageElement, likesElement, buttonElement)
//     toysContainer.append(divCard)
// }
  
//     const newToyForm = document.querySelector('form')

//     newToyForm.addEventListener('submit', e => {
//         e.preventDefault()
      
//       const newToyObj = {
//         name: e.target.name.value,
//         image: e.target.image.value,
//         likes: 0 
//       }
//       renderToy(newToyObj)

//       fetch (toysURL, {
//         method: 'POST',
//         headers: {'Content-type': 'application-json'},
//         body: JSON.stringify (newToyObj) 
//       })
//         .then (respObj => respObj.json())
//         .then (aFreshToyObj => {
//               renderToy(aFreshToyObj)
       
//       })
//     })



//   //make a fetch request to grab toys [DONE]
//   //create a div card for each toy  [DONE ]
//   //add toy info to the card: h2, img (tag w/src), p, button (class "like-btn", attribute id no)











































 
//   // const form = document.querySelector(".add-toy-form")
//   // form.addEventListener("submit", (e) => {
//   //   e.preventDefault()
//   //   const cardObj = {name: e.target.name.value}
//   //   createNewCard(cardObj)
//   //   form.reset()
//   //   console.log(cardObj)
//   // })


// //   function createNewCard (cardData) {
// //     fetch("http://localhost:3000/toys", {
// //       method: "POST",
// //       headers: {"Content-Type":"application/json"},
// //       body: JSON.stringify(cardData),

// //     })
// //     .then(res => res.json())
// //     .then(card => renderCard)
// //     //not putting new card on the page
// //   }

// //   function renderCard (cardData) {
// //     const li = document.createElement('li')
// //     const pName = document.createElement('p')
// //     const pCounter = document.createElement('p')
// //     const img = document.createElement('img')
// //     const btn = document.createElement('button')
// //     li.className = "card"
    
// //     pName.textContent = cardData.name 
// //     img.src = cardData.image
// //     img.className = "toy-avatar"
// //     pCounter.textContent = cardData.likes
// //     btn.textContent = "Like"
// //     const ul = document.getElementById('toys')
// //     ul.append(li)
// //     li.append(pName, img, pCounter, btn) 
    
// //   }
  
// //   function fetchToys (){
// //     fetch("http://localhost:3000/toys")
// //     .then (res => res.json())
// //     .then (toys => toys.forEach(renderCard))
// //   }
// //   fetchToys()
// // });

// // //create a card for each loop 
// //    // renderCard(toyCard)    
// //   //const toyCard = {}

 




