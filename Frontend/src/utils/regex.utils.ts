const nameRegex: RegExp = /^(?=.*[A-Za-z])[A-Za-z\s]+$/;
const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = {
    letter: /[a-zA-Z]/,
    length: /^.{6,}$/,
    digit: /\d/,
    specialChar: /[!@#$%^&*(),.?":{}|<>+-]/
};

const otpRegex = /^\d{0,6}$/;

export {
    nameRegex,
    emailRegex,
    passwordRegex,
    otpRegex
}