import styled from "styled-components";

export const WishlistItemContainer = styled.div`
    height: 100%;
    min-height: 100px;
    width: 100%;
    padding: 12px 16px;
    background-color: ${({ theme }) => theme.card};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, .04);

    &:hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, .08);
    }
`;

export const WishlistDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`;

export const WishlistTitle = styled.h3`
    font-size: 1rem;
    color: ${({ theme }) => theme.text};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const WishlistPrice = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.textLigth};
    margin-top: 4px;
    white-space: nowrap;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;