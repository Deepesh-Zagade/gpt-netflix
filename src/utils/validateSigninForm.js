const validateSigninForm = (email, password, fullName) => {

    const emailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const fullNameValid = fullName !== undefined ? /^(?!.* {2})([A-Za-z]+(?: [A-Za-z]+)*){1,25}$/.test(fullName) : undefined

    if (fullNameValid !== undefined && !fullNameValid) return "Full Name not valid"
    if (!emailValid) return "Email is not valid"
    if (!passwordValid) return "Password is not valid"

    return null

}

export default validateSigninForm;