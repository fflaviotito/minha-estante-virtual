import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`
export const ModalContainer = styled.div`
    position: relative;
    background: ${({ theme }) => theme.background};
    padding: 24px;
    border-radius: 16px;
    width: 90%;
    max-width: 400px;
    max-height: 90vh;
    overflow-y: auto; 
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
    border: 1px solid ${({ theme }) => theme.border};
`

export const CloseModal = styled.div`
    position: absolute;
    top: 12px; right: 12px;
`

export const TitleModal = styled.h3`
    text-align: center;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.primary};
    margin-bottom: 16px;
`