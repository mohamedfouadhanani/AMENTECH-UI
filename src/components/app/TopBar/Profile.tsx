import Avatar from "../../../assets/avatar.png";
import { ChevronDownCircle } from "lucide-react";

function Profile() {
	return (
		<section className="flex space-x-4 items-center">
			<img className="rounded-full" src={Avatar} alt="avatar" />
			<section className="flex flex-col">
				<span className="font-semibold text-sm">Moni Roy</span>
				<span className="text-xs">Admin</span>
			</section>
			<ChevronDownCircle className="h-4 cursor-pointer"></ChevronDownCircle>
		</section>
	);
}

export default Profile;
