import { CloudArrowDown, FileArrowDown } from "phosphor-react";
import { DownloadCv } from "../styles";
import { CardFormationContainer } from "./styles";

interface FormationProps {
    course: string;
    institution: string;
    link: string;
}

export function CardFormation({ course, institution, link }: FormationProps) {
    return (
        <CardFormationContainer>
            <p>
                <strong>{course}</strong>
            </p>
            <p>{institution}</p>
            <a href={link} target="__blank">
                <CloudArrowDown size={32} />
            </a>
        </CardFormationContainer>
    )
}