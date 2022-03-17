// variables
const navMobileIcon = document.querySelector("#navMobileIcon")
let modal = document.getElementById("myModal");
let imgGal = document.querySelectorAll(".image-gallery")
let imgMerch = document.querySelectorAll(".image-merch")
let modalImg = document.getElementById("img01");
let captionText = document.getElementById("caption");
let span = document.getElementsByClassName("close")[0];

// functions
const toggleMobileMenu = () => {
    const navMobileMenu = document.querySelector(".navMobileMenu")

    if(navMobileMenu.style.display === "none"){
        navMobileMenu.style.display = "block"
    } else{
        navMobileMenu.style.display = "none"
    }
}

function modalActivation(e) {
    modal.style.display = "block"
    modalImg.src = e.target.src
    captionText.innerHTML = e.target.alt
    console.log(e, e.src, e.target.alt)
}

// function outsideClick(event, notelem)	{
    
//     // check outside click for multiple elements
//     var clickedOut = true

//     for (let i = 0;i < notelem.len; i++)  {
//         if (event.target == notelem[i] || notelem[i].contains(event.target)) {
//             clickedOut = false;
            
//         }
//     }
//     console.log(clickedOut)
//     if (clickedOut) return true;
//     else return false;
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
  }



// EventListeners
navMobileIcon.addEventListener("click", toggleMobileMenu)
imgGal.forEach((item,i) => {
    item.addEventListener("click", modalActivation)
})

imgMerch.forEeach((item, i) => {
    item.addEventListener("click", modalActivation)
})

// window.addEventListener('click', function(e) {
//     console.log("here")
//     if (outsideClick(e, modal)) {
//             modal.style.display = "none"
//     }
//  });

