import React, {useContext} from "react";
import { InteractionProvider } from "./context APIs/interactionAPI";
import { About, Contact, Experience, Footer, Header, NavBar, Testimonial, Portfolio } from './component'
import { SnackbarProvider } from 'notistack';
import styled, {ThemeProvider} from 'styled-components';
import {ThemeContextAPI} from './context APIs/themeContextAPI'
import { AccentContextAPI } from "./context APIs/accentContextAPI";
import {lightTheme, darkTheme, GlobalStyles} from './theme'

const StyledApp = styled.div``

function App() {
	const {theme} = useContext(ThemeContextAPI);
	const {accent} = useContext(AccentContextAPI);

	return (
		<StyledApp>
			<ThemeProvider theme={theme === "light" ? lightTheme(accent): darkTheme(accent)}>
				<SnackbarProvider maxSnack={4}>
					<InteractionProvider>
						<GlobalStyles/>
						<Header />
						<NavBar />
						<About />
						<Experience />
						<Portfolio />
						<Testimonial />
						<Contact />
						<Footer />
					</InteractionProvider>
				</SnackbarProvider>
			</ThemeProvider>
		</StyledApp>
	);
}

export default App;
