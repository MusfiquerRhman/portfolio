import {createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    .container.testimonial__container {
        width: 50%;
        padding-bottom: 4rem;

        .cliant__avater {
            width: 5rem;
            aspect-ratio: 1/1;
            overflow: hidden;
            border-radius: 50%;
            border: 0.4rem solid ${(props) => props.theme.primary};
            margin: 0 auto;

            img {
                height: 100%;
                margin: 0 auto;        
            }
        }

        .testimonial{
            background: ${(props) => props.theme.primaryColorLight};
            text-align: center;
            padding: 2rem;
            border-radius: 2rem;
            user-select: none;
            min-height: 35vh;
            color: ${(props) => props.theme.white};

            .cliant__name {
                font-size: 1.2rem;
                background: ${(props) => props.theme.primaryColorLight};
                border-radius: 100px;
                margin: 1rem;
                padding: 0.3rem;
            }


            .cliant__review {
                display: block;
                font-weight: 300;
                font-size: 1rem;
                width: 80%;
                margin: 0.8rem auto 0;
            }
        }

        .swiper-button-prev {
            color: ${(props) => props.theme.primary};
        }

        .swiper-button-next {
            color: ${(props) => props.theme.primary};
        }

        .swiper-pagination-bullet {
            background: ${(props) => props.theme.primary};
        }
    }



    // @media screen and (min-width: 2160px) {

    // }


    @media screen and (max-width: 1024px) {
        .container.testimonial__container {
            width: 70%;

        }
    }

    @media screen and (max-width: 600px) {
        .container.testimonial__container {
            width: var(--container-width-sm);
        }

        .cliant__review {
            width: var(--container-width-sm);
        }

    }

`