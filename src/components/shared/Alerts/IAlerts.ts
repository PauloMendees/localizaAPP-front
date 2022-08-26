export interface IAlerts {
    message: string
    severity: "error" | "warning" | "info" | "success"
    clearState?: () => void
}