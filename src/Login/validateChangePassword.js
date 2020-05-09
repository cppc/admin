
const passwordSatisfies = (fn) => obj => fn(obj.password)

const passwordDoesNotMatch = () => (expr, obj) => passwordSatisfies(a => !a.match(expr), obj)

const lengthLessThan = n => str => str.length < n

const passwordSingleton = password => ({ password })

const validate = (fn, message) => [ fn, () => passwordSingleton(message) ]

const validateRegex = (regex, message) => validate(passwordDoesNotMatch(regex), message)

const validatePassword = () => {}