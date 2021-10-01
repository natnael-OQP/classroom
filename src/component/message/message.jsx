import React,{forwardRef} from 'react'
import { useSelector } from 'react-redux';
import FlipMove from 'react-flip-move';

import {
    MessageWrapper,
    P,
    Small,
    Profile
} from '.';
import { selectUser } from '../../redux/userslice';

const Message = forwardRef (({ id, content: {
    timestamp,messages,uid, displayName, email, photo
}},ref)=> {

    const user = useSelector(selectUser);

    return (
        <>
            <MessageWrapper userEmail={user.email} email={email} color="blue"  ref={ref} >
                <Profile userEmail={user.email} email={email} src={photo}/>
                <P userEmail={user.email} email={email} >
                    {messages} <Small>{new Date(timestamp?.toDate()).toLocaleString()} </Small>
                </P>
            </MessageWrapper>
        </>
    )
})

export default Message;
