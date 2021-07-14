const btnEasy = document.getElementById('btnEasy');
const btnMedium = document.getElementById('btnMedium');
const btnHard = document.getElementById('btnHard');

let difficultyChoice;

const handleClickDiff = evt => {
    console.log(evt.target.innerHTML);
    if(evt.target.innerHTML === "Easy" || evt.target.innerHTML === "<h2>Easy</h2>")
    {
        difficultyChoice = "easy";
    }
    else if(evt.target.innerHTML === "Medium"|| evt.target.innerHTML === "<h2>Medium</h2>")
    {
        difficultyChoice = "medium";
    }
    else if(evt.target.innerHTML === "Hard"|| evt.target.innerHTML === "<h2>Hard</h2>")
    {
        difficultyChoice = "hard";
    }
    sessionStorage.setItem("diff", difficultyChoice);

    location.href = "index.html";
};

btnEasy.addEventListener('click', handleClickDiff);
btnMedium.addEventListener('click', handleClickDiff);
btnHard.addEventListener('click', handleClickDiff);
