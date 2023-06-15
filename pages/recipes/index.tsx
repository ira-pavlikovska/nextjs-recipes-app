
import { server } from '../../config/index'
import styles from './recipes.module.css'
import { RecipeType } from '../../types'
import {useEffect, useState} from "react";
import axios from 'axios'
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import Box from '@mui/material/Box';
import {
  MyRecipes,
  StyledHeader,
  StyledButton,
  StyledContainer,
  ViewLabel,
  GalleryIcon,
  ListIcon,
  StyledPaper
} from "./RecipesPage.styles";

import RecipeComponent from "../../components/RecipeComponent";



type Props = {
  recipes: RecipeType[]
}
export default function Recipes({recipes}: Props) {

// console.log(recipes)


  // client side rendering of the page
  // const [recipes, setRecipes] = useState<RecipeType[]>([])
  //
  // // react native accepts calls to HTTPS APIs only, so populate data from file as fallback
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3000/api/recipes')
  //     .then((response: any) => console.log(response.data))
  //     .catch((error: any) => console.log(error)
  //     )
  // }, [])
  //
  // {recipes.map((item: RecipeType, index) => (<div className="text-3xl font-bold underline decoration-red-500" key={index}>{item.recipeName}</div>))}

  const handleDeleteRecipe = (res: RecipeType) => {
      // axios
      //   .get('http://localhost:3000/api/recipes/[id]')
      //   .then((response: any) => setRecipes(response.data))
      //   .catch((error: any) => console.log(error)
      //   )


    console.log('delete')
  }

  return (
    <main className={styles.main}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            header here
          </Grid>
          <Grid item xs={12}>
            <StyledPaper elevation={3} style={{height: ''}}>
              <Grid item xs={12}>
                <StyledContainer>
                  <MyRecipes data-testid={'title-element'}>My Recipes</MyRecipes>
                  <ViewLabel>View</ViewLabel>
                  <GalleryIcon
                    style={{color: '#1976d2'}}
                    onClick={() => {console.log('handleGalleryViewMod')}}
                  />
                  <ListIcon
                    data-testid={'list-mode-icon'}
                    style={{color: 'rgba(0,0,0,0.6)'}}
                    onClick={() => {console.log('handleListViewMod')}}
                  />
                  <StyledButton
                    variant="outlined"
                    data-testid={'add-recipe-button'}
                    onClick={() => {}}
                  >
                    Add new Recipe
                  </StyledButton>
                </StyledContainer>
              </Grid>
              <Grid item xs={12}>
                {
                  recipes.map((recipe: RecipeType, idx) => (
                    <ul
                      key={idx}
                      data-testid={'list-recipes'}
                      style={{listStyleType: 'none'}}
                    >
                      <li data-testid={'list-recipe'}><RecipeComponent
                        recipe={recipe}
                        handleDeleteRecipe={handleDeleteRecipe}/>
                      </li>
                    </ul>
                  ))
                }
              </Grid>
            </StyledPaper>
          </Grid>
        </Grid>
      </Box>
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
