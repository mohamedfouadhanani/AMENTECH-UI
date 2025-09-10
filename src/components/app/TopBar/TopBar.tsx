import Languages from "./Languages";
import Notifications from "./Notifications";
import Profile from "./Profile";

function TopBar() {
	return (
		<section className="flex justify-between items-center p-4 bg-white w-screen lg:w-full">
			<section>
				<h1 className="text-lg font-bold">Users</h1>
			</section>
			<section className="flex items-center space-x-2 lg:space-x-6">
				<Notifications />
				<Languages />
				<Profile />
			</section>
		</section>
	);
}

export default TopBar;
