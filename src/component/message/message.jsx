import React from 'react'
import {
    MessageWrapper,
    P,
    Small
} from '.';
import { Profile } from '../sidebar/Sidebar';

function Message({ id, content: {
    timestamp,messages,uid, displayName, email, photo
    }}) {
    return (
        <>
            <MessageWrapper >
                <Profile src={photo}/>
                <P>{messages}<Small>{new Date(timestamp?.toDate()).toLocaleString() }</Small></P>
            </MessageWrapper>
        </>
    )
}

export default Message;
