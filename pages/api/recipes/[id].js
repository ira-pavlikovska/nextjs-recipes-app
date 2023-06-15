import { recipes } from '../../../data'
import path from 'path';
const fs = require('fs');
import configs from '../../../configs'
const filePath = path.join(configs.fileDBPath, 'recipes_back.json');


export default function handler(req, res) {

  const { query: { id } } = req
  if(req.method === 'GET') {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const recipes = JSON.parse(data)
      const filtered = recipes.filter((recipe) => recipe.recipeId === id)
      if (filtered.length > 0) {
        res.status(200).json(filtered[0])
      } else {
        res
          .status(404)
          .json({ message: `Recipe with the id of ${id} is not found` })
      }

      // res.status(200).json(recipes)
    } catch (err) {
      console.error(err);
    }

  }
  // const filtered = recipes.filter((recipe) => recipe.recipeId === id)
  //
  // if (filtered.length > 0) {
  //   res.status(200).json(filtered[0])
  // } else {
  //   res
  //     .status(404)
  //     .json({ message: `Recipe with the id of ${id} is not found` })
  // }




}
// export default function deleteRecipe({ query: { id } }, res) {
//
//   const deletedRecipe = recipes.filter((recipe) => recipe.recipeId !== id)
//   res.status(200).json(deletedRecipe)
//
//
//   // return axios.delete(BASE_URL + `recipe/${recipeId}` )
// }
