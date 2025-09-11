function Info({ title, value, children }: any) {
	return (
		<section className="flex flex-col">
			<span className="text-xxs text-gray-500">{title}</span>
			{value && <span className="text-xs font-bold">{value}</span>}
			{children}
		</section>
	);
}

export default function UserInfoDetails() {
	return (
		<section className="py-4 lg:py-0 space-y-2 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4 whitespace-nowrap lg:w-6/12">
			<Info title="Created" value="Nov 22, 2022" />
			<Info title="Email" value="mohamed@gmail.com" />
			<Info title="Gender" value="Male" />
			<Info title="Subscription" value="Premium" />
			<Info title="Phone number" value="+974 5456 5466" />
			<Info title="Date of birth" value="21-01-1995" />
			<Info title="Renewal" value="Sep 22, 2025" />
			<Info title="User interests" value="sport, cycling, jogging" />
			<Info title="Visibility" value="Public" />
			<Info title="Status">
				<span className="text-xs text-red-800 bg-red-100 rounded-md font-bold w-fit px-1.5 py-0.5">
					Banned
				</span>
			</Info>
		</section>
	);
}
