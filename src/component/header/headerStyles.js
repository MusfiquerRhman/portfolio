import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    header {
        height: 100vh;
        padding-top: 7rem;
        overflow: hidden;
        color: ${(props) => props.theme.textColor}
    }

    .header__container {
        text-align: center;
        height: 100%;
        position: relative;
    }

    .cta {
        margin-top: 2.5rem;
        display: flex;
        gap: 1.2rem;
        justify-content: center;

        .btn-primary {
            font-weight: bold;
            background: ${(props) => props.theme.primary};
            color: ${(props) => props.theme.white};
        }
    }

    .header__social {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        position: absolute;
        left: 0;
        bottom: 3rem;
        font-size: 1.5rem;

        &::after {
            content: '';
            width: 2px;
            height: 10vh;
            background: ${(props) => props.theme.primary};
        }

        &::before {
            content: '';
            width: 2px;
            height: 10vh;
            background: ${(props) => props.theme.primary};
        }
    }


    .me {
        background: linear-gradient(180deg, ${(props) => props.theme.primary}, transparent);
        width: 22rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 4rem;
        border-radius: 12rem 0 12rem 0;
        overflow: hidden;
        padding: 3rem 1.5rem 0 1.5rem;

        img {
            height: 25rem;
        }
    }

    .theme {
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        right: -2rem;
        bottom: 5rem;
        transform: rotate(90deg);
        font-weight: 200;
        font-size: 0.9rem;
        transition: all 0.5s;
    }

    .toggle {
        position: relative;
        display: block;
        width: 50px;
        height: 28px;
        border-radius: 100px;
        background: ${(props) => props.theme.textColor};
        cursor: pointer;

        &-container {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &-text {
            padding: 0.75rem;
            transform: rotate(180deg);
            text-align: center;
        }


        .indicator {
            position: absolute;
            top: 0;
            left: 0;
            width: 30px;
            height: 28px;
            background: ${(props) => props.theme.backgound};
            border-radius: 50%;
            transform: scale(0.85);
        }

        &.active .indicator{
            left: 20px;
            background: ${(props) => props.theme.primary};
        }

        &.active {
            background: ${(props) => props.theme.textColor};
        }

    }


    .accordion-container {
        position: absolute;
        transform: rotate(90deg);
        flex-direction: row;
        right: 23rem;

        .accordion__label, .accordion__content {
            padding: 0.5rem;
            margin: 0.5rem;
            border-radius: 25px;
        }

        .accordion__label {
            color: #${(props) => props.theme.textColor};;
            font-weight: 500;
            cursor: pointer;
            position: relative;
            transition: background 0.1s;
            transform: rotate(90deg);
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                background: ${(props) => props.theme.primaryColorVariant};
            }

            .icon {
                    margin: 0.25rem;
            }
        }


        .accordion__content {
            line-height: 1.6;
            font-size: 0.85em;
            opacity: 0;
        }

        .accordion__input {
            opacity: 0;
        }

        .accordion__input:checked ~ .accordion__content {
            opacity: 1;
        }


        .accent-colors { 
            padding: 1rem;

            .accent-color {
                height: 50px;
                width: 50px;
                background: red;
                margin: 1rem;
                border-radius: 50%;
            }

            .teal {
                background: rgb(0, 137, 123);
            }

            .red {
                background: rgb(244, 67, 54);
            }

            .pink {
                background: rgb(233, 30, 99);
            }

            .purple {
                background: rgb(165, 39, 176);
            }

            .blue {
                background: rgb(33, 150, 243);
            }

            .green {
                background: rgb(67, 160, 71);
            }
        }
    }

   

    @media screen and (max-width: 1024px) {
        header {
            height: 85vh;
            overflow: auto; 
        }
    }

    @media screen and (min-width: 2160px) {
        header {
            padding-top: 10rem;
            height: 70vh;
        }

        .header__social {
            gap: 2rem;
            bottom: 3rem;

            a {
                font-size: 2.5rem;
            }
        }

        .scroll__down {
            font-size: 2.5rem;
            right: -5rem;
        }

        .cta {
            margin-top: 5rem;
            gap: 2rem;justify-content: center;

            .btn, .btn-primary {
                font-size: 2.5rem;
            }

        }

        .me {
            width: 30rem;
            height: 30rem;
            margin-top: 10rem;
            border-radius: 24rem 24rem 0 0;
            padding: 6rem 0 0 0;
        }
    }



    @media screen and (max-width: 600px) {
        header {
            height: 100vh;
        }
        .scroll__down {
            display: none;
        }

        .header__social {
            display: none;
        }
        
        .header__social::before,
        .header__social::after {
            display: none;
        }
    }
`