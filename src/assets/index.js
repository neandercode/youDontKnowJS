const person = {
  name: "Pendejo",
  age: 35,
  occupation: "software developer",
  hometown: "Awesome, Texas",
  "likes tacos": true,
};

alert(
  "Hello, my name is " +
    person.name +
    ". I am " +
    person.age +
    " and I am from " +
    person.hometown
);

let text = "";
anime = ["AoT", "DBZ", "Solo Leveling", "Black Clover"];
for (let i = 0; i < anime.length; i++) {
  text += anime[i] + "<br>";
}

document.getElementById("demo").innerHTML = text;
