import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"

const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
const ModalContainer = styled.div`
    position: relative;
    background: white;
    padding: 24px;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    max-height: 90vh;
    overflow-y: auto; 
    box-shadow: 0 5px 15px rgba(155, 106, 106, 0.3);
`

const CloseModal = styled.div`
    position: absolute;
    top: 8px; right: 8px;
`

const TitleModal = styled.h3`
    text-align: center;
    margin-bottom: 8px;
`

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