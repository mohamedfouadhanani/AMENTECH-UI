function StatCard({ stat, icon, value, link, linkText, className }: any) {
	return (
		<section
			className={`bg-white p-4 w-full ${className} flex flex-col justify-between rounded-md`}
		>
			<section className="mb-4 flex justify-between items-center">
				<span className="text-sm text-stone-700">{stat}</span>
				<span>{icon}</span>
			</section>
			<section className="flex justify-between items-center">
				<span className="font-bold text-2xl">{value}</span>
				{link && linkText && (
					<a href={link} className="text-blue-400 underline text-xs">
						{linkText}
					</a>
				)}
			</section>
		</section>
	);
}

export default StatCard;
