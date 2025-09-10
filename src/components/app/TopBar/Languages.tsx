import "flag-icons/css/flag-icons.min.css";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const LANGUAGES = [
	{
		icon: "fi-gb",
		name: "English",
	},
	{
		icon: "fi-fr",
		name: "Français",
	},
	{
		icon: "fi-sa",
		name: "العربية",
	},
];

function Languages() {
	const [language, setLanguage] = useState(LANGUAGES[0]);
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				asChild
				className="flex items-center space-x-4 cursor-pointer"
			>
				<section>
					<span className={`text-2xl rounded fi ${language.icon}`}></span>
					<span className="font-light text-xs">{language.name}</span>
					<ChevronDown className="w-4 text-gray-400" />
				</section>
			</PopoverTrigger>
			<PopoverContent className="flex flex-col items-start space-y-2 w-fit p-1">
				{LANGUAGES.map((language, index) => (
					<button
						key={index}
						className="space-x-2 flex items-center hover:bg-gray-100 p-2 rounded cursor-pointer w-full"
						onClick={() => {
							setLanguage(LANGUAGES[index]);
							setOpen(false);
						}}
					>
						<span className={`text-2xl rounded fi ${language.icon}`}></span>
						<span className="font-light text-xs">{language.name}</span>
					</button>
				))}
			</PopoverContent>
		</Popover>
	);
}

export default Languages;
