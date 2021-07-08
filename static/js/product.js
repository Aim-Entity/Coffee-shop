function detailReveal() {
  // Retrieve what coffee user has asked for
  document.querySelectorAll(".nav-img-cont").forEach((navDiv) => {
    navDiv.addEventListener("click", (event) => {
      let userPicked = event.target

      if(userPicked.className.split(" ")[0] == "side-nav-title") {
        let fatherDiv = userPicked.parentElement
        let textElement = userPicked

        let allFatherDiv = document.querySelectorAll(".nav-img-cont").forEach((div) => {
          div.style.background = "#454545"
        })

        let allTextElement = document.querySelectorAll(".side-nav-title").forEach((text) => {
          text.style.color = "#ECD7BC"
        })

        fatherDiv.style.background = "#EEEEEE"
        textElement.style.color = "#454545"
        
        userPicked = userPicked.className.split(" ")[1].split("-")[1]
        console.log(userPicked)
      }

      else {
        let fatherDiv = userPicked
        let textElement = userPicked.children[0]

        let allFatherDiv = document.querySelectorAll(".nav-img-cont").forEach((div) => {
          div.style.background = "#454545"
        })

        let allTextElement = document.querySelectorAll(".side-nav-title").forEach((text) => {
          text.style.color = "#ECD7BC"
        })

        fatherDiv.style.background = "#EEEEEE"
        textElement.style.color = "#454545"

        userPicked = userPicked.className.split(" ")[0]
        console.log(userPicked)
      }

      let current = document.querySelectorAll(".option-details").forEach((x) => {
        x.classList.add("option-deactive")
      })

      const newDetail = document.querySelector(`.d-${userPicked}`).parentElement
      newDetail.classList.remove("option-deactive")
    })
  })
  // End of retrieve
}

function pagination() {
  let leftCirc = document.querySelector(".first-circ");
  let rightCirc = document.querySelector(".last-circ");
  let activeCirc = document.querySelector(".active-circ");

  let firstSet = document.querySelector(".first-set");
  let secondSet = document.querySelector(".second-set");

  leftCirc.addEventListener("click", e => {
    if(leftCirc != activeCirc) {
      console.log("Test");
    }

    else{
      rightCirc.classList.toggle("active-circ");
      leftCirc.classList.toggle("active-circ");

      firstSet.classList.toggle("nav-deactive")
      secondSet.classList.toggle("nav-deactive")
    }
  })

  rightCirc.addEventListener("click", e => {
    if(rightCirc != activeCirc) {
      rightCirc.classList.toggle("active-circ");
      leftCirc.classList.toggle("active-circ");

      firstSet.classList.toggle("nav-deactive")
      secondSet.classList.toggle("nav-deactive")
    }
  })
}

pagination()
detailReveal()