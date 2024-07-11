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
import DtMoney from '../../assets/imgProjects/dt-money.png'
import GitHubBlog from '../../assets/imgProjects/github-blog.png'
import IgniteShop from '../../assets/imgProjects/ignite-shop.png'
import DesignSystem from '../../assets/imgProjects/design-system.png'
import IgniteCall from '../../assets/imgProjects/ignite-call.png'
import ReduxZustand from '../../assets/imgProjects/redux-zustand.png'
import PaquetaCalcados from '../../assets/imgProjects/PaquetaCalcados.png'
import Blizzard from '../../assets/imgProjects/blizzard.png'
import EmpireBurguer from '../../assets/imgProjects/empireBurguer.png'
import PassInWeb from '../../assets/imgProjects/passIn.png'

const projects = [
    {
        name: "Paquetá Calçados",
        projectImage: PaquetaCalcados,
        altText: "Paquetá Calçados",
        description: "Desafio do https://www.brchallenges.com/ resolvido.",
        link: "https://paqueta-calcados-gamma.vercel.app/",
        github: "https://github.com/wellrenato12/PaquetaCalcados",
    },
    {
        name: "Empire Burguer",
        projectImage: EmpireBurguer,
        altText: "Empire Burguer",
        description: "Desafio do https://www.brchallenges.com/ resolvido.",
        link: "https://main--empireburguer.netlify.app/",
        github: "https://github.com/wellrenato12/EmpireBurguer",
    },
    {
        name: "Blizzard",
        projectImage: Blizzard,
        altText: "Blizzard",
        description: "Desafio do https://www.brchallenges.com/ resolvido.",
        link: "https://main--blizzardgame.netlify.app/",
        github: "https://github.com/wellrenato12/Blizzard",
    },
    {
        name: "Coffee Delivery",
        projectImage: CoffeeDelivery,
        altText: "Coffee Delivery",
        description: "Projeto desenvolvido no segundo desafio do Ignite da Rocketseat.",
        link: "https://well-coffee-delivery.netlify.app/",
        github: "https://github.com/wellrenato12/Desafio02-Ignite",
    },
    {
        name: "Pass In Web",
        projectImage: PassInWeb,
        altText: "Pass In Web",
        description: "Projeto desenvolvido no evento da Rocketseat.",
        link: "https://main--pass-in-web-event.netlify.app/",
        github: "https://github.com/wellrenato12/Pass-In-Web",
    },
    {
        name: "React Redux e Zustand",
        projectImage: ReduxZustand,
        altText: "React Redux e Zustand",
        description: "Projeto desenvolvido no sétimo módulo do Ignite da Rocketseat.",
        link: "https://modulo07-ignite.vercel.app/",
        github: "https://github.com/wellrenato12/Modulo07-Ignite",
    },
    {
        name: "Ignite Call",
        projectImage: IgniteCall,
        altText: "Ignite Call",
        description: "Projeto desenvolvido no sexto módulo do Ignite da Rocketseat.",
        link: "https://06-ignite-call-kappa.vercel.app/",
        github: "https://github.com/wellrenato12/Modulo06-Ignite",
    },
    {
        name: "Ignite - Design System",
        projectImage: DesignSystem,
        altText: "Design System",
        description: "Projeto desenvolvido no quinto módulo do Ignite da Rocketseat e já concluído o desafio no mesmo repositório.",
        link: "https://wellrenato12.github.io/Modulo05-Ignite/?path=/story/home--page",
        github: "https://github.com/wellrenato12/Modulo05-Ignite",
    },
    {
        name: "Ignite Shop",
        projectImage: IgniteShop,
        altText: "Ignite Shop",
        description: "Projeto desenvolvido no quarto módulo do Ignite da Rocketseat.",
        link: "https://well-ignite-shop.netlify.app/",
        github: "https://github.com/wellrenato12/Modulo04-Ignite",
    },
    {
        name: "GitHub Blog",
        projectImage: GitHubBlog,
        altText: "GitHub Blog",
        description: "Projeto desenvolvido no terceiro desafio do Ignite da Rocketseat.",
        link: "https://well-github-blog.netlify.app/",
        github: "https://github.com/wellrenato12/Desafio03-Ignite",
    },
    {
        name: "DT Money",
        projectImage: DtMoney,
        altText: "DT Money",
        description: "Projeto desenvolvido no terceiro módulo do Ignite da Rocketseat.",
        link: "https://well-dtmoney-ignite.netlify.app/",
        github: "https://github.com/wellrenato12/Modulo03-Ignite",
    },
    {
        name: "Quiz Futebol",
        projectImage: Quiz,
        altText: "Quiz Futebol",
        description: "Projeto desenvolvido para fazer uma brincadeira entre amigos.",
        link: "https://well-quiz-futebol.netlify.app/",
        github: "https://github.com/wellrenato12/Quiz-Futebol",
    },
    {
        name: "Ignite Timer",
        projectImage: IgniteTimer,
        altText: "Ignite Timer",
        description: "Projeto desenvolvido no segundo módulo do Ignite da Rocketseat.",
        link: "https://well-timer-ignite.netlify.app/",
        github: "https://github.com/wellrenato12/Modulo02-Ignite",
    },
    {
        name: "Todo List",
        projectImage: TodoList,
        altText: "Todo List",
        description: "Projeto desenvolvido no primeiro desafio do Ignite da Rocketseat.",
        link: "https://well-todo-list.netlify.app/",
        github: "https://github.com/wellrenato12/Desafio01-Ignite",
    },
    {
        name: "Ignite Feed",
        projectImage: BlogIgnite,
        altText: "Ignite Feed",
        description: "Projeto desenvolvido no primeiro módulo do Ignite da Rocketseat.",
        link: "https://well-blog-ignite.netlify.app/",
        github: "https://github.com/wellrenato12/Modulo01-Ignite",
    },
    {
        name: "Lista de Presença",
        projectImage: ListaPresenca,
        altText: "Lista de Presença",
        description: "Projeto desenvolvido na Rocketseat para entender alguns conceitos básicos do ReactJS.",
        link: "https://well-lista-presenca.netlify.app/",
        github: "https://github.com/wellrenato12/Lista-de-presenca",
    },
    {
        name: "DevFinance",
        projectImage: DevFinance,
        altText: "Dev Finance",
        description: "Projeto desenvolvido na maratona Discover da Rocketseat.",
        link: "https://well-dev-finance.netlify.app/",
        github: "https://github.com/wellrenato12/Maratona-Discover",
    },
    {
        name: "TonyTendas",
        projectImage: TonyTendas,
        altText: "Tony Tendas",
        description: "Projeto desenvolvido para meu tio ter mais um meio de divulgação do seu trabalho.",
        link: "https://tony-tendas.netlify.app/",
        github: "https://github.com/wellrenato12/TonyTendas",
    },
    {
        name: "Beauty Boss",
        projectImage: BeautyBoss,
        altText: "beauty boss",
        description: "Projeto desenvolvido para uma amiga que está começando na carreira de design e maquiagem.",
        link: "https://beautyboss.netlify.app/",
        github: "https://github.com/wellrenato12/BeautyBossDark",
    },
    {
        name: "Power Notebook",
        projectImage: GamingPcStore,
        altText: "Power Notebook",
        description: "Projeto desenvolvido para um amigo fazer a venda de seus notebooks.",
        link: "https://well-gaming-store.netlify.app/",
        github: "https://github.com/wellrenato12/GamingPcStore",
    },
    {
        name: "Tela de Login",
        projectImage: Login,
        altText: "Login",
        description: "Tela simples para login e cadastro de usuário.",
        link: "https://well-tela-login.netlify.app/",
        github: "https://github.com/wellrenato12/Tela-de-Login",
    },
    {
        name: "Jogo da Velha",
        projectImage: JogoDaVelha,
        altText: "Jogo da Velha",
        description: "Jogo desenvolvido no curso do ProgramadorBR.",
        link: "https://well-jogo-da-velha.netlify.app/game.html",
        github: "https://github.com/wellrenato12/Jogo-da-Velha",
    },
    {
        name: "Jogo Super Trunfo",
        projectImage: Supertrunfo,
        altText: "Super Trunfo",
        description: "Projeto desenvolvido na imersão Dev da Alura.",
        link: "https://well-supertrunfo.netlify.app/",
        github: "https://github.com/wellrenato12/ProjetoAlura",
    },
    {
        name: "Workshop",
        projectImage: Workshop,
        altText: "Workshop",
        description: "Projeto desenvolvido no curso do ProgramadorBR.",
        link: "https://well-pagina-captura.netlify.app/",
        github: "https://github.com/wellrenato12/Pagina-de-Captura",
    },
    {
        name: "Portfólio Antigo",
        projectImage: PortfolioAntigo,
        altText: "Portfolio",
        description: "Projeto desenvolvido para me aprensentar e mostrar meus projetos.",
        link: "https://portf-dev-well.netlify.app/",
        github: "https://github.com/wellrenato12/Portfolio",
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
                                github={project.github}
                            />
                })}
            </ListProjectsGrid>
        </ListProjectsContainer>
    )
}