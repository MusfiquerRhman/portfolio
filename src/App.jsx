import React from "react";
import { InteractionProvider } from "./context APIs/interactionAPI";
import { About, Contact, Experience, Footer, Header, NavBar, Testimonial, Portfolio } from './component'
import { SnackbarProvider } from 'notistack';
import Slide from '@material-ui/core/Slide';

function App() {
	return (
		<React.Fragment>
			<SnackbarProvider maxSnack={3}>
				<InteractionProvider
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					TransitionComponent={Slide}
				>
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
		</React.Fragment>
	);
}

export default App;
