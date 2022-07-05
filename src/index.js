let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  
  const form = document.querySelector(".add-toy-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const cardObj = {name: e.target.name.value}
    createNewCard(cardObj)
    form.reset()
    console.log(cardObj)
  })
  addBtn.addEventListener("click", () => {
  
  
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  function createNewCard (cardData) {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(cardData),

    })
    .then(res => res.json())
    .then(card => renderCard)
    //not putting new card on the page
  }

  function renderCard (cardData) {
    const li = document.createElement('li')
    const pName = document.createElement('p')
    const pCounter = document.createElement('p')
    const img = document.createElement('img')
    const btn = document.createElement('button')
    li.className = "card"
    
    pName.textContent = cardData.name 
    img.src = cardData.image
    img.className = "toy-avatar"
    pCounter.textContent = cardData.likes
    btn.textContent = "Like"
    const ul = document.getElementById('toys')
    ul.append(li)
    li.append(pName, img, pCounter, btn) 
    
  }
  
  function fetchToys (){
    fetch("http://localhost:3000/toys")
    .then (res => res.json())
    .then (toys => toys.forEach(renderCard))
  }
  fetchToys()
});

//create a card for each loop 
   // renderCard(toyCard)    
  //const toyCard = {}

 




