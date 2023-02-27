import React from 'react'
import { Input, Button } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { authModalState } from '@/src/atoms/authModalAtom'

type LoginProps = {

}

const Login: React.FC<LoginProps> = () => {

    const [loginForm, setLoginForm] = useRecoilState(authModalState)

    const onSubmit = () => {};

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => ({
                ...prev,
                [event.target.name]: [event.target.value],
            }))
        };

    return (
        <form onSubmit={onSubmit}>
            <Input
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={onChange}
            />
            <Input
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={onChange}
            />
            <Button type="submit">Log in</Button>
        </form>
    )
}

export default Login
