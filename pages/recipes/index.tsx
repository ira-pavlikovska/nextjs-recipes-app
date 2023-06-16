import {server} from '../../config/index'
import styles from './recipes.module.css'
import {RecipeType} from '../../types'
import {useEffect, useState} from "react";
import axios from 'axios'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {
  MyRecipes,
  StyledButton,
  StyledContainer,
  ViewLabel,
  GalleryIcon,
  ListIcon,
  StyledPaper
} from "./RecipesPage.styles";

import RecipeComponent from "../../components/RecipeComponent";

export default function Recipes() {

  //client side rendering of the page
  const [recipes, setRecipes] = useState<RecipeType[]>([])

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/recipes')
      .then((response: any) => {
          // console.log(recipes)
          setRecipes(response.data)
        }
      )
      .catch((error: any) => console.log(error)
      )
  }, [])


  const handleDeleteRecipe = (res: RecipeType) => {
    axios
      .delete(`http://localhost:3000/api/recipes/${res.recipeId}`)
      .then((response: any) => {
        // console.log(response.data)
        setRecipes(recipes.filter(r => r.recipeId != res.recipeId))
      })
      .catch((error: any) => console.log(error)
      )
  }

  const haveRecipes = recipes.length > 0;
  return (
    <main className={styles.main}>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            header here
          </Grid>
          <Grid item xs={12}>
            <StyledPaper style={{height: ''}}>
              <Grid item xs={12}>
                <StyledContainer>
                  <MyRecipes data-testid={'title-element'}>My Recipes</MyRecipes>
                  <ViewLabel>View</ViewLabel>
                  <GalleryIcon
                    style={{color: '#1976d2'}}
                    onClick={() => {
                      console.log('handleGalleryViewMod')
                    }}
                  />
                  <ListIcon
                    data-testid={'list-mode-icon'}
                    style={{color: 'rgba(0,0,0,0.6)'}}
                    onClick={() => {
                      console.log('handleListViewMod')
                    }}
                  />
                  <StyledButton
                    variant="outlined"
                    data-testid={'add-recipe-button'}
                    onClick={() => {
                    }}
                  >
                    Add new Recipe
                  </StyledButton>
                </StyledContainer>
              </Grid>
              <Grid item xs={12}>
                {
                  haveRecipes &&
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
