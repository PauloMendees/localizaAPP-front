import { LoadingButton } from "@mui/lab"
import { Box } from "@mui/material"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useMail } from "../../service/hooks/useMail"
import { useCreateNewUser } from '../../service/hooks/useCreateNewUser'
import { HandleState } from "../../utils/HandleState"
import Alerts from "../shared/Alerts/Alerts"
import { Confirmacao } from "./Steps/Confirmacao"
import { PrimeiraParte } from "./Steps/PrimeiraParte"
import { SegundaParte } from "./Steps/SegundaParte"
import { TerceiraParte } from "./Steps/TerceiraParte"
import { ButtonsConteiner } from "./style"
import Button from "../shared/Button"
import OutlinedButton from "../shared/OutlinedButton"
import { userRoutes } from "../../config/routes/api/userRoutes"
import { isValidEmailFunction } from "../../utils/isValidEmailFunction"

const RegisterUserForm = () => {
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const [actualStep, setActualStep] = useState<number>(0)
    const [emailError, setEmailError] = useState<boolean>(false)
    const [helperText, setHelperText] = useState<string>('')

    const { fetching, send, clearState, message } = useMail(userRoutes.startRegister)
    const { fetchingCreateUser, errorCreateUser, clearStateCreateUser, codeVerify, createPassword } = useCreateNewUser()

    const handleSteps = () => {
        if (actualStep === 0) {
            if (isValidEmailFunction(email)) {
                send({ email: email }, setActualStep)
            } else {
                setEmailError(true)
                setHelperText('Email inválido')
            }
        } else if (actualStep === 1) {
            codeVerify({ email: email, code: code }, setActualStep)
        } else if (actualStep === 2) {
            createPassword({
                email: email,
                password: password,
                confirmPassword: confirmPassword
            }, setActualStep)
        } else if (actualStep === 3) {
            router.push('/login')
        }
    }

    useEffect(() => {
        if (isValidEmailFunction(email)) {
            setEmailError(false)
            setHelperText('')
        }
    }, [email])

    const componentForStep = [
        <PrimeiraParte
            value={email}
            onChange={(ev) => { HandleState(setEmail, ev) }}
            helperText={helperText}
            error={emailError}
        />,
        <SegundaParte
            value={code}
            onChange={(ev) => { HandleState(setCode, ev) }}
        />,
        <TerceiraParte
            password={password}
            confirmPassword={confirmPassword}
            onChangePassword={(ev) => { HandleState(setPassword, ev) }}
            onChangeConfirmPassword={(ev) => { HandleState(setConfirmPassword, ev) }}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
        />,
        <Confirmacao />
    ]

    return (
        <>
            {componentForStep[actualStep]}
            <Box sx={ButtonsConteiner}>
                <OutlinedButton
                    id="registerGoBackButton"
                    className='w-20 bg-inherit text-black shadow-none border-none'
                    onClick={() => {
                        if (actualStep === 0 || actualStep === 3) {
                            router.push('/login')
                        } else if (actualStep === 1 || actualStep === 2) {
                            setActualStep(actualStep - 1)
                        }
                    }}
                >
                    Voltar
                </OutlinedButton>
                {fetching || fetchingCreateUser ? (
                    <LoadingButton
                        loading
                        variant="contained"
                        size="small"
                        sx={{ borderRadius: '12px', width: '80px', height: '32px' }}
                    >
                        Submit
                    </LoadingButton>
                ) : (
                    <Button
                        id="registerButton"
                        className='w-36'
                        type="submit"
                        onClick={handleSteps}
                    >
                        {actualStep === 3 ? 'Ir para login' : "Avançar"}
                    </Button>
                )}
            </Box>
            <Alerts
                clearState={clearState}
                message={message}
                severity="error"
            />
            <Alerts
                clearState={clearStateCreateUser}
                message={errorCreateUser}
                severity="error"
            />
        </>
    )
}

export { RegisterUserForm }