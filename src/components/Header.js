import React from 'react'
import { Flex, Button, Center } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'

function Header() {

    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.removeItem("cookenu-token")
        goToLoginPage(navigate)
    }

  return (
    <Flex h="80px" max-width="1200px" bg="lightgrey" justifyContent="end" alignItems="center" paddingRight="32px">
        <Button onClick={logout}>Deslogar</Button>
    </Flex>    
  )
}

export default Header