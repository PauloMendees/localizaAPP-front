export const userRoutes = {
    login: '/user/login',
    initResetPassword: '/user/initResetPassword',
    verifyResetCode: '/user/verifyResetCode',
    changePasswordReset: '/user/changePassword',
    startRegister: '/user/startRegister',
    registerCodeVerify: '/user/registerCodeVerify',
    finalizeRegister: '/user/register',
    getAll: '/user/getall',
    getById: (id: string) => {
        return `/user/getById/${id}`
    },
    delete: (id: string) => {
        return `/user/delete/${id}`
    },
    put: (id: string) => {
        return `/user/put/${id}`
    },
    vinculate: (id: string) => {
        return `/user/vinculate/${id}`
    },
    post: '/user/post'
}
