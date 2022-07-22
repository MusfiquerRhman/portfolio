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
    }

    .header__social::after {
        content: '';
        width: 2px;
        height: 10vh;
        background: ${(props) => props.theme.primary};
    }

    .header__social::before {
        content: '';
        width: 2px;
        height: 10vh;
        background: ${(props) => props.theme.primary};
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

    .theme{
        display: flex;
        flex-direction: row;
        align-items: center;
        position: absolute;
        right: -2rem;
        bottom: 5rem;
        transform: rotate(90deg);
        font-weight: 200;
        font-size: 0.9rem;
    }

    .toggle-container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .toggle-text {
        padding: 0.75rem;
        transform: rotate(180deg);
    }

    .toggle {
        position: relative;
        display: block;
        width: 50px;
        height: 28px;
        border-radius: 100px;
        background: ${(props) => props.theme.textColor};
        cursor: pointer;
    }

    .toggle .indicator {
            position: absolute;
            top: 0;
            left: 0;
            width: 30px;
            height: 28px;
            background: ${(props) => props.theme.backgound};
            border-radius: 50%;
            transform: scale(0.85);
        }

    .toggle.active .indicator{
        left: 20px;
        background: ${(props) => props.theme.primary};
    }

    .toggle.active {
        background: ${(props) => props.theme.textColor};

    }

    .accent-container {
        position: absolute;
        transform: rotate(90deg);
        flex-direction: row;
        align-items: center;
        justify-content: center;
        right: 20rem;

        .accent-colors { 
            padding: 1rem;

            .accent-color {
                height: 50px;
                width: 50px;
                background: red;
                margin: 1rem;
                border-radius: 50%;
            }
        }

        .accent-text{
            transform: rotate(90deg);
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