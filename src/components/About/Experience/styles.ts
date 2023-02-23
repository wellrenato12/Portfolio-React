import styled from "styled-components";

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        text-align: center;
    }
`

export const CardExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.white};
    border-radius: 12px;
    border: 2px solid ${props => props.theme["gray-200"]};
    font-size: 0.75rem;
    text-align: center;
    width: 300px;
    max-height: 330px;

    display: flex;
    justify-content: flex-start;
    padding: 1rem;

    p {
        padding: .5rem;

        strong {
            font-size: 14px;
        }
    }

    span {
        padding: .5rem;
        color: ${props => props.theme["gray-300"]};
        text-align: start;
    }

    button {
        background-color: ${props => props.theme.white};
    }
`