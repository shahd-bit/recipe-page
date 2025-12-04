const recipes = [
  {
    image: "./imges/photo-1547592166-23ac45744acd.avif",
    title: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    tags: ["Intermediate", "Mediterranean"],
    calories: "320 kcal",
    time: "45 min",
    servings: "2 people",
    ingredients: [
      "Melt butter in a large pot.",
      "Add onions and cook slowly.",
      "Pour in beef broth.",
      "Simmer for 30 minutes."
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Add soup to oven-safe bowls.",
      "Top with bread and cheese.",
      "Bake until golden brown."
    ],
    nutrition: [
      "Calories: 320",
      "Protein: 12g",
      "Fat: 15g",
      "Carbs: 30g"
    ],
    tips: [
      "Use fresh onions for better flavor.",
      "Caramelize slowly for sweetness."
    ]
  },
  {
    image: "./imges/photo-1568901346375-23c9450c58cd.avif",
    title: "Grilled Chicken Salad",
    description: "Healthy salad with grilled chicken, avocado, and cherry tomatoes",
    tags: ["Easy", "Healthy"],
    calories: "250 kcal",
    time: "30 min",
    servings: "3 people",
    ingredients: [
      "Grill chicken breast.",
      "Chop lettuce and vegetables.",
      "Mix with olive oil and lemon juice."
    ],
    instructions: [
      "Season chicken and grill for 10 min each side.",
      "Toss vegetables in a bowl.",
      "Slice chicken and add on top.",
      "Serve immediately."
    ],
    nutrition: [
      "Calories: 250",
      "Protein: 25g",
      "Fat: 10g",
      "Carbs: 8g"
    ],
    tips: [
      "Use fresh herbs for extra flavor.",
      "Serve with whole grain bread."
    ]
  },
  {
    image: "./imges/photo-1633504581786-316c8002b1b9.avif",
    title: "Spaghetti Carbonara",
    description: "Classic Italian pasta with creamy egg sauce and pancetta",
    tags: ["Classic", "Italian"],
    calories: "450 kcal",
    time: "25 min",
    servings: "4 people",
    ingredients: [
      "Cook spaghetti until al dente.",
      "Fry pancetta until crispy.",
      "Whisk eggs and Parmesan.",
      "Combine pasta, pancetta, and egg mixture."
    ],
    instructions: [
      "Boil pasta and drain.",
      "Cook pancetta in a pan.",
      "Mix eggs and cheese in a bowl.",
      "Toss pasta with pancetta and egg mixture quickly."
    ],
    nutrition: [
      "Calories: 450",
      "Protein: 18g",
      "Fat: 20g",
      "Carbs: 50g"
    ],
    tips: [
      "Serve immediately for creamy texture.",
      "Do not overcook eggs."
    ]
  },
  {
    image: "./imges/photo-1633504581786-316c8002b1b9.avif",
    title: "Avocado Toast",
    description: "Quick and healthy avocado toast with poached eggs",
    tags: ["Breakfast", "Quick"],
    calories: "300 kcal",
    time: "10 min",
    servings: "2 people",
    ingredients: [
      "Toast bread slices.",
      "Mash avocado with salt and pepper.",
      "Top with poached eggs.",
      "Sprinkle chili flakes if desired."
    ],
    instructions: [
      "Toast the bread slices.",
      "Mash avocado and season.",
      "Poach eggs in simmering water.",
      "Assemble avocado on toast and add eggs."
    ],
    nutrition: [
      "Calories: 300",
      "Protein: 12g",
      "Fat: 18g",
      "Carbs: 25g"
    ],
    tips: [
      "Use ripe avocado for better taste.",
      "Serve immediately after poaching eggs."
    ]
  },
  {
    image: "./imges/photo-1574894709920-11b28e7367e3.avif",
    title: "Chocolate Brownies",
    description: "Rich and fudgy chocolate brownies with a crackly top",
    tags: ["Dessert", "Sweet"],
    calories: "400 kcal",
    time: "35 min",
    servings: "8 people",
    ingredients: [
      "Melt chocolate and butter.",
      "Whisk eggs and sugar.",
      "Combine chocolate and egg mixture.",
      "Fold in flour and bake."
    ],
    instructions: [
      "Preheat oven to 180°C.",
      "Prepare brownie pan with parchment paper.",
      "Mix all ingredients until smooth.",
      "Bake for 25-30 minutes."
    ],
    nutrition: [
      "Calories: 400",
      "Protein: 5g",
      "Fat: 22g",
      "Carbs: 50g"
    ],
    tips: [
      "Do not overbake for fudgy texture.",
      "Let cool before cutting."
    ]
  }
];

let currentRecipe = 0;

const recipeImage = document.getElementById("recipeImage");
const recipeTitle = document.getElementById("recipeTitle");
const recipeDesc = document.getElementById("recipeDesc");
const tag1 = document.getElementById("tag1");
const tag2 = document.getElementById("tag2");
const calories = document.getElementById("calories");
const time = document.getElementById("time");
const servings = document.getElementById("servings");

const ingredientsList = document.getElementById("ingredientsList");
const instructionsList = document.getElementById("instructionsList");
const nutritionBox = document.getElementById("nutritionBox");
const tipsList = document.getElementById("tipsList");

const changeBtn = document.getElementById("changeRecipeBtn");

function updateRecipe() {
  const recipe = recipes[currentRecipe];

  recipeImage.src = recipe.image;
  recipeTitle.textContent = recipe.title;
  recipeDesc.textContent = recipe.description;
  tag1.textContent = recipe.tags[0] || "";
  tag2.textContent = recipe.tags[1] || "";
  calories.textContent = recipe.calories;
  time.textContent = recipe.time;
  servings.textContent = recipe.servings;

  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    ingredientsList.appendChild(li);
  });

  instructionsList.innerHTML = "";
  const ol = document.createElement("ol");
  ol.classList.add("steps-list");
  recipe.instructions.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    ol.appendChild(li);
  });
  instructionsList.appendChild(ol);


  nutritionBox.innerHTML = "";
  recipe.nutrition.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("col-md-3", "mb-2");
    div.innerHTML = `<p class="fw-bold mb-0">${item.split(":")[0]}</p><span class="text-muted">${item.split(":")[1]}</span>`;
    nutritionBox.appendChild(div);
  });


  tipsList.innerHTML = "";
  const ul = document.createElement("ul");
  recipe.tips.forEach(tip => {
    const li = document.createElement("li");
    li.textContent = tip;
    ul.appendChild(li);
  });
  tipsList.appendChild(ul);
}
changeBtn.addEventListener("click", () => {
  let newRecipe;
  do {
    newRecipe = Math.floor(Math.random() * recipes.length);
  } while (newRecipe === currentRecipe); 
  currentRecipe = newRecipe;
  updateRecipe();

  const firstTab = document.querySelector('#recipeTabs .nav-link');
  firstTab.classList.add("active");
  document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove("show","active"));
  document.getElementById(firstTab.dataset.bsTarget.slice(1)).classList.add("show","active");
});


updateRecipe();
