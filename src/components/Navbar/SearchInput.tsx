import React from 'react'
import {
    Flex,
    InputGroup,
    InputLeftElement,
    Input
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"

type SearchInputProps = {}

function SearchInput({ }: SearchInputProps) {
    return (
        <Flex align="center" flexGrow={1} mr={2} >
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.400' mb={1} />}
                />
                <Input
                    placeholder='Search Reddit'
                    fontSize="10pt"
                    _placeholder={{ color: "gray.500" }}
                    _hover={{
                        bg: "white",
                        border: "1px solid",
                        borderColor: "blue.500",
                    }}
                    _focus={{
                        outline: "none",
                        border: "1px solid",
                        borderColor: "blue.500",
                    }}
                    _height='34px'
                    bg='gray.50'
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput;
