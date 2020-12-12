// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

axios.get("https://lambda-times-api.herokuapp.com/topics")
 .then(res => {
  console.log(res.data.topics.forEach(data => {newTopics.append(TopicTabs(data))}));
 })
 .catch(error => {
  console.log("Data not retrived")
 })

 function TopicTabs(data){
 const newTabs = document.createElement("div"),
       topicOne = document.createElement("h5"),
       topicTwo = document.createElement("h5"),
       topicThree = document.createElement("h5"),
       topicFour = document.createElement("h5"),
       topicFive = document.createElement("h5");

       newTabs.apppend(topicOne)
       newTabs.apppend(topicTwo)
       newTabs.apppend(topicThree)
       newTabs.apppend(topicFour)
       newTabs.apppend(topicFive)

  return newTabs
 }

 const newTopics = document.querySelector("topics")