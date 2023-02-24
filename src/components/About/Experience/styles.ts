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
    font-size: .75rem;
    text-align: center;
    width: 400px;
    max-height: 350px;
    padding: 1.5rem;

    p {
        padding: .5rem;
        font-size: .875rem;

        strong {
            font-size: 1rem;
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

    @media only screen and (max-width: 550px) {
        width: 320px;
    }
`