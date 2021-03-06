import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    .portfolio__container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5rem;
        color: ${(props) => props.theme.white}
    }
    
    .portfolio__item {
        background: ${(props) => props.theme.primaryColorLight};
        padding: 0.5rem;
        border-radius: 2rem;
        display: flex;
        flex-direction: column;

        h3 {
            margin: 1rem 0;
            text-align: center;
        }


        .portfolio__item-description {
            position: relative;
            width: 100%;
            align-items: center;
            justify-content: center;

            .portfolio__item-tag {
                position: absolute;
                top: -25%;
                left: 50%;
                transform: translateX(-50%);
                border-radius: 10px;    
                padding: 0.5rem 1rem;
                background-color: ${(props) => props.theme.primaryColorVariant};
                width: fit-content;
                backdrop-filter: blur(20px);
            }
            .portfolio__item-title {
                margin-top: 2rem;
            }
        }

        &:hover .portfolio__item-cta {
            display: flex;
            opacity: 1;
        }
    }

    .portfolio__item-image {
        border-radius: 1.5rem;
        overflow: hidden;
        position: relative;

        .portfolio__item-cta {
            width: 100%;
            position: absolute;
            bottom: 50%;
            transform: translateY(50%);
            display: none;
            justify-content: space-evenly;
            margin-bottom: 1rem;
            opacity: 0;
        
        
            .btn {
                border: 0;
                background-color: ${(props) => props.theme.primaryColorVariant};
                backdrop-filter: blur(20px);
                border-radius: 0.5rem;
                box-shadow: none;
            }
        }
    }


    @media screen and (max-width: 1024px) {
        .portfolio__container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.2rem;
        }
    }

    @media screen and (max-width: 600px) {
        .portfolio__container {
            grid-template-columns: 1fr;
            gap: 1rem;
        }
    }

    .portfolio__filter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;

        margin: 0 2rem 4rem;

        .portfolio__filter-item {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            background-color: #fff;
            color: #000;
            font-weight: 800;
            box-shadow: 0 0 2px 0 ${(props) => props.theme.colorLight};
            cursor: pointer;
            transition: all 0.3s ease;
            margin: 0.5rem;

            &:hover {
                transform: translateY(-3px);
                -webkit-transform: translateY(-3px);
                -moz-transform: translateY(-3px);
                -ms-transform: translateY(-3px);
                -o-transform: translateY(-3px);
            }

            @media screen and (min-width: 2000px) {
                padding: 1rem 2rem;
                border-radius: 0.85rem;
            }
        }

        .item-active {
            background-color: ${(props) => props.theme.primary};
            color: #fff;
        }
    }
`