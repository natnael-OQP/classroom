import React from 'react'
// styled components
import styled from 'styled-components';
// profile
import {Profile} from '../sidebar/Sidebar'

const EachChat = styled.div`
    padding:10px;
    height:53px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
`;

const ChatInfo = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const H4 = styled.h4`
    font-size: .9rem;
    margin-bottom: .15rem;
    letter-spacing:.03rem;
`;

const P = styled.p`
    font-size: .8rem;
    letter-spacing:.01rem;
    font-family: 'Nunito', sans-serif;
    color:#909090;
`;

const Time = styled.small`
    position: absolute;
    top:0;
    right: 5px;
`;


const SideBarChar = () => {
    return (
        <EachChat>
            <Profile />
            <ChatInfo>
                <H4>Class</H4>
                <P>last Message sent</P>
                <Time>7:20 Pm</Time>
            </ChatInfo>
        </EachChat>
    )
}

export default SideBarChar;
