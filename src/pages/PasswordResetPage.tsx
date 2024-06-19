import { Box, Button, Text } from '@chakra-ui/react'
import { ResponsiveAuthWrapper } from '../components/ResponsiveAuthWrapper'
import { AuthHeader } from '../components/AuthHeader'
import { CustomInputGroup } from '../components/CustomInputGroup'
import { COLOURS } from '../constants/colours'
import { AiOutlineLock } from 'react-icons/ai'
import { LargeBtn } from '../components/LargeBtn'
import { PageTitle, useDocumentTitle } from '../utils/pageTitle'
import { useNavigate } from 'react-router-dom'
import { ChangeInterface, LoginFormValues } from '../interfaces/formInputs'
import { useState } from 'react'

export const PasswordResetPage = () => {
    useDocumentTitle(PageTitle.Password_Reset);
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<LoginFormValues>({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value }: ChangeInterface = e.target;
        setFormValues((prev: LoginFormValues) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        setLoading(false);
    };
  return (
    <ResponsiveAuthWrapper  heading={'Create, Track, Manage'} subHeading={'Reset your Password and continue!'}>
      <Box width={'100%'}>
        <AuthHeader heading="Password Reset" subHeading="Create a new password" />
        <Box mt="1.5rem">
          <CustomInputGroup
                placeholder={'Password(min 8 character)'}
                type={'password'}
                label={'Password'}
                name="password"
                borderColor={COLOURS.blue}
                icon={<AiOutlineLock />}
                value={formValues.password}
                handleChange={handleChange}
            />
        </Box>
        <Box mt="1.5rem">
          <CustomInputGroup
                placeholder={'Password(min 8 character)'}
                type={'password'}
                label={'Confirm Password'}
                name="password2"
                borderColor={COLOURS.blue}
                icon={<AiOutlineLock />}
                value={formValues.password}
                handleChange={handleChange}
            />
        </Box>
        <Box mt="4rem" position="relative">
          <LargeBtn
            text={'Proceed'}
            bg={COLOURS.blue}
            color={COLOURS.black}
            handleSubmit={handleSubmit}
            loading={loading}
          />
        </Box>
        <Box mt="4rem" position="relative">
          <Button
            type="submit"
            width="100%"
            height={['4rem', '4rem', '4.5rem']}
            color={COLOURS.black}
            bg={COLOURS.white}
            borderRadius={'0.8rem'}
            border={`1px solid ${COLOURS.blue}`}
            fontSize={['1.4rem', '1.4rem', '2rem']}
            _hover={{
              bg: COLOURS.white,
              color: COLOURS.black,
            }}
            onClick={() => navigate('/login')}
          >
            Remember your password?{' '}
            <Text ml=".3rem" color={COLOURS.blue} as={'span'}>
              Login
            </Text>
          </Button>
        </Box>
      </Box>
    </ResponsiveAuthWrapper>
  )
}
