import { Box, Text } from '@chakra-ui/react'
import { COLOURS } from '../constants/colours'
import { useState } from 'react';
import { ChangeInterface, LoginFormValues } from '../interfaces/formInputs';
import { CustomInputGroup } from '../components/CustomInputGroup';
import { ResponsiveAuthWrapper } from '../components/ResponsiveAuthWrapper';
import { AuthHeader } from '../components/AuthHeader';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { AiOutlineLock } from 'react-icons/ai';
import { UNAUTHENTICATED_ROUTES } from '../navigation/routes';
import AlreadyHAveAnAccount from '../components/AlreadyHaveAnAccount';
import ForgotPasswordLink from '../components/ForgotPasswordLink';
import useFormValidation from '../hooks/useFormValidation';
import { loginValidationRules } from '../utils/validationRules';
import { LargeBtn } from '../components/LargeBtn';

type FormValues = {
    email: string;
    password: string;
};

export const LoginPage = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<LoginFormValues>({
        email: "",
        password: "",
    });
    const initialFormFields: FormValues = {
        password: '',
        email: ''
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: ChangeInterface = e.target;
        setFormValues((prev) => ({ ...prev, [name]: value }));
    };
    const {
        // formValues,
        formErrors,
        // handleChange,
        handleBlur,
        touchedFields,
        // validateForm
    } = useFormValidation(initialFormFields, loginValidationRules);
    const handleSubmit = async () => {
        setLoading(true);
        // await loginUser(formValues, setLoading);
    };
  return (
    <ResponsiveAuthWrapper
          heading='Welcome Back'
          subHeading='Login to your Account' children={undefined}    >
        {/* <Box width={'100%'} height={'100%'} pb='6rem'>
            <AuthHeader heading='Login to Your Account' />
            <Box mt='1.5rem'>
                <CustomInputGroup
                    placeholder={'Enter your email'}
                    type={'email'}
                    label={'Email'}
                    name='email'
                    borderColor={COLOURS.blue}
                    icon={<MdOutlineAlternateEmail />}
                    handleChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    value={formValues.email}
                    isInvalid={
                        formErrors.email
                            ? touchedFields.includes('email')
                            : undefined
                    }
                />
                {formErrors.email && touchedFields.includes('email') && (
                    <Text color={COLOURS.red} fontSize='1.4rem'>
                        {formErrors.email}
                    </Text>
                )}
            </Box>
            <Box mt='1.5rem'>
                <ForgotPasswordLink />
                <CustomInputGroup
                    placeholder={'Enter your password'}
                    type={'password'}
                    label={'Password'}
                    name='password'
                    borderColor={'primary'}
                    icon={<AiOutlineLock />}
                    handleChange={handleChange}
                    onBlur={() => handleBlur('password')}
                    value={formValues.password}
                    isInvalid={
                        formErrors.password
                            ? touchedFields.includes('password')
                            : undefined
                    }
                />
                {formErrors.password &&
                    touchedFields.includes('password') && (
                        <Text color={COLOURS.red} fontSize='1.4rem'>
                            {formErrors.password}
                        </Text>
                    )}
            </Box>
            <Box position='relative' mt='3.5rem'>
                <LargeBtn
                    text={'Log in'}
                    bg={'primary'}
                    color={COLOURS.black}
                    h={['4rem', '4rem', '4.5rem']}
                    handleSubmit={handleSubmit}
                    loading={loading}
                />
                <AlreadyHAveAnAccount
                    text="Don't have an account?"
                    linkText='Register'
                    route={UNAUTHENTICATED_ROUTES.signUp}
                />
            </Box>
        </Box> */}
    </ResponsiveAuthWrapper>
  )
}
