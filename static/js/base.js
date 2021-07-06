function responsiveNav() {
  if (window.innerWidth < 960){
    window.addEventListener("load", (event) => {
      document.querySelector(".nav").style.display = "none";
      document.querySelector(".nav-mobile").style.display = "block";
    })
  }
}

function fixedNav() {
  const nav = document.querySelector("nav")

  window.addEventListener("scroll", (event) => {
    let position = window.scrollY > 100
    nav.classList.toggle("nav-fixed", position)
    
    console.log(position)
  })
}

fixedNav()
responsiveNav()