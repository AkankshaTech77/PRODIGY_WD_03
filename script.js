let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function handleClick(index) {
    if(board[index] !== "" || !gameActive) return;

    board[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;

    checkWinner();

    currentPlayer = currentPlayer === "X" ? "O" : "X";

    if(gameActive){
        document.getElementById("status").innerText =
        "Player " + currentPlayer + "'s Turn";
    }
}

function checkWinner() {
    for(let pattern of winPatterns){
        let [a,b,c] = pattern;

        if(
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ){
            document.getElementById("status").innerText =
            "Player " + board[a] + " Wins!";
            gameActive = false;
            return;
        }
    }

    if(!board.includes("")){
        document.getElementById("status").innerText = "It's a Draw!";
        gameActive = false;
    }
}

function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;

    document.getElementById("status").innerText =
    "Player X's Turn";

    let cells = document.getElementsByClassName("cell");

    for(let cell of cells){
        cell.innerText = "";
    }
}