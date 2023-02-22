const validateUserEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input) {
        return "Please enter an email address.";
    } else if (!emailRegex.test(input)) {
        return "Please enter a valid email address.";
    } else {
        return "";
    }
}