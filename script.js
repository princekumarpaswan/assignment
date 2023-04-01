let tar = false
let count = 1
let hh = 1
let submit = document.getElementById("btn");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes()
})
let notsElem = document.querySelector(".cointainer")


function addNotes() {

    let card = document.createElement('div')
    console.log(card);
    card.classList.add("card")
    card.id = `${"z" + count}`
    document.querySelector(".card")
    card.innerHTML = `
        <div class="cardflex">
        <div class="title-div">
            <input type="text"  placeholder="Enter Title">
            <div onclick="show(this.id)" id="${count}" class="dotbtn"><i class="fas fa-ellipsis-v"></i></div>
        </div>
        <textarea placeholder="Enter Note" cols="30" rows="7"></textarea>
            </div>
            <div id=${"a" + count} class="cardColo">
                <h5 class="coloHead">Change Background</h5>
                <div>
                    <div value="#FFFFFF" id="${"b" + hh++}" onclick="changeColo(this.id)" class="li1"><i  class="fa-solid fa-circle"></i></div>
                    <div value="#CBD2D6" id="${"b" + hh++}" onclick="changeColo(this.id)" class="li2"><i  class="fa-solid fa-circle"></i></div>
                    <div value="#CCE8E4" id="${"b" + hh++}" onclick="changeColo(this.id)" class="li3"><i  class="fa-solid fa-circle"></i></div>
                    <div value="#FAF1DB" id="${"b" + hh++}" onclick="changeColo(this.id)" class="li4"><i  class="fa-solid fa-circle"></i></div>
                    <div value="#FDE9D9" id="${"b" + hh++}" onclick="changeColo(this.id)" class="li5"><i  class="fa-solid fa-circle"></i></div>
                    <div value="#F9DCD5" id="${"b" + hh++}" onclick="changeColo(this.id)" class="li6"><i  class="fa-solid fa-circle"></i></div>
                </div>
                <hr class="line">
                <h4 class="delete">Delete</h4>
            </div>
        </div>
        `

    notsElem.appendChild(card)
    count = count + 1

    let clear = card.querySelector(".delete")
    clear.addEventListener("click", () => card.remove())

}

function show(id) {
    if (tar === false) {
        const dotbtn = document.getElementById(`${"a" + id.toString()}`)
        dotbtn.style = "display: block"
        tar = true
    } else {
        const dotbtn = document.getElementById(`${"a" + id.toString()}`)
        dotbtn.style = "display: none"
        tar = false
    }


}


function call(click_id) {

    if (tar === false) {
        document.getElementById(parseInt(click_id) + 1).style = "display: block"
        tar = true
    } else {
        document.getElementById(parseInt(click_id) + 1).style = "display: none"
        tar = false
    }

}

function changeColo(value) {
    const elem = document.getElementById(value.toString()).parentElement
    const subelem = elem.parentElement
    const mainelem = subelem.parentElement
    const cul = mainelem.getAttribute('id')
    const data = document.getElementById(value.toString()).getAttribute('value')
    const mChange = document.getElementById(cul)
    mChange.style.backgroundColor = data
}



