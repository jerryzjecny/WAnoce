const board = document.getElementById('board');
    const cells = document.querySelectorAll('.cell');
    let currentPlayer = 'X';

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (cell.textContent === '' && !isGameFinished()) {
                cell.textContent = currentPlayer;
                if (checkWinner()) {
                    alert(`Player ${currentPlayer} wins!`);
                    resetGame();
                } else if (isBoardFull()) {
                    alert('It\'s a draw!');
                    resetGame();
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });
    });

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Line
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // sloupec
            [0, 4, 8], [2, 4, 6]             // X
        ];

        return winningCombinations.some(combination => {
            const [a, b, c] = combination;
            return cells[a].textContent !== '' &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent;
        });
    }

    function isGameFinished() {
      return checkWinner() || isBoardFull();
  }

    function isBoardFull() {
        return [...cells].every(cell => cell.textContent !== '');
    }

    

    function resetGame() {
        cells.forEach(cell => {
            cell.textContent = '';
        });
        currentPlayer = 'X';
    }