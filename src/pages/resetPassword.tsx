import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import { AuthCard } from '../components/Auth/AuthCard/AuthCard'
import { ResetPasswordForm } from '../components/ResetPasswordForm/ResetPasswordForm'
import { LogoImg } from '../components/shared/LogoImg/LogoImg'

const Register: NextPage = () => {
    return (
        <AuthCard>
            <LogoImg />
            <Typography variant="h1" sx={{fontSize: 15, fontWeight: '600'}} >
                Esqueci minha senha
            </Typography>
            <ResetPasswordForm />
        </AuthCard>
    )
}

export default Register