import React from 'react'
import { Flex, Stack, InputGroup, InputLeftElement, InputRightElement, Input } from "@chakra-ui/react"
import { PhoneIcon, CheckIcon } from "@chakra-ui/icons"

type SearchInputProps = {}

function SearchInput({ }: SearchInputProps) {
  return (
    <Flex align="center">
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<PhoneIcon color='gray.300' />}
        />
        <Input type='tel' placeholder='Phone number' />
      </InputGroup>
    </Flex>
  )
}

export default SearchInput;
