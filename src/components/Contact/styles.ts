import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    max-width: 1376px;
    margin: 5rem auto;
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;

    @media only screen and (max-width: 850px) {
        grid-template-columns: 1fr;
        gap: 5rem;
    }
`

export const ListContact = styled.div`
    h2 {
        text-align: center;
    }

    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: auto;
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 500px;
        gap: 1rem;
        
        input {
            border-radius: 8px;
            border: 2px solid ${props => props.theme["gray-200"]};
            padding: 1.25rem;
            transition: all .3s ease-in-out;

            &::placeholder {
                opacity: 0;
                transition: all .3s ease-in-out;
            }

            &:focus::placeholder {
                opacity: 1;
                transition: all .3s ease-in-out;
            }

            &:focus + label:nth-child(2), &:not(:placeholder-shown) + label:nth-child(2) {
                top: -2%;
                left: 3%;
                font-size: 12px;
                padding: 0 8px;
                background-color: ${props => props.theme.white};
                color: ${props => props.theme["black-900"]};
                border-radius: 8px;
                transition: all .3s ease-in-out;
            }

            &:focus + label:nth-child(4), &:not(:placeholder-shown) + label:nth-child(4) {
                top: 16%;
                left: 3%;
                font-size: 12px;
                padding: 0 8px;
                background-color: ${props => props.theme.white};
                color: ${props => props.theme["black-900"]};
                border-radius: 8px;
                transition: all .3s ease-in-out;
            }
        }

        label {
            position: absolute;
            left: 5%;
            transition: all .3s ease-in-out;

            &:nth-child(2) {
                top: 4.2%;
            }

            &:nth-child(4) {
                top: 22%;
            }
        }

        textarea {
            border-radius: 8px;
            border: 2px solid ${props => props.theme["gray-200"]};
            padding: 1.25rem;
            height: 200px;
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .15rem;
            margin-top: 1rem;
            padding: 1rem 2rem;
            border-radius: 8px;
            background-color: ${props => props.theme["black-900"]};
            color: ${props => props.theme.white};
            width: 250px;
            transition: all .5s;
            font-size: 1rem;

            &:hover {
                background-color: ${props => props.theme["gray-500"]};
                transition: all .5s;
            }
        }
    }

    @media only screen and (max-width: 550px) {
        form {
            width: 300px;

            button {
                margin: 1rem auto 0;
            }
        }
    }
`