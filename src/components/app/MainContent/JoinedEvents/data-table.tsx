"use client";

import * as React from "react";
import {
	useReactTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	flexRender,
	type ColumnDef,
	type SortingState,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Download, Eye, Search } from "lucide-react";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [globalFilter, setGlobalFilter] = React.useState("");

	const table = useReactTable({
		data,
		columns,
		state: {
			sorting,
			globalFilter,
		},
		onSortingChange: setSorting,
		onGlobalFilterChange: setGlobalFilter,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 3,
			},
		},
	});

	return (
		<div className="space-y-2 max-w-screen">
			<section className="flex items-center justify-end space-x-2 border-b p-2 px-6">
				<Button
					className="flex items-center space-x-1 ring-1 ring-gray-200 cursor-pointer"
					variant="secondary"
				>
					<Eye />
					<span>View</span>
				</Button>

				<Button
					className="ring-1 ring-gray-200 cursor-pointer"
					variant="secondary"
				>
					<Download />
				</Button>
			</section>

			<section className="flex items-center relative px-6">
				<Search className="absolute ml-2" />
				<Input
					placeholder="Search"
					value={globalFilter}
					onChange={(e) => setGlobalFilter(e.target.value)}
					className="w-full pl-10"
				/>
			</section>

			{/* table */}
			<div className="border bg-white">
				<Table>
					<TableHeader className="bg-gray-100 text-xs">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} className="font-bold text-center">
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
											  )}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell
											key={cell.id}
											className="text-xs text-center text-gray-500"
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center text-gray-500"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>

			{/* pagination */}
			<div className="flex items-center justify-between px-6 pb-2">
				<section>
					<span className="text-sm font-semibold text-gray-500">
						Showing{" "}
						{table.getState().pagination.pageIndex *
							table.getState().pagination.pageSize +
							1}
						{"-"}
						{Math.min(
							(table.getState().pagination.pageIndex + 1) *
								table.getState().pagination.pageSize,
							table.getFilteredRowModel().rows.length
						)}{" "}
						of {table.getFilteredRowModel().rows.length}
					</span>
				</section>
				<section>
					<Button
						className="rounded-r-none"
						variant="outline"
						size="sm"
						onClick={() => table.previousPage()}
						disabled={!table.getCanPreviousPage()}
					>
						<ChevronLeft />
					</Button>
					<Button
						className="rounded-l-none"
						variant="outline"
						size="sm"
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}
					>
						<ChevronRight />
					</Button>
				</section>
			</div>
		</div>
	);
}
