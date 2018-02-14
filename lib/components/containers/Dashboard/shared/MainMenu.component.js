import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const MainMenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 5px solid #ccc;
`;

const MenuItemWrap = styled.div`
    padding: 20px;
    width: 200px;
    text-align: center;
    margin: 0 30px;
    font-size: 1.5em;
    font-weight: bold;
    border-bottom: 5px solid transparent;
    cursor: pointer;
    position: relative;
    top: 5px;
    color: #ccc;

    &:hover {
        color: #F2803C;
        border-bottom: 5px solid #F2803C;
    }

    ${(props) => props.active && css`
        color: #F2803C;
        border-bottom: 5px solid #F2803C;
    `}
`;

const MenuItemInnerWrap = styled.div`

`;

const MenuItems = [
    {
        path: 'business',
        component: 'test',
        name: 'Communities',
        icon: '',
        active: false
    },
    {
        path: 'business',
        component: 'test',
        name: 'Business',
        icon: '',
        active: true
    },
    {
        path: 'business',
        component: 'test',
        name: 'Deals',
        icon: '',
        active: false
    }
];

const MenuItemComponent = (menu) => (
    <MenuItemWrap className="MenuItemWrap" active={menu.active}>
        <MenuItemInnerWrap className="MenuItemInnerWrap">
            <div className="icon">{menu.icon}</div>
            <div className="name">{menu.name}</div>
        </MenuItemInnerWrap>
    </MenuItemWrap>
);


export default class MainManu extends Component {
    static propTypes = {
    }

    render() {
        return (
            <MainMenuWrapper className="MainMenuWrapper">
                {MenuItems.map((item, index) => <MenuItemComponent key={index} {...item} />)}
            </MainMenuWrapper>
        );
    }
}
