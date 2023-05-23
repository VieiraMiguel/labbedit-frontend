export const BASE_URL = "http://localhost:3003"

export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email)
export const validatePassword = password => /.{6,}/.test(password)
export const validateName = name => /.{2,}/.test(name)