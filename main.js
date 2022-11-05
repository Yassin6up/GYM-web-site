const log = console.log;
const add = document;
/*
const loading = add.querySelector("*")

window.onload = function() {



    const loadingText = add.createElement("h1")
    const Text = add.createTextNode("loading...")
    loadingText.append(Text)
    loadingText.className = "loading";
   

    document.body.appendChild(loadingText)


    loading.style.display = "none"
    loadingText.style.display = "block"

    setTimeout(function() {

        loading.style.display = "block"
        loadingText.style.display = "none"
    }, 3000)
}
*/
//for loang

const ln = document.getElementById("lang");

ln.childNodes.forEach(el => {
  el.addEventListener("click", () => {
      changeLang(el.dataset.type);
  });
});
async function changeLang(value) {
  const file = await fetch("./lang/" + value + ".json");
  const json = await file.json();


  const elements = document.querySelectorAll("[data-lang]");
  document.body.dir = json["dir"];
  document.body.style.fontFamily = json["font"];


  elements.forEach(el => {
    el.innerHTML = json[el.dataset.lang];
    el.style.fontFamily = json["font"];
  });
  console.log(elements);
}

// for transform nav bar 
let btnNav = add.querySelector(".title")
let menu = add.querySelector(".navBar")
btnNav.addEventListener("click", function() {

    menu.classList.toggle("active")
})
// her chang color
let root = add.querySelector(":root")
let red = add.getElementById("red")
let orange = add.getElementById("orange")
let blue = add.getElementById("blue")
red.addEventListener("click", function() {
    let them_red = root.style.setProperty("--mainColor--", "red")
    window.localStorage.setItem("them", them_red)
})
orange.addEventListener("click", function() {
    let them_orange = root.style.setProperty("--mainColor--", "#FF7400")
    window.localStorage.setItem("them", them_orange)
})
blue.addEventListener("click", function() {
    let them_Blue = root.style.setProperty("--mainColor--", "blue")
    window.localStorage.setItem("them", them_Blue)
})

//scroll to header;

const scroolbtn = document.getElementById("goTop")

window.addEventListener("scroll", function() {
    //   console.log(window.scrollY);
    if (window.scrollY >= 600) {
        scroolbtn.style.display = "block";
        scroolbtn.style.transition = "1s all";

    } else {
        scroolbtn.style.display = "none";
    }
})
scroolbtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0
    })
})
