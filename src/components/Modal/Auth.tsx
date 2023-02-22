import React from 'react'
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil';
import { authModalState } from '@/src/atoms/authModalAtom';

function BasicUsage() {
    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => {
            setModalState((prev) => ({
                    ...prev,
                    open: false,
                }))
        }

    const handleOpen = () => {
            setModalState((prev) => ({
                    ...prev,
                    open: true,
                }))
        }

    return (
        <>
            <Button onClick={handleOpen}>Open Modal</Button>

            <Modal isOpen={modalState.open} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Modal body
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BasicUsage;
