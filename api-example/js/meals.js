const load_meal = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res => res.json())
    .then(data => display_meals(data.meals))
}

const display_meals = meals => {
    const meals_container = document.getElementById('meal-container');
    meals_container.innerHTML = ``;
    for(const meal of meals){
        const meal_div = document.createElement("div");
        meal_div.classList.add("col");
        meal_div.innerHTML = `
            <div class="card" onclick="display_meal_detail(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                </div>
            </div>
        `;
        meals_container.append(meal_div);
    }
}

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const food = searchField.value;
    // console.log(food);
    load_meal(food);
    searchField.value = '';
}

searchFood('')

const display_meal_detail = (id_meal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id_meal}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => display_meal(data.meals[0]))
    // console.log(id_meal);
}   

const display_meal = meal => {
    const detailContainer = document.getElementById('detail-container');
    detailContainer.innerHTML = ``;
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('card');
    mealDiv.innerHTML = `
    <img class="card-img-top" src="${meal.strMealThumb}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${meal.strMeal}</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a> 
    
    `;
    detailContainer.appendChild(mealDiv);

}

33-8


