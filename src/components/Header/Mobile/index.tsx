import { X } from "phosphor-react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import { MobileContainer } from "./styles"

interface MobileProps {
    menuIsVisible: boolean;
    handleMenuIsVisible: (isVisible: boolean) => void;
}

export function Mobile({ menuIsVisible, handleMenuIsVisible }: MobileProps) {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible])
    return (
        <MobileContainer menuIsVisible={menuIsVisible}>
            <X size={45} onClick={() => handleMenuIsVisible(false)} />
            <nav>
                <div>
                    <ul>
                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/home"
                                spy={true}
                                smooth={true}
                                offset={-250}
                                duration={1000}
                            >
                                Início
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/about"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={1000}
                            >
                                Sobre
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/skills"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={1000}
                            >
                                Tecnologias
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/projects"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={1000}
                            >
                                Projetos
                            </Link>
                        </li>

                        <li>
                            <Link
                                onClick={() => handleMenuIsVisible(false)}
                                to="/contact"
                                spy={true}
                                smooth={true}
                                offset={-110}
                                duration={1000}
                            >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </MobileContainer>
    )
}