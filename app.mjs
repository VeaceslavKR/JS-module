// Main App Module
let name = "Custom App";
let version = "1.0.0";

import { name as authorName, email } from "./author.mjs";
import { Card } from "./Card.mjs";

let card = new Card(
  `${name} (${version})`,
  `${authorName} : ${email}`,
  "#112233"
);

let infoDiv = document.querySelector("#info");
card.render(infoDiv);

//console.log("App", name);
//console.log("ver:", version);
//console.log("author", authorName, email);
