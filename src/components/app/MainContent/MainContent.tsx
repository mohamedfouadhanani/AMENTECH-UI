import BigAlert from "./BigAlert";
import JoinedEvents from "./JoinedEvents/JoinedEvents";
import Statistics from "./Statistics/Statistics";
import UserDetails from "./UserDetails/UserDetails";

function MainContent() {
	return (
		<main className="p-4 w-screen lg:w-full border-l border-t border-gray-200">
			<BigAlert
				className="mb-4"
				title="This user has been banned by the pokfit support team."
			>
				Request number <span className="font-bold">044557HS</span>, action taken
				by <span className="font-bold">@mohamed</span> from the support team,
				reason : <br></br> -Voilation of <span className="font-bold">T&C</span>.
			</BigAlert>

			<UserDetails />

			<Statistics />

			<JoinedEvents />
		</main>
	);
}

export default MainContent;
