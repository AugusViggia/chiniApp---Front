export const validations = () => {
    const isValidInstagramUsername = (username) => {
        const instagramUsernameRegex =
            /^@[a-zA-Z0-9][a-zA-Z0-9._]{0,28}[a-zA-Z0-9]$/;
        return instagramUsernameRegex.test(username);
    };

    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const isUsernameValid = (username) => {
        return username.length >= 4;
    };

    const isPasswordValid = (password) => {
        return password.length >= 6;
    };

    return {
        isEmailValid,
        isPasswordValid,
        isUsernameValid,
        isValidInstagramUsername,
    };
};
