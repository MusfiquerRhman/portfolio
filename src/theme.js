import { createGlobalStyle } from "styled-components"

const commonColors = {
	primaryColorVariant: "rgba(0, 88, 80, 0.2)",
	white: "#FFFFFF"
}

const commonLighColors = {
	backgound: "#FFFFFF",
	textColor: "#000000",
	colorLight: "rgba(0, 0, 0, 0.75)",
}

const commonDarkColors = {
	backgound: "#000B11",
	textColor: "#FFFFFF",
	colorLight: "rgba(255, 255, 255, 0.75)",
}

export const lightTheme = (accent) => {
	let accentColors = {};
	if(accent === 'teal'){
		accentColors.primaryColorLight = "rgba(0, 88, 80, 0.85)";
		accentColors.primary = "rgb(0, 137, 123)";
	}
	else if(accent === 'red'){
		accentColors.primaryColorLight = "rgba(244, 67, 54, 0.85)";
		accentColors.primary = "rgb(244, 67, 54)";
	}
	else if(accent === 'pink'){
		accentColors.primaryColorLight = "rgba(233, 30, 99, 0.85)";
		accentColors.primary = "rgb(233, 30, 99)";
	}
	else if(accent === 'purple'){
		accentColors.primaryColorLight = "rgba(165, 39, 176, 0.85)";
		accentColors.primary = "rgb(165, 39, 176)";
	}
	else if(accent === 'blue'){
		accentColors.primaryColorLight = "rgba(33, 150, 243, 0.85)";
		accentColors.primary = "rgb(33, 150, 243)";
	}
	else if(accent === 'green'){
		accentColors.primaryColorLight = "rgba(67, 160, 71, 0.85)";
		accentColors.primary = "rgb(67, 160, 71)";
	}
	return {
		...accentColors, 
		...commonLighColors, 
		...commonColors
	}
}

export const darkTheme = (accent) => {
	let accentColors = {};
	if(accent === 'teal'){
		accentColors.primaryColorLight = "rgba(0, 88, 80, 0.65)";
		accentColors.primary = "rgb(0, 137, 123)";
	}
	else if(accent === 'red'){
		accentColors.primaryColorLight = "rgba(244, 67, 54, 0.65)";
		accentColors.primary = "rgb(244, 67, 54)";
	}
	else if(accent === 'pink'){
		accentColors.primaryColorLight = "rgba(233, 30, 99, 0.65)";
		accentColors.primary = "rgb(233, 30, 99)";
	}
	else if(accent === 'purple'){
		accentColors.primaryColorLight = "rgba(165, 39, 176, 0.65)";
		accentColors.primary = "rgb(165, 39, 176)";
	}
	else if(accent === 'blue'){
		accentColors.primaryColorLight = "rgba(33, 150, 243, 0.65)";
		accentColors.primary = "rgb(33, 150, 243)";
	}
	else if(accent === 'green'){
		accentColors.primaryColorLight = "rgba(67, 160, 71, 0.65)";
		accentColors.primary = "rgb(67, 160, 71)";
	}
	return {
		...accentColors,
		...commonDarkColors,
		...commonColors
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

		&::-webkit-scrollbar {
			width: 0.3rem;
		}

		&::-webkit-scrollbar-thumb {
			background: ${(props) => props.theme.primary};
			border-radius: 10px;
		}
	}



	.container {
		width: var(--container-width-lg);
		margin: 0 auto;
	}

	h1, h2,	h3,	h4,	h5 {
		font-weight: 400;
	}

	h1 {
		font-size: 2.5rem;
	}

	section {
		margin-top: 8rem;
	}

	section > h2, section > h5 {
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

		&:hover {
			color: ${(props) => props.theme.textColor};
		}
	}

	img {
		display: block;
		width: 100%;
		object-fit: cover;
	}

	.btn {
		width: max-content;
		display: inline-block;
		color: ${(props) => props.theme.textColor};
		padding: 0.75rem;
		cursor: pointer;
		overflow: hidden;
		border: 1px solid ${(props) => props.theme.primary};
		box-shadow: 0.1rem 0.1rem 0.2rem 0 ${(props) => props.theme.primary};
		border-radius: 2px;

		& span{
			position: absolute;
			display: block;
		}
					
		& span:nth-child(1){
			top: 0;
			left: -100%;
			width: 100%;
			height: 0;
		}

		& span:nth-child(3){
			bottom: 0;
			right: -100%;
			width: 100%;
			height: 0;
		}

		& span:nth-child(2){
			top: -100%;
			right: 0;
			width: 0;
			height: 100%;
		}
		
		& span:nth-child(4){
			bottom: -100%;
			left: 0;
			width: 0;
			height: 100%;
		}

		&:hover, &:focus {
			transform: translateY(-3px);
			box-shadow: 0 0 1rem 0 ${(props) => props.theme.primary};
				-webkit-transform: translateY(-3px);
				-moz-transform: translateY(-3px);
				-ms-transform: translateY(-3px);
				-o-transform: translateY(-3px);
				-webkit-box-reflect: below 0 linear-gradient(transparent, ${(props) => props.theme.primary});
		}

		&:active {
			transform: translateY(3px);
			box-shadow: 0 0 1rem 0 ${(props) => props.theme.primary};
				-webkit-transform: translateY(3px);
				-moz-transform: translateY(3px);
				-ms-transform: translateY(3px);
				-o-transform: translateY(3px);
				-webkit-box-reflect: below 0 linear-gradient(transparent, ${(props) => props.theme.primary});
		}
					
		&:hover span:nth-child(1){
			background-image: linear-gradient(90deg, transparent, ${(props) => props.theme.primary});
			height: 3px;
			left: 100%;
			transition: 1s;
				-webkit-transition: 1s;
				-moz-transition: 1s;
				-ms-transition: 1s;
				-o-transition: 1s;
		}


		&:hover span:nth-child(3){
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
		
		&:hover span:nth-child(2){
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
		
		&:hover span:nth-child(4){
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

		&:hover {
			border-color: ${(props) => props.theme.backgound};
		}

        .btn-primary {
            font-weight: bold;
            background: ${(props) => props.theme.primary};
        }

		.btn-primary:hover {
			background: none;
		}

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