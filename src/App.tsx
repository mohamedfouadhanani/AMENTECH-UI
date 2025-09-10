import MainContent from "./components/app/MainContent/MainContent";
import AppSidebar from "./components/app/Sidebar/Sidebar";
import TopBar from "./components/app/TopBar/TopBar";
import { SidebarTrigger, useSidebar } from "./components/ui/sidebar";

function App() {
	let { isMobile } = useSidebar();

	return (
		<main className="flex w-full">
			<AppSidebar></AppSidebar>
			<section className="flex-1 bg-gray-50">
				{isMobile && (
					<SidebarTrigger className="absolute z-10"></SidebarTrigger>
				)}
				<TopBar />
				<MainContent />
			</section>
		</main>
	);
}

export default App;
