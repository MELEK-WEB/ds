let recipes = [
  {
    id: 1,
    title: "Gateau au chocolat",
    category: "Dessert",
    steps: ["put ...", "then, ..."],
    ingredients: [
      { id: 1, quantity: "150g" },
      {
        id: 4,
        quantity: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Tarte au pomme",
    category: "Dessert",
  },
  {
    id: 3,
    title: "Couscous au poisson",
    category: "Plat principal",
  },
  {
    id: 4,
    title: "Salade Tunisienne",
    category: "Entrée",
  },
]
const ingredients = [
  {
    id: 1,
    name: "farine",
  },
  {
    id: 2,
    name: "levure",
  },
  { id: 3, name: "lait" },
  { id: 4, name: "oeuf" },
]

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const fetchRecipes = async () => {
  await delay(500)
  return recipes
}
export const fetchIngredients = async () => {
  await delay(500)
  return ingredients
}
export const fetchCategories = async () => {
  await delay(500)
  return recipes.map((n) => n.category).filter(onlyUnique)
}

export const fetchRecipeById = async (id) => {
  console.log("id: ", id)
  await delay(500)
  const selectedRecipe = recipes.find((n) => n.id === Number(id))
  console.log("selectedRecipe: ", selectedRecipe)
  return selectedRecipe
}

export const addRecipe = async (recipes) => {
  await delay(500)
  const newRecipe = {
    id: Math.random(),
    title: recipes.title,
    category: recipes.category,
  }

  recipes = recipes.concat(newRecipe)
  return newRecipe
}

export const deleteRecipe = async (id) => {
  await delay(500)
  recipes = recipes.filter((recipes) => recipes.id !== id)
}

export const updateRecipe = async (id, recipesItem) => {
  await delay(500)
  let updatedRecipe = { id, ...recipesItem }
  recipes = recipes.map((n) => {
    if (n.id === id) {
      updatedRecipe = { ...n, ...updatedRecipe }
      return updatedRecipe
    } else {
      return n
    }
  })
  return updatedRecipe
}

export const addComment = async (id, comment) => {
  await delay(500)
  recipes = recipes.map((n) => {
    if (n.id === Number(id)) {
      return {
        ...n,
        comments: [
          ...n.comments,
          {
            id: n.comments.length + 1,
            text: comment,
          },
        ],
      }
    }
    return n
  })
  console.log("recipes: ", recipes)
}
