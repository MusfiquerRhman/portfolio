import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    footer {
        background: ${(props) => props.theme.primaryColorLight};
        padding: 3rem 0;
        text-align: center;
        font-size: 1rem;
        margin-top: 7rem;

        a {
            color: ${(props) => props.theme.white};
        }

        .footer__logo{
            font-size: 2rem;
            font-weight: 500;
            margin-bottom: 2rem;
            display: inline-block;
        }
        
        .footer__social {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 7rem;


            a {
                background: ${(props) => props.theme.white};
                color: ${(props) => props.theme.primary};
                padding: 0.4rem 0.8rem;
                border-radius: 0.5rem;
                border: 1px solid transparent;
                align-items: baseline;

                &:hover {
                    background: transparent;
                    border-color: ${(props) => props.theme.white};
                    color: ${(props) => props.theme.white};
                }
            }
        }
    }

    @media screen and (max-width: 600px) {
        .footer__social {
            margin-bottom: 2.6rem;
        }
    }
`