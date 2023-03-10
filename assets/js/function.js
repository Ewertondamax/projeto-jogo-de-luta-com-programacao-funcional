const defaultCharacter = {
  name: "",
  life: 1,
  maxLife: 1,
  attack: 0,
  defense: 0,
};

const createKnight = (name) => {
  return {
    ...defaultCharacter,
    name,
    life: 100,
    maxLife: 100,
    attack: 10,
    defense: 8,
  };
};

const createSorcerer = (name) => {
  return {
    ...defaultCharacter,
    name,
    life: 50,
    maxLife: 50,
    attack: 14,
    defense: 5,
  };
};

const createlittleMonster = () => {
  return {
    name: "Little Monster",
    life: 40,
    maxLife: 40,
    attack: 5,
    defense: 5,
  };
};

const createBigMonster = () => {
  return {
    name: "Big Monster",
    life: 120,
    maxLife: 120,
    attack: 16,
    defense: 6,
  };
};

const stage = {
  fighter1: null,
  fighter2: null,
  fighter1El: null,
  fighter2El: null,

  start(fighter1, fighter2, fighter1El, fighter2El) {
    this.fighter1 = fighter1;
    this.fighter2 = fighter2;
    this.fighter1El = fighter1El;
    this.fighter2El = fighter2El;

    this.fighter1El
      .querySelector("attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter1, this.fighter2)
      );

    this.fighter2El
      .querySelector("attackButton")
      .addEventListener("click", () =>
        this.doAttack(this.fighter2, this.fighter1)
      );
    this.update();
  },
  update() {
    //fighter 1 atualizado
    this.fighter1El.querySelector(".name").innerHTML = `${
      this.fighter1.name
    }-${this.fighter1.life.toFixed(1)}HP`;
    let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
    this.fighter1El.querySelector(".bar").style.width = `${f1Pct}%`;
    //fighter 2 atualizado
    this.fighter2El.querySelector(".name").innerHTML = `${
      this.fighter2.name
    }-${this.fighter2.life.toFixed(1)}HP`;

    let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
    this.fighter2El.querySelector(".bar").style.width = `${f2Pct}%`;
  },
  doAttack(attacking, attacked) {
    console.log(`${attacking.name} atacando ${attacked.name}`);
    this.update();
  },
};
