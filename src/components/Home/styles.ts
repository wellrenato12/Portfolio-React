import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 100vh;
    max-width: 1376px;
    margin: auto;

    @media only screen and (max-width: 850px) {
        flex-direction: column;
    }

    @media only screen and (max-width: 550px) {
        text-align: center
    }
`

export const Presentation = styled.div`
    display: flex;
    gap: 5rem;

    @media only screen and (max-width: 550px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const PresentationInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    max-width: 646px;

    h1 {
        font-size: 3rem;

        span {
            padding-right: .5rem;
        }
    }

    div {
        display: flex;
        align-items: center;

        hr {
            width: 100px;
        }

        h3 {
            font-size: 1.5rem;
            margin-left: 1rem;
        }
    }

    p {
        font-size: 16px;
        width: 400px;
    }

    button {
        display: flex;
        align-items: center;
        gap: .5rem;
        width: 180px;
        padding: 1rem 2rem;
        margin-top: 1rem;
        border-radius: 14px;
        font-size: 1rem;
        background-color: ${props => props.theme["gray-700"]};
        color: ${props => props.theme["gray-100"]};
        transition: all .5s;

        &:hover {
            box-shadow: 0 0 1rem ${props => props.theme["black-900"]};
            transition: all .5s;
        }
    }

    @media only screen and (max-width: 550px) {
        h1 {
            font-size: 2rem;
        }

        div {
            padding: 0 3rem;
            h3 {
                font-size: 1rem;
            }
        }

        p {
            padding: 0 3rem;
            font-size: .75rem;
        }

        a {
            margin: auto;
        }
    }
`

export const Icons = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;

    a {
        line-height:0
    }

    @media only screen and (max-width: 550px) {
        flex-direction: row;
    }
`

export const ImagePresentation = styled.div`
    display: flex;
    align-items: center;

    img {
        -webkit-filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%)); 
        filter: drop-shadow(0px 0px 20px rgba(0 0 0 / 90%));
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        order: 1;
        justify-self: center;
        width: 350px;
        height: 350px;
        animation: profile__animate 8s ease-in-out infinite 1s;
    }

    @keyframes profile__animate {
        0% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }

        50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
        }

        100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
    }

    @media only screen and (max-width: 1024px) {
        img {
            width: 280px;
            height: 280px;
        }        
    }

    @media only screen and (max-width: 850px) {
        display: none;
    }
`