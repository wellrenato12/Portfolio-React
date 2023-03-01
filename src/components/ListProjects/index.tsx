import { Project } from "./Project";
import { ListProjectsContainer, ListProjectsGrid, AlignText } from "./styles";
import BeautyBoss from '../../assets/imgProjects/beauty-boss.jpg'
import BlogIgnite from '../../assets/imgProjects/blog-ignite.jpg'
import TodoList from '../../assets/imgProjects/todo-list.jpg'
import IgniteTimer from '../../assets/imgProjects/ignite-timer.jpg'
import CoffeeDelivery from '../../assets/imgProjects/coffee-delivery.jpg'
import GamingPcStore from '../../assets/imgProjects/gaming-pc-store.jpg'
import TonyTendas from '../../assets/imgProjects/tony-tendas.jpg'
import ListaPresenca from '../../assets/imgProjects/lista-presenca.jpg'
import DevFinance from '../../assets/imgProjects/dev-finance.jpg'
import Login from '../../assets/imgProjects/login.jpg'
import Supertrunfo from '../../assets/imgProjects/supertrunfo.jpg'
import JogoDaVelha from '../../assets/imgProjects/jogo-da-velha.jpg'
import PortfolioAntigo from '../../assets/imgProjects/portfolio-antigo.jpg'
import Workshop from '../../assets/imgProjects/workshop.jpg'
import Quiz from '../../assets/imgProjects/quiz-futebol.jpg'

const projects = [
    {
        name: "Quiz Futebol",
        projectImage: Quiz,
        altText: "Quiz Futebol",
        description: "Projeto desenvolvido para fazer uma brincadeira entre amigos.",
        link: "https://well-quiz-futebol.netlify.app/",
    },
    {
        name: "Coffee Delivery",
        projectImage: CoffeeDelivery,
        altText: "Coffee Delivery",
        description: "Projeto desenvolvido no segundo desafio do Ignite da Rocketseat.",
        link: "https://well-coffee-delivery.netlify.app/",
    },
    {
        name: "Ignite Timer",
        projectImage: IgniteTimer,
        altText: "Ignite Timer",
        description: "Projeto desenvolvido no segundo módulo do Ignite da Rocketseat.",
        link: "https://well-timer-ignite.netlify.app/",
    },
    {
        name: "Blog Ignite",
        projectImage: BlogIgnite,
        altText: "Blog Ignite",
        description: "Projeto desenvolvido no primeiro módulo do Ignite da Rocketseat.",
        link: "https://well-blog-ignite.netlify.app/",
    },
    {
        name: "Todo List",
        projectImage: TodoList,
        altText: "Todo List",
        description: "Projeto desenvolvido no primeiro desafio do Ignite da Rocketseat.",
        link: "https://well-todo-list.netlify.app/",
    },
    {
        name: "Lista de Presença",
        projectImage: ListaPresenca,
        altText: "Lista de Presença",
        description: "Projeto desenvolvido na Rocketseat para entender alguns conceitos básicos do ReactJS.",
        link: "https://well-lista-presenca.netlify.app/",
    },
    {
        name: "DevFinance",
        projectImage: DevFinance,
        altText: "Dev Finance",
        description: "Projeto desenvolvido na maratona Discover da Rocketseat.",
        link: "https://well-dev-finance.netlify.app/",
    },
    {
        name: "TonyTendas",
        projectImage: TonyTendas,
        altText: "Tony Tendas",
        description: "Projeto desenvolvido para meu tio ter mais um meio de divulgação do seu trabalho.",
        link: "https://tony-tendas.netlify.app/",
    },
    {
        name: "Beauty Boss",
        projectImage: BeautyBoss,
        altText: "beauty boss",
        description: "Projeto desenvolvido para uma amiga que está começando na carreira de design e maquiagem.",
        link: "https://beautyboss.netlify.app/",
    },
    {
        name: "Power Notebook",
        projectImage: GamingPcStore,
        altText: "Power Notebook",
        description: "Projeto desenvolvido para um amigo fazer a venda de seus notebooks.",
        link: "https://well-gaming-store.netlify.app/",
    },
    {
        name: "Tela de Login",
        projectImage: Login,
        altText: "Login",
        description: "Tela simples para login e cadastro de usuário.",
        link: "https://well-tela-login.netlify.app/",
    },
    {
        name: "Jogo da Velha",
        projectImage: JogoDaVelha,
        altText: "Jogo da Velha",
        description: "Jogo desenvolvido no curso do ProgramadorBR.",
        link: "https://well-jogo-da-velha.netlify.app/game.html",
    },
    {
        name: "Jogo Super Trunfo",
        projectImage: Supertrunfo,
        altText: "Super Trunfo",
        description: "Projeto desenvolvido na imersão Dev da Alura.",
        link: "https://well-supertrunfo.netlify.app/",
    },
    {
        name: "Workshop",
        projectImage: Workshop,
        altText: "Workshop",
        description: "Projeto desenvolvido no curso do ProgramadorBR.",
        link: "https://well-pagina-captura.netlify.app/",
    },
    {
        name: "Portfólio Antigo",
        projectImage: PortfolioAntigo,
        altText: "Portfolio",
        description: "Projeto desenvolvido para me aprensentar e mostrar meus projetos.",
        link: "https://portf-dev-well.netlify.app/",
    },
]

export function ListProjects() {
    return (
        <ListProjectsContainer id="/projects">
            <AlignText>
                <h1>Meus Projetos</h1>
                <p>Github</p>
            </AlignText>
            <ListProjectsGrid>
                {projects.map((project) => {
                    return <Project 
                                key={project.name} 
                                name={project.name} 
                                projectImage={project.projectImage} 
                                altText={project.altText}
                                description={project.description}
                                link={project.link}
                            />
                })}
            </ListProjectsGrid>
        </ListProjectsContainer>
    )
}