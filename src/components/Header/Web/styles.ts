import styled from "styled-components";

export const WebContainer = styled.header`
    background: ${props => props.theme.white};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        height: 5rem;
        margin: auto;
        padding: 2rem;
        max-width: 1376px;

        button {
            background-color: ${props => props.theme.white};
        }

        a {
            cursor: pointer;
            font-size: 1.25rem;
        }

        div {
            ul {
                display: flex;
                gap: 2rem;
            }
        }
    }

    @media only screen and (max-width: 850px) {
        div {
            display: none;
        }
    }

    @media only screen and (min-width: 851px) {
        span {
            visibility: hidden;
        }
    }
`