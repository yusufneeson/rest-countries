import { useEffect, useState } from "react";
import { useFilterContext } from "../../context/filter.context";
import Card from "../Card/Card";
import style from "./countries.module.css";

function Countries({ countries }) {
	const { state } = useFilterContext();
	const [results, setResults] = useState(countries);

	useEffect(() => {
		const filteredCountry = countries.filter((c) => {
			return (
				c.name.toLowerCase().includes(state.country) &&
				(state.region !== ""
					? c.region.toLowerCase() === state.region
					: true)
			);
		});

		setResults(filteredCountry);
	}, [state.country, state.region, countries]);

	return (
		<section className={style.countries}>
			{results.map((country) => (
				<Card key={country.name} country={country} />
			))}
		</section>
	);
}

export default Countries;
