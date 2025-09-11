import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Sidebar, SidebarContent } from "../../ui/sidebar";
import { ChevronDown, Users } from "lucide-react";
import Element from "./Element";

import POKFIT from "../../../assets/POKFIT..png";
import { useState } from "react";

function SubElements({ label, className }: any) {
	return (
		<div className="relative flex items-center">
			<div className="absolute left-2 w-8 h-0.5 bg-gray-300"></div>
			<Element
				className={`font-bold pl-6 text-gray-500 hover:text-gray-700 ${className}`}
			>
				{label}
			</Element>
		</div>
	);
}

function AppSidebar() {
	const [open, setOpen] = useState(true);

	return (
		<Sidebar className="!border-r-0">
			<SidebarContent className="p-4 space-y-8 bg-white">
				<h1 className="font-bold text-2xl flex items-center justify-center">
					<img src={POKFIT} alt="logo" />
				</h1>
				<Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
					<CollapsibleTrigger className="text-sm flex items-center justify-between space-x-2 w-full bg-blue-400 text-white p-2 rounded-md">
						<Users className="h-6" />
						<span className="block flex-1 text-left">Users</span>
						<ChevronDown className="h-4" />
					</CollapsibleTrigger>

					<CollapsibleContent className="relative flex flex-col space-y-4 text-xs">
						<div className="absolute left-2 top-0 h-11/12 w-0.5 bg-gray-300"></div>

						<SubElements label="All Users" className="!text-black" />

						<SubElements label="Statistics" />

						<SubElements label="Transactions" />

						<SubElements label="Surveys" />
					</CollapsibleContent>
				</Collapsible>
			</SidebarContent>
		</Sidebar>
	);
}

export default AppSidebar;
