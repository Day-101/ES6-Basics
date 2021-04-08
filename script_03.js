// Quel est le chiffre d'affaires moyen par utilisateur ?
const revenues = input => input.map(function(user){
  return user.revenue;
});
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const globalRevenue = revenues(users).reduce(reducer);
function averageRevenue(input){
  return (globalRevenue / input.length) / 100
};


// Quel est le pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0) ?
function activeUsers(users){
  return users.filter(user => user.revenue > 0);
};
const perCentActiveUsers = (activeUsers(users).length / users.length) * 100;


// Parmi les utilisateurs ayant rapporté de l'argent, quel est le chiffre d'affaires moyen d'un utilisateur ?
const averageRevenueActiveUsers = revenues(users).reduce(reducer) / activeUsers(users).length;


// Combien avons-nous gagné d'argent au total ?


// Combien avons-nous d'utilisateurs en France ?
function countryUsers(country){
  return users.filter(user => user.country == country);
};


// Parmi ces utilisateurs, combien avons-nous de clients payants en France ?


// Donne-moi le chiffre d'affaires réparti dans nos 4 pays les plus représentés (Allemagne, États-Unis, France, Grande-Bretagne) (chiffre d'affaires total, en France, aux États-Unis, etc.)
function countryRevenue(country){
  return revenues(countryUsers(country)).reduce(reducer);
};


// Fais-moi la liste de tous les pays dans lesquels nous avons gagné de l'argent ?
const activeUsersCountriesList = activeUsers(users).map(function(user){
  return user.country
});
const activeCountriesList = [...new Set(activeUsersCountriesList)];


// Quels sont les 5 utilisateurs qui nous ont rapporté le plus d'agent ?
const usersSortByHighRevenue = [...users].sort((a, b) => (a.revenue > b.revenue) ? -1 : 1)


// Gagnons-nous plus d'argent auprès des hommes, ou des femmes ?
function usersGender(sex){
  return users.filter(user => user.sex == sex);
};

const maleUsersRevenue = revenues(usersGender('M')).reduce(reducer);
const femaleUsersRevenue = revenues(usersGender('F')).reduce(reducer);

function compareGender(m, f){
  if(m > f){
    return 'Male buy more'
  }else{
    return 'Female buy more'
  }
};


// Sors-moi les utilisateurs ayant rapporté au moins 75€
const usersAbove75 = users.filter(user => user.revenue >= 75);


// Parmi nos 100 premiers utilisateurs, quel est le pourcentage qui sont des clients payants ?
const activeHundreadFirstUsers = users.slice(0, 100).filter(user => user.revenue > 0).length;


console.log(`Average revenue by user : ${averageRevenue(users).toFixed(2)}$`);
console.log(`Active Users : ${perCentActiveUsers.toFixed(2)}%`);
console.log(`Average revenue by active user ${averageRevenueActiveUsers.toFixed(2)}$`);
console.log(`Global revenue : ${globalRevenue.toFixed(2)}$`);
console.log(`French users : ${countryUsers('France').length}`);
console.log(`French active users : ${activeUsers(countryUsers('France')).length}`);
console.log(`Germany revenue : ${countryRevenue('Germany')}$`);
console.log(`France revenue : ${countryRevenue('France')}$`);
console.log(`United States revenue : ${countryRevenue('United States')}$`);
console.log(`Great Britain revenue : ${countryRevenue('Great Britain')}$`);
console.log(`Active Countries List : ${activeCountriesList.sort()}`);
console.log(`Top 5 Best Users : `);
console.log(usersSortByHighRevenue.slice(0, 5));
console.log(compareGender(maleUsersRevenue, femaleUsersRevenue));
console.log(`Users above 75$ :`);
console.log(usersAbove75);
console.log(`Active 100 first users : ${activeHundreadFirstUsers}%`);