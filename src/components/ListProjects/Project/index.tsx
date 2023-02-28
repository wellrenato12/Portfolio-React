import { ArrowRight } from "phosphor-react";
import { Container, ProjectContainer } from "./styles";
import devFinance from '../../../assets/imgProjects/dev-finance.jpg'

interface ProjectProps {
    name: string;
    projectImage: string;
    altText: string;
    description: string;
    link: string;
}

export function Project({ name, projectImage, altText, description, link }: ProjectProps) {
    return (
        <ProjectContainer>
            <h2>{name}</h2>
            <Container>
                <img src={projectImage} alt={altText} />
                <p>{description}</p>
                <span>
                    <a href={link} target="__blank">
                        Veja
                        <ArrowRight size={20} />
                    </a>
                </span>
            </Container>
        </ProjectContainer>
    )
}