import styled from "styled-components";

export const AboutContainer = styled.div`
    max-width: 1376px;
    margin: auto;
    display: flex;
    flex-direction: column;

    p {
        color: ${props => props.theme["gray-300"]};
    }
`

export const AboutIntroduction = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;

    width: 100%;
    margin: 2rem 0;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
        align-items: center;
        gap: 5rem;
    }
`

export const ContainerExperience = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const ContainerFormation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`

export const ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
`

export const FormationGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-top: 2.35rem;

    @media only screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`

export const DownloadCv = styled.button`
    background-color: ${props => props.theme["brown-900"]};
    color: ${props => props.theme["gray-200"]};
    padding: 1.25rem 1rem;
    border-radius: 12px;
    margin-top: 2.5rem;
    width: 200px;
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    transition: all .5s;
    font-size: 1rem;

    &:hover {
        background-color: ${props => props.theme["gray-500"]};
        transition: all .5s;
    }
`