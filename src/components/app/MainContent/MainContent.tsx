import BigAlert from "./BigAlert";
import Statistics from "./Statistics/Statistics";

function MainContent() {
	return (
		<main className="p-4">
			<BigAlert
				className="mb-4"
				title="This user has been banned by the pokfit support team."
			>
				Request number <span className="font-bold">044557HS</span>, action taken
				by <span className="font-bold">@mohamed</span> from the support team,
				reason : <br></br> -Voilation of <span className="font-bold">T&C</span>.
			</BigAlert>

			<Statistics />
		</main>
	);
}

export default MainContent;
