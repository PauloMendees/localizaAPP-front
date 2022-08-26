export const empresaRoutes = {
    getAll: '/empresa/getall',
    post: '/empresa/post',
    delete: (id: string) => {
        return `/empresa/delete/${id}`
    }
}