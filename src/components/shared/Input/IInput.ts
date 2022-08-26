export interface IInput {
    type?: string | "text"
    label?: string
    value?: string
    onChange: (ev: any) => void
    showPassword?: boolean
    setShowPassword?: any
    color?: "primary" | "error" | "secondary" | "info" | "success" | "warning" | undefined
    helperText?: string | ""
    error?: boolean | false
}