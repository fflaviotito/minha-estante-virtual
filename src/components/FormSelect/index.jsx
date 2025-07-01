import { FormSelectContainer, Label, Select, ErrorMessage } from "./styles"

const FormSelect = ({name, label, value, options, onChange, required, error}) => {
    return (
        <FormSelectContainer>
            <Label htmlFor={name}>{label}</Label>
            <Select
                id={name}
                value={value}
                onChange={onChange}
                required={required}
                $error={error}
            >
                <option value='' hidden>Escolha uma opção...</option>
                {options.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
            </Select>
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormSelectContainer>
    )
}

export default FormSelect