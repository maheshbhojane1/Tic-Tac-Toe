let boxes = document.querySelectorAll('#box');
let reset = document.getElementById('reset');
let newGame = document.getElementById('new');
let msg =  document.querySelector('.msg-container');
let winner = document.querySelector('.msg');

let turnX = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=> {

    box.addEventListener('click', () => {
        
        if(turnX) {
            box.innerText = "X";
            turnX = false;
        }else {
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;

        checkWinner();
        checkDrew();
    });
});





const disibleBoxes = () => {

    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxe = () => {

    for(let box of boxes) {
        box.disabled = false;
        box.innerText = " ";
    }
}


const resetGame = () => {
    turnX = true;
    enableBoxe();
    msg.classList.add('hide');
}

const showWinner = (win) => {
    winner.innerText = `Congratulations winner is ${win}`;
    msg.classList.remove('hide');
    disibleBoxes();
}

const checkWinner = () => {
    
    for(let pattern of winPattern) {

        let posOne = boxes[pattern[0]].innerText;
        let posTwo = boxes[pattern[1]].innerText; 
        let posThree = boxes[pattern[2]].innerText;


        if(posOne != "" && posTwo != "" && posThree != "") {

            if(posOne === posTwo && posTwo === posThree) {

                showWinner(posOne);
            }
        }
    }
};
const checkDrew = () => {
    
    for(let pattern of winPattern) {

        let posOne = boxes[pattern[0]].innerText;
        let posTwo = boxes[pattern[1]].innerText; 
        let posThree = boxes[pattern[2]].innerText;


        if(posOne != "" && posTwo != "" && posThree != "") {

            if(posOne != posTwo && posTwo != posThree) {

                showWinner("Draw");
            }
        }
    }
};




newGame.addEventListener('click', resetGame)
reset.addEventListener('click', resetGame)

