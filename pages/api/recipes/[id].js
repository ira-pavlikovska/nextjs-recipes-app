import {recipes} from '../../../data'
import path from 'path';

const fs = require('fs');
import configs from '../../../configs'

const filePath = path.join(configs.fileDBPath, 'recipes.json');


export default function handler(req, res) {

  const {query: {id}} = req
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      const recipes = JSON.parse(data)
      const filtered = recipes.filter((recipe) => recipe.recipeId === id)
      if (filtered.length > 0) {
        res.status(200).json(filtered[0])
      } else {
        res
          .status(404)
          .json({message: `Recipe with the id of ${id} is not found`})
      }
    } catch (err) {
      console.error(err);
    }
  } else if (req.method === 'DELETE') {
    try {
      let data = fs.readFileSync(filePath, 'utf8');
      let arr = JSON.parse(data)
      arr = arr.filter(item => item.recipeId !== id)
      let dataStr = JSON.stringify(arr)
      fs.writeFileSync(filePath, dataStr)
      res.status(200).json({status: 'ok'})
    } catch (err) {
      console.error(err);
    }
  }
}
