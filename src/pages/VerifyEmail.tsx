import React from 'react'
import { ResponsiveAuthWrapper } from '../components/ResponsiveAuthWrapper'
import { Box } from '@chakra-ui/react'
import { AuthHeader } from '../components/AuthHeader'
import { CustomInputGroup } from '../components/CustomInputGroup'
import { COLOURS } from '../constants/colours'
import { LargeBtn } from '../components/LargeBtn'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle'
import useFormValidation from '../hooks/useFormValidation'
import { signUpValidationRules } from '../utils/validationRules'

type FormValues = {
    otp: string;
};

export const VerifyEmail = () => {
    useDocumentTitle(PageTitle.VerifyEmail);
    const initialFormFields: FormValues = {
        otp: ''
    };
    const { formValues, handleChange, validateForm } = useFormValidation(
        initialFormFields,
        signUpValidationRules
    );
    const handleSubmit = async () => {
        const isValid = validateForm();
        if (!isValid) return;
        // await login();
    };
  return (
    <ResponsiveAuthWrapper heading='Welcome' subHeading='Verify you Email now!'>
            <Box width={'100%'} height={'100%'} pb='6rem'>
                <AuthHeader heading='Verify Your Email' />
                <Box mt='1.5rem'>
                    <CustomInputGroup
                        placeholder={'Enter the OTP'}
                        type={'number'}
                        label={'OTP'}
                        name='otp'
                        borderColor={COLOURS.blue}
                        handleChange={handleChange}
                        value={formValues.otp}
                    />
                </Box>

                <Box position='relative' mt='3.5rem'>
                    <LargeBtn
                        text={'Verify Email'}
                        bg={'primary'}
                        color={COLOURS.black}
                        h={['4rem', '4rem', '4.5rem']}
                        handleSubmit={handleSubmit}
                        loading={false}
                    />
                </Box>
            </Box>
    </ResponsiveAuthWrapper>
  )
}
