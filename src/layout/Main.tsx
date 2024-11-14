import React from "react";
import styled from "styled-components";
import {Form} from "../components/form/Form";

export const Main: React.FC = () => {
    return (
        <MainStyled>
            <HeaderTask>
                <span>Подзадача</span>
                <ButtonForm>Создать</ButtonForm>
            </HeaderTask>
            <CreatedTask>
                <ButtonForm>Сохранить</ButtonForm>
                <ButtonForm>Сохранить и выйти</ButtonForm>
            </CreatedTask>
            <FormContain>
                <Form/>
            </FormContain>

        </MainStyled>
    );
};


const MainStyled = styled.div`
    display: grid;
    grid-template-areas: "t x" "m m";
    grid-template-rows: 45px 1fr;
    //width: 100%;
    max-width: 1546px;
    padding: 16px 8px;
    border-right: 1px solid #d5d8dd;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    background: #fff;

    /*   !* Flexbox контейнер *!
       display: flex;
       flex-wrap: wrap;
       gap: 16px;  !* Промежутки между блоками *!
       
       !* Правила для box1 и box2 *!
       .box1 {
           display: flex;
           align-items: center;
           justify-content: flex-start;
           gap: 8px;
       }
   
       .box2 {
           display: flex;
           align-items: center;
           justify-content: flex-end;
           gap: 8px;
       }
   
       !* На больших экранах они будут располагаться в одну строку *!
       .box1, .box2 {
           flex: 1;
       }
   
       !* Стили для формы *!
       > div {
           width: 100%;
           margin-top: 16px;
       }
   
       !* Media query для уменьшения экрана до 980px *!
       @media (max-width: 980px) {
           flex-direction: column; !* Вертикальное расположение элементов *!
           .box1 {
               order: 1; !* box1 будет первым *!
           }
           > div {
               order: 2; !* Form будет вторым *!
           }
           .box2 {
               order: 3; !* box2 будет последним *!
           }
       }*/
`

const HeaderTask = styled.div`
    grid-area: t;
    display: flex;
    height: 64px;
   /* width: 100%;
    max-width: 752px;*/
    justify-content: flex-start;
    align-items: center;
`

const CreatedTask = styled.div`
    grid-area: x;
    display: flex;
    height: 64px;
    /*width: 100%;
    max-width: 752px;*/
    justify-content: flex-end;
    align-items: center;
`
const FormContain = styled.div`
    grid-area: m;
    width: 100%;
    max-width: 1546px;
`

const ButtonForm = styled.button`
    margin: 5px;
    height: 32px;
`