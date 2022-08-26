import { StandardInput } from "../../shared/Input/StandardInput"
import { ISegundaParte } from "../Interfaces/ISegundaParte"

const SegundaParte = (props: ISegundaParte) => {
    return (
        <StandardInput
            color="primary"
            label="Código de quatro dígitos"
            value={props.value}
            onChange={props.onChange}
            helperText="Nós enviamos um código por email para você."
        />
    )
}

export { SegundaParte }