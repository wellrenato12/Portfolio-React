import styled from "styled-components";

export const ContactOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme["gray-200"]};
    border-radius: 12px;
    padding: 1rem 2rem;
    
    strong {
        margin-top: .75rem;
    }

    p {
        text-align: center;
        font-size: .875rem;
        margin: 1rem;
    }

    a {
        margin-top: .5rem;
        font-size: 1rem;
    }

`