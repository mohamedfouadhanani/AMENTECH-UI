import Header from "./Header";
import UserInfoDetails from "./UserInfoDetails";
import Achievements from "./Achievements";
import UserProfileDetails from "./UserProfileDetails";

function UserDetails() {
	return (
		<section className="mb-12 space-y-4">
			<Header />
			<section className="bg-white lg:flex lg:items-start rounded-lg ring ring-gray-200 p-4 divide-y lg:divide-y-0 lg:divide-x lg:space-x-4">
				<UserProfileDetails />
				<UserInfoDetails />
				<Achievements />
			</section>
		</section>
	);
}

export default UserDetails;
