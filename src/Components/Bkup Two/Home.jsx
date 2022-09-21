import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Pomodoro from "./Pomodoro";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import {
    Button,
    ButtonGroup,
    useDisclosure,
    FormControl,
    FormLabel,
    Input,
    InputRightElement,
    InputGroup,
} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";

const Home = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <React.Fragment>
            <div className="row justify-content-center ">
                <div className="col col-lg-6 col-md-6">
                    <div className="card bg-light">
                        <div className="card-header d-flex justify-content-between">
                            <h3>Pomodoro</h3>
                            <div className="">
                                <NavLink to="/" className="me-3">
                                    <Button
                                        colorScheme="teal"
                                        variant="outline"
                                    >
                                        Home
                                    </Button>
                                </NavLink>
                                {/* <NavLink to="/login"> */}
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    onClick={onOpen}
                                >
                                    Login
                                </Button>
                                {/* </NavLink> */}
                            </div>
                        </div>
                        <div className="card-body">
                            <Routes>
                                <Route
                                    path="/login"
                                    element={<LoginForm></LoginForm>}
                                ></Route>
                                <Route
                                    path="/"
                                    element={<Pomodoro></Pomodoro>}
                                ></Route>
                                <Route
                                    path="/register"
                                    element={
                                        <RegistrationForm></RegistrationForm>
                                    }
                                ></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login Or Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input ref={initialRef} placeholder="Email" />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <InputGroup size="md">
                                <Input
                                    placeholder="Password"
                                    type={show ? "text" : "password"}
                                />
                                <InputRightElement width="4.5rem">
                                    <Button
                                        h="1.75rem"
                                        size="sm"
                                        onClick={handleClick}
                                    >
                                        {show ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Login
                        </Button>
                        <Button>Registration</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </React.Fragment>
    );
};

export default Home;
