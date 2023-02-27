import React from 'react'
import { Flex } from '@chakra-ui/react'
import AuthButtons from './AuthButtons'
import AuthModal from '../../Modal/AuthModal'

type RightContentProps = {}

function RightContent({ }: RightContentProps) {
    return (
        <Flex justify="center" align="center">
            <AuthModal />
            <AuthButtons />
        </Flex>
    )
}

export default RightContent
