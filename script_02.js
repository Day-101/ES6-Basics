const books = [
  { id: 133712, title: 'Gatsby le magnifique', rentedCount: 39 },
  { id: 237634, title: 'A la recherche du temps,perdu', rentedCount: 28 },
  { id: 873495, title: 'Orgueil & Préjugés', rentedCount: 67 },
  { id: 450915, title: 'Les frères Karamazov', rentedCount: 55 },
  { id: 837636, title: 'Dans les forêts de Sibérie', rentedCount: 15 },
  { id: 450911, title: 'Pourquoi j\'ai mangé mon père', rentedCount: 45 },
  { id: 675651, title: 'Et on tuera tous les affreux', rentedCount: 36 },
  { id: 888475, title: 'Le meilleur des mondes', rentedCount: 58 },
  { id: 364442, title: 'La disparition', rentedCount: 33 },
  { id: 635411, title: 'La lune seule le sait', rentedCount: 43 },
  { id: 465638, title: 'Voyage au centre de la Terre', rentedCount: 38 },
  { id: 748147, title: 'Guerre et Paix', rentedCount: 19 },
];

// Sors-moi une liste de tous les titres des livres du CDI
const booksTitles = books.map(function(book) {
  return {title: book.title}
})

// Est-ce que tous les livres ont été au moins empruntés une fois ?
const booksEveryRented = books.filter(
  (book) => book.rentedCount > 0
)






//console.log(booksTitles);
console.log(booksEveryRented);





// Quel est livre le plus emprunté ?
// Quel est le livre le moins emprunté ?
// Supprime le livre avec l'ID 133712