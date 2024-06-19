import { useEffect, useRef } from 'react';

export enum PageTitle {
    Home = 'Salesxy | Home Page',
    Register = 'Salesxy | Sign Up',
    Login = 'Salesxy | Login',
    ForgotPassword = 'Salesxy | Forgot Password',
    Password_Reset = 'Salesxy | Reset Password',
    Reset_Successful = 'Salesxy | Reset Successful',
    VerifyEmail = 'Salesxy | Email Verification',
}

export const useDocumentTitle = (
    title: string,
    prevailOnUnmount = false
): void => {
    const defaultTitle = useRef(document.title);

    useEffect(() => {
        document.title = title;
    }, [title]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        },
        []
    );
};
