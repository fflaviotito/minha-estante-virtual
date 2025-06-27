import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 8px;
`

export const StatusContainer = styled.div`
    margin-bottom: 8px;
`

export const ProgressContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    gap: 8px;
    margin-bottom: 8px;
`

export const TimeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
    gap: 8px;
    margin-bottom: 8px;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`