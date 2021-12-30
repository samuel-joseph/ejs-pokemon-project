const e = require("express");
const express = require("express");
const app = express();
const port = 3400;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const switchFunction = (pokemon) => {
  let obj = {};
  switch (pokemon) {
    case "charmander":
      obj.name = "Charmander";
      obj.health = 200;
      obj.type = "Fire";
      obj.fx = "https://c.tenor.com/baki-fxZVt0AAAAM/fire-flame.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif";
      obj.battleUrl = "/charmander/battle";
      obj.mypokemon = "/charmander";
      return obj;
    case "charmeleon":
      obj.name = "Charmeleon";
      obj.health = 300;
      obj.type = "Fire";
      obj.fx =
        "https://cutewallpaper.org/21/fire-gif-transparent-background/Fireball-gif-transparent-clipart-images-gallery-for-free-.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif";
      obj.battleUrl = "/charmeleon/battle";
      obj.mypokemon = "/charmeleon";
      return obj;
    case "charizard":
      obj.name = "Charizard";
      obj.health = 500;
      obj.type = "Fire";
      obj.fx =
        "https://c.tenor.com/baki-fxZVt0AAAAM/fire-flame.gifhttps://i.ya-webdesign.com/images/transparent-explosions-animated-gif-4.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif";
      obj.battleUrl = "/charizard/battle";
      obj.mypokemon = "/charizard";
      return obj;
    case "squirtle":
      obj.name = "Squirtle";
      obj.health = 200;
      obj.type = "Water";
      obj.fx = "https://thumbs.gfycat.com/InformalWellwornCockroach-small.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif";
      obj.battleUrl = "/squirtle/battle";
      obj.mypokemon = "/squirtle";
      return obj;
    case "wartortle":
      obj.name = "Wartortle";
      obj.health = 300;
      obj.type = "Water";
      obj.fx = "https://webstockreview.net/images/clipart-mountain-ocean-1.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/8.gif";
      obj.battleUrl = "/wartortle/battle";
      obj.mypokemon = "/wartortle";
      return obj;
    case "blastoise":
      obj.name = "Blastoise";
      obj.health = 500;
      obj.type = "Water";
      obj.fx = "https://media2.giphy.com/media/uiC2aVVRnSO7uUgOqD/200w.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/9.gif";
      obj.battleUrl = "/blastoise/battle";
      obj.mypokemon = "/blastoise";
      return obj;
    case "bulbasaur":
      obj.name = "Bulbasaur";
      obj.health = 200;
      obj.type = "Grass";
      obj.fx = "https://i.imgur.com/uDJiGRk.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif";
      obj.battleUrl = "/bulbasaur/battle";
      obj.mypokemon = "/bulbasaur";
      return obj;
    case "Ivysaur":
      obj.name = "Ivysaur";
      obj.health = 300;
      obj.type = "Grass";
      obj.fx = "https://media0.giphy.com/media/AEHWYyOBSmYRDl7kDc/giphy.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif";
      obj.battleUrl = "/ivysaur/battle";
      obj.mypokemon = "/ivysaur";
      return obj;
    case "Venosaur":
      obj.name = "venosaur";
      obj.health = 500;
      obj.type = "Grass";
      obj.fx = "https://media3.giphy.com/media/11XU8sAwhvwjok/source.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif";
      obj.battleUrl = "/venosaur/battle";
      obj.mypokemon = "/venosaur";
      return obj;
  }
};

const evolution = (pokemon) => {
  switch (pokemon) {
    case "charmander":
      return switchFunction("charmeleon");
    case "charmeleon":
      return switchFunction("charizard");
    case "squirtle":
      return switchFunction("wartortle");
    case "wartortle":
      return switchFunction("blastoise");
    case "bulbasaur":
      return switchFunction("ivysaur");
    case "ivysaur":
      return switchFunction("venosaur");
  }
};

app.get("/", (req, res) => {
  res.render("homepage");
});

app.get("/:pokemon/evolve", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = evolution(pokemon);
  let preEvolve = switchFunction(pokemon);
  console.log(pokemon);
  if (obj == undefined) {
    obj = switchFunction(pokemon);
  } else {
    obj.preevolve = preEvolve.frontImage;
    obj.prename = preEvolve.name;
  }

  res.render("evolve", obj);
});

app.get("/:pokemon", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction(pokemon);
  res.render("chosenpokemon", obj);
});

app.get("/:pokemon/afterbattle", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction(pokemon);
  res.render("afterbattle", obj);
});

app.get("/:pokemon/champion", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction(pokemon);
  res.render("endcredits", obj);
});

app.get("/bulbasaur/chill", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction("bulbasaur");
  res.render("bulbasaurchill", obj);
});

app.get("/:pokemon/battle", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction(pokemon);
  obj.npcname = "Rattata";
  obj.npcfrontimage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif";
  obj.npchealth = 150;
  obj.npcfx =
    "https://cdnb.artstation.com/p/assets/images/images/028/802/877/original/adrian-arellano-villa-attack-impact.gif?1595547012";

  res.render("battle", obj);
});

app.get("/:pokemon/battle/medium", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction(pokemon);
  obj.npcname = "Snorlax";
  obj.npcfrontimage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif";
  obj.npchealth = 300;
  obj.npcfx =
    "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110";

  res.render("mediumbattle", obj);
});

app.get("/:pokemon/battle/hard", (req, res) => {
  const pokemon = req.params.pokemon;
  let obj = switchFunction(pokemon);
  obj.npcname = "Mewtwo";
  obj.npcfrontimage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif";
  obj.npchealth = 500;
  obj.npcfx = "";

  res.render("hardbattle", obj);
});

app.get("/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk", (req, res) => {
  const pokemon = req.params.pokemon;
  const userattk = req.params.userattk;
  const userhp = req.params.userhp;
  const npcattk = req.params.npcattk;
  const npchp = req.params.npchp;
  let obj = switchFunction(pokemon);
  obj.npcname = "Rattata";
  obj.npcfrontimage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif";
  obj.npchealth = npchp - parseInt(userattk) + Math.floor(Math.random() * 20);
  obj.health = userhp - parseInt(npcattk) + Math.floor(Math.random() * 20);
  obj.npcfx = "";

  res.render("battle", obj);
});

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/medium",
  (req, res) => {
    const pokemon = req.params.pokemon;
    const userattk = req.params.userattk;
    const userhp = req.params.userhp;
    const npcattk = req.params.npcattk;
    const npchp = req.params.npchp;
    let obj = switchFunction(pokemon);
    obj.npcname = "Snorlax";
    obj.npcfrontimage =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif";

    obj.npchealth =
      npchp - (parseInt(userattk) + Math.floor(Math.random() * 20));
    obj.health = userhp - (parseInt(npcattk) + Math.floor(Math.random() * 15));
    obj.npcfx =
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110";

    res.render("mediumbattle", obj);
  }
);

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/hard",
  (req, res) => {
    const pokemon = req.params.pokemon;
    const userattk = req.params.userattk;
    const userhp = req.params.userhp;
    const npcattk = req.params.npcattk;
    const npchp = req.params.npchp;
    let obj = switchFunction(pokemon);
    obj.npcname = "Mewtwo";
    obj.npcfrontimage =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif";

    obj.npchealth =
      npchp - (parseInt(userattk) + Math.floor(Math.random() * 50));
    obj.health = userhp - (parseInt(npcattk) + Math.floor(Math.random() * 50));
    obj.npcfx =
      "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif";

    res.render("hardbattle", obj);
  }
);

app.listen(port, () => {
  console.log(`listening oon port ${port}`);
});
