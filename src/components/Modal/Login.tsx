import React from 'react'
import { Input, Button } from '@chakra-ui/react'

type LoginProps = {

}

const Login: React.FC<LoginProps> = () => {
    return (
        <form>
            <Input
                name="email"
                placeholder="email"
                type="email"
                mb={2}
                onChange={() => { }}
            />
            <Input
                name="password"
                placeholder="password"
                type="password"
                mb={2}
                onChange={() => { }}
            />
            <Button>Log in</Button>
        </form>
    )
}

export default Login
