import { Container, ProjectContainer } from "./styles";

interface ProjectProps {
    name: string;
    projectImage: string;
    altText: string;
    description: string;
    link: string;
    github: string;
}

export function Project({ name, projectImage, altText, description, link, github }: ProjectProps) {
    return (
        <ProjectContainer>
            <h2>{name}</h2>
            <Container>
                <img src={projectImage} alt={altText} />
                <p>{description}</p>
                <span>
                    <a href={link} target="__blank">
                        Site
                    </a>
                    <a href={github} target="__blank">
                        Github
                    </a>
                </span>
            </Container>
        </ProjectContainer>
    )
}