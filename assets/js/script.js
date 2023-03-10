const char = createKnight("max");
const monster = createlittleMonster();

stage.start(
  char,
  monster,
  document.querySelector("#char"),
  monster,
  document.querySelector("#monster")
);
