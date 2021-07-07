let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// localStorage.setItem("myLeads", "www.google.com")

// let leads = localStorage.getItem("myLeads")
// console.log(leads)

// localStorage.clear()
console.log(localStorage)

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

const deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick", function () {
  console.log("clicked")
  localStorage.clear()
  myLeads = []
  renderLeads()
})

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}

function renderLeads() {
  let listItems = ""

  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems +=
      `
      <li>
        <a target='_blank' href='${myLeads[i]}'>
          ${myLeads[i]}
        </a>
      </li>
    `
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
  ulEl.innerHTML = listItems
}




inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

  renderLeads()
  console.log(localStorage.getItem("myLeads"))
})


