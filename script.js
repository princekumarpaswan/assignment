// add note toggle
let count = 1
let subcount = 2
let tar = false
let title = document.getElementById("titleText")
let note = document.getElementById("mainNote")
let notesElem = document.querySelector(".cointainer")
let toggle = true
const newNote = () => {
    let showInput = document.getElementById("input")

    if (toggle) {
        showInput.style = "display:block"
        toggle = false
    } else {
        showInput.style = "display:hiden"
        toggle = true
    }
}

let submit = document.getElementById("btn");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    addNotes()
})

function addNotes() {
    let titleValue = title.value;
    let noteValue = note.value
    let card = document.createElement('div')
    card.classList.add("card")
    document.querySelector(".card")
    if (titleValue && noteValue) {
        card.innerHTML = `
    <div class="cardflex">
                <div>
                    <h3>${titleValue}</h3>
                </div>
                <div>
                    <h3 id="${count}" onclick="call(this.id)" class="dot"><i class="fa-solid fa-ellipsis-vertical"></i></h3>
                </div>

                <div id="${count + 1}" class="cardColo">
                    <h5 class="coloHead">Change Background</h5>
                    <ul>
                        <li class="li1"><i onclick="chanceCol(this.id)" id="${count}" class="fa-solid fa-circle"></i></li>
                        <li class="li2"><i onclick="chanceCol(this.id)" id="${count}" class="fa-solid fa-circle"></i></li>
                        <li class="li3"><i onclick="chanceCol(this.id)" id="${count}" class="fa-solid fa-circle"></i></li>
                        <li class="li4"><i onclick="chanceCol(this.id)" id="${count}" class="fa-solid fa-circle"></i></li>
                        <li class="li5"><i onclick="chanceCol(this.id)" id="${count}" class="fa-solid fa-circle"></i></li>
                        <li class="li6"><i onclick="chanceCol(this.id)" id="${count}" class="fa-solid fa-circle"></i></li>
                    </ul>
                    <hr class="line">
                    <h4 class="delete">Delete</h4>
                </div>
                <div class="list">
                <textarea class="menu left" cols="20" rows="10"disabled>${noteValue}</textarea>
                </div>
            </div>`
        titleValue = ""
        noteValue = ""
        notesElem.appendChild(card)
        // document.querySelector(".card").id = `${"c" + count}`

        let showInput = document.getElementById("input")
        showInput.style = "display:hiden"
        toggle = true
        count = count + 1
        tar = true
    } else {
        alert("title and/or note missing")
    }
    console.log(card.querySelector(".delete"));
    let clear = card.querySelector(".delete")
    clear.addEventListener("click", () => card.remove())

}



function call(click_id) {
    // // const btns = document.getElementsByClassName("dot")
    // // console.log(btns);
    // // alert(click_id)
    // const idd = document.getElementById(click_id)
    // const colo = document.getElementsByClassName("cardColo")
    // // console.log(document.getElementById(click_id + 1));
    if (tar === false) {
        document.getElementById(parseInt(click_id) + 1).style = "display: block"
        tar = true
    } else {
        document.getElementById(parseInt(click_id) + 1).style = "display: none"
        tar = false
    }

}

function chanceCol(getId) {

    const colours = ["#FFFFFF", "#CBD2D6", "#CCE8E4", "#FAF1DB", "#FDE9D9", "#F9DCD5"]
    // alert(getId)
    // const cir = document.getElementById(getId)
    // const colour = cir.style.color
    // console.log(colour);
    const colo = document.getElementById(`${"c" + getId.toString()}`)
    console.log(colo);
    // colo.style.backgroundColor = `${colours[getId]}`
    const cards = document.getElementsByClassName("card")
    cards[getId - 1].style.backgroundColor = `${colours[getId]}`




    // const colo = document.getElementById(getId)
    // document.getElementsByClassName("card").style = `background-color: ${"#" + getId};`

}
