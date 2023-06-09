import path from 'path';
const fs = require('fs');
import { recipes } from '../../../data'

import configs from '../../../configs'
const filePath = path.join(configs.fileDBPath, 'recipes_back.json');

export default function handler(req, res) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const recipes = JSON.parse(data)
    res.status(200).json(recipes)
  } catch (err) {
    console.error(err);
  }
  return

  // res.status(200).json(recipes)
}
