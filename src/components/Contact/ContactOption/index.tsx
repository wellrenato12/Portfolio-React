import { ContactOptionContainer } from "./styles";

interface ContactOptionProps {
    icon: () => JSX.Element
    name: string,
    content: string,
    description: string,
    link: string,
}

export function ContactOption({ icon: IconElement, name, content, description, link }: ContactOptionProps) {
    return (
        <ContactOptionContainer>
            <span>
                <IconElement />
            </span>
            <strong>{name}</strong>
            <p>{content}</p>
            <a href={link} target="__blank">{description}</a>
        </ContactOptionContainer>
    )
}