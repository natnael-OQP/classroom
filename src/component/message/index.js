
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';



export const MessageWrapper = styled.div(({userEmail,email,color}) => ({
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    padding:"0 5px" ,
    margin: "15px 0px",
    marginLeft: userEmail === email && "auto",
    position: "relative",
}));

export const Profile = styled(Avatar)`
    cursor: pointer;
    margin: 10px;
    border-radius: 1rem;
    order:${(props)=>props.userEmail === props.email && "1"}
`;


export const P = styled.p`
    font-size:.85rem;
    font-family:  sans-serif;
    background-color:${(props)=>props.userEmail === props.email ? "#35B259":"#fff"};
    color: ${(props)=>props.userEmail === props.email ? "#f1f3fa":"948a87"};
    padding: 17px;
    padding-right: 33px;
    border-radius: 15px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 1px;
    letter-spacing:.02rem;
    box-shadow:rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
export const Small = styled.small`
    position: absolute;
    bottom:-9px;
    left:50%;
    transform: translate(-50%);
    z-index: 99999;
    color:#1A1C2C;
    width: auto;
    margin-left: auto;
    white-space: nowrap;
`;