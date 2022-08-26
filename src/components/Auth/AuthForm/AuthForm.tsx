import { useState } from 'react';
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import LoadingButton from '@mui/lab/LoadingButton';
import { IAuthForm } from './Interface/IAuthForm';
import { StandardInput } from '../../shared/Input/StandardInput';
import Button from '../../shared/Button';
import { HandleState } from '../../../utils/HandleState';
import { LinksContainer } from './styles';

const AuthForm = (props: IAuthForm) => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const router = useRouter()

    const onSubmit = (ev: any) => {
        ev.preventDefault()
        props.initializeFetch()
        props.signIn({
            email: email,
            password: password
        })
    }

    return (
        <Box>
            <form
                style={{ width: '100%' }}
                onSubmit={onSubmit}
            >
                <StandardInput
                    color="primary"
                    type="text"
                    label="E-mail"
                    value={email}
                    onChange={(ev) => { HandleState(setEmail, ev) }}
                    error={!!props.message}
                />
                <StandardInput
                    color="primary"
                    type="password"
                    label="Senha"
                    value={password}
                    onChange={(ev) => { HandleState(setPassword, ev) }}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    error={!!props.message}
                />
                <Box sx={LinksContainer}>
                    <Typography variant="body1" sx={{ fontSize: 11 }} >
                        Não possui uma conta? <a className="link" onClick={() => router.push('/register')}>Cadastre-se</a>
                    </Typography>
                    <a className="link" onClick={() => { router.push('/resetPassword') }}>Esqueci minha senha.</a>
                </Box>
                {props.fetching ? (
                    <LoadingButton
                        loading
                        variant="outlined"
                        fullWidth
                        size="medium"
                        sx={{
                            marginTop: '20px'
                        }}
                    >
                        Submit
                    </LoadingButton>
                ) : (
                    <Button id="loginButton" className='mt-5' type="submit">
                        LOGIN
                    </Button>
                )}
            </form>
        </Box>
    )
}

export { AuthForm }