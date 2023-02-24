import styled from "styled-components";

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1376px;
    margin: 10rem auto;

    p {
        color: ${props => props.theme["gray-300"]};
    }
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    @media only screen and (max-width: 850px) {
        flex-wrap: wrap;
    }
`

export const Skill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    transition: .5s;

    p {
        color: ${props => props.theme["black-900"]};
    }
`