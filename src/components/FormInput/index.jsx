import { FormInputContainer, Label, Input, ErrorMessage } from "./styles"

const FormInput = ({name, label, value, typeInput, placeholder, required, onChange, error}) => {
    return (
        <FormInputContainer>
            <Label htmlFor={name}>
                {label}
            </Label>
            <Input 
                id={name}
                value={value}
                type={typeInput}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                $error={error}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormInputContainer>
    )
}

export default FormInput 