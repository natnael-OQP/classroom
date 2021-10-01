import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
// styled components
import styled from 'styled-components';
import db from '../../firebasesetup/firebase';
import { setChat } from '../../redux/chatslice';
// profile
import {Profile} from '../sidebar/Sidebar'
import * as timeAgo from 'timeago.js';

const EachChat = styled.div`
    padding:10px;
    height:52px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    cursor:pointer;
    transition: all .3s ease-in-out;
    &:hover{
        background-color: #fff;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        transform: scale(1.05);
        z-index: 1000;
        border-radius: 5px;
    }
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
    font-family: Helvetica, sans-serif;
`;

const P = styled.p`
    font-size: .8rem;
    letter-spacing:.01rem;
    font-weight: 400;
    font-family:  Helvetica, sans-serif;
    color:#909090;
`;

const Time = styled.small`
    position: absolute;
    top:0;
    right: 5px;
    font-family: Helvetica, sans-serif;
`;


const SideBarChar = ({ id, chatName }) => {
    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);
    
    useEffect(() => {
        db.collection('chats').doc(id).collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot => (
            setChatInfo(
                snapshot.docs.map((doc) => doc.data())
            )
        ))
    },[id])

    return (
        <EachChat
            onClick={() => {
                dispatch(setChat({
                    chatId: id,
                    chatName: chatName,
                }) )
            }}
        >
            <Profile src={chatInfo[0]?.photo} />
            <ChatInfo>
                <H4>{chatName}</H4>
                <P>{ chatInfo[0]?.messages }</P>
                <Time>{ timeAgo.format( new Date(chatInfo[0]?.timestamp?.toDate()) ) }</Time>
            </ChatInfo>
        </EachChat>
    )
}

export default SideBarChar;
