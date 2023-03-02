import React from 'react'
import { useState } from 'react';
import { useSetRecoilState } from 'recoil'
import { AuthModalState, authModalState } from '@/src/atoms/authModalAtom'
import { Input, Button, Text, Flex } from '@chakra-ui/react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/clientApp';
import { sign } from 'crypto';

function SignUp() {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth);


    const setAuthModalState = useSetRecoilState(authModalState)

    const [signUpForm, setSignUpForm] = useState({
            email: "",
            password: "",
            confirmPassword: "",
        })

    const [error, setError] = useState("");

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        if(error)setError("");

        if(signUpForm.password !== signUpForm.confirmPassword){
                setError("Passwords do not match")
                return;
            }
        createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
        };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSignUpForm((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
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
            { (error || userError?.message) && (
                <Text textAlign="center" color="red" fontSize="10pt">
                    { (error || userError?.message) } 
                </Text>
            )}
            <Button width="100%" height="36px" mt={2} mb={2} type="submit" isLoading={loading}>Sign Up</Button>
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
