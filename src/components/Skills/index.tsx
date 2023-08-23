import { DiHtml5, DiCss3, DiReact, DiGithubBadge } from 'react-icons/di';
import { SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiStyledcomponents } from 'react-icons/si';
import { RxStitchesLogo } from 'react-icons/rx'
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
                    <SiNextdotjs size={72} color="#18181b" />
                    <p>Next.js</p>
                </Skill>
                <Skill>
                    <DiGithubBadge size={72} color="#18181b" />
                    <p>GitHub</p>
                </Skill>
                <Skill>
                    <SiTailwindcss size={72} color="#25c8f5" />
                    <p>Tailwind Css</p>
                </Skill>
                <Skill>
                    <SiStyledcomponents size={72} color="#de50b8" />
                    <p>Styled Components</p>
                </Skill>
                <Skill>
                    <RxStitchesLogo size={72} color="#18181b" />
                    <p>Stitches</p>
                </Skill>
            </Container>
        </SkillsContainer>
    )
}