import styled from "styled-components";

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    height: 420px;
    width: 400px;
    margin: 2rem auto;
    padding: 1rem;
    border-radius: 12px;
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme["gray-200"]};

    h2 {
        margin-bottom: 1rem;
    }

    @media only screen and (max-width: 550px) {
        width: 320px;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    img {
        border-radius: 12px;
        height: 200px;
        width: 100%;
    }

    p {
        font-size: 1.25rem;
    }

    span {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: .5rem 1rem;
        
        a {
            display: flex;
            align-items: center;
            gap: .25rem;
            font-weight: bold;
            font-size: 1.25rem;
        }
    }
`