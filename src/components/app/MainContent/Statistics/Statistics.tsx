import { Wallet } from "lucide-react";
import StatCard from "./StatCard";

// icons
import Points from "../../../../assets/points.png";
import Goals from "../../../../assets/goals.png";
import Steps from "../../../../assets/steps.png";
import Calories from "../../../../assets/calories.png";
import Distance from "../../../../assets/distance.png";

function Statistics() {
	return (
		<section className="space-y-4 mb-4">
			<h1 className="font-bold">Statistics</h1>
			<section className="w-full space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4">
				<StatCard
					stat="Cash"
					icon={<Wallet />}
					value="186 Qr"
					link="http://www.google.com"
					linkText="Transaction history"
				/>
				<StatCard
					className="w-1/2"
					stat="Points"
					icon={<img src={Points} alt="Points" />}
					value="52166 pts"
					link="http://www.google.com"
					linkText="Transaction history"
				/>
			</section>
			<section className="space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
				<StatCard
					stat="Daily goals"
					icon={<img src={Goals} alt="Goals" />}
					value="25/50"
					link="http://www.google.com"
				/>
				<StatCard
					stat="Steps"
					icon={<img src={Steps} alt="Steps" />}
					value="186 Qr"
					link="http://www.google.com"
				/>
				<StatCard
					stat="Calories"
					icon={<img src={Calories} alt="Calories" />}
					value="186 Qr"
					link="http://www.google.com"
				/>
				<StatCard
					stat="Distance"
					icon={<img src={Distance} alt="Distance" />}
					value="187 KM"
					link="http://www.google.com"
				/>
			</section>
		</section>
	);
}

export default Statistics;
