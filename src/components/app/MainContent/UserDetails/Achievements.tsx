import FirstPlaceAchievement from "../../../../assets/first place achievement.png";

function Achievement({ src, alt, label }: any) {
	return (
		<section className="flex flex-col items-center space-y-1">
			<img src={src} alt={alt} className="w-12" />
			<span className="text-xxs font-bold">{label}</span>
		</section>
	);
}

export default function Achievements() {
	return (
		<section className="flex-1 space-y-4">
			<span className="font-bold text-xs block">Achievement</span>
			<section className="flex items-center space-x-4">
				<Achievement
					src={FirstPlaceAchievement}
					alt="first place"
					label="First place"
				/>
			</section>
		</section>
	);
}
