import React from "react";
import styled from "styled-components";
import {Form} from "../components/form/Form";

export const Main : React.FC = () => {
    return (
        <MainStyled>
            <div>
                <span>Подзадача</span>
                <button>Создать</button>
            </div>
            <div>
                <button>Сохранить</button>
                <button>Сохранить и выйти</button>
            </div>
            <div>
                <Form/>
            </div>
        </MainStyled>
    )
}

const MainStyled = styled.div`
    width: 100%;
    max-width: 1566px;
    padding: 16px 8px;;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;
`

