
import styled from 'styled-components';

export const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 15px 20px;
    `;
export const P = styled.p`
    position: relative;
    
    font-size:.85rem;
    font-family:  sans-serif;
    background-color: #35B259;
    color: #fff;
    padding: 17px;
    padding-right: 33px;
    border-radius: 15px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 1px;
    letter-spacing:.02rem;
`;
export const Small = styled.small`
    position: absolute;
    bottom:1px;
    right: 4px;
    z-index: 99999;
    color: #e1e1e1;
`;