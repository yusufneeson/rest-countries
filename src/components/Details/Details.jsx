import style from "./details.module.css";
import Image from "next/image";
import Link from "next/link";

function Details({ ...props }) {
	const { country, borders } = props;

	return (
		<div className={style.details}>
			<div className={style.flag}>
				<Image
					src={country.flag}
					alt={country.name}
					width="100%"
					height="50%"
					layout="responsive"
					objectFit="contain"
					priority
				/>
			</div>
			<div className={style.info}>
				<h1 className={style.name}>{country.name}</h1>
				<div className={style.flex}>
					<div className={style.row}>
						<p>
							<b>Native Name: </b>
							{country.nativeName}
						</p>
						<p>
							<b>Population: </b>
							{country.population}
						</p>
						<p>
							<b>Region: </b>
							{country.region}
						</p>
						<p>
							<b>Sub Region: </b>
							{country.subregion}
						</p>
						<p>
							<b>Capital: </b>
							{country.capital}
						</p>
					</div>
					<div className={style.row}>
						<p>
							<b>Top Level Domain: </b>
							{country.topLevelDomain}
						</p>
						<p>
							<b>Currencies: </b>
							{country.currencies
								.map((currency) => currency.name)
								.join(", ")}
						</p>
						<p>
							<b>Languages: </b>
							{country.languages
								.map((language) => language.name)
								.join(", ")}
						</p>
					</div>
				</div>
				<div className={style.border}>
					<b>Border Countries:</b>
					<ul>
						{borders.length > 0 ? (
							borders.map((border) => (
								<li key={border.code}>
									<Link
										href="/country/[id]"
										as={`/country/${border.code}`}
									>
										<a>{border.name}</a>
									</Link>
								</li>
							))
						) : (
							<li>No Border Countries</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Details;
