const button = document.getElementById("btn");
const activities = document.getElementById("activities");
const title = document.getElementById("title");

// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then(response => response.json())
//   .then(data =>document.getElementById("activities").textContent = data.activity
//   )

function changeTitle() {
  title.textContent = "🔥 Hope you are enjoying your activities ✨";
}

const fetchApis = () => {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {(activities.textContent = data.activity)
    console.log(data)});
};  

button.addEventListener("click", function(){
  fetchApis();
  changeTitle();
});
