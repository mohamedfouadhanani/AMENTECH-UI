import AppSidebar from "./components/app/Sidebar/Sidebar";
import {
	SidebarProvider,
	SidebarTrigger,
	useSidebar,
} from "./components/ui/sidebar";

function App() {
	let { isMobile } = useSidebar();

	return (
		<main>
			<AppSidebar></AppSidebar>
			<section>{isMobile && <SidebarTrigger></SidebarTrigger>}</section>
		</main>
	);
}

export default App;
