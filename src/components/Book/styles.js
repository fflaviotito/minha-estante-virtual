import styled from "styled-components";

export const BookContainer = styled.div`
    display: flex;
    height: 160px;
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 12px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.card};
    box-shadow: 0 4px 8px rgba(0, 0, 0, .04);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, .08);
    }

    @media (max-width: 320px) {
        height: 150px;
    }

    @media (min-width: 420px) and (max-width: 600px) {
        height: 180px;
    }
`

export const LeftContainer = styled.div`
    position: relative;
    width: 100px;
    overflow: hidden;

    @media (max-width: 320px) {
        width: 90px;
    }

    @media (min-width: 420px) and (max-width: 600px) {
        width: 120px;
    }
`

export const BookImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Checkbox = styled.input`
    position: absolute;
    top: 8px;
    left: 8px;
    width: 16px;
    height: 16px;
    cursor: pointer;
`;

export const OptionsButtonOverlay = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
`;

export const BookDetails = styled.div`
    flex: 1;
    padding: 8px 8px 8px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
`

export const BookInfoTitles = styled.div`
    h3 {
        font-size: 1rem;
        color: ${({ theme }) => theme.text};
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    p {
        font-size: 0.875rem;
        color: ${({ theme }) => theme.text};
        margin-top: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export const BookInfoCategory = styled.div`
    p {
        margin: 0;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.textLight};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`