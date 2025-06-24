import styled from "styled-components";

export const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    height: 16px;
    background-color: ${({ theme }) => theme.background};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 8px;
    overflow: hidden;
`

export const Progress = styled.div`
    height: 100%;
    width: ${({ $percent }) => $percent}%;
    background-color: #4CAF50;
    transition: width 0.3s ease-in-out;
`

export const ProgressText = styled.p`
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    font-size: 0.75rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text};
    white-space: nowrap;
`