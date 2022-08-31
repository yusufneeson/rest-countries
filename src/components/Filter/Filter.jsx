import { useFilterContext } from "../../context/filter.context";
import Search from "../icons/Search";
import style from "./filter.module.css";

function Filter() {
	const { state, filterCountry, filterRegion } = useFilterContext();

	return (
		<section className={style.filter}>
			<div className={style.form}>
				<div className={style.search}>
					<input
						className={style.input}
						type="text"
						placeholder="Search for a country..."
						value={state.country}
						onChange={filterCountry}
					/>
					<Search className={style.search_icon} />
				</div>
				<div className={style.select}>
					<select value={state.region} onChange={filterRegion}>
						<option value="">Filter by Region</option>
						<option value="africa">Africa</option>
						<option value="americas">Americas</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</select>
				</div>
			</div>
		</section>
	);
}

export default Filter;
