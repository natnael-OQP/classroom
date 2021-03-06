import React,{forwardRef} from 'react'
import { useSelector } from 'react-redux';
import * as timeago from 'timeago.js';

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
                    {messages} 
                </P>
                <Small>{timeago.format(new Date(timestamp?.toDate())) }</Small>
            </MessageWrapper>
        </>
    )
})

export default Message;
