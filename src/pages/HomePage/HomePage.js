import { Flex, Heading } from '@chakra-ui/react'
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
      const config = {
        headers: {
          Authorization: window.localStorage.getItem("cookenu-token")
        }
      }
      const response = await axios.get(`${BASE_URL}/recipe/all`, config)
      setRecipes(response.data)

    } catch (error) {
      console.log(error)
  }}

  return (
    <>
      <Header/>
      <Flex flexDirection="column" paddingTop={5}>
          <Heading>Receitas Cookenu</Heading>  
          <Flex flexWrap={"wrap"} justifyContent="space-between">
              {recipes.map((recipe) => {
                return <RecipeCard key={recipe.id} recipe={recipe}/>
              })}
          </Flex>
      </Flex>
    </>
  )
}

export default HomePage