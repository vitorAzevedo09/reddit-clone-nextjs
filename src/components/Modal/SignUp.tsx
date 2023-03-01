import React from 'react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/src/atoms/authModalAtom'
import { useRecoilState } from 'recoil'
import { Input, Button, Text, Flex } from '@chakra-ui/react'

function SignUp() {
    const setAuthModalState = useSetRecoilState(authModalState)

    const [loginForm, setLoginForm] = useRecoilState(authModalState)

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
            <Input
                required
                name="confirmPassword"
                placeholder="confirm password"
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
            <Button width="100%" height="36px" mt={2} mb={2} type="submit">Sign Up</Button>
            <Flex
                fontSize="9pt"
                justifyContent="center">
                <Text
                    mr={1}
                >Already a redditor?</Text>
                <Text
                    color="blue.500"
                    fontWeight={700}
                    cursor="pointer"
                    onClick={() => {
                        setAuthModalState((prev) => ({
                            ...prev,
                            view: "login",
                        }))
                    }}>LOGIN</Text>
            </Flex>
        </form>
    )
}

export default SignUp
