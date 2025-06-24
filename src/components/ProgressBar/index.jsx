import { ProgressContainer, Progress, ProgressText } from "./styles"

const ProgressBar = ({ percent }) => {
    return (
        <ProgressContainer>
            <Progress $percent={percent} />
            <ProgressText>{percent}%</ProgressText>
        </ProgressContainer>
    )
}

export default ProgressBar
