import styled from "styled-components";

export const ListProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto;
    max-width: 1376px;
`

export const AlignText = styled.div`
    text-align: center;

    margin-bottom: 3rem;

    p {
        color: ${props => props.theme["gray-300"]};
    }
`

export const ListProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`