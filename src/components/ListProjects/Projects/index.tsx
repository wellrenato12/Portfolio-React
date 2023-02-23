import { ArrowRight } from "phosphor-react";
import { Container, ProjectContainer } from "./styles";
import devFinance from '../../../assets/imgProjects/dev-finance.jpg'

export function Project() {
    return (
        <ProjectContainer>
            <h2>Nome projeto</h2>
            <Container>
                <img src={devFinance} alt="Imagem de projeto" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <span>
                    <a href="#">
                        Veja
                        <ArrowRight size={20} />
                    </a>
                </span>
            </Container>
        </ProjectContainer>
    )
}