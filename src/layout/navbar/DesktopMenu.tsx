import React from "react";
import styled from "styled-components";
import {Button} from "../../components/button/Button";
import {Input} from "../../components/input/Input";
import {Icon} from "../../components/icon/Icon";

interface navMenuProps {
    id: number
    title: string
}

export const DesktopMenu: React.FC = () => {

    const navMenu: navMenuProps[] = [
        {id: 1, title: "Моя работа"},
        {id: 2, title: "Структура портала"},
        {id: 3, title: "Личное расписание"},
        {id: 4, title: "Отсутствие на рабочем месте"},
        {id: 5, title: "Портфель услуг"},
        {id: 6, title: "Дашборды"},
        {id: 7, title: "Доски задач"},
        {id: 8, title: "Обращения"},
        {id: 9, title: "События"},
        {id: 10, title: "Инциденты"},
        {id: 11, title: "Проблемы"},
        {id: 12, title: "Настройка каталогов"},
        {id: 13, title: "Запросы на обслуживание"},
        {id: 14, title: "Запросы на изменения"},
        {id: 15, title: "Управление конфигурациями"},
        {id: 16, title: "Управление уровнем услуг"},
        {id: 17, title: "Настройка соответствий"}
    ]

    return (
        <NavbarStyled>
            <NavbarMenuStyled>
                <Button margin={"16px"} iconId={"sidebar"} width={"24"} height={"24"} viewBox={"0 0 24 24"}
                        hasBorder={false}/>
                <Button margin={"16px"} iconId={"star"} width={"24"} height={"24"} viewBox={"0 0 24 24"}
                        hasBorder={false}/>
            </NavbarMenuStyled>
            <MenuHeader>
                <Search>
                    <Input width={"190px"} iconId={"filter"}/>
                    <Button margin={"0"} iconId={"pin"} width={"20"} height={"20"} viewBox={"0 0 20 20"}/>
                </Search>
                <div>
                    {navMenu.map(item => (
                        <MenuItem key={item.id}>
                            <Icon iconId={"arrow"} height={"20px"} width={"20px"} viewBox={"5 -7 20 20"}/>
                            {item.title}
                        </MenuItem>
                    ))}
                </div>
            </MenuHeader>
        </NavbarStyled>
    )
}

const NavbarStyled = styled.div`
    grid-area: n;
    display: flex;
    flex-direction: row;
    position: sticky;
    height: 100vh;
    border-right: 1px solid #d5d8dd;
    background: #fff;
`

const NavbarMenuStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 56px;
    border-right: 1px solid #d5d8dd;
`

const MenuHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Search = styled.div`
    display: flex;
    padding: 16px;
    gap: 8px;
    height: 33px;
    border-bottom: 1px solid #d5d8dd;
`

const MenuItem = styled.div`
    font-size: 14px;
    padding: 8px;
    cursor: pointer;
`