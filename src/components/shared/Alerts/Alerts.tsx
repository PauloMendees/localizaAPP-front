import { Snackbar } from '@mui/material';
import * as React from 'react';
import MuiAlert from '@mui/material/Alert';
import { IAlerts } from './IAlerts';

export default function Alerts(props: IAlerts){
    const Alert = React.forwardRef(function Alert(props: any, ref: any) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    return(
            !!props.message ? (
                <div>
                    <Snackbar
                        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                        open={!!props.message}
                        //@ts-ignore
                        autohideduration={3000}
                        onClose={props.clearState}
                    >
                        <Alert
                            onClose={props.clearState}
                            severity={props.severity}
                            sx={{ width: '100%' }}
                            autohideduration={3000}
                        >
                            {props.message}
                        </Alert>
                    </Snackbar>
                </div>
            ) : (
                <></>
            )
    )
}
