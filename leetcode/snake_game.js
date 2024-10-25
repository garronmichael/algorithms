/*
Design a Snake game that is played on a device with screen size height x width. Play the game online if you are not familiar with the game.

The snake is initially positioned at the top left corner (0, 0) with a length of 1 unit.

You are given an array food where food[i] = (ri, ci) is the row and column position of a piece of food that the snake can eat. When a snake eats a piece of food, its length and the game's score both increase by 1.

Each piece of food appears one by one on the screen, meaning the second piece of food will not appear until the snake eats the first piece of food.

When a piece of food appears on the screen, it is guaranteed that it will not appear on a block occupied by the snake.

The game is over if the snake goes out of bounds (hits a wall) or if its head occupies a space that its body occupies after moving (i.e. a snake of length 4 cannot run into itself).

Implement the SnakeGame class:

SnakeGame(int width, int height, int[][] food) Initializes the object with a screen of size height x width and the positions of the food.
int move(String direction) Returns the score of the game after applying one direction move by the snake. If the game is over, return -1.
 

Example 1:


Input
["SnakeGame", "move", "move", "move", "move", "move", "move"]
[[3, 2, [[1, 2], [0, 1]]], ["R"], ["D"], ["R"], ["U"], ["L"], ["U"]]
Output
[null, 0, 0, 1, 1, 2, -1]

Explanation
SnakeGame snakeGame = new SnakeGame(3, 2, [[1, 2], [0, 1]]);
snakeGame.move("R"); // return 0
snakeGame.move("D"); // return 0
snakeGame.move("R"); // return 1, snake eats the first piece of food. The second piece of food appears at (0, 1).
snakeGame.move("U"); // return 1
snakeGame.move("L"); // return 2, snake eats the second food. No more food appears.
snakeGame.move("U"); // return -1, game over because snake collides with border

*/

/**
 * @param {number} width
 * @param {number} height
 * @param {number[][]} food
 */
var SnakeGame = function(width, height, food) {
    this.position = [0, 0]
    this.prevPositions = [] 
    this.width = width
    this.height = height
    this.food = food
    this.score = 0
};

/** 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {

    let newPosition = this.position.slice()
    let food = this.food[0] || []

    // update the snake position
    if (direction === "U") {
        newPosition[0]--
    }
    if (direction === "D") {
        newPosition[0]++
    }
    if (direction === "L") {
        newPosition[1]--
    }
    if (direction === "R") {
        newPosition[1]++
    }

    // if out of bounds, game over
    if (newPosition[0] < 0 ||
        newPosition[0] >= this.height ||
        newPosition[1] < 0 ||
        newPosition[1] >= this.width) {
        
        return -1
    }

    // if on a new position is within last [score] - 1 tiles of body, game over
    // last position will not hit since will move away in same turn
    if (this.prevPositions.slice(this.prevPositions.length - this.score + 1).indexOf(newPosition.toString()) > -1) {
        return -1
    }

    // if new position === food
    if (newPosition[0] === food[0] && newPosition[1] === food[1]) {
        // update score
        this.score++
        // remove food
        this.food.shift()
    }

    // store the old position
    this.prevPositions.push(this.position.toString())
    // update the current position
    this.position = newPosition

    return this.score

};

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = new SnakeGame(width, height, food)
 * var param_1 = obj.move(direction)
 */