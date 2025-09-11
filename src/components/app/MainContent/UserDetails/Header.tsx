import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar, ChevronLeft, EllipsisVertical, Info, X } from "lucide-react";
import { useState } from "react";

function Header() {
	const [alertVisible, setAlertVisible] = useState(true);
	const [popOverVisible, setPopoverVisible] = useState(false);

	return (
		<section className="lg:flex lg:justify-between">
			<section className="flex items-center">
				<Button variant="ghost" className="hover:bg-gray-200 mr-2">
					<ChevronLeft className="h-2" />
				</Button>
				<span className="font-bold text-xl">Moahmed hamed</span>
			</section>

			<section className="space-y-2 lg:space-y-0 lg:flex lg:items-center space-x-2">
				{/* Alert */}
				{alertVisible && (
					<section className="w-full lg:w-fit p-2 text-sm bg-red-500 text-white rounded-lg flex items-center space-x-1">
						<Info className="w-4" />
						<span className="block flex-1 mr-8">This user has been banned</span>
						<button
							className="cursor-pointer"
							onClick={() => setAlertVisible(false)}
						>
							<X />
						</button>
					</section>
				)}
				<section className="space-x-2 bg-gray-200 p-1 rounded-lg w-fit">
					<Button variant="default">
						<Calendar />
						<span className="text-xxs">Calendar</span>
					</Button>
					<Popover open={popOverVisible} onOpenChange={setPopoverVisible}>
						<PopoverTrigger asChild>
							<Button variant="outline">
								<EllipsisVertical className="text-gray-500" />
							</Button>
						</PopoverTrigger>
						<PopoverContent className="p-0 w-32">
							<section className="flex items-center justify-between p-2">
								<span className="text-xs font-bold">Actions</span>
								<button
									className="cursor-pointer"
									onClick={() => setPopoverVisible(false)}
								>
									<X size={14} strokeWidth={3} />
								</button>
							</section>
							<hr />
							<section className="flex flex-col space-y-2 p-2 text-xs">
								<span className="p-2 hover:bg-gray-50 rounded-md hover:cursor-pointer">
									Contact
								</span>
								<span className="p-2 hover:bg-gray-50 rounded-md hover:cursor-pointer">
									Unban
								</span>
							</section>
						</PopoverContent>
					</Popover>
				</section>
			</section>
		</section>
	);
}

export default Header;
