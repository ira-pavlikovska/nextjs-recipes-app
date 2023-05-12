import Image from 'next/image'
import styles from './recipes.module.css'
import { RecipeType } from '../../types'
import {useEffect, useState} from "react";
import axios from 'axios'

export default function Home() {

  const [recipes, setRecipes] = useState<RecipeType[]>([])

  // react native accepts calls to HTTPS APIs only, so populate data from file as fallback
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/recipes')
      .then((response: any) => setRecipes(response.data))
      .catch((error: any) => console.log(error)
      )
  }, [])

  return (
    <main className={styles.main}>
      Recipes
      {recipes.map((item: RecipeType, index) => (<div key={index}>{item.recipeName}</div>))}
    </main>
  )
}
