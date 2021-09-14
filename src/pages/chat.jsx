import React from 'react'
// styled-component
import styled from 'styled-components';
// import components 
import Sidebar from '../component/sidebar/Sidebar';
import ChatSection from '../component/chatSection/ChatSection';



const ChatPage = styled.div`

`;

const Chat = () => {
    return (
        <ChatPage>
            
            {/*sidebar*/}
                <Sidebar  />
            {/*chat section*/}
                <ChatSection/>
        </ChatPage>
    )
}

export default Chat;
