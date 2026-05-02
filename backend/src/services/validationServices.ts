import type { Request } from 'express';

export const validateSignUpRequest = (req: Request) => {
    const { name, email, password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
        return {
            isValid: false,
            message: "Password and confirm password do not match"
        };
    }
    if (!name || !email || !password || !confirmPassword) {
        return {
            isValid: false,
            message: "Please provide all the required fields"
        };
    }
    return { isValid: true, name, email, password };
};