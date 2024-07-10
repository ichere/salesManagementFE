import { Box, Text } from "@chakra-ui/react"
import { ResponsiveAuthWrapper } from "../components/ResponsiveAuthWrapper"
import { AuthHeader } from "../components/AuthHeader"
import { CustomInputGroup } from "../components/CustomInputGroup"
import useFormValidation from "../hooks/useFormValidation"
import { signUpValidationRules } from "../utils/validationRules"
import { PageTitle, useDocumentTitle } from "../utils/pageTitle"
import { COLOURS } from "../constants/colours"
import { MdOutlineAlternateEmail } from "react-icons/md"
import { AiOutlineLock } from "react-icons/ai"
import { LargeBtn } from "../components/LargeBtn"
import AlreadyHAveAnAccount from "../components/AlreadyHaveAnAccount"
import { UNAUTHENTICATED_ROUTES } from "../navigation/routes"

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};


export const SignUpPage = () => {
  useDocumentTitle(PageTitle.Register);
  const initialFormFields: FormValues = {
    password: '',
    email: '',
    firstName: '',
    lastName: ''
  };
  const {
    formValues,
    formErrors,
    handleChange,
    handleBlur,
    touchedFields,
    validateForm
  } = useFormValidation(initialFormFields, signUpValidationRules);
  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) return;
    // await login();
  };
  return (
    <ResponsiveAuthWrapper
      heading='Sell, Record, Manage'
      subHeading='Create an account and start book keeping'
    >
      <Box width={'100%'} height={'100%'} pb='6rem'>
          <AuthHeader heading='Sign Up' />
          <Box mt='1.5rem'>
              <CustomInputGroup
                placeholder={'Enter your first name'}
                type={'text'}
                label={'First Name'}
                name='firstName'
                borderColor={COLOURS.blue}
                icon={<MdOutlineAlternateEmail />}
                handleChange={handleChange}
                onBlur={() => handleBlur('firstName')}
                value={formValues.firstName}
                isInvalid={
                  formErrors.firstName
                  ? touchedFields.includes('firstName')
                  : undefined
                }
              />
              {formErrors.firstName &&
                  touchedFields.includes('firstName') && (
                    <Text color={COLOURS.red} fontSize='1.4rem'>
                        {formErrors.firstName}
                    </Text>
                  )}
          </Box>

          <Box mt='1.5rem'>
            <CustomInputGroup
              placeholder={'Enter your last name'}
              type={'text'}
              label={'Last Name'}
              name='lastName'
              borderColor={COLOURS.blue}
              // icon={<MdOutlineAlternateEmail />}
              handleChange={handleChange}
              onBlur={() => handleBlur('lastName')}
              value={formValues.lastName}
              isInvalid={
                  formErrors.lastName
                      ? touchedFields.includes('lastName')
                      : undefined
              }
            />
            {formErrors.lastName &&
              touchedFields.includes('lastName') && (
                <Text color={COLOURS.red} fontSize='1.4rem'>
                  {formErrors.lastName}
                </Text>
            )}
          </Box>
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
                  text={'Sign Up'}
                  bg={COLOURS.blue}
                  color={COLOURS.black}
                  h={['4rem', '4rem', '4.5rem']}
                  handleSubmit={handleSubmit}
                  loading={false}
              />
              <AlreadyHAveAnAccount
                  text='Already have an account?'
                  linkText='Login'
                  route={UNAUTHENTICATED_ROUTES.login}
              />
          </Box>
      </Box>
    </ResponsiveAuthWrapper>
  )
}
