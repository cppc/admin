import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';

export const login = params => {
    if (params instanceof CognitoUser) {
        return params
    }
    if (params.error) {
        Promise.reject(params.error);
    }
    return Auth.signIn(params.username, params.password);
}

export const changePassword = ({ cognitoUser, password}) => Auth.completeNewPassword(cognitoUser, password)

export const confirm = ({ cognitoUser, code }) => Auth.confirmSignIn(cognitoUser, code)

export default {
    login: login,
    logout: () => Auth.signOut({ global: true }),
    checkAuth: () => Auth.currentSession().then(session => session ? session : Promise.reject('You need to sign in.')),
    checkError: params => Promise.resolve(),
    getPermissions: params => Promise.resolve()
}
