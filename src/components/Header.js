import React, { useContext } from 'react'
import { Flex, Button, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'
import { GlobalContext } from '../contexts/GlobalContext'

function Header() {

    const context = useContext(GlobalContext)

    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.removeItem("cookenu-token")
        context.setIsAuth(false)
        goToLoginPage(navigate)        
    }

  return (
    <Flex h="80px" max-width="1200px" bg="lightgrey" justifyContent="end" alignItems="center" paddingRight="32px">
        <Button colorScheme={"blue"} onClick={logout}>Deslogar</Button>
    </Flex>    
  )
}

export default Header