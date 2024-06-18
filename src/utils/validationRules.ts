const genericPasswordValidation = (value: string): string | undefined => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    if (!/\d/.test(value)) {
      return 'Password must contain a number';
    }
    if (!/[A-Z]/.test(value)) {
      return 'Password must contain an uppercase letter';
    }
    return undefined;
};
  
export const loginValidationRules = {
    email: (value: string): string | undefined =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? undefined : 'Invalid email address',
    password: (value: string): string | undefined => {
        if (!value) {
        return 'Password is required';
        }
        return genericPasswordValidation(value);
    },
};
  
export const signUpValidationRules = {
    firstName: (value: string): string | undefined =>
      value.trim() ? undefined : 'First name is required',
    lastName: (value: string): string | undefined =>
      value.trim() ? undefined : 'Last name is required',
    email: (value: string): string | undefined =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? undefined : 'Invalid email address',
    password: (value: string): string | undefined => {
      if (!value) {
        return 'Password is required';
      }
      return genericPasswordValidation(value);
    },
};
  
export const ChangePasswordValidationRules = {
    newPassword: (value: string): string | undefined => {
      if (!value) {
        return 'New password is required';
      }
      return genericPasswordValidation(value);
    },
    confirmPassword: (value: string): string | undefined => {
      if (!value) {
        return 'Confirm password is required';
      }
      return genericPasswordValidation(value);
    },
    currentPassword: (value: string): string | undefined => {
      if (!value) {
        return 'Current password is required';
      }
      return genericPasswordValidation(value);
    },
};
  
export const attributesValidationRules = {
    name: (value: string): string | undefined =>
      value.trim() ? undefined : 'Attributes name is required',
    type: (value: string): string | undefined =>
      value.trim() ? undefined : 'Attributes type is required',
};
  
export const deliveryValidationRules = {
    firstName: (value: string): string | undefined =>
      value.trim() ? undefined : 'First name is required',
    lastName: (value: string): string | undefined =>
      value.trim() ? undefined : 'Last name is required',
    strategy: (value: string): string | undefined =>
      value.trim() ? undefined : 'Strategy is required',
};
  