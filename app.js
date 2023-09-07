// //1. Créer un tableau de nombres et utiliser la méthode map pour doubler chaque nombre du tableau
let tab = [1, 2, 3, 4];
let newTab = tab.map((n) => n * 2);
console.log(newTab);
// // 2. Créer un tableau de chaines et utiliser la filter() pour renvoyer
// // un nouveau tableau avec uniquement les chaines dont la longueur
// // est supérieure à 3
let parfum = ["Channel", "Flora", "Victoria", "Dov", "Her"];
let newArrayParfum = parfum.filter((p) => {
  if (p.length > 3) {
    console.log(p);
  }
});
// // 3. Utilisez la méthode reduce() pour résumer tous les nombres
// // dans un tableau de nombres
let nums = [1, 2, 3, 4, 5, 6];
let total = nums.reduce((total, currentVal) => total + currentVal);
console.log(total);

// // 4. Utilisez la méthode sort() pour trier un tableau de chaines par ordre alphabétique
let alpha = ["Chimère", "Mahmoud", "Alkaly", "Daouda", "Kalika"];
let ordreAlpha = alpha.sort();
console.log(ordreAlpha);
// // 5. Utilisez la méthode forEach() pour chaque élément d'un tableau
let text = ["Yvonne", "Edith", "Clara", "Emilie"];
text.forEach((n) => {
  console.log(n);
});
