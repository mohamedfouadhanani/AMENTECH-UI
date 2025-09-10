import { Info } from "lucide-react";

function BigAlert({ children, className, title }: any) {
	return (
		<section
			className={`bg-[#F93C65] text-white rounded-md px-6 py-4 flex items-center text-xs space-x-6 ${className}`}
		>
			<Info className="block" />
			<section className="flex flex-col">
				<span className="font-bold">{title}</span>
				<span className="font-light">{children}</span>
			</section>
		</section>
	);
}
export default BigAlert;
