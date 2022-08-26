export const itemRoutes = {
    getAll: '/item/getall',
    charge: '/upload/charge',
    post: '/item/post',
    getById: (id: string) => {
        return `/item/getById/${id}`
    },
    delete: (id: string) => {
        return `/item/delete/${id}`
    },
    put: (id: string) => {
        return `/item/put/${id}`
    },
    addPhoto: (id: string) => {
        return `/item/addPhoto/${id}`
    }
}