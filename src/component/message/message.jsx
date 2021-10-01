import React from 'react'
import { useSelector } from 'react-redux';
import {
    MessageWrapper,
    P,
    Small,
    Profile
} from '.';
import { selectUser } from '../../redux/userslice';

function Message({ id, content: {
    timestamp,messages,uid, displayName, email, photo
} }) {

    const user = useSelector(selectUser);

    return (
        <>
            <MessageWrapper userEmail={user.email} email={email} color="blue" >
                <Profile userEmail={user.email} email={email} src={photo}/>
                <P userEmail={user.email} email={email} >
                    {messages} <Small>{new Date(timestamp?.toDate()).toLocaleString()} </Small>
                </P>
            </MessageWrapper>
        </>
    )
}

export default Message;
