const cells=document.querySelectorAll('.cell')
let currentPlayer='X'
let gameEnded=false

function handleCellClick(e){
    if (gameEnded){
        return
    }

    const cell=e.target

    if(cell.textContent !== ''){
        return
    }

    cell.textContent = currentPlayer

    if(checkWin()){
        document.querySelector('.message').textContent = `Player ${currentPlayer} wins!`
        gameEnded = true;
        alert(`Player ${currentPlayer} wins!`)
        resetGame()
    }
    else if(checkDraw()){
        document.querySelector('.message').textContent = "It's a draw!";
        gameEnded = true;
        alert('It is a draw')
        resetGame()

    }
    else{
        if(currentPlayer=='X'){
            currentPlayer="O"
        }
        else{
            currentPlayer='X'
        }

        document.querySelector('.message').textContent = `Player ${currentPlayer}'s turn`;
    }
}

function checkWin(){
    const winningCombs=
    [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    return winningCombs.some(combination => {
        const [a, b, c] = combination
        return cells[a].textContent === currentPlayer && cells[b].textContent === currentPlayer && cells[c].textContent === currentPlayer
    })
}

function checkDraw() {
    return Array.from(cells).every(cell => cell.textContent !== '');
}

function resetGame(){
    currentPlayer='X'
    document.querySelector('.message').textContent = `Player ${currentPlayer}'s turn`;
    gameEnded=false
    cells.forEach(cell => cell.textContent='')
    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    


}






cells.forEach(cell => cell.addEventListener('click', handleCellClick));