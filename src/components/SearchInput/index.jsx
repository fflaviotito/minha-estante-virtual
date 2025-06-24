import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { SearchInputContainer, Input } from './styles'

const SearchInput = ({ type, placeholder, onChange }) => {

    const [isFocused, setIsFocused] = useState(false)

    const aoDigitar = (event) => {
        onChange(event.target.value)
    }

    return (
        <SearchInputContainer $isFocused={isFocused}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <Input
                type={type}
                placeholder={placeholder}
                onChange={aoDigitar}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </SearchInputContainer>
    )
}

export default SearchInput