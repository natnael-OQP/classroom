import React, { useState } from 'react'
// styled component
import styled from 'styled-components'
import {Profile} from '../sidebar/Sidebar'
import { Button } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';

const ChatSectionContainer = styled.div`
    flex:.75;
    background-color: #F8FAFB;
    display: flex;
    flex-direction: column;

`;

const ChatHeader = styled.div`
    height: 50px;
    background-color: #F8FAFB;
    border-bottom: 1px solid #e5e5e5;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    display: flex;
    align-items: center;
    padding-left: 1rem;
`;

const P   = styled.p`
    color: #9e9ea7;
    font-weight: 400;
    font-size:14px;
    letter-spacing:.02rem;
    text-transform: capitalize;
`;

const ChatBody = styled.div`
    flex: 1;
`;

const ChatInput = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    height: 40px;
    width:90%;
    background-color: #fff;
    margin: 0 auto;
    margin-bottom: 1rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 7px;
    border: 1px solid rgba(0, 0, 0, 0.2);
`;

const Form = styled.form`
    width: 100%;
    display: flex;
`;

const Input = styled.input`
    flex: 1;
    
`;

const Mic = styled(MicNone)`
    
`;

const ChatSection = () => {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();

    }
    return (
        <ChatSectionContainer>
            <ChatHeader>
                <Profile/>
                <P>jonas blue</P>
            </ChatHeader>
            <ChatBody>
            </ChatBody>
            <ChatInput>
                <Form>
                    <Input
                        type="text"
                        placeholder="write your message..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                    />
                    <Button type="submit" onClick={sendMessage} >
                        <Mic/>
                    </Button>
                </Form>
            </ChatInput>
        </ChatSectionContainer>
    )
}

export default ChatSection
