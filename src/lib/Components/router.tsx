//export default {}
import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom';
import { connect, Provider } from 'react-redux';
// use local redux store and local history if shell is not running
import localStore from '../Redux/store';
import routePaths from '../Constants/routePaths';
import DefaultPage from '../Containers/Default';


const { MEDICATIONS } = routePaths;
const appRouter = ({
	store = localStore,
}: any) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Routes>
					<Route path={MEDICATIONS} Component={DefaultPage} />
				</Routes>
			</Provider>
		</BrowserRouter>
	);
};

const mapStateToProps = (state: any) => ({
});

export default connect(mapStateToProps, {
})(appRouter);
