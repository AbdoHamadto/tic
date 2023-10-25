let playerOne = document.querySelector(".playerone");
let playerTwo = document.querySelector(".playertwo");
playerOne.style.color = "blue"
playerTwo.style.color = "rgb(155, 152, 152)"
let box = document.querySelectorAll(".box");
let reload = document.querySelector(".reload")
let i = 0;
let j = 0;
let A1o; let A2o; let A3o; let B1o; let B2o; let B3o; let C1o; let C2o; let C3o;
let A1x; let A2x; let A3x; let B1x; let B2x; let B3x; let C1x; let C2x; let C3x;
let t;

box.forEach(e => {
    e.onclick = function () {
        if (i == 9) {
            return
        }
        if (e.classList.contains("box")) {
            if (i % 2 === 0) {
                playerTwo.style.color = "red";
                playerOne.style.color = "rgb(155, 152, 152)";
                let icon = document.createElement("i")
                icon.className = "fa-solid fa-o fa-2x" 
                e.style.cssText = " background-color: #5bb4cf";
                e.appendChild(icon)
                if (e.classList.contains("one")) {
                    e.className = "styel A1o"
                    A1o = "A1o"
                }
                if (e.classList.contains("two")) {
                    e.className = "styel B1o"
                    B1o = "B1o"
                }
                if (e.classList.contains("three")) {
                    e.className = "styel C1o"
                    C1o = "C1o"
                }
                if (e.classList.contains("four")) {
                    e.className = "styel A2o"
                    A2o = "A2o"
                }
                if (e.classList.contains("five")) {
                    e.className = "styel B2o"
                    B2o = "B2o"
                }
                if (e.classList.contains("six")) {
                    e.className = "styel C2o"
                    C2o = "C2o"
                }
                if (e.classList.contains("seven")) {
                    e.className = "styel A3o"
                    A3o = "A3o"
                }
                if (e.classList.contains("eghit")) {
                    e.className = "styel B3o"
                    B3o = "B3o"
                }
                if (e.classList.contains("nine")) {
                    e.className = "styel C3o"
                    C3o = "C3o"
                }
                if (A1o == "A1o" & A2o == "A2o" & A3o == "A3o" || B1o == "B1o" && B2o == "B2o" && B3o == "B3o" || C1o == "C1o" && C2o == "C2o" && C3o == "C3o" || A1o == "A1o" && B1o == "B1o" && C1o == "C1o" || A2o == "A2o" && B2o == "B2o" && C2o == "C2o" || A3o == "A3o" && B3o == "B3o" && C3o == "C3o" || A1o == "A1o" && B2o == "B2o" && C3o == "C3o" || C1o == "C1o" && B2o == "B2o" && A3o == "A3o") {
                    playerTwo.innerHTML = "Lose &#128545;"
                    playerOne.innerHTML = "Win &#128513;"
                    playerOne.style.color = "blue"
                    i = 8;
                    t = true;
                }
                i++;
                j++;
            } else {
                playerOne.style.color = "blue";
                playerTwo.style.color = "rgb(155, 152, 152)";
                let icon = document.createElement("i")
                icon.className = "fa-solid fa-x fa-2x"
                e.style.cssText = " background-color: #ef8d21";
                e.appendChild(icon)
                if (e.classList.contains("one")) {
                    e.className = "styel A1x"
                    A1x = "A1x"
                }
                if (e.classList.contains("two")) {
                    e.className = "styel B1x"
                    B1x = "B1x"
                }
                if (e.classList.contains("three")) {
                    e.className = "styel C1x"
                    C1x = "C1x"
                }
                if (e.classList.contains("four")) {
                    e.className = "styel A2x"
                    A2x = "A2x"
                }
                if (e.classList.contains("five")) {
                    e.className = "styel B2x"
                    B2x = "B2x"
                }
                if (e.classList.contains("six")) {
                    e.className = "styel C2x"
                    C2x = "C2x"
                }
                if (e.classList.contains("seven")) {
                    e.className = "styel A3x"
                    A3x = "A3x"
                }
                if (e.classList.contains("eghit")) {
                    e.className = "styel B3x"
                    B3x = "B3x"
                }
                if (e.classList.contains("nine")) {
                    e.className = "styel C3x"
                    C3x = "C3x"
                }
                if (A1x == "A1x" & A2x == "A2x" & A3x == "A3x" || B1x == "B1x" && B2x == "B2x" && B3x == "B3x" || C1x == "C1x" && C2x == "C2x" && C3x == "C3x" || A1x == "A1x" && B1x == "B1x" && C1x == "C1x" || A2x == "A2x" && B2x == "B2x" && C2x == "C2x" || A3x == "A3x" && B3x == "B3x" && C3x == "C3x" || A1x == "A1x" && B2x == "B2x" && C3x == "C3x" || C1x == "C1x" && B2x == "B2x" && A3x == "A3x") {
                    playerOne.innerHTML = "Lose &#128545;"
                    playerTwo.innerHTML = "Win &#128513;"
                    playerTwo.style.color = "blue"
                    playerOne.style.color = "red"
                    i = 8;
                    t = true;
                }
                i++;
                j++;
            }
        }
        if (j == 9 && t != true) {
            playerTwo.remove();
            playerOne.innerHTML = "Draw &#128529;"
            playerOne.style.color = "#ad1e23"
        }
    }
});

reload.onclick = function () {
    location.reload()
}
