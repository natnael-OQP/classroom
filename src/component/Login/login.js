import React from 'react'
import styled from 'styled-components'
import {ReactComponent as GoogleLogo} from '../../asset/google.svg'
import image  from '../../asset/chat.svg'
import { signInWithGoogle } from '../../firebasesetup/firebase';

const LoginContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Logo = styled.img`
    width:250px;
    height:250px;
`;
const AppInfo = styled.h1`
    letter-spacing: .02rem;
    font-size: 1.4rem;
    margin-bottom: .4rem;
    @media (max-width:600px){
        width:96vw;
        text-align: center;
        font-size: 1.15rem;
    }
`;

const AppInfo2 = styled.p`
    letter-spacing: .02rem;
    font-size: .9rem;
    margin-bottom: 1.5rem;
    @media (max-width:600px){
        width:96vw;
        text-align:center ;
        margin-bottom: 1rem;
        font-size: .8rem;
    }
`;

const Button = styled.button`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width:390px;
    border: 2px solid #6C85F4;
    background-color: #fff;
    border-radius: 3px;
    &:hover{
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
    @media (max-width:600px){
        height: 37px;
        width:300px;
    }
`;
const P = styled.button`
    cursor: pointer;
    margin-left: 1rem;
    color:#6C85F4;
    background-color: #fff;
    font-size:1.1rem;
    font-weight:700;
`;

const Login = () => {
    return (
        <>
            <LoginContainer>
                <LoginWrapper>
                    <Logo src={image} alt="logo" />
                    <AppInfo>Create an invite-only place where you belong</AppInfo>
                    <AppInfo2>We suggest using the email address that you use at work.</AppInfo2>
                    
                    <Button
                        onClick={signInWithGoogle}
                    >
                        <GoogleLogo />
                        <P>Continue with google</P>
                    </Button>
                </LoginWrapper>
            </LoginContainer>
        </>
    )
}

export default Login
