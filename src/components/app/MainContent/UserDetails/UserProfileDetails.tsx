import { Clock } from "lucide-react";
import Avatar from "../../../../assets/avatar.svg";

export default function UserProfileDetails() {
	return (
		<section className="lg:w-3/12 flex flex-col items-center text-xs space-y-2 pb-4 lg:pb-0">
			<img src={Avatar} alt="avatar" className="bg-gray-300 rounded-full" />
			<span className="font-bold text-lg mb-0">Moahmed hamed</span>
			<span className="text-blue-400">@username</span>
			<div className="text-xxs flex items-center space-x-2">
				<span className="block">
					Following : <span className="font-bold">180</span>
				</span>
				<span className="block">
					Followers : <span className="font-bold">134</span>
				</span>
			</div>
			<div className="space-x-2 flex items-center">
				<span className="font-semibold text-green-800 bg-green-100 rounded-md px-1.5 py-0.5 block">
					320 pt
				</span>
				<span className="font-semibold text-green-800 bg-green-100 rounded-md px-1.5 py-0.5 block">
					1800 qr
				</span>
			</div>
			<div className="flex items-center space-x-1 text-gray-300">
				<Clock size={12} />
				<span className="text-xxs block">Up to date</span>
			</div>
		</section>
	);
}
