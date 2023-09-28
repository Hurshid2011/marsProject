let body = document.querySelector("body");

let nav = document.createElement("nav");

let database = [{ name: "home" }, { name: "about" }, { name: "contacts" }];

database.map((item) => {
  let p = document.createElement("p");
  p.innerHTML = item.name.toUpperCase();
  nav.append(p);
});

body.append(nav);

nav.style.display = "flex";
nav.style.justifyContent = "center";
nav.style.gap = "50px";
nav.style.fontSize = "30px";
nav.style.fontWeight = "700";
nav.style.fontFamily = "sans-serif";
nav.style.background = "wihite";
nav.style.color = "wihite";

let text = document.querySelector("nav");

text.style.backgroundColor = "white"


let arr = [
  "blue",
  "red",
  "yellow",
  "teal",
  "black",
  "pink",
  "darkviolet",
  "green",
  "orange",
  "tomato",
  "aqua",
];

function colorChange() {
    body.style.backgroundColor = arr[Math.trunc(Math.random() * 11)];
}

setInterval(colorChange, 1000);

function navChange() {
  text.style.color = arr[Math.trunc(Math.random() * 11)];
}

setInterval(navChange, 1000);
;