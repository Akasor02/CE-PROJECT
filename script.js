const Card2 = document.querySelector(".Card2")
const  IMG = document.querySelector("#IMG");
const Card = document.querySelector(".Card")
const Port = document.querySelector(".Port")
const Text = document.querySelector(".Text")
console.log(Card)
Card.addEventListener("click", function() {
    Card.classList.toggle("expand")
    Card2.classList.toggle("expand2")
    console.log("IMG")

});

Port.addEventListener("mouseenter", function() {
    Port.style.color = "white"
})
Port.addEventListener("mouseleave", function () {
    Port.style.color = "#4b7145"
})

fetch("js.json")
  .then((response) => response.text())
  .then((text) => {
    const myList = JSON.parse(text);
    console.log(myList)
   Text.innerHTML += `
   <p class="Cardid">--- Card ID ---</p>
          <p class="Cardtext">Name : ${myList.Name}</p>
          <p class="Cardtext">Age : ${myList.Age}</p>
          <p class="Cardtext">Gender : ${myList.Gender}</p>
          <p class="Cardtext">Hobby : ${myList.Hobby}</p>`
  });
