import { recipes } from '../../../data'

export default function handler({ query: { id } }, res) {
  const filtered = recipes.filter((recipe) => recipe.recipeId === id)

  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Recipe with the id of ${id} is not found` })
  }
}
export default function deleteRecipe({ query: { id } }, res) {

  const deletedRecipe = recipes.filter((recipe) => recipe.recipeId !== id)
  res.status(200).json(deletedRecipe)


  // return axios.delete(BASE_URL + `recipe/${recipeId}` )
}
