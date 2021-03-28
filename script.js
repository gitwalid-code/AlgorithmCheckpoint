let a = ["a", "e", "i", "o", "u"];

function vowel(mot) {
  let count = 0;
  for (let lettre of mot.toLowerCase()) {
    if (a.includes(lettre)) {
      count++;
    }
  }
  return count;
}
const string = prompt("entre votre mots");
const resultat = vowel(string);
console.log(resultat);
