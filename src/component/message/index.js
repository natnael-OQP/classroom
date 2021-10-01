
import { Avatar } from '@material-ui/core';
import styled from 'styled-components';



export const MessageWrapper = styled.div(({userEmail,email,color}) => ({
    display: "flex",
    alignItems: "center",
    width: "fit-content",
    padding:"0 15px" ,
    margin: "15px 20px",
    marginLeft:userEmail === email && "auto"
}));

export const Profile = styled(Avatar)`
    cursor: pointer;
    margin: 10px;
    border-radius: 1rem;
    order:${(props)=>props.userEmail === props.email && "1"}
`;


export const P = styled.p`
    position: relative;
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
    bottom:-15px;
    right: 4px;
    z-index: 99999;
    color:#1A1C2C;
`;