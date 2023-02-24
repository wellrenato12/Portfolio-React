import { AlignText } from "../ListProjects/styles";
import { ContactOption } from "./ContactOption";
import { ContactContainer, Container, ListContact, Message } from "./styles";
import { Envelope, WhatsappLogo, LinkedinLogo, ArrowCircleRight   } from "phosphor-react";

const typesOfContacts = [
    {
        icon: () => <Envelope size={35} />,
        name: 'Email',
        content: 'well.renato@hotmail.com',
        description: 'Escreva-me',
        link: 'mailto:well.renato@hotmail.com',
    },
    {
        icon: () => <WhatsappLogo size={35} />,
        name: 'WhatsApp',
        content: '(19)98882-4825',
        description: 'Escreva-me',
        link: 'https://wa.me/5519988824825',
    },
    {
        icon: () => <LinkedinLogo size={35} />,
        name: 'LinkedIn',
        content: 'linkedin.com/in/wellington-albino-015184177/',
        description: 'Escreva-me',
        link: 'https://www.linkedin.com/in/wellington-albino-015184177/',
    },
]

export function Contact() {
    return (
        <ContactContainer id="/contact">
            <AlignText>
                <h1>Contato</h1>
                <p>Envie uma mensagem</p>
            </AlignText>
            <Container>
                <ListContact>
                    <h2>Fale comigo</h2>
                    {typesOfContacts.map((contact) => {
                        return <ContactOption 
                            key={contact.name} 
                            icon={contact.icon} 
                            name={contact.name} 
                            content={contact.content} 
                            description={contact.description} 
                            link={contact.link}
                        />
                    })}
                </ListContact>
                <Message>
                    <h2>Envie um E-mail</h2>
                    <form action="https://formsubmit.co/well.renato@hotmail.com" method="POST">
                        <input id="name" name="name" type="text" placeholder="Insert your name" />
                        <label htmlFor="name">Nome</label>
                        <input id="email" name="email" type="email" placeholder="Insert your email" />
                        <label htmlFor="email">E-mail</label>
                        <textarea name="message" maxLength={250} placeholder="Escreva sua mensagem ..." />
                        <button type="submit">
                            Enviar
                            <ArrowCircleRight size={24} />
                        </button>
                    </form>
                </Message>
            </Container>
        </ContactContainer>
    )
}