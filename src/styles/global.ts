import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body, button, input, textarea {
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color:${props => props.theme["gray-100"]};
        color: ${props => props.theme["gray-700"]};
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme["black-900"]};
        transition: all 0.5s;

        &:hover {
            color: ${props => props.theme["blue-500"]};
            transition: all 0.5s;
        }
    }

    button {
        cursor: pointer;
        border: none;
        outline: none;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    @media only screen and (max-width: 550px) {
        h1 {
            font-size: 1.75rem;
        }

        h2 {
            font-size: 1.25rem;
        }
    }
`