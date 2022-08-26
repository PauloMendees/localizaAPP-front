import { StandardInput } from "../../shared/Input/StandardInput"
import { IPrimeiraParte } from "../Interfaces/IPrimeiraParte"


const PrimeiraParte = (props: IPrimeiraParte) => {
    return (
        <StandardInput
            color="primary"
            label="Email"
            value={props.value}
            onChange={props.onChange}
            helperText={props.helperText}
            error={props.error}
        />
    )
}

export { PrimeiraParte }