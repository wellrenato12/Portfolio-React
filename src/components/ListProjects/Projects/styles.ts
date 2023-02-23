import styled from "styled-components";

export const ProjectContainer = styled.div`
    height: 470px;
    width: 350px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme["gray-200"]};

    h2 {
        margin-bottom: 1rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    img {
        border-radius: 12px;
    }

    span {
        a {
            display: flex;
            align-items: center;
            gap: .25rem;
        }
    }
`