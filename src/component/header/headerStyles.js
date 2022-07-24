import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    header {
        height: 100vh;
        padding-top: 7em;
        color: ${(props) => props.theme.textColor}
    }

    .header__container {
        text-align: center;
        height: 100%;
        position: relative;
        width: 50%;
        overflow: hidden;
    }

    .cta {
        margin-top: 2.5rem;
        display: flex;
        gap: 1.2rem;
        justify-content: center;
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
                margin: 1rem;
                border-radius: 50%;
            }
        }
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


    .mobile-navigation {
        display: none;
        color: ${(props) => props.theme.white};

        .mobile-navigation__bars {
            cursor: pointer;
            position: absolute;
            top: -3rem;
            right: 2rem;
        }

        .bar {
            display: block;
            width: 2rem;
            height: 3px;
            margin: 5px auto;
            transition: all 0.3s ease-in-out;
            background-color: ${(props) => props.theme.textColor};
        }

        .mobile-navigation__menu {
            margin: 1rem 3%;
            width: 94%;
            background: ${(props) => props.theme.primary};
            position: absolute;
            top: -4rem;
            left: 0;
            right: 0;
            border-radius: 1rem;
            display: none;

            .toggle-container {
                display: flex;
                justify-content: space-around;
                margin: 2rem;
            }

            .mobile-navigation__close {
                height: auto;
                width: 15%;
                padding: 0.5rem;
                position: absolute;
                top: 0;
                right: 0;
                font-size: 1.5rem;
            }

            .mobile-navigation__accents {

                .accent-colors { 
                    padding: 0.5rem;
                    display: flex;
                    justify-content: center;

                    .accent-color {
                        height: 40px;
                        width: 40px;
                        margin: 0.5rem;
                        border-radius: 50%;
                        border: 2px solid ${(props) => props.theme.white};
                    }
                }
            }

        }

        .display {
            display: block;
        }

    }


    @media screen and (max-width: 1024px) {
        header {
            height: 85vh;
            overflow: auto; 
        }

        .header__container {
            width: 100%;
        }

        .header__social {
            margin-left: 1rem;
        }
    }

    @media screen and (max-width: 1024px) and (max-height: 800px) {
        header {
            height: 140vh;
            overflow: auto; 
            padding-top: 4em;
        }

        .header__container {
            width: 100%;
        }

        .header__social {
            margin-left: 2rem;
        }
    }


    @media screen and (max-width: 600px) and (min-height: 800px){
        header {
            height: 100vh;
            padding-top: 5em;
        }

        .header__social {
            display: none;
        }

        .header__container {
            width: 100%;
            overflow: visible;
        }
        
        .header__social::before,
        .header__social::after {
            display: none;
        }

        .theme {
            display: none;
        }

        .mobile-navigation {
            display: block;
        }
    }

    @media screen and (max-width: 600px) and (max-height: 800px){
        header {
            height: 120vh;
            padding-top: 5em;
        }

        .header__social {
            display: none;
        }

        .header__container {
            width: 100%;
            overflow: visible;
        }
        
        .header__social::before,
        .header__social::after {
            display: none;
        }

        .theme {
            display: none;
        }

        .mobile-navigation {
            display: block;
        }
    }
`