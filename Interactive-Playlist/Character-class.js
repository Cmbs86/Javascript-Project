import chalk from "chalk"
export class Character{
    constructor(name, health, normalAttackName, specialAttackName, normalAttackDamage, specialAttackDamage, maxMP){
        this.name = name
        this.health = health
        this.normalAttackName = normalAttackName
        this.specialAttackName = specialAttackName
        this.normalAttackDamage = normalAttackDamage
        this.specialAttackDamage = specialAttackDamage
        this.maxMP = maxMP
        this.currentMP = maxMP
    }
 // attack method: takes a target and amount of damage. logs message, and call method "takedamage"
    attack(target, damage, attackName, mpCost){
        if(mpCost && mpCost > this.currentMP){
            console.log(chalk.yellow.bold(`${this.name} has insufficient MP for ${attackName}. Skipping turn.\n `))
        }else{
            console.log(chalk.red.bold(`${this.name} uses ${attackName} on ${target.name} and inflicts ${damage} damage`));
            console.log("------------------------------\n")
            target.takeDamage(damage);
            if(mpCost) {
            this.consumeMP(mpCost)}
        }
        

  
       

    }

// method to check wheter there's enough MP before performing the special attack.
    consumeMP(amount){
        if(!isNaN(amount)){
            this.currentMP -= amount;
            if(this.currentMP < 0) {
            this.currentMP = 0
        }
        console.log(chalk.cyan.bold(`${this.name} has ${this.currentMP} MP remaining\n`))
        console.log("------------------------------\n")
    }

}
    
//takedamage method: subracts the specified damage from character's health and logs updated health.
    takeDamage(damage){
        this.health -= damage;
        console.log(chalk.yellow.bold(`${this.name} has ${this.health} health remaining\n`))
        console.log("------------------------------\n")
        
    }
// isAlive: check if character is still alive based of their health
    isAlive(){
        return this.health > 0;
    }
// normal and specialAttack methods are convenient methods for performing attacks with certain damage values.
    normalAttack(target){
        this.attack(target, this.normalAttackDamage, this.normalAttackName)


    }
//only two special attacks can be called per game. When called more than 2 times, it skips the player's turn
    specialAttack(target, mpCost){
        this.attack(target, this.specialAttackDamage, this.specialAttackName, mpCost)
    }

}