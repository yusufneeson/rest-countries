import style from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

function Card({ ...props }) {
	const { country } = props;
	return (
		<div className={style.card}>
			<Link href="/country/[id]" as={`/country/${country.alpha3Code}`}>
				<a>
					<Image
						src={country.flag}
						alt={country.name}
						width={265}
						height={160}
						layout="responsive"
						objectFit="cover"
						priority
					/>
					<div className={style.body}>
						<h3 className={style.title}>{country.name}</h3>
						<p>
							<b>Population: </b>
							{country.population}
						</p>
						<p>
							<b>Region: </b>
							{country.region}
						</p>
						<p>
							<b>Capital: </b>
							{country.capital}
						</p>
					</div>
				</a>
			</Link>
		</div>
	);
}

export default Card;
