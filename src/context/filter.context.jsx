import { createContext, useContext, useReducer } from "react";

const defaultValue = {
	region: "",
	country: "",
};

const FilterContext = createContext();

function filterReducer(state, action) {
	switch (action.type) {
		case "country": {
			return {
				...state,
				country: action.country,
			};
		}

		case "region": {
			return {
				...state,
				region: action.region,
			};
		}
	}
}

function FilterProvider({ children }) {
	const [state, dispatch] = useReducer(filterReducer, defaultValue);

	const filterCountry = (e) => {
		dispatch({
			type: "country",
			country: `${e.target.value}`.toLowerCase(),
		});
	};

	const filterRegion = (e) => {
		dispatch({ type: "region", region: e.target.value });
	};

	return (
		<FilterContext.Provider
			value={{ state, dispatch, filterCountry, filterRegion }}
		>
			{children}
		</FilterContext.Provider>
	);
}

function useFilterContext() {
	return useContext(FilterContext);
}

export { FilterProvider, useFilterContext };
