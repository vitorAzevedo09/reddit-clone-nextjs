import React from 'react'
import { Input, Button, Text, Flex } from '@chakra-ui/react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { authModalState } from '@/src/atoms/authModalAtom'
import  OAuthButton  from "./OAuthButton"


const Login: React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState)

    const [_loginForm, setLoginForm] = useRecoilState(authModalState)

    const onSubmit = () => { };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
            ...prev,
            [event.target.name]: [event.target.value],
        }))
    };

    return (
        <form onSubmit={onSubmit}>
            <Input
                required
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange}
                fontSize={10}
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
            />
            <Input
                required
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={onChange}
                fontSize={10}
                _placeholder={{ color: 'gray.500' }}
                _hover={{
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500",
                }}
                _focus={{
                    outline: "none",
                    bg: "white",
                    border: "1px solid",
                    borderColor: "blue.500"
                }}
            />
            <Button width="100%" height="36px" mt={2} mb={2} type="submit">Log in</Button>
            <Flex
                fontSize="9pt"
                justifyContent="center">
                <Text
                    mr={1}
                >New here?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() => {
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "signup",
                        }))
                    }}>SIGN UP</Text>
            </Flex>
        </form>
    )
}

export default Login
