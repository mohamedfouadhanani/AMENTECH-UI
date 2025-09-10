import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Sidebar, SidebarContent } from "../../ui/sidebar";
import { ChevronDown, Users } from "lucide-react";
import Element from "./Element";

function AppSidebar() {
	return (
		<Sidebar className="!border-r-0">
			<SidebarContent className="p-4 space-y-8 bg-white">
				<h1 className="text-center font-bold text-2xl block">POKFIT.</h1>
				<Collapsible className="space-y-2">
					<CollapsibleTrigger className="text-sm flex items-center justify-between space-x-2 w-full bg-blue-400 text-white p-2 rounded-md">
						<Users className="h-6" />
						<span className="block flex-1 text-left">Users</span>
						<ChevronDown className="h-4" />
					</CollapsibleTrigger>
					<CollapsibleContent className="flex flex-col space-y-4 text-xs">
						<Element className="font-bold">All Users</Element>
						<Element>Statistics</Element>
						<Element>Transactions</Element>
						<Element>Survey</Element>
					</CollapsibleContent>
				</Collapsible>
			</SidebarContent>
		</Sidebar>
	);
}

export default AppSidebar;
