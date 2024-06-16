const maindiv = document.getElementById('main');
function fetchdata (){
    fetch("https://api.sampleapis.com/recipes/recipes")    //`${aaa}
    .then(function(res){return res.json()})
    .then(function(data){displaydata(data)})
}
fetchdata();
let c =1;
const nexts = document.getElementsByClassName('next');
nexts.addEventListener('click',function(){
    c++;
})
function displaydata(data)
{
    data.forEach(function(val){
        const mydiv =document.createElement('div');
        mydiv.classList.add('mydiv');
        const text = document.createElement('div');
        text.classList.add('text');
        const h1 =document.createElement('h1');
        const image =document.createElement('img');
        image.classList.add('image');
        const course = document.createElement('h3');
        const cuisine = document.createElement('h3');
        const mainIngredient = document.createElement('h3');
        const preptime = document.createElement('h4');
        const cooktime = document.createElement('h4'); 
        const servings = document.createElement('h4');
        const nutritionalScoreGeneric = document.createElement('h2');
        const calories = document.createElement('h4');
        const fat = document.createElement('h4');
        const cholesterol = document.createElement('h4');
        const sodium = document.createElement('h4');
        const sugar = document.createElement('h4');
        const carbohydrate = document.createElement('h4');
        const fiber = document.createElement('h4');
        const protein = document.createElement('h4');
        const para = document.createElement('p');
        image.src = val.photoUrl;
        image.alt = val.title;
        h1.textContent = val.title;
        course.textContent = val.course;
        cuisine.textContent = "CUSISNE:-" + val.cuisine;
        mainIngredient.textContent = "MAININGREDIENTS:-"+val.mainIngredient;
        preptime.textContent = "PREPTIME:-"+val.prepTime;
        cooktime.textContent = "COOKTIME:-"+val.cookTime;
        servings.textContent = "SERVINGS-"+val.servings;
        para.textContent = "INGREDIENTS-"+val.ingredients;
        nutritionalScoreGeneric.textContent = "nutritionalScoreGeneric::";
        calories.textContent = "calories:"+val.calories;
        fat.textContent = "fat:"+ val.fat;
        cholesterol.textContent= "cholesterol:"+ val.cholesterol;
        sodium.textContent = "sodium:"+val.sodium;
        carbohydrate.textContent =  "carbohydrate:"+val.carbohydrate;
        fiber.textContent = "fiber:"+val.fiber;
        protein.textContent = "protein:"+val.protein;
        mydiv.append(image)
        text.append(h1,course,cuisine,mainIngredient,preptime,cooktime,servings,para,nutritionalScoreGeneric,calories,fat,cholesterol,sodium,sugar,carbohydrate,fiber,protein)
        maindiv.append(mydiv,text)
    })
}

