import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import { Overlay, ModalContainer, CloseModal, TitleModal } from './styles'

import Button from "../Button"

const Modal = ({ onClose, title, children }) => {
    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={event => event.stopPropagation()}>
                <CloseModal>
                    <Button onClick={onClose}><FontAwesomeIcon icon={faXmark} /></Button>
                </CloseModal>
                <TitleModal>{title}</TitleModal>
                {children}
            </ModalContainer>
        </Overlay>
    )
}

export default Modal