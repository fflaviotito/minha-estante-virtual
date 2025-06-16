import styled from "styled-components"

const FormSelectContainer = styled.div`
    
`

const Label = styled.label`
    display: block;
`

const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid ${({ $error }) => ($error ? 'red' : '#CCC')};
`

const ErrorMessage = styled.p`
    font-size: .8rem;
    color: red;
    padding: 2px 0 0 2px;
`

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