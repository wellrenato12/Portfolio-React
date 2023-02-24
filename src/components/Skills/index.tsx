import { DiHtml5, DiCss3, DiReact, DiGithubBadge } from 'react-icons/di';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { AlignText } from '../ListProjects/styles';
import { Container, Skill, SkillsContainer } from './styles';

export function Skills() {
    return (
        <SkillsContainer id="/skills">
            <AlignText>
                <h1>Principais Tecnologias</h1>
                <p>Front-end</p>
            </AlignText>
            <Container>
                <Skill>
                    <DiHtml5 size={72} color="#ea580c" />
                    <p>HTML</p>
                </Skill>
                <Skill>
                    <DiCss3 size={72} color="#1d4ed8" />
                    <p>CSS</p>
                </Skill>
                <Skill>
                    <SiJavascript size={72} color="#fde047" />
                    <p>JS</p>
                </Skill>
                <Skill>
                    <DiReact size={72} color="#67e8f9" />
                    <p>ReactJS</p>
                </Skill>
                <Skill>
                    <SiTypescript size={72} color="#3b82f6" />
                    <p>Typescript</p>
                </Skill>
                <Skill>
                    <DiGithubBadge size={72} color="#18181b" />
                    <p>GitHub</p>
                </Skill>
            </Container>
        </SkillsContainer>
    )
}