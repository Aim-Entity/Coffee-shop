function responsiveNav() {
  if (window.innerWidth < 960){
    window.addEventListener("load", (event) => {
      document.querySelector(".nav").style.display = "none";
      document.querySelector(".nav-mobile").style.display = "block";
    })
  }
}

responsiveNav()