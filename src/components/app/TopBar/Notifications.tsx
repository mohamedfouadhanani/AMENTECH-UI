import BellIcon from "../../../assets/bell.svg";

function Notifications() {
	return (
		<section className="relative">
			<img src={BellIcon} className="h-5" alt="bell" />
			<span className="bg-[#F93C65] rounded-full text-xs w-4 text-center block text-white absolute -top-3 left-2">
				6
			</span>
		</section>
	);
}

export default Notifications;
