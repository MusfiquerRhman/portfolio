import React, {useContext} from "react";
import { InteractionProvider } from "./context APIs/interactionAPI";
import { About, Contact, Experience, Footer, Header, NavBar, Testimonial, Portfolio } from './component'
import { SnackbarProvider } from 'notistack';
import styled, {ThemeProvider} from 'styled-components';
import {ThemeContextAPI} from './context APIs/themeContextAPI'
import {lightTheme, darkTheme, GlobalStyles} from './theme'

const StyledApp = styled.div``

function App() {
	const {theme} = useContext(ThemeContextAPI);

	return (
		<StyledApp>
			<ThemeProvider theme={theme === "light" ? lightTheme: darkTheme}>
				<SnackbarProvider maxSnack={3}>
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
