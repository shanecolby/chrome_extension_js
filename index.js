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
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

const tabs = [
  { url: "https://www.linkedin.com/in/shane-colby/" }
]

tabBtn.addEventListener("click", function () {
  console.log(tabs[0].url)
})


function render(leads) {
  let listItems = ""

  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    listItems +=
      `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
        </a>
      </li>
    `
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
  console.log("clicked")
  localStorage.clear()
  myLeads = []
  render(myLeads)
})


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))

  render(myLeads)
  console.log(localStorage.getItem("myLeads"))
})


