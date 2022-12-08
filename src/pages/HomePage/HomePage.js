import { Flex, Heading, Skeleton } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { BASE_URL } from '../../constants/url'
import { GlobalContext } from '../../contexts/GlobalContext'
import { goToLoginPage } from '../../routes/coordinator'
import RecipeCard from './RecipeCard'

const HomePage = () => {

  const context = useContext(GlobalContext)

  const navigate = useNavigate()

  const [ recipes, setRecipes ] = useState([])

  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    if (!context.isAuth) {
      goToLoginPage(navigate)
    }
  }, [])

  useEffect(() => {
    fetchRecipes()
  }, [])

  const fetchRecipes = async () => {
    try {

      setIsLoading(true)

      const config = {
        headers: {
          Authorization: window.localStorage.getItem("cookenu-token")
        }
      }
      const response = await axios.get(`${BASE_URL}/recipe/all`, config)

      setRecipes(response.data)
      setIsLoading(false)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
  }}

  return (
    <>
      <Header/>
      <Flex flexDirection="column" paddingTop={5} paddingLeft="15px">
          <Heading>Receitas Cookenu</Heading>            
            <Flex flexWrap={"wrap"} justifyContent="space-between" padding="50px">
                {recipes.map((recipe) => {
                  return (                    
                      <RecipeCard key={recipe.id} recipe={recipe}/>                   
                  )
                })}
            </Flex>
          
      </Flex>
    </>
  )
}

export default HomePage