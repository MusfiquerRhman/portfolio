import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    nav {
        background: ${(props) => props.theme.primaryColorLight};
        display: block;
        width: max-content;
        padding: 0.7rem 1.7rem;
        z-index: 2;
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 1rem;
        border-radius: 3rem;
        backdrop-filter: blur(15px);

        a {
            background: transparent;
            padding: 0.7rem;
            border-radius: 50%;
            display: flex;
            font-size: 1.2rem;
            color: ${(props) => props.theme.white};

            &:hover {
                color: ${(props) => props.theme.primary};
            }
        }

        a.active {
            background: ${(props) => props.theme.white};
            color: ${(props) => props.theme.primaryColorLight};
        }
    }

    @media screen and (max-width: 600px) {
        nav {
            left: 0;
            bottom: 0.5rem;
            top: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            transform: translateX(0);
            width: 100%;
            border-radius: 0;
            padding: 0.5rem 0.8rem;
            position: fixed;
        
            a {
                padding: 0.5rem;
            }
        }
    }

    @media screen and (min-width: 2160px) {
        nav {
            gap: 2.5rem;
            padding: 2rem 3.5rem;
            border-radius: 7.5rem;
            bottom: 3rem;


            a {
                color: var(--color-white);
                font-size: 3.5rem;
            }
        }
    }
`