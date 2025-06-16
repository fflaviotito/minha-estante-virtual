import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchInputContainer = styled.div`
    position: relative;
    width: 500px;

    > svg {
        position: absolute;
        top: 25%;
        left: 8px;
    }
`

const Input = styled.input`
    padding: 8px 8px 8px 32px;
    font-size: 16px;
    width: 100%;
    border: 1px solid #C8CED4;
`

const SearchInput = ({type, placeholder, onChange}) => {

    const aoDigitar = (event) => {
        onChange(event.target.value)
    }

    return (
        <SearchInputContainer>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Input
                type={type}
                placeholder={placeholder}
                onChange={aoDigitar}>
            </Input>
        </SearchInputContainer>
    )
}

export default SearchInput