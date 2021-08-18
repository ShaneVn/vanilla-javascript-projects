let myLeads = [];

// console.log(typeof myLeads)  Check the type of myLeads
// Practice for converting between string and array
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.epic.com")
// myLeads = JSON.stringify(myLeads)
// myLeads = JSON.stringify(myLeads)

// practice for adding and clearing local storage
// localStorage.setItem("myLeads","www.example.com")
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear()

const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTab = document.getElementById("save-tab");

// ["lead1","lead2"] or null
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// const tabs = [ {
//     url : "https://www.youtube.com/watch?v=jS4aFq5-91M"
// }]

saveTab.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function deleteLead(index) {
  myLeads.splice(index, 1);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
}

// ulEl.addEventListener('click',deleteIndi)

function render(leads) {
  // let listItems = "";
  const container = document.createElement('div');
  container.class = "container"
  for (let i = 0; i < leads.length; i++) {
    // listItems += `
    //     <li>
    //         <a target='_blank' href='${leads[i]}'>
    //             ${leads[i]}
    //         </a>

    //         <button onclick="deleteIndi(${i})">Delete</button>
    //     </li>
    // `
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.target = "_blank";
    
    anchor.href =
      leads[i].indexOf("http") >= 0 ? leads[i] : "https://" + leads[i];
    anchor.textContent = leads[i];
    const deleteItemButton = document.createElement("button");
    deleteItemButton.classList.add("delete-indi")
    deleteItemButton.innerHTML=`<i class="fas fa-trash"></i> `;
    deleteItemButton.onclick = () => {
      deleteLead(i);
    };
    listItem.appendChild(anchor);
    listItem.appendChild(deleteItemButton);
    container.appendChild(listItem);
    const breakLine = document.createElement("br")
    container.appendChild(breakLine)
    listItem.onmouseenter = ()=>{
      deleteItemButton.style.display = "inline"
    }

    listItem.onmouseleave= ()=>{
      deleteItemButton.style.display = "none"
    }

  }
  while (ulEl.firstChild) {
    ulEl.removeChild(ulEl.firstChild);
  }
  ulEl.appendChild(container)
}

function DeleteAll() {
  myLeads = [];
  localStorage.clear();
  render(myLeads);
}

deleteBtn.addEventListener("dblclick", DeleteAll);

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
});
