import React from 'react'
import { InputAdornment, TextField } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { IInput } from './IInput';

const StandardInput = (props: IInput) => {
    return (
        props.type !== 'password' && props.setShowPassword === undefined ? (
            <TextField
                color={props.color}
                label={props.label}
                variant="standard"
                size="small"
                fullWidth
                sx={{ marginTop: 2 }}
                value={props.value}
                onChange={props.onChange}
                helperText={props.helperText}
                error={props.error}
            />
        ) : (
            <TextField
                color={props.color}
                label={props.label}
                variant="standard"
                size="small"
                fullWidth
                type={props.showPassword ? 'text' : 'password'}
                sx={{ marginTop: 2 }}
                value={props.value}
                onChange={props.onChange}
                helperText={props.helperText}
                error={props.error}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: 1 }}>
                            {props.showPassword ? (
                                <VisibilityOffOutlinedIcon
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => { props.setShowPassword(!props.showPassword) }}
                                    fontSize="small"
                                />
                            ) : (
                                <VisibilityOutlinedIcon
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => { props.setShowPassword(!props.showPassword) }}
                                    fontSize="small"
                                />
                            )}
                        </InputAdornment>
                    ),
                }}
            />
        )
    )
}

export { StandardInput }