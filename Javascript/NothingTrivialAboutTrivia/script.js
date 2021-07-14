//let url = 'https://opentdb.com/api.php?amount=1&category=20&type=multiple';

//let url = 'https://opentdb.com/api.php?amount=1&type=multiple';
let difficultyChoice = sessionStorage.getItem("diff");

let url = `https://opentdb.com/api.php?amount=1&difficulty=${difficultyChoice}&type=multiple`

const question = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const answer = document.getElementById("answer");
const htmlScore = document.getElementById("score");
const refresh = document.getElementById("refresh");
const trueAnswer  = document.getElementById("trueAnswer");

let correctChoice;
let difficulty;
let score = 0;
console.log(difficultyChoice);


const main = data => {
    console.log(data);
    let choices = JSON.parse(JSON.stringify(data.results[0].incorrect_answers));
    choices.push(data.results[0].correct_answer);
    correctChoice = data.results[0].correct_answer;
    difficulty = data.results[0].difficulty;
    

    choices.forEach((element, index) => {
        let rand = Math.floor(Math.random() * choices.length);//makes range 0 - the array length
        let a = choices[index];
        let b = choices[rand];
        choices[index] = b;
        choices[rand] = a;
    });

    question.innerHTML = `<h2>${data.results[0].question}</h2>`;

    btn1.innerHTML = choices[0];
    btn2.innerHTML = choices[1];
    btn3.innerHTML = choices[2];
    btn4.innerHTML = choices[3];
};

fetch(url)
    .then(response => response.json())
    .then(data => {
        main(data);
    });

    const handleClick = evt => {
        console.log(evt.target.id);
        let yourAnswer = evt.target.innerHTML;

        if(evt.target.id === "refresh")
        {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    main(data);
                });
                btn1.style.display = "block";
                btn2.style.display = "block";
                btn3.style.display = "block";
                btn4.style.display = "block";
                
                answer.style.display = "none";
                trueAnswer.style.display = "none";
                refresh.style.display = "none";
        }
        else{
            if(yourAnswer === correctChoice){
                answer.innerHTML = `<h2>Correct!!!</h2>`;
                trueAnswer.style.display = "none";
                if(difficulty === "easy"){
                    score += 10;
                    htmlScore.innerHTML = `<h2>Score: ${score}</h2>`;
                }
                else if(difficulty === "medium"){
                    score += 30;
                    htmlScore.innerHTML = `<h2>Score: ${score}</h2>`;
                }
                else if(difficulty === "hard")
                {
                    score += 50;
                    htmlScore.innerHTML = `<h2>Score: ${score}</h2>`;
                }
            }
            else{
                answer.innerHTML = `<h2>Wrong :(</h2>`;
                trueAnswer.style.display = "block";
                trueAnswer.innerHTML = `<h2>Correct Answer:
                 ${correctChoice}</h2>`
            }
    
            btn1.style.display = "none";
            btn2.style.display = "none";
            btn3.style.display = "none";
            btn4.style.display = "none";

            answer.style.display = "block";
            //trueAnswer.style.display = "block";
            refresh.style.display = "block";

        }
    };

    btn1.addEventListener('click', handleClick);
    btn2.addEventListener('click', handleClick);
    btn3.addEventListener('click', handleClick);
    btn4.addEventListener('click', handleClick);
    refresh.addEventListener('click', handleClick);

   

    htmlScore.innerHTML = `<h2>Score: ${score}</h2>`;
    
    