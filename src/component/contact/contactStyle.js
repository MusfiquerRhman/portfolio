import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    .contact__container {
        width: 60%;
        display: grid;
        grid-template-columns: 30% 60%;
        gap: 10%;
        color: ${(props) => props.theme.white};
        justify-content: center;
        align-items: center;
        position: relative;

        .border {
            border-bottom: 2px solid ${(props) => props.theme.primary};
            border-radius: 0;
            box-shadow: 0 0 0 1px ${(props) => props.theme.primaryColorVariant};
        }

        .btn {
            position: relative;
            width: 50%;
            font-size: 1.1rem;
            left: 50%;
            transform: translate(-50%);
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.white};
        }

        .contact__options {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;

            .contact__option {
                background: ${(props) => props.theme.primaryColorLight};
                padding: 1.2rem;
                border-radius: 1.2rem;
                text-align: center;
                border: 1px solid transparent;

                .contact__options-icon{
                    font-size: 1.5rem;
                    margin: 0.5rem;
                }

                a {
                    display: inline-block;
                    border-bottom: 1px solid ${(props) => props.theme.primary};
                    padding: 0.5rem;
                    margin-top: 0.5rem;
                    color: ${(props) => props.theme.white};

                    .icon {
                        transform: translateY(3px);
                    }
                }

                &:hover {
                    border: 1px solid ${(props) => props.theme.primary};
                    background: ${(props) => props.theme.primaryColorVariant};
                    color: ${(props) => props.theme.textColor};

                    a {
                        font-size: 1.35rem;
                        color: ${(props) => props.theme.primary};
                        text-decoration: none;
                        border: none;

                        .icon {
                            width: 0;
                            opacity: 0;
                            display: none;
                        }
                    }

                    .contact__options-icon{
                        color: ${(props) => props.theme.primary};
                        transition: all 1.5s ease;
                        transform: rotate(360deg);
                    }
                }
            }
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;

            input, textarea {
                width: 100%;
                border-radius: 0.5rem;
                padding: 1.5rem;
                border: 2px solid transparent;
                resize: none;
            }
        }
    }



    @media screen and (min-width: 2160px) {

    }


    @media screen and (max-width: 1024px) {
        .contact__container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }
    }

    @media screen and (max-width: 600px) {
        .contact__container {
            width: var(--container-width-sm);
        }
    }

`