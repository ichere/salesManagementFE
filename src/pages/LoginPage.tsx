import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { COLOURS } from '../constants/colours'
import { Formcontrol } from '../components/FormControl'
import { useState } from 'react';
import { ChangeInterface, LoginFormValues } from '../interfaces/formInputs';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { LargeBtn } from '../components/LargeBtn';
import { BackgroundImage } from '../components/BackgroundImage';

export const LoginPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<LoginFormValues>({
        email: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: ChangeInterface = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async () => {
        setLoading(true);
        // await loginUser(formValues, setLoading);
    };
  return (
    <Flex
        background={"white"}
        width="100%"
        height="100vh"
        alignItems={"center"}
        p="30px 60px"
    >
        <Box width={"50%"} textAlign="left">
            <Box width={"80%"}>
                <Box mb="20px">
                    <Heading color={"#000000"} fontSize="32px" as="h2">
                        Welcome Back!
                    </Heading>
                    <Text color={COLOURS.grey}>Login to access your account</Text>
                </Box>
                <Box>
                    <Formcontrol
                        type={"email"}
                        placeholder={"Enter your email"}
                        label="Email"
                        name="email"
                        value={formValues.email}
                        handleChange={handleChange}
                    />
                </Box>
                <Box>
                    <CustomInputGroup
                        placeholder={"Enter your password"}
                        type={"password"}
                        label={"Password"}
                        name="password"
                        value={formValues.password}
                        handleChange={handleChange}
                    />
                </Box>
                <Box mt="40px">
                    <LargeBtn
                        text={"Log in"}
                        bg="btnblue"
                        color="white"
                        handleSubmit={handleSubmit}
                        loading={loading}
                    />
                    <Text textAlign={"center"} mt="10px">
                        Don't have an account?{" "}
                        <Text as="span" color="btnblue" cursor={"pointer"}>
                            {/* <Link to="/signup">Sign Up</Link> */}
                        </Text>
                    </Text>
                </Box>
            </Box>
        </Box>
        <Box width={"50%"} height="100%">
            <BackgroundImage heading={''} />
        </Box>
    </Flex>
  )
}
