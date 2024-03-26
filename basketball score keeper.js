window.onload = function () {
  const sepctator = document.querySelector("#sepctator")
  const jordan = document.querySelector("#jordan")
  const basketball = document.querySelector("#basketball")

  window.addEventListener("scroll", function () {
    let value = window.scrollY
    sepctator.style.top = value + 0.5 + "px"
    jordan.style.top = value * 0.15 + "px"
    basketball.style.left = value + 0.5 + "px"
    basketball.style.top = value * 3 + "px"

  })



  const teamDiv = document.querySelector('.teampic')
  const pics1 = document.querySelector('.teampic1 img')
  const pics2 = document.querySelector('.teampic2 img')
  const left = document.querySelector(".section3 .left img")
  const right = document.querySelector(".section3 .right img")
  const teamName1 = document.querySelector(".team-name1")
  const teamName2 = document.querySelector(".team-name2")


  const team1Select = document.querySelector('#selectTeam1')
  team1Select.addEventListener('change', e => {
    if (pics1.src = e.target.value) {
      pics1.style.opacity = 1
      teamDiv.style.height = 300 + "px"
      left.src = e.target.value
      left.style.opacity = 1

    } else {
      pics1.style.opacity = 0
      teamDiv.style.height = 100 + "px"
      left.style.opacity = 0

    }
    const name1 = e.target.selectedOptions[0].innerText
    teamName1.innerHTML = name1
  })

  const team2Select = document.querySelector('#selectTeam2')
  team2Select.addEventListener('change', e => {
    if (pics2.src = e.target.value) {
      pics2.style.opacity = 1
      teamDiv.style.height = 300 + "px"
      right.src = e.target.value
      right.style.opacity = 1
    } else {
      pics2.style.opacity = 0
      teamDiv.style.height = 100 + "px"
      right.style.opacity = 0

    }
    const name2 = e.target.selectedOptions[0].innerText
    teamName2.innerHTML = name2
  })

  const section3 = document.querySelector(".section3")
  const formButton = document.querySelector(".formSubmit")
  formButton.addEventListener("click", e => {
    e.preventDefault()
    document.documentElement.scrollTop = section3.offsetTop
  })
};



const score1 = document.querySelector("#scoreA")
const score2 = document.querySelector("#scoreB")
const timer = document.querySelector(".timer")
const startBtn = document.querySelector(".start")
const periodDisplay = document.querySelector(".period-display")
const reset = document.querySelector(".reset")
let scoreA = 0
let scoreB = 0
let period = 1
let time = 6

reset.addEventListener("click",()=> {
  window.location.reload()
  alert("Please Go Back to Choose Your Team")
})

const updateScore = (team, points) => {
  if (team === "A") {
    scoreA += points
    score1.innerHTML = scoreA
  } else if (team === "B") {
    scoreB += points
    score2.innerHTML = scoreB
  }
}
const add1A = document.querySelector(".add1A")
add1A.addEventListener("click", () => updateScore("A", 1))
const add2A = document.querySelector(".add2A")
add2A.addEventListener("click", () => updateScore("A", 2))
const add3A = document.querySelector(".add3A")
add3A.addEventListener("click", () => updateScore("A", 3))
const add1B = document.querySelector(".add1B")
add1B.addEventListener("click", () => updateScore("B", 1))
const add2B = document.querySelector(".add2B")
add2B.addEventListener("click", () => updateScore("B", 2))
const add3B = document.querySelector(".add3B")
add3B.addEventListener("click", () => updateScore("B", 3))


function resetTimer() {
  time = 6
  let m = setInterval(() => {
    time--
    timer.innerHTML = `00:0${time}`
    if (time === 0) {
      clearInterval(m)
      period++
      periodDisplay.innerHTML = `Period:${period}`
      resetTimer()
      if (period > 4) {
        periodDisplay.innerHTML = `Final`
      }
    } else if (period > 4) {
      clearInterval(m)
      timer.innerHTML = "00:00"
      add1A.disabled = true
      add2A.disabled = true
      add3A.disabled = true
      add1B.disabled = true
      add2B.disabled = true
      add3B.disabled = true
    }
  }, 1000)
}

startBtn.addEventListener("click", function () {
  startBtn.disabled = true
  add1A.disabled = false
  add2A.disabled = false
  add3A.disabled = false
  add1B.disabled = false
  add2B.disabled = false
  add3B.disabled = false

  let n = setInterval(() => {
    time--
    timer.innerHTML = `00:0${time}`
    if (time === 0) {
      clearInterval(n)
      period++
      periodDisplay.innerHTML = `Period:${period}`
      resetTimer()
    }
  }, 1000)

})






