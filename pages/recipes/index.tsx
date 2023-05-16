import { server } from '../../config/index'
import styles from './recipes.module.css'
import { RecipeType } from '../../types'
import {useEffect, useState} from "react";
import axios from 'axios'

type Props = {
  recipes: RecipeType[]
}
export default function Home({recipes}: Props) {
// console.log(JSON.stringify(recipes))

  // client side rendering of the page
  // const [recipes, setRecipes] = useState<RecipeType[]>([])
  //
  // // react native accepts calls to HTTPS APIs only, so populate data from file as fallback
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/api/recipes')
  //     .then((response: any) => setRecipes(response.data))
  //     .catch((error: any) => console.log(error)
  //     )
  // }, [])

  // {recipes.map((item: RecipeType, index) => (<div className="text-3xl font-bold underline decoration-red-500" key={index}>{item.recipeName}</div>))}

  return (
    <main className={styles.main}>
      Recipes
      {recipes.map((item: RecipeType, index) => (<div className="text-3xl font-bold underline decoration-red-500" key={index}>{item.recipeName}</div>))}
    </main>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/recipes`)
  const recipes : RecipeType[] = await res.json()

  return {
    props: {
      recipes,
    },
  }
}
