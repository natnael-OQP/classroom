import React from 'react'
// styled component
import styled,{css} from 'styled-components/macro'
// material ui
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Button from '@material-ui/core/Button';
// component
import SideBarChar from '../SidebarChat/Sidebarchar';
// redux
import {useSelector} from 'react-redux'
import { selectUser } from '../../redux/userslice';
import { auth } from '../../firebasesetup/firebase';

const fl = css`
    display: flex;
    align-items: center;
`;

const SidebarContainer = styled.div`
    flex: .25;
    background-color: #Fff;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: .15rem solid lightgrey;
    
    /* overflow-y: scroll; */
`;

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    padding:0 10px;
    height:50px;
    border-bottom: 1px solid #e5e5e5;
`;

export const Profile = styled(Avatar)`
    cursor: pointer;
    margin: 10px;
    border-radius: 1rem;
`;

const SearchContainer = styled.div`
    ${fl}
    flex:1;
    background-color: #e1e1e1;
    border-radius: 5px;
    height:27px;
    padding: 3px;
`;

const Input = styled.input`
    ${fl};
    width:100%;
    background-color: transparent;
    height:100%;
    margin-left: .2rem;
`;

const Btn = styled(Button)`
    
`;
// Individual group chat
const GroupChatContainer = styled.div`
    width: 100%;
`;


const Sidebar = () => {
    const user = useSelector(selectUser);
    return (
        <SidebarContainer>
            <HeaderContainer>
                <Profile   src={user.photo} />
                <SearchContainer>
                    <SearchIcon/>
                    <Input type="search" placeholder="Search" />
                </SearchContainer>
                <Btn >
                    <RateReviewIcon/>
                </Btn>
            </HeaderContainer>
            <GroupChatContainer>
                <SideBarChar/>     
                <SideBarChar/>     
                <SideBarChar/>     
                <SideBarChar/>    
            </GroupChatContainer>
        </SidebarContainer>
    )
}

export default Sidebar
