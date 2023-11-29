import rs from "readline-sync"
console.clear
class Character{
    constructor(name, health, normalAttackName, specialAttackName, normalAttackDamage, specialAttackDamage){
        this.name = name
        this.health = health
        this.normalAttackName = normalAttackName
        this.specialAttackName = specialAttackName
        this.normalAttackDamage = normalAttackDamage
        this.specialAttackDamage = specialAttackDamage
    }
 // attack method: takes a target and amount of damage. logs message, and call method "takedamage"
    attack(target, damage, attackName){
        console.log(`${this.name} uses ${attackName} on ${target.name} and inflicts ${damage} damage!`)
        target.takeDamage(damage)
  
       

    }

    
//takedamage method: subracts the specified damage from character's health and logs updated health.
    takeDamage(damage){
        this.health -= damage;
        console.log(`${this.name} has ${this.health} health remaining`)
        console.log("------------------------------")
        
    }
// isAlive: check if character is still alive based of their health
    isAlive(){
        return this.health > 0;
    }
// normal and specialAttack methods are conveniene methods for performing attacks with certain damage values.
    normalAttack(target){
        this.attack(target, this.normalAttackDamage, this.normalAttackName)


    }

    specialAttack(target){
        this.attack(target, this.specialAttackDamage, this.specialAttackName)
    }

}

// chooseCharacter function is responsible for letting each player choose their character
//It displays a menu with character options and uses readlineSync to the the player's choice.
function chooseCharacter(playerNumber){
    console.log("------------------------------")
    console.log(`Player ${playerNumber}, select your character`)
    console.log("1. Ryu")
    console.log("2. Ken")
    console.log("3. Guile")
    console.log("4. Zangief")
    console.log("5. Exit the Game")
    console.log("-------------------------------")
    const choice = parseInt(rs.question(`Player ${playerNumber}, choose your character (1-4)\n> `))
   
    

    switch(choice){
        case 1 :
            return new Character("Ryu", 200, "Hurricane Kick", "Hadouken", 25, 45 )
        case 2: 
            return new Character("Ken", 200, "Hurricane Kick", "Shoryuken", 25, 45 )
        case 3: 
            return new Character("Guile", 200, "Sonic Boom", "Somersault Kick", 20, 50 )
        case 4: 
            return new Character("Zangief", 220, "Cylone Lariat", "Atomic Drop", 20, 55)
        case 5: 
            console.log("Game Over...")
            process.exit()
            default:
                console.log("Exit the game!")

    }
}

// they create "player1 and player 2" by calling chooseCharacter function for each player
const player1 = chooseCharacter(1)
const player2 = chooseCharacter(2)

while(player1.isAlive() && player2.isAlive()){
    console.clear
    console.log("\n--- Round ---")

    //Player 1's turn
    console.log(`${player1.name}'s turn:`)
    console.log(`1. ${player1.normalAttackName}`)
    console.log(`2. ${player1.specialAttackName}`)
    console.log("----------------------")

    const choice1 = parseInt(rs.question("Choose an attack (1-2: "))
    console.log("------------------------------")

    if(choice1 === 1){
        player1.normalAttack(player2)
    } else if(choice1 === 2){
        player1.specialAttack(player2)
    } else{
        console.log("Invalid choice. Skipping turn.")
    }

    if(!player2.isAlive()){
        console.log(`Congratulations! ${player2.name} has been defetead. ${player1.name} wins`)
        break
    }

    //Player's 2 turn
    console.log(`${player2.name}'s turn:`)
    console.log(`1. ${player2.normalAttackName}`)
    console.log(`2. ${player2.specialAttackName}`)
    console.log("------------------------------")

    const choice2 = parseInt(rs.question(`Choose an attack (1-2):`))
    console.log("------------------------------")

    if(choice2 === 1){
        player2.normalAttack(player1)
    } else if(choice2 === 2){
        player2.specialAttack(player1)
    } else{
        console.log("Invalid choice. Skipping turn.")
    }

    if(!player1.isAlive()){
        console.log(`Congratulations! ${player1.name} has been defetead. ${player2.name} wins`)
        break
    }



}

