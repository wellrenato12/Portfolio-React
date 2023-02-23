import { WebContainer } from "./styles";
import { Link } from 'react-scroll';
import { List } from "phosphor-react";

interface WebProps {
    handleMenuIsVisible: (isVisible: boolean) => void;
}

export function Web({ handleMenuIsVisible }: WebProps) {
    return (
        <WebContainer>
            <nav>
                <Link 
                    to="/home" 
                    spy={true} 
                    smooth={true} 
                    offset={-100}
                    duration={1000}
                >
                    Wellington Renato
                </Link>
                <span>
                    <button>
                        <List size={32} onClick={() => handleMenuIsVisible(true)} />
                    </button>
                </span>

                <div>
                    <ul>
                        <li>
                            <Link 
                                to="/home" 
                                spy={true} 
                                smooth={true}
                                offset={-100}
                                duration={1000}
                            >
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/about" 
                                spy={true} 
                                smooth={true}
                                offset={-100}
                                duration={1000}
                            >
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/skills" 
                                spy={true} 
                                smooth={true}
                                offset={-100}
                                duration={1000}
                            >
                                Tecnologias
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/projects" 
                                spy={true} 
                                smooth={true}
                                offset={-100}
                                duration={1000}
                            >
                                Projetos
                            </Link>
                        </li>

                        <li>
                            <Link 
                                to="/contact" 
                                spy={true} 
                                smooth={true}
                                offset={-100}
                                duration={1000}
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </WebContainer>
    )
}