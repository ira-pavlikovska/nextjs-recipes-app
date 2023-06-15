import styles from "@/pages/recipes/recipes.module.css";
import RecipeComponent from "../../components/RecipeComponent";
import {RecipeType} from "@/types";
import {useEffect, useState} from "react";
import axios from 'axios';
import { useRouter } from 'next/router'
type Props = {
  recipe:RecipeType
}

export default function Recipe (){
  const [recipe, setRecipe] = useState<RecipeType>()
  const router = useRouter()
  const { id } = router.query

useEffect(() => {
  axios
      .get(`http://localhost:3000/api/recipes/${id}`)
      .then((response: any) =>{
        console.log(response.data)
          setRecipe(response.data)
      }
      )
      .catch((error: any) => console.log(error)
      )
  }, [id])
  return (
    <div className={styles.main}>
      <RecipeComponent recipe={recipe}/>
    </div>
  )
}

