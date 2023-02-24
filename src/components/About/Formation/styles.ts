import styled from "styled-components";

export const CardFormationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme["gray-200"]};
    border-radius: 12px;
    font-size: 0.75rem;
    text-align: center;
    width: 200px;
    height: 200px;

    padding: 1rem;

    p {
        padding: .5rem;
        font-size: .875rem;

        strong {
            font-size: 1rem;
        }
    }

    a {
        color: ${props => props.theme["blue-200"]};
        transition: all .5s;

        &:hover {
            color: ${props => props.theme["blue-800"]};
            transition: all .5s;
        }
    }
`