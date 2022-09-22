/* use when we use onclick in element */
// function saveLead(){
//   console.log(" attribute funcetion button clicked");
// }

// let inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click" ,function(){
//     console.log("addEventListener work")
// })


const myLeads = []
const inputEl = document.getElementById("input-el")

let inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click" , function(){
    
        myLeads.push(inputEl.value)
        // console.log(myLeads)
        inputEl.value = ""
        renderLeads()
    
})

function renderLeads(){

    let listItem = ""
    for(let i = 0;i < myLeads.length ; i++){
        // ulEl.innerHTML += "<li> + myLeads[i] + </li>"



        // listItem += "<li>" + "<a href = 'myLeads[i]' >" + myLeads[i] + "</a>" + "</li>"
                                            //OR
        //above statment can also be written as
        // listItem += "<li> <a target = '_blank' href = ' "+ myLeads[i] +"' >" + myLeads[i] + " </a></li>"
                                            //OR
        
        listItem += `
        <li>
        <a target = '_blank' href = '${myLeads[i]} '>
        ${myLeads[i]}
        </a>
        </li>
        `

    }
    ulEl.innerHTML = listItem
}

