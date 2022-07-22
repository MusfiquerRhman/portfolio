import { createGlobalStyle } from "styled-components"

export const lightTheme = () => {
	return {
		backgound: "#FFFFFF",
		variant: "#1c1c1c",
		primary: "rgb(0, 137, 123)",
		primaryColorLight: "rgba(0, 88, 80, 0.85)",
		primaryColorVariant: "rgba(0, 88, 80, 0.2)",
		textColor: "#000000",
		colorLight: "rgba(0, 0, 0, 0.75)",
		white: "#FFFFFF"
	}
}

export const darkTheme = () => {
	return {
		backgound: "#000B11",
		variant: "#1c1c1c",
		primary: "rgb(0, 137, 123)",
		primaryColorLight: "rgba(0, 88, 80, 0.65)",
		primaryColorVariant: "rgba(0, 88, 80, 0.2)",
		textColor: "#FFFFFF",
		colorLight: "rgba(255, 255, 255, 0.75)",
		white: "#FFFFFF"
	}
}

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		border: 0;
		outline: 0;
		box-sizing: border-box;
		list-style: none;
		text-decoration: none;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-family: "Poppins", sans-serif;
		background: ${(props) => props.theme.backgound};
		line-height: 1.7;
		background-size: 100vw 100vh;
		transition: 0.5s;
	}

	body::-webkit-scrollbar {
		width: 0.3rem;
	}

	body::-webkit-scrollbar-thumb {
		background: ${(props) => props.theme.primary};
		border-radius: 10px;
	}

	.container {
		width: var(--container-width-lg);
		margin: 0 auto;
	}

	h1,
	h2,
	h3,
	h4,
	h5 {
		font-weight: 400;
	}

	h1 {
		font-size: 2.5rem;
	}

	section {
		margin-top: 8rem;
	}

	section > h2,
	section > h5 {
		text-align: center;
		color: ${(props) => props.theme.colorLight};
	}

	section > h2 {
		color: ${(props) => props.theme.primary};
		margin-bottom: 3rem;
	}

	.text-light {
		color: ${(props) => props.theme.colorLight};
	}

	a {
		color: ${(props) => props.theme.primary};
		transition: var(--transition);
	}

	a:hover {
		color: ${(props) => props.theme.textColor};
	}


	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}
	.btn {
		width: max-content;
		display: inline-block;
		color: ${(props) => props.theme.primary};
		padding: 0.75rem;
		cursor: pointer;
		overflow: hidden;
		border: 1px solid ${(props) => props.theme.primary};
		color: ${(props) => props.theme.textColor};
		box-shadow: 0.1rem 0.1rem 0.2rem 0 ${(props) => props.theme.primary};
		border-radius: 2px;
	}

	
	.btn span{
		position: absolute;
		display: block;
	}
				
	.btn span:nth-child(1){
		top: 0;
		left: -100%;
		width: 100%;
		height: 0;
	}

	.btn span:nth-child(3){
		bottom: 0;
		right: -100%;
		width: 100%;
		height: 0;
	}

	.btn span:nth-child(2){
		top: -100%;
		right: 0;
		width: 0;
		height: 100%;
	}
	
	.btn span:nth-child(4){
		bottom: -100%;
		left: 0;
		width: 0;
		height: 100%;
	}

	
	.btn:hover, .btn:focus {
		transform: translateY(-3px);
			-webkit-transform: translateY(-3px);
			-moz-transform: translateY(-3px);
			-ms-transform: translateY(-3px);
			-o-transform: translateY(-3px);
			box-shadow: 0 0 1rem 0 ${(props) => props.theme.primary};
			-webkit-box-reflect: below 0 linear-gradient(transparent, ${(props) => props.theme.primary});
	}

	.btn:active {
		transform: translateY(3px);
			-webkit-transform: translateY(3px);
			-moz-transform: translateY(3px);
			-ms-transform: translateY(3px);
			-o-transform: translateY(3px);
			box-shadow: 0 0 1rem 0 ${(props) => props.theme.primary};
			-webkit-box-reflect: below 0 linear-gradient(transparent, ${(props) => props.theme.primary});
	}
				
	.btn:hover span:nth-child(1){
		background-image: linear-gradient(90deg, transparent, ${(props) => props.theme.primary});
		height: 3px;
		left: 100%;
		transition: 1s;
			-webkit-transition: 1s;
			-moz-transition: 1s;
			-ms-transition: 1s;
			-o-transition: 1s;
	}
	
	.btn:hover span:nth-child(3){
		background-image: linear-gradient(270deg, transparent, ${(props) => props.theme.primary});
		height: 3px;
		right: 100%;
		transition: 1s;
			-webkit-transition: 1s;
			-moz-transition: 1s;
			-ms-transition: 1s;
			-o-transition: 1s;
		transition-delay: 0.5s;
	}
	
	.btn:hover span:nth-child(2){
		background-image: linear-gradient(180deg, transparent, ${(props) => props.theme.primary});
		width: 3px;
		top: 100%;
		transition: 1s;
			-webkit-transition: 1s;
			-moz-transition: 1s;
			-ms-transition: 1s;
			-o-transition: 1s;
		transition-delay: 0.25s;
	}
	
	.btn:hover span:nth-child(4){
		background-image: linear-gradient(360deg, transparent, ${(props) => props.theme.primary});
		width: 3px;
		bottom: 100%;
		transition: 1s;
			-webkit-transition: 1s;
			-moz-transition: 1s;
			-ms-transition: 1s;
			-o-transition: 1s;
		transition-delay: 0.75s;
	}

	.btn:hover {
		border-color: ${(props) => props.theme.backgound};
	}

	.btn-primary {
		background:${(props) => props.theme.primary};
	}

	.btn-primary:hover {
		background: none;
	}


	@media screen and (min-width: 2160px) {
		.btn, .btn-primary {
			font-size: 2.5rem !important;
		} 
		.btn {
			border: 2px solid ${(props) => props.theme.primary};

			&:hover, &:focus {
				box-shadow: 0 0 2.5rem 0 ${(props) => props.theme.primary};
			}

			&:hover span {
				width: 7px;
			}
		}
	}


	@media screen and (min-width: 2160px) {
		h5 {
			font-size: 2.5rem;
		}
		h1 {
			font-size: 6rem;
		}
		h2 {
			font-size: 5rem;
		}

		.container {
			width: var(--container-width-xl);
		}
	}


	@media screen and (max-width: 1024px) {
		.container {
			width: var(--container-width-md);
		}

		section {
			margin-top: 6rem;
		}
	}

	@media screen and (max-width: 600px) {
		.container {
			width: var(--container-width-sm);
		}

		section > h2 {
			margin-bottom: 2rem;
		}
	}

`