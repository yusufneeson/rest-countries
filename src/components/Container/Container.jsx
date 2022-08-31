import style from "./container.module.css";
import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";
import Details from "../Details/Details";
import { useRouter } from "next/router";

function Container({ country, borders }) {
	const router = useRouter();
	return (
		<section className={style.container}>
			<div className={style.container__back}>
				<a className={style.back} onClick={() => router.back()}>
					<ArrowLeft className={style.arrow} /> Back
				</a>
			</div>
			<Details country={country} borders={borders} />
		</section>
	);
}

export default Container;
