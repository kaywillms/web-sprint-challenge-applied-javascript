// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function lambCard(article) {
 const newCard = document.createElement("div"),
  newHeadline = document.createElement("div"),
  newAuthor = document.createElement("div"),
  newImdCont = document.createElement("div"),
  newImg = document.createElement("img"),
  newSpan = document.createElement("span");

 newCard.classList.add("card");
 newHeadline.classList.add("headline");
 newAuthor.classList.add("author");
 newImdCont.classList.add("img-container");

 newCard.append(newHeadline);
 newCard.append(newAuthor);
 newAuthor.append(newImdCont);
 newAuthor.append(newSpan);
 newImdCont.append(newImg);

 headline.textContent = "Headline: article";
 newImg.src = imgUrl;
 author.textContent = "by ${author: name}"

 return newCard;
}
const entryPoint = document.querySelector(".cards-container");


axios.get("https://lambda-times-api.herokuapp.com/articles")
 .then(res => {
  console.log(res);
 })
 .catch(error => {
  console.log("Error:", error);
 })

res.data.message.forEach(item => {
 const artCard = lambCard(item);
 entryPoint.append(artCard);
})