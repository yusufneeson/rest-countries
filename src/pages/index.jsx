import Filter from "../components/Filter/Filter";
import HomeLayout from "../layout/HomeLayout";

export default function Index({ countries }) {
	return (
		<HomeLayout>
			<Filter />
		</HomeLayout>
	);
}
