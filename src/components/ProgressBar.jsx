import styled from "styled-components"

const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    height: 16px;
    background-color: #eee;
    border: 1px solid #eee;
    border-radius: 8px;
    overflow: hidden;
`

const Progress = styled.div`
    height: 100%;
    width: ${props => props.$percent}%;
    background-color: #4CAF50;
    transition: width 0.3s ease-in-out;
`

const ProgressText = styled.p`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 8px;
    font-size: 12px;
    font-weight: bold;
`

const ProgressBar = ({ percent }) => {
    return (
        <>
            <ProgressContainer>
                <Progress $percent={percent} />
                <ProgressText>{percent}%</ProgressText>
            </ProgressContainer>
            
        </>
    )
}

export default ProgressBar
