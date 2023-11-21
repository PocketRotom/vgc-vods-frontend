/* eslint-disable react/prop-types */
import React, { createContext, useContext } from 'react';

const AppContext = createContext();

const AppProvider = (props) => {

	const [spoilers, setSpoilers] = React.useState(false);
  
	return (
		<AppContext.Provider value={{
			spoilers,
			setSpoilers
		}}>
			<>{props.children}</>
		</AppContext.Provider>
	);
};

const useApp = () => {
	return useContext(AppContext);
};

export { AppProvider, useApp };