export interface FormControlProps {
    type: string;
    placeholder: string;
    label: string;
    name: string;
    value: string | number;
    handleChange: React.ChangeEventHandler;
}

export interface ChangeInterface {
    name: string;
    value: string;
}

export interface LoginFormValues {
    email: string;
    password: string;
}

export type SignUpFormValues = LoginFormValues & {
    firstName: string;
    lastName: string;
};

export type ProfileFormValues = LoginFormValues & {
    nickName: string;
    fullName: string;
};

export interface SalesFields {
    title: string;
    description: string;
}
  