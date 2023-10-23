import { FileArrowDown } from "phosphor-react";
import { AlignText } from "../ListProjects/styles";
import { Experience } from "./Experience";
import { CardFormation } from "./Formation";
import { AboutContainer, AboutIntroduction, ContainerExperience, ContainerFormation, DownloadCv, ExperienceGrid, FormationGrid } from "./styles";

const experiences = [
    {
        timeWorked: "Maio 2021 - Atual",
        office: "Desenvolvedor Front-End",
        company: "Estudante",
        description: "HTML, CSS e JS do básico ao avançado com ênfase em ReactJS com TypeScript e suas tecnologias.",
    },
    {
        timeWorked: "Agosto de 2016 - Janeiro de 2021",
        office: "Auxiliar Administrativo",
        company: "DB Schenker",
        description: "Pré-faturamentos: Análise dos processos, organização dos documentos e liberação para faturamento. Contas a pagar: Recebimento dos documentos, conferência, emissão dos vouchers e programar os pagamentos. Controlar o sistema de lançamento de despesas e análise de processos, responsabilidade com o serviço de banco, manter a organização dos documentos recebidos.",
    },
    {
        timeWorked: "Abril de 2016 - Agosto de 2016",
        office: "Jovem Aprendiz",
        company: "DB Schenker",
        description: "Digitalizar documentos, organizar arquivos, entregar documentos e correspondências, atender/direcionar ligações. Auxiliar a equipe nas atividades administrativas. Dar suporte em relação às demais rotinas do setor.",
    },
]

const formations = [
    {
       course: "Ignite - ReactJS",
       institution: "Rocketseat",
       link: 'https://www.rocketseat.com.br/',
    },
    {
        course: "Desenvolvimento Web",
        institution: "ProgramadorBR",
        link: 'https://drive.google.com/drive/folders/1BpJx7j4JRPyZFmKT6Hukma8MKTVjJLHw?usp=sharing',
    },
    {
        course: "Análise e desenvolvimento de sistemas",
        institution: "UniMetrocamp Wyden",
        link: 'https://drive.google.com/file/d/1vJWn5xquWUlbUo-tsJW9HcFOay_0B_ch/view?usp=sharing',
    },
    {
        course: "Técnico em informática",
        institution: "Ceketec Objetivo",
        link: 'https://drive.google.com/file/d/1HAUg5vwdrgLtdzbi12k3syPf0jXsYBUT/view?usp=sharing',
    },
]

export function About() {
    return (
        <AboutContainer id="/about">
            <AlignText>
                <h1>Sobre mim</h1>
                <p>Introdução</p>
            </AlignText>            
            <AboutIntroduction>
                <ContainerExperience>
                    <h2>Experiências</h2>
                    <ExperienceGrid>
                        {experiences.map((experience) => {
                            return <Experience
                                key={experience.office} 
                                timeWorked={experience.timeWorked}
                                office={experience.office}
                                company={experience.company}
                                description={experience.description}
                            />
                        })}
                    </ExperienceGrid>
                </ContainerExperience>
                <ContainerFormation>
                    <h2>Formação</h2>
                    <FormationGrid>
                        {formations.map((formation) => {
                            return <CardFormation 
                                key={formation.course}
                                course={formation.course}
                                institution={formation.institution} 
                                link={formation.link}
                            />
                        })}
                        <a href="https://drive.google.com/file/d/1qCaYKeYBKVJD03u4MNFaOU8fi64kovXq/view?usp=share_link" target="__blank">
                            <DownloadCv>
                                Ver Currículo
                                <FileArrowDown size={32} />
                            </DownloadCv>
                        </a>
                    </FormationGrid>
                </ContainerFormation>
            </AboutIntroduction>
        </AboutContainer>
    )
}