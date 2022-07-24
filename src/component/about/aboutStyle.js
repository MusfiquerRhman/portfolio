import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    .about__container {
        display: grid;
        grid-template-columns: 35% 50%;
        gap: 15%;
        align-items: center;
        justify-content: center;
    }

    .about__me {
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 2rem;
        background: linear-gradient(45deg, transparent, ${(props) =>props.theme.primary});
        display: grid;
        place-items: center;

        &-image {
            overflow: hidden;
            border-radius: 2rem;
            transform: rotate(10deg);
            transition: var(--transition);
            
            img {
                aspect-ratio: 1/1;
            }

            &:hover {
                transform: rotate(0);
            }
        }
    }

    .about__cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.5rem;
        color: ${(props) => props.theme.white};

        small {
            color: #DDD;
            font-size: 0.8rem;
        }
    }

    .about__icon {
        font-size: 1.5rem;
        margin-bottom: 1rem;   
    }

    .about__card {
        background: ${(props) => props.theme.primaryColorLight};
        border: 1px solid transparent;
        border-radius: 1rem;
        padding: 1.5rem;
        text-align: center;
        transition: var(--transition);

        &:hover {
            transform: scale(1.05);

            .about__icon {
                transition: all 1.5s ease;
                transform: rotate(360deg);
            }
        }
    }

    .about__content p {
        margin: 2rem 0 2.5rem;
        text-align: justify;
        color: ${(props) => props.theme.textColor}
    }

    .about__content .btn {
        width: 50%;
        text-align: center;
        transform: translateX(50%);
        font-weight: bold;
        font-size: 1rem;
    }


    @media screen and (max-width: 1024px) {
        .about__container {
            grid-template-columns: 1fr;
            gap: 0;
        }

        .about__me {
            width: 50%;
            margin: 2rem auto 4rem;
        }

        .about__content p {
            margin: 1rem 0 1.5rem;
        }
    }

    @media screen and (max-width: 600px) {
        .about__me {
            width: 85%;
            margin: 0 auto 4rem;
        }

        .about__cards{
            grid-template-columns: 1fr 1fr;
        }

        .about__content p {
            margin: 1.5rem 0;
        }
    }
`;
