import React from 'react'
import { Button } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { authModalState } from '@/src/atoms/authModalAtom';


function AuthButtons() {
    const setModalState = useSetRecoilState(authModalState);
    return (
        <>
            <Button
                variant="outline"
                height="28px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                mr={2}
                onClick = {() => setModalState({open: true, view: 'login'})}
            >Log in</Button>
            <Button
                height="28px"
                display={{ base: "none", sm: "flex" }}
                width={{ base: "70px", md: "110px" }}
                mr={2}
                onClick = {() => setModalState({open: true, view: 'signup'})}
            >Sign Up</Button>
        </>
    )
}

export default AuthButtons
