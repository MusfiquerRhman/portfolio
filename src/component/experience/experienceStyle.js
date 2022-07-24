import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    .experience__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        color: ${(props) => props.theme.white};

        & > div {
            background: ${(props) => props.theme.primaryColorLight};
            padding: 2.4rem 5rem;
            border-radius: 2rem;

            h3 {
                text-align: center;
                margin-bottom: 2rem;
            }

            .experience__content {
                display: grid;
                grid-template-columns: 1fr 1fr;
                row-gap: 1.25rem;


                .experience__details {
                    display: flex;
                    gap: 1rem;

                    .text-light {
                        color: ${(props) => props.theme.white};
                    }
                }

                .experience__details-icons {
                    color: ${(props) => props.theme.white};
                    margin-top: 0.5rem;
                }
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .experience__container {
            grid-template-columns: 1fr;

        }

        .experience__container > div {
            width: 100%;
            padding: 2rem;
            margin: 0 auto;
        }

        .experience__content {
            padding: 1rem;
        }
    }

    @media screen and (max-width: 600px) {
        .experience__container {
            grid-template-columns: 1fr;
        }

        .experience__container > div {
            width: 100%;
            padding: 2rem 1rem;
        }
    }
`
