const e = require("express");
const express = require("express");
const session = require("express-session");
const app = express();
const port = process.env.PORT || 3400;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var fs = require("fs");

let global_data;
let user_data;
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "something else",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

const switchFunction = (pokemon) => {
  let obj = {};
  switch (pokemon) {
    case "charmander":
      obj.name = "Charmander";
      obj.health = 200;
      obj.maxhealth = 200;
      obj.type = "Fire";
      obj.fx =
        "https://i.pinimg.com/originals/29/ca/76/29ca767e0d917e541cd18eb97f4825dc.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/4.gif";
      obj.battleUrl = "/charmander/battle";
      obj.mypokemon = "/pokemon/charmander";
      return obj;
    case "charmeleon":
      obj.name = "Charmeleon";
      obj.health = 300;
      obj.maxhealth = 300;
      obj.type = "Fire";
      obj.fx =
        "https://cutewallpaper.org/21/fire-gif-transparent-background/Fireball-gif-transparent-clipart-images-gallery-for-free-.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/5.gif";
      obj.battleUrl = "/charmeleon/battle";
      obj.mypokemon = "/pokemon/charmeleon";
      return obj;
    case "charizard":
      obj.name = "Charizard";
      obj.health = 500;
      obj.maxhealth = 500;
      obj.type = "Fire";
      obj.fx =
        "https://i.ya-webdesign.com/images/transparent-explosions-animated-gif-4.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/6.gif";
      obj.battleUrl = "/charizard/battle";
      obj.mypokemon = "/pokemon/charizard";
      return obj;
    case "squirtle":
      obj.name = "Squirtle";
      obj.health = 200;
      obj.maxhealth = 200;
      obj.type = "Water";
      obj.fx = "https://thumbs.gfycat.com/InformalWellwornCockroach-small.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/7.gif";
      obj.battleUrl = "/squirtle/battle";
      obj.mypokemon = "/pokemon/squirtle";
      return obj;
    case "wartortle":
      obj.name = "Wartortle";
      obj.health = 300;
      obj.maxhealth = 300;
      obj.type = "Water";
      obj.fx = "https://webstockreview.net/images/clipart-mountain-ocean-1.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/8.gif";
      obj.battleUrl = "/wartortle/battle";
      obj.mypokemon = "/pokemon/wartortle";
      return obj;
    case "blastoise":
      obj.name = "Blastoise";
      obj.health = 500;
      obj.maxhealth = 500;
      obj.type = "Water";
      obj.fx =
        "https://static.wikia.nocookie.net/62a38c55-7829-46d3-9991-1b6352195339/scale-to-width/755";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/9.gif";
      obj.battleUrl = "/blastoise/battle";
      obj.mypokemon = "/pokemon/blastoise";
      return obj;
    case "bulbasaur":
      obj.name = "Bulbasaur";
      obj.health = 200;
      obj.maxhealth = 200;
      obj.type = "Grass";
      obj.fx = "https://i.imgur.com/uDJiGRk.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/1.gif";
      obj.battleUrl = "/bulbasaur/battle";
      obj.mypokemon = "/pokemon/bulbasaur";
      return obj;
    case "ivysaur":
      obj.name = "Ivysaur";
      obj.health = 300;
      obj.maxhealth = 300;
      obj.type = "Grass";
      obj.fx = "https://media0.giphy.com/media/AEHWYyOBSmYRDl7kDc/giphy.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/2.gif";
      obj.battleUrl = "/ivysaur/battle";
      obj.mypokemon = "/pokemon/ivysaur";
      return obj;
    case "venosaur":
      obj.name = "Venosaur";
      obj.health = 500;
      obj.maxhealth = 500;
      obj.type = "Grass";
      obj.fx = "https://media3.giphy.com/media/11XU8sAwhvwjok/source.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif";
      obj.backImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/3.gif";
      obj.battleUrl = "/venosaur/battle";
      obj.mypokemon = "/pokemon/venosaur";
      return obj;
    case "rattata":
      obj.name = "Rattata";
      obj.health = 150;
      obj.maxhealth = 150;
      obj.type = "Normal";
      obj.fx = "https://media3.giphy.com/media/11XU8sAwhvwjok/source.gif";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/19.gif";
      return obj;
    case "snorlax":
      obj.name = "Snorlax";
      obj.health = 300;
      obj.maxhealth = 300;
      obj.type = "Normal";
      obj.fx =
        "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110";
      obj.frontImage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif";
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

function readJson() {
  fs.readFile("trainer.json", "utf-8", function (err, data) {
    if (err) {
      throw err;
    }
    global_data = JSON.parse(data);
    console.log(global_data);
  });
}

function editFile() {
  fs.writeFile("trainer.json", JSON.stringify(global_data), function (err) {
    if (err) throw err;
  });
}

//notes
app.get("/", (req, res) => {
  let user = "";
  let punctuation = "";
  let invalid_login = false;

  invalid_login = req.query.reason || null;

  if (req.session && req.session.username) {
    user = req.session.username;
    punctuation = ",";
  }
  res.render("index", {
    my_user: user,
    punctuation: punctuation,
    invalid_login: invalid_login,
  });
});

app.get("/signin", (req, res) => {
  readJson();
  res.render("signup");
});

app.post("/signup", (req, res) => {
  const user = req.body.username;
  const pass = req.body.password;
  let obj = {
    name: user,
    password: pass,
  };
  global_data.push(obj);
  editFile();
  res.redirect("/");
});

app.post("/login", (req, res) => {
  global_data = require("./trainer.json");

  const user = req.body.username;
  const pass = req.body.password;

  const found_user = global_data.find(
    (usr) => usr.name == user && usr.password == pass
  );

  user_data = found_user;

  if (found_user) {
    req.session.username = user;
    req.session.data = found_user;

    if (found_user.hasOwnProperty("pokemon")) {
      res.redirect(`/pokemon/${found_user.pokemon}`);
    } else {
      res.redirect("/homepage");
    }
  } else {
    req.session.destroy(() => {
      console.log("reset");
    });
    res.redirect("/?reason=invalid_user");
  }
});

app.get("/homepage", (req, res) => {
  if (req.session && req.session.username) {
    res.render("homepage", { user: req.session.username });
  } else {
    res.redirect("/");
  }
});

app.get("/pokemon/:pokemon/evolve", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = evolution(pokemon);
    let preEvolve = switchFunction(pokemon);
    if (obj == undefined) {
      obj = switchFunction(pokemon);
    } else {
      obj.preevolve = preEvolve.frontImage;
      obj.prename = preEvolve.name;
      obj.trainername = req.session.username;
    }
    for (let element of global_data) {
      if (element.name == req.session.username) {
        element.pokemon = obj.name;
      }
    }
    editFile();
    res.render("evolve", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/pokemon/:pokemon", (req, res) => {
  console.log("What is req.session.username", req.session.username);
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    for (let element of global_data) {
      if (element.name == req.session.username) {
        element.pokemon = pokemon;
      }
    }
    editFile();
    let obj = switchFunction(pokemon);
    obj.trainername = req.session.username;
    res.render("chosenpokemon", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/pokemon/:pokemon/afterbattle", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    obj.trainername = req.session.username;
    res.render("afterbattle", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/pokemon/:pokemon/finalbattle", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    obj.trainername = req.session.username;
    res.render("finalbattle", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/pokemon/:pokemon/champion", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    obj.trainername = req.session.username;
    res.render("endcredits", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle", (req, res) => {
  console.log("What is req.session.username", req.session.username);
  if (req.session && req.session.username) {
    console.log("AM I HERE AT BATTLE");
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    let npc = switchFunction("rattata");
    obj.npcname = npc.name;
    obj.npcfrontimage = npc.frontImage;
    obj.npchealth = npc.health;
    obj.npcmaxhealth = npc.maxhealth;
    obj.npcfx = npc.fx;

    res.render("battle", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle/medium", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    obj.npcname = "Snorlax";
    obj.npcfrontimage =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif";
    obj.npchealth = 300;
    obj.npcmaxhealth = 300;
    obj.npcfx =
      "https://cdna.artstation.com/p/assets/images/images/015/934/194/original/joshua-gates-quick-explosion.gif?1550235110";

    res.render("mediumbattle", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle/charizard", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    let npc = switchFunction("charizard");
    obj.npcname = npc.name;
    obj.npcfrontimage = npc.frontImage;
    obj.npchealth = npc.health;
    obj.npcmaxhealth = npc.maxhealth;
    obj.npcfx = npc.fx;

    res.render("venosaur", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle/blastoise", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    let npc = switchFunction("blastoise");
    obj.npcname = npc.name;
    obj.npcfrontimage = npc.frontImage;
    obj.npchealth = npc.health;
    obj.npcmaxhealth = npc.maxhealth;
    obj.npcfx = npc.fx;

    res.render("charizard", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle/venosaur", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    let npc = switchFunction("venosaur");
    obj.npcname = npc.name;
    obj.npcfrontimage = npc.frontImage;
    obj.npchealth = npc.health;
    obj.npcmaxhealth = npc.maxhealth;
    obj.npcfx = npc.fx;

    res.render("blastoise", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle/hard", (req, res) => {
  if (req.session && req.session.username) {
    const pokemon = req.params.pokemon;
    let obj = switchFunction(pokemon);
    obj.npcname = "Mewtwo";
    obj.npcfrontimage =
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif";
    obj.npchealth = 500;
    obj.npcmaxhealth = 500;
    obj.npcfx =
      "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif";

    res.render("hardbattle", obj);
  } else {
    res.redirect("/");
  }
});

app.get("/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk", (req, res) => {
  if (req.session && req.session.username) {
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
    obj.npcmaxhealth = 150;
    obj.npcfx =
      "https://cdnb.artstation.com/p/assets/images/images/028/802/877/original/adrian-arellano-villa-attack-impact.gif?1595547012";

    res.render("battle", obj);
  } else {
    res.redirect("/");
  }
});

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/medium",
  (req, res) => {
    if (req.session && req.session.username) {
      const pokemon = req.params.pokemon;
      const userattk = req.params.userattk;
      const userhp = req.params.userhp;
      const npcattk = req.params.npcattk;
      const npchp = req.params.npchp;
      let obj = switchFunction(pokemon);
      let npc = switchFunction("snorlax");
      obj.npcname = npc.name;
      obj.npcfrontimage = npc.frontImage;
      obj.npcmaxhealth = npc.maxhealth;
      obj.npchealth =
        npchp - (parseInt(userattk) + Math.floor(Math.random() * 20));
      obj.health =
        userhp - (parseInt(npcattk) + Math.floor(Math.random() * 15));
      obj.npcfx = npc.fx;

      res.render("mediumbattle", obj);
    } else {
      res.redirect("/");
    }
  }
);

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/hard",
  (req, res) => {
    if (req.session && req.session.username) {
      const pokemon = req.params.pokemon;
      const userattk = req.params.userattk;
      const userhp = req.params.userhp;
      const npcattk = req.params.npcattk;
      const npchp = req.params.npchp;
      let obj = switchFunction(pokemon);
      obj.npcname = "Mewtwo";
      obj.npcfrontimage =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/150.gif";
      obj.npcmaxhealth = 500;
      obj.npchealth =
        npchp - (parseInt(userattk) + Math.floor(Math.random() * 50));
      obj.health =
        userhp - (parseInt(npcattk) + Math.floor(Math.random() * 50));
      obj.npcfx =
        "https://pa1.narvii.com/6916/24eaf472b2d3a587aed0c268fcd42f35aedb7061r1-1024-1024_hq.gif";

      res.render("hardbattle", obj);
    } else {
      res.redirect("/");
    }
  }
);

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/blastoise",
  (req, res) => {
    if (req.session && req.session.username) {
      const pokemon = req.params.pokemon;
      const userattk = req.params.userattk;
      const userhp = req.params.userhp;
      const npcattk = req.params.npcattk;
      const npchp = req.params.npchp;
      let obj = switchFunction(pokemon);
      let npc = switchFunction("blastoise");

      obj.npcname = npc.name;
      obj.npcfrontimage = npc.frontImage;
      obj.npcmaxhealth = npc.maxhealth;
      obj.npchealth =
        npchp - (parseInt(userattk) + Math.floor(Math.random() * 50));
      obj.health =
        userhp - (parseInt(npcattk) + Math.floor(Math.random() * 50));
      obj.npcfx = npc.fx;

      res.render("charizard", obj);
    } else {
      res.redirect("/");
    }
  }
);

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/charizard",
  (req, res) => {
    if (req.session && req.session.username) {
      const pokemon = req.params.pokemon;
      const userattk = req.params.userattk;
      const userhp = req.params.userhp;
      const npcattk = req.params.npcattk;
      const npchp = req.params.npchp;
      let obj = switchFunction(pokemon);
      let npc = switchFunction("charizard");

      obj.npcname = npc.name;
      obj.npcfrontimage = npc.frontImage;
      obj.npcmaxhealth = npc.maxhealth;
      obj.npchealth =
        npchp - (parseInt(userattk) + Math.floor(Math.random() * 50));
      obj.health =
        userhp - (parseInt(npcattk) + Math.floor(Math.random() * 50));
      obj.npcfx = npc.fx;

      res.render("venosaur", obj);
    } else {
      res.redirect("/");
    }
  }
);

app.get(
  "/:pokemon/battle/:npchp/:userattk/:userhp/:npcattk/venosaur",
  (req, res) => {
    if (req.session && req.session.username) {
      const pokemon = req.params.pokemon;
      const userattk = req.params.userattk;
      const userhp = req.params.userhp;
      const npcattk = req.params.npcattk;
      const npchp = req.params.npchp;
      let obj = switchFunction(pokemon);
      let npc = switchFunction("venosaur");

      obj.npcname = npc.name;
      obj.npcfrontimage = npc.frontImage;
      obj.npcmaxhealth = npc.maxhealth;
      obj.npchealth =
        npchp - (parseInt(userattk) + Math.floor(Math.random() * 50));
      obj.health =
        userhp - (parseInt(npcattk) + Math.floor(Math.random() * 50));
      obj.npcfx = npc.fx;

      res.render("blastoise", obj);
    } else {
      res.redirect("/");
    }
  }
);

app.listen(port, () => {
  console.log(`listening oon port ${port}`);
});
