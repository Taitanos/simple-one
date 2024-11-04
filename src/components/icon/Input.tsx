import React from "react";
import styled from "styled-components";
import {Icon} from "./Icon";

export const Input: React.FC = () => {
    return (
        <InputStyle>
            <Search type={"text"} placeholder={"Поиск..."}/>
            <Button>
                <Icon iconId={"search"}/>
            </Button>
        </InputStyle>
    )
}

const InputStyle = styled.div`
    display: inline-block;
    position: relative;
`

const Search = styled.input`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    width: 280px;
    height: 18px;
    padding: 6px 8px;
    
`

const Button = styled.button`
    position: absolute;
    right: 1px;
    top: 60%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
`