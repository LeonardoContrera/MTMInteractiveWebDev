let url = 'https://opentdb.com/api.php?amount=1&category=20&type=multiple';

const question = document.getElementById('question');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

const main = data => {
    console.log(data);
    let choices = [data.results[0].correct_answer, data.results[0].incorrect_answers[0], data.results[0].incorrect_answers[1], data.results[0].incorrect_answers[2]]
    question.innerHTML = `<h2>${data.results[0].question}</h2>`;
    btn1.innerHTML = choices[0];
    btn2.innerHTML = choices[1];
    btn3.innerHTML = choices[2];
    btn4.innerHTML = choices[3];
//    btn1.innerHTML = data.results[0].correct_answer;
//    btn2.innerHTML = data.results[0].incorrect_answers[0];
//    btn3.innerHTML = data.results[0].incorrect_answers[1];
//    btn4.innerHTML = data.results[0].incorrect_answers[2];
};

fetch(url)
    .then(response => response.json())
    .then(data => {
        main(data);
    });

    const handleClick = evt => {
        console.log(evt.target.id);
    };

    btn1.addEventListener('click', handleClick);
    btn2.addEventListener('click', handleClick);
    btn3.addEventListener('click', handleClick);
    btn4.addEventListener('click', handleClick);

   // function shuffleChoices(array){
    //    let curIndex = array.length, 
    //};