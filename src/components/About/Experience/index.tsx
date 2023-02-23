import { CaretDown, CaretUp } from "phosphor-react"
import { useState } from "react"
import { CardExperience, ExperienceContainer } from "./styles"

interface ExperienceProps {
    timeWorked: string;
    office: string;
    company: string;
    description: string;
}

export function Experience({ timeWorked, office, company, description}: ExperienceProps) {
    const [toggle, setToggle] = useState(true)

    function HandleShowContent() {
        setToggle(toggle === true ? false : true)
    }

    return (
        <ExperienceContainer>
            <p>{timeWorked}</p>
            <CardExperience>
                <p>
                    <strong>{office}</strong>
                </p>
                <p>{company}</p>
                {toggle ? (
                <button onClick={HandleShowContent}>
                    <CaretDown size={32} />
                </button>
                ) : (
                <>
                    <span>{description}</span>
                    <button onClick={HandleShowContent}>
                        <CaretUp size={32} />
                    </button>
                </>
                )}
            </CardExperience>
        </ExperienceContainer>
    )
}