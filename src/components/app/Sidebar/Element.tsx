function Element({ children, className }: any) {
	return (
		<span className={`ml-8 cursor-pointer hover:font-bold ${className}`}>
			{children}
		</span>
	);
}

export default Element;
