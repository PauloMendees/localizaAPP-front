export const S3 = {
    uploadPhoto: (id: string) => {
        return `/item/uploadPhoto/${id}`
    },
    deletePhoto: (id: string) => {
        return `/item/deletePhoto/${id}`
    },
    downloadPhoto: (id: string) => {
        return `/item/downloadPhoto/${id}`
    }
}
