import { useEffect, useRef } from "react";
import Search from "../icons/Search";
import style from "./filter.module.css";

function Filter() {
	const inputRef = useRef(null);
	const selectRef = useRef(null);

	return (
		<section className={style.filter}>
			<form className={style.form}>
				<div className={style.search}>
					<input
						ref={inputRef}
						className={style.input}
						type="text"
						placeholder="Search for a country..."
					/>
					<Search className={style.search_icon} />
				</div>
				<div className={style.select}>
					<select ref={selectRef}>
						<option value="">Filter by Region</option>
						<option value="africa">Africa</option>
						<option value="americas">Americas</option>
						<option value="asia">Asia</option>
						<option value="europe">Europe</option>
						<option value="oceania">Oceania</option>
					</select>
				</div>
			</form>
		</section>
	);
}

export default Filter;
