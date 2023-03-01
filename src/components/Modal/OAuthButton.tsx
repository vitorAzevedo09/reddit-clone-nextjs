import React from 'react'
import { Flex, Button, Image } from '@chakra-ui/react'

const OAuthButton: React.FC = () => {
        return (
        <Flex>
            <Button variant="oauth" mb={4}>
                <Image src="/images/googlelogo.png" alt="google logo" height="20px" mr={4}></Image>
                Continue with Google account
            </Button>
        </Flex>
        )
    }

export default OAuthButton 
