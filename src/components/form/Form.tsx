import React from "react";
import styled from "styled-components";
import {Button} from "../button/Button";
import {User} from "../user/User";
import {users} from "../../data/Users";
import {Icon} from "../icon/Icon";

type FormType = {
    hasColumn: boolean
}

export const Form: React.FC<FormType> = ({hasColumn}) => {

    const usersList = users.map(user => <User key={user.id} name={user.name} showIcon={true}/>)

    return (
        <FormStyled>
            <FormTask>STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются
                редактируемыми для агента если он Caller</FormTask>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Тема</ElementTaskName>
                    <InputForm type={"text"}
                               value={"На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Статус</ElementTaskName>
                    <InputForm type={"text"} value={"Новая"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Описание</ElementTaskName>
                    <InputForm type={"text"} value={""}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Продукт</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"Platform"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Рабочие заметки</ElementTaskName>
                    <InputForm type={"text"}
                               value={"Проверить ACL id=172830402014193655"}/>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Приоритет</ElementTaskName>
                    <InputForm type={"text"} value={"Средний"}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Ответственный</ElementTaskName>
                    <ElementTaskForm>
                        <UsersContainer>
                            <UserWrapper>
                                <User name={"Константин Константинопольский"} showIcon={false}/>
                            </UserWrapper>
                            <Icon iconId={"microClose"} viewBox={"-5 -4 24 24"}/>
                        </UsersContainer>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Группа</ElementTaskName>
                    <ElementTaskForm>
                        <UsersContainer>
                            <UserWrapper>
                                <User name={"Support Group"} showIcon={false}/>
                            </UserWrapper>
                            <Icon iconId={"microClose"} viewBox={"-5 -4 24 24"}/>
                        </UsersContainer>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Комментарии</ElementTaskName>
                    <InputForm type={"text"} value={""}/>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Согласующие</ElementTaskName>
                    <ElementTaskForm>
                        <UsersContainer>
                            <UserWrapper>
                                {usersList}
                            </UserWrapper>
                            <IconWrapper>
                                <Icon iconId={"microClose"} viewBox={"-5 -4 20 20"}/>
                            </IconWrapper>
                        </UsersContainer>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Когда открыто</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={""}/>
                        <Button margin={"0"} iconId={"calendar"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Когда создано</ElementTaskName>
                    <ElementTaskForm>
                        <InputForm type={"text"} value={"22.10.2024"}/>
                        <Button margin={"0"} iconId={"calendar"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
            <FormElement>
                <ElementTask>
                    <ElementTaskName>Кем открыто</ElementTaskName>
                    <ElementTaskForm>
                        <UsersContainer>
                            <UserWrapper>
                                <User name={"Андрей Пивоваров"} showIcon={false}/>
                            </UserWrapper>
                            <Icon iconId={"microClose"} viewBox={"-5 -1 20 20"}/>
                        </UsersContainer>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
                <ElementTask>
                    <ElementTaskName>Кем создано</ElementTaskName>
                    <ElementTaskForm>
                        <UsersContainer>
                            <UserWrapper>
                                <User name={"Андрей Пивоваров"} showIcon={false}/>
                            </UserWrapper>
                            <Icon iconId={"microClose"} viewBox={"-5 -1 20 20"}/>
                        </UsersContainer>
                        <Button margin={"0"} iconId={"plus"} viewBox={"-2 -4 24 24"}/>
                        <Button margin={"0"} iconId={"searchTask"} viewBox={"-2 -4 24 24"}/>
                    </ElementTaskForm>
                </ElementTask>
            </FormElement>
        </FormStyled>
    )
}


const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
`

const FormTask = styled.h2`
    /*overflow: hidden;
    text-overflow: ellipsis;*/
    width: 100%;
    display: block;
    font-size: 24px;
`

const FormElement = styled.div<{ column?: boolean }>`
    width: 100%;
    gap: 16px;
    display: flex;
    flex-direction: ${({ column }) => (column ? "column" : "row")};
    
    @media (max-width: 769px) {
        flex-direction: column;
    }
`

const ElementTask = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ElementTaskForm = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 4px;
`

const ElementTaskName = styled.h3`
    font-size: 14px;
`

const InputForm = styled.input`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    padding: 6px 8px;
    height: 18px;
    font-size: 14px;
    background: #fcfcfd;
    flex-grow: 1;
`

const UsersContainer = styled.div`
    border: 1px solid #d5d8dd;
    border-radius: 4px;
    padding: 3px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
 
`

const UserWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1100px;
    gap: 4px;
`

const IconWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
`