import { Project } from "./Projects";
import { ListProjectsContainer, ListProjectsGrid, AlignText } from "./styles";

export function ListProjects() {
    return (
        <ListProjectsContainer id="/projects">
            <AlignText>
                <h1>Meus Projetos</h1>
                <p>Github</p>
            </AlignText>
            <ListProjectsGrid>
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
                <Project />
            </ListProjectsGrid>
        </ListProjectsContainer>
    )
}