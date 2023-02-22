import React from 'react'
import { Flex } from '@chakra-ui/react'
import AuthButtons from './AuthButtons'

type RightContentProps = {}

function RightContent({ }: RightContentProps) {
    return (
        <Flex justify="center" align="center">
        <AuthButtons />
        </Flex>
    )
}

export default RightContent
