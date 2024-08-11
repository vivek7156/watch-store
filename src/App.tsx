import Faq from "./componenets/Faq";
import Features from "./componenets/Features";
import Footer from "./componenets/Footer";
import Header from "./componenets/Header";
import Navbar from "./componenets/Navbar";
import Order from "./componenets/Order";
import Overview from "./componenets/Overview";
import Reviews from "./componenets/Reviews";
import Video from "./componenets/Video";

const App = () => {
	return (
		<div className="w-full flex flex-col">
			<Navbar />
			<Header />
			<Overview />
			<Video />
			<Reviews />
			<Features />
			<Faq />
			<Order />
			<Footer />
		</div>
	);
};

export default App;