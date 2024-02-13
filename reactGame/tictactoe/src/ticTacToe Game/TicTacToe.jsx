import React, { forwardRef, useState } from "react";

let data = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

const TicTacToe = forwardRef((props, ref) => {
  const [board, setBoard] = useState(data);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const { handleFetch } = props;

  const handleClick = (event, row, column) => {
    if (lock) return;
    if (data[row][column] === "") {
      if (count % 2 === 0) {
        data[row][column] = "X";
      } else {
        data[row][column] = "O";
      }
      setCount((prev) => prev + 1);
      setBoard(data);
      const result = checkWinner();
      if (result) {
        console.log("Winner is ", result);
        setLock(true);
        handleFetch();
        alert("Winner is ", result)
      }
    }
  };

  const checkWinner = () => {
    // for row check
    let temp = 0;
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data.length - 1; col++) {
        if (data[row][col] === data[row][col + 1] && data[row][col] !== "") {
          temp = temp + 1;
          if (temp === data.length - 1) {
            return data[row][0];
          }
        } else {
          temp = 0;
          break;
        }
      }
    }
    // for column check
    temp = 0;
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data.length - 1; col++) {
        if (data[col][row] === data[col + 1][row] && data[col][row] !== "") {
          temp = temp + 1;
          if (temp === data.length - 1) {
            return data[col][row];
          }
        } else {
          temp = 0;
          break;
        }
      }
    }
    // for left-right diagonal check
    temp = 0;
    for (let index = 0; index < data.length - 1; index++) {
      if (
        data[index][index] === data[index + 1][index + 1] &&
        data[index][index] !== ""
      ) {
        temp = temp + 1;
        if (temp === data.length - 1) {
          return data[index][index];
        }
      }
    }
    // for right-left diagonal check
    temp = data.length-1;
    for (let index = 0; index < data.length-1; index++) {
      if (
        data[index][temp] === data[index + 1][temp-1] &&
        data[index][temp] !== ""
      ) {
        temp = temp - 1;
        if (temp === 0) {
          return data[index][index];
        }
      }
    }
    return null;
  };

  return (
    <div className="gameBoard">
      {board.map((tiles, rowIndex) => {
        return (
          <div
            key={rowIndex}
            className="row"
            style={{
              background: "lightgreen",
              display: "flex",
            }}
          >
            {tiles.map((tile, colIndex) => {
              return (
                <div
                  key={colIndex}
                  className="col tile"
                  onClick={(e) => handleClick(e, rowIndex, colIndex)}
                  style={{
                    border: "1px solid black",
                    height: "150px",
                    width: "150px",
                  }}
                >
                  <h3 className="tileText">{tile}</h3>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
});

export default TicTacToe;
