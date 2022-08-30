import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./countries.module.css";

function Countries({ countries }) {
	const [results, setResults] = useState(countries);

	return (
		<section className={style.countries}>
			{results.map((country) => (
				<Card key={country.name} country={country} />
			))}
		</section>
	);
}

export default Countries;
