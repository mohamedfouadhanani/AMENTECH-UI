import { columns } from "./columns";
import { DataTable } from "./data-table";

const EVENTS = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => ({
	id: `${index}`,
	name: `event ${index} name`,
	joined_at: "2025-09-01T12:00:00Z",
	ticket_qte: index,
	total: index,
	finished_at: "2025-10-01T12:00:00Z",
	achievement: index,
	reward: index,
}));

function JoinedEvents() {
	return (
		<section className="space-y-4">
			<button className="px-3 py-2 bg-white capitalize text-sm rounded-md text-gray-600 font-semibold border-4 border-gray-200">
				joined events
			</button>
			<section className="bg-white rounded-lg">
				<DataTable columns={columns} data={EVENTS} />
			</section>
		</section>
	);
}

export default JoinedEvents;
