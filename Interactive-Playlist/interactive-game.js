import rs from "readline-sync"


class Character {
  constructor(name, health, normalAttackDamage, specialAttackDamage) {
    this.name = name;
    this.health = health;
    this.normalAttackDamage = normalAttackDamage;
    this.specialAttackDamage = specialAttackDamage;
  }

  attack(target, damage) {
    console.log(`${this.name} attacks ${target.name} and inflicts ${damage} damage!`);
    target.takeDamage(damage);
  }

  takeDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} has ${this.health} health remaining.`);
  }

  isAlive() {
    return this.health > 0;
  }

  normalAttack(target) {
    this.attack(target, this.normalAttackDamage);
  }

  specialAttack(target) {
    this.attack(target, this.specialAttackDamage);
  }
}

function chooseCharacter(playerNumber) {
  console.log(`Player ${playerNumber}, select your character:`);
  console.log('1. Warrior (100 health)');
  console.log('2. Mage (80 health)');
  console.log('3. Archer (90 health)');

  const choice = parseInt(rs.question(`Player ${playerNumber}, choose your character (1-3):`));

  switch (choice) {
    case 1:
      return new Character('Warrior', 100, 15, 25);
    case 2:
      return new Character('Mage', 80, 10, 30);
    case 3:
      return new Character('Archer', 90, 12, 20);
    default:
      return new Character('Unknown', 100, 10, 20);
  }
}

const player1 = chooseCharacter(1);
const player2 = chooseCharacter(2);

while (player1.isAlive() && player2.isAlive()) {
  console.log('\n--- New Round ---');

  // Player 1's turn
  console.log(`${player1.name}'s turn:`);
  console.log(`1. Normal Attack`);
  console.log(`2. Special Attack`);

  const choice1 = parseInt(rs.question('Choose an attack (1-2):'));
  if (choice1 === 1) {
    player1.normalAttack(player2);
  } else if (choice1 === 2) {
    player1.specialAttack(player2);
  } else {
    console.log('Invalid choice. Skipping turn.');
  }

  if (!player2.isAlive()) {
    console.log(`Congratulations! ${player2.name} has been defeated. ${player1.name} wins!`);
    break;
  }

  // Player 2's turn
  console.log(`${player2.name}'s turn:`);
  console.log(`1. Normal Attack`);
  console.log(`2. Special Attack`);

  const choice2 = parseInt(rs.question('Choose an attack (1-2):'));
  if (choice2 === 1) {
    player2.normalAttack(player1);
  } else if (choice2 === 2) {
    player2.specialAttack(player1);
  } else {
    console.log('Invalid choice. Skipping turn.');
  }

  if (!player1.isAlive()) {
    console.log(`Congratulations! ${player1.name} has been defeated. ${player2.name} wins!`);
    break;
  }
}
