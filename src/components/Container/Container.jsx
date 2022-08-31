import style from "./container.module.css";
import Link from "next/link";
import ArrowLeft from "../icons/ArrowLeft";

function Container() {
	return (
		<section className={style.container}>
			<div className={style.container__back}>
				<Link href="/">
					<a className={style.back}>
						<ArrowLeft className={style.arrow} /> Back
					</a>
				</Link>
			</div>
		</section>
	);
}

export default Container;
