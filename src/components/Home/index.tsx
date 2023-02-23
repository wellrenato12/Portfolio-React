import { GithubLogo, HandWaving, InstagramLogo, LinkedinLogo, PaperPlaneTilt } from "phosphor-react";
import { HomeContainer, Icons, ImagePresentation, Presentation, PresentationInfo } from "./styles";
import ImagemPresentation from '../../assets/ImagePresentation.jpg'

export function Home() {
    return (
        <HomeContainer id="/home">
            <Presentation>
                <Icons>
                    <a href="https://www.instagram.com/wellrenato12/" target="__blank">
                        <InstagramLogo size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/wellington-albino-015184177/" target="__blank">
                        <LinkedinLogo size={24} />
                    </a>
                    <a href="https://github.com/wellrenato12" target="__blank">
                        <GithubLogo size={24} />
                    </a>
                </Icons>
                <PresentationInfo>
                    <h1>
                        <span>Wellington Renato</span>
                        <HandWaving size={32} />
                    </h1>
                    <div>
                        <hr />
                        <h3>Front End Developer</h3>
                    </div>
                    <p>Sou um desenvolvedor front-end buscando minha primeira oportunidade na área da programação.</p>
                    <a href="https://www.linkedin.com/in/wellington-albino-015184177/" target="__blank">
                        <button>
                            Diga olá
                            <PaperPlaneTilt size={24} />
                        </button>
                    </a>
                </PresentationInfo>
            </Presentation>
            <ImagePresentation>
                <img src={ImagemPresentation} alt="Imagem de Apresentação" />
            </ImagePresentation>
        </HomeContainer>
    )
}