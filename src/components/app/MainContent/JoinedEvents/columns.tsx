import { Checkbox } from "@/components/ui/checkbox";
import { type ColumnDef } from "@tanstack/react-table";
import { Eye } from "lucide-react";

export type Event = {
	id: string;
	name: string;
	joined_at: string;
	ticket_qte: number;
	total: number;
	finished_at: string;
	achievement: number;
	reward: number;
};

export const columns: ColumnDef<Event>[] = [
	{
		id: "select",
		header: ({ table }) => (
			<Checkbox
				checked={
					table.getIsAllPageRowsSelected() ||
					(table.getIsSomePageRowsSelected() && "indeterminate")
				}
				onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
				aria-label="Select all"
			/>
		),
		cell: ({ row }) => (
			<Checkbox
				checked={row.getIsSelected()}
				onCheckedChange={(value) => row.toggleSelected(!!value)}
				aria-label="Select row"
			/>
		),
		enableSorting: false,
		enableHiding: false,
	},
	{
		accessorKey: "name",
		header: "Event Name",
		cell: ({ row }) => {
			return (
				<div className="flex items-center space-x-1">
					<img
						src="https://placehold.co/400"
						alt="placeholder"
						className="w-6 h-fit rounded-full"
					/>
					<span>{row.getValue("name")}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "joined_at",
		header: "Joined at",
		cell: ({ row }) => {
			const date = new Date(row.getValue("joined_at") as string);
			return (
				<div className="flex flex-col text-center">
					<span>
						{date.getFullYear()}-
						{(date.getMonth() + 1).toString().padStart(2, "0")}-
						{date.getDate().toString().padStart(2, "0")}
					</span>
					<span className="text-xxs text-muted-foreground">
						{date.toLocaleTimeString([], {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "ticket_qte",
		header: "Ticket qty",
		cell: ({ row }) => {
			const value = Number(row.getValue("ticket_qte"));
			return <div>x{value.toFixed(0)}</div>;
		},
	},
	{
		accessorKey: "total",
		header: "Total amount (pte/cash)",
		cell: ({ row }) => {
			const value = Number(row.getValue("total"));
			return <div>{value.toFixed(0)} pts</div>;
		},
	},
	{
		accessorKey: "finished_at",
		header: "Finished at",
		cell: ({ row }) => {
			const date = new Date(row.getValue("finished_at") as string);
			return (
				<div className="flex flex-col text-center">
					<span>
						{date.getFullYear()}-
						{(date.getMonth() + 1).toString().padStart(2, "0")}-
						{date.getDate().toString().padStart(2, "0")}
					</span>
					<span className="text-xxs text-muted-foreground">
						{date.toLocaleTimeString([], {
							hour: "2-digit",
							minute: "2-digit",
						})}
					</span>
				</div>
			);
		},
	},
	{
		accessorKey: "achievement",
		header: "Achievement",
		cell: ({ row }) => {
			function formatOrdinal(n: number) {
				const s = ["th", "st", "nd", "rd"];
				const v = n % 100;
				return s[(v - 20) % 10] || s[v] || s[0];
			}

			const value = Number(row.getValue("achievement"));
			return (
				<div>
					{value}
					<sup>{formatOrdinal(value)}</sup> place
				</div>
			);
		},
	},
	{
		accessorKey: "reward",
		header: "Reward (pts/cash)",
		cell: ({ row }) => {
			const value = Number(row.getValue("reward"));
			return <div>{value.toFixed(0)} pts</div>;
		},
	},
	{
		id: "actions",
		header: "Actions",
		cell: ({}) => {
			return <Eye className="w-4" />;
		},
	},
];
