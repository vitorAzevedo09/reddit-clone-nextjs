import React from 'react'
import { Flex, Image } from "@chakra-ui/react"


const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
    <Flex align='center'>
      <Image src="/images/redditFace.svg" alt="Reddit Logo" height="30px"></Image>
      <Image src="/images/redditText.svg" alt="Reddit Text" height="46px"></Image>
    </Flex>
</Flex>
  )
}

export default Navbar
