/*
fetch('https://api.sampleapis.com/coffee/hot')
.then(response => response.json()) //tar in datan och gör om till json-objekt för javascript
.then(data =>c{
  console.log(data);
})
*/

/*
fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(res => res.json())
  .then(data => console.log(data));

 */

let result;
await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a') //await väntar in inhämtningen så att det synkar med javascript
  .then(res => res.json())
  .then(data => result = data);
/*
console.log(result);
*/


result.meals.forEach(meal => console.log(meal.strMeal));
