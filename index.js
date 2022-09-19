

// Create a function that increments the lapsCompleted variable with one
// Run it three times

let countEl=document.getElementById("count-el")
let count=0

function increment() {
     count +=1
     countEl.textContent=count

}

let saveEl=document.getElementById("save-el")


function save( ) {

      let finalCount= count + " - "
      saveEl.textContent+= finalCount
      countEl.textContent=0
      count=0


}




