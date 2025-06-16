import styled from "styled-components"

const FormInputContainer = styled.div`

`

const Label = styled.label`
    display: block;
`

const Input = styled.input`
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ $error }) => ($error ? 'red' : '#CCC')};
`

const ErrorMessage = styled.p`
    font-size: .8rem;
    color: red;
    padding: 2px 0 0 2px;
`

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