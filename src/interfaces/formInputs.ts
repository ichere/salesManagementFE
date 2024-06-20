import { HTMLInputTypeAttribute } from "react";

export interface FormControlProps {
    variant?: 'outline' | 'filled' | 'flushed' | 'unstyled';
    type: HTMLInputTypeAttribute;
    placeholder: string;
    label?: string;
    bg?: string;
    name: string;
    value: string | number;
    color?: string;
    isInvalid?: boolean;
    borderColor?: string;
    handleChange: React.ChangeEventHandler;
    onBlur?: React.FocusEventHandler;
    onKeyPress?: React.KeyboardEventHandler;
    onKeyDown?: React.KeyboardEventHandler;
    onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
    icon?: React.ReactNode;
    width?: string[];
    disabled?: boolean;
}

export type ParentCompProps = {
    childComp?: React.ReactElement;
    rightIcon?: React.ReactElement;
    bg: string;
    color: string;
    text: string;
    fontSize?: string[];
    loading: boolean;
    disabled?: boolean;
    borderColor?: string;
    h?: string[];
    w?: string;
    handleSubmit?: () => void;
    height?: string;
};

export interface SearchProps {
    placeholder: string;
    bg?: string;
    color?: string;
    handleSearch: React.ChangeEventHandler;
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
  