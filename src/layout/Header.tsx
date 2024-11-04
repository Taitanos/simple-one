import React from "react";
import styled from "styled-components";
import logo from "./../assets/images/Logo.webp";
import Ava from "./../assets/images/Persona-image.webp";
import {Icon} from "../components/icon/Icon";
import {Input} from "../components/icon/Input";

export const Header: React.FC = () => {
    return (
        <HeaderStyled>
            <Logo>
                <img src={logo} alt={"logo"}/>
            </Logo>
            <Info>
                <LoginInfo>
                    <Input/>
                    <Profile>
                        <Avatar src={Ava} alt={"avatar"}/>
                        <Name>
                            Максим Галактионов
                        </Name>
                    </Profile>
                </LoginInfo>
                <Setting>
                    <Icon iconId={"setting"} viewBox={"-6 -6 32 32"} height={"32"} width={"32"}/>
                </Setting>
            </Info>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.div`
    grid-area: h;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    height: 48px;
    border-bottom: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`
const Logo = styled.div`
    padding: 12px 0 12px 16px;
`

const Info = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const LoginInfo = styled.div`
    height: 32px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 5px
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    margin: 0 8px 0 16px;
    width: 185px;
`

const Avatar = styled.img`
    height: 32px;
    border-radius: 25px;
`

const Name = styled.span`
    width: 145px;
    margin-left: 8px;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    color: #2e3238;
`

const Setting = styled.div`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    width: 32px;
    height: 32px;
    cursor: pointer;
`