import { Character } from "./Character-class.js" 
import rs from "readline-sync"
import chalk from "chalk"
console.clear

// chooseCharacter function is responsible for letting each player choose their character
//It displays a menu with character options and uses readlineSync to the the player's choice.
function chooseCharacter(playerNumber){
    console.log("-------------------------------------\n")
    console.log(chalk.bold(`Player ${playerNumber}, select your character:\n`))
    console.log(chalk.blue.bold("1. Ryu"))
    console.log(chalk.yellow.bold("2. Ken"))
    console.log(chalk.green.bold("3. Guile"))
    console.log(chalk.red.bold("4. Zangief"))
    console.log(chalk.italic.bold("5. Exit the Game"))
    console.log("-------------------------------------\n")
    // parseInt : used to convert the user input to a integer, so that it can be compared and used.
    const choice = parseInt(rs.question(chalk.bold(`Player ${playerNumber}, choose your character (1-4)\n-------------------------------------\n> `)))
   
    // Store the character that the player chooses. 
    let chosenCharacter;

    if(choice === 1){
        chosenCharacter = new Character("Ryu", 200, "Hurricane Kick", "Hadouken", 25, 45, 20 )
    }else if(choice === 2){
       chosenCharacter = new Character("Ken", 200, "Hurricane Kick", "Shoryuken", 25, 45, 20 )
    }else if(choice === 3){
        chosenCharacter = new Character("Guile", 200, "Sonic Boom", "Somersault Kick", 20, 50, 20 )
    }else if(choice === 4){
        chosenCharacter = new Character("Zangief", 220, "Cyclone Lariat", "Atomic Drop", 20, 55, 20)
    }else if(choice === 5){
        console.log(chalk.bold.italic("Game Over..."))
            process.exit()
    }else {
        console.log("Exit the game!\n")
    }

    // switch(choice){
    //     case 1 :
    //         chosenCharacter = new Character("Ryu", 200, "Hurricane Kick", "Hadouken", 25, 45 )
    //         break
    //     case 2: 
    //         chosenCharacter = new Character("Ken", 200, "Hurricane Kick", "Shoryuken", 25, 45 )
    //         break
    //     case 3: 
    //         chosenCharacter = new Character("Guile", 200, "Sonic Boom", "Somersault Kick", 20, 50 )
    //         break
    //     case 4: 
    //         chosenCharacter = new Character("Zangief", 220, "Cyclone Lariat", "Atomic Drop", 20, 55)
    //         break
    //     case 5: 
    //         console.log("Game Over...")
    //         process.exit()
    //         default:
    //             console.log("Exit the game!")

    // }

    console.log(chalk.green.bold(`Player ${playerNumber}, you have chosen ${chosenCharacter.name}!`))
    return chosenCharacter
}

// they reate "player1 and player 2" by calling chooseCharacter function for each player
const player1 = chooseCharacter(1)
const player2 = chooseCharacter(2)

// while loop checks if both players are alive and keep calling new rounds until one of the players is below the condition "< 0"
while(player1.isAlive() && player2.isAlive()){
    console.clear
    console.log(chalk.bold("\n--- Round ---\n"))

    //Player 1's turn
    console.log(chalk.bold(`${player1.name}'s turn:\n`))
    console.log(chalk.bold(`1. ${player1.normalAttackName}`))
    console.log(chalk.bold(`2. ${player1.specialAttackName}`))
    console.log("----------------------")

    const choice1 = parseInt(rs.question(chalk.bold("Choose an attack (1-2):\n ")))
    console.log("------------------------------\n")

    if(choice1 === 1){
        player1.normalAttack(player2)
    } else if(choice1 === 2){
        player1.specialAttack(player2, 10)
    } else{
        console.log(chalk.bold("Invalid choice. Skipping turn.\n"))
        console.log("------------------------------\n")
    }

    if(!player2.isAlive()){
        console.log(chalk.bold.magenta(`Congratulations! ${player2.name} has been defetead. ${player1.name} wins!\n`))
        break
    }

    //Player's 2 turn
    console.log(chalk.bold(`${player2.name}'s turn:\n`))
    console.log(chalk.bold(`1. ${player2.normalAttackName}`))
    console.log(chalk.bold(`2. ${player2.specialAttackName}`))
    console.log("------------------------------\n")

    const choice2 = parseInt(rs.question(chalk.bold(`Choose an attack (1-2):\n`)))
    console.log("------------------------------\n")

    if(choice2 === 1){
        player2.normalAttack(player1)
    } else if(choice2 === 2){
        player2.specialAttack(player1, 10)
    } else{
        console.log(chalk.bold("Invalid choice. Skipping turn.\n"))
        console.log("------------------------------\n")
    }

    if(!player1.isAlive()){
        console.log(chalk.bold.blue(`Congratulations! ${player1.name} has been defetead. ${player2.name} wins!\n`))
        break
    }



}