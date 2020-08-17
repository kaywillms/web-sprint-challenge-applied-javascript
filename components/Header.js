// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
 const createHeader = document.createElement("div");
 const createDates = document.createElement("span");
 const createH1 = document.createElement("h1");
 const createTemp = document.createElement("span");

 createHeader.append(createDates);
 createHeader.append(createH1);
 createHeader.append(createTemp);

 createHeader.classList.add("header");
 createDates.classList.add("date");
 createTemp.classList.add("temp");

 createDates.textContent = "MARCH 28, 2020";
 createH1.textContent = "Lambda Times";
 createTemp.textContent = "98°";

 return createHeader
}

const head = document.querySelector("header")
header.forEach(data => {
 head.append(Header())
});