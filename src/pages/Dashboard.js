import PlayCard from "../components/Card/PlayCard";
import useFetch from "../hooks/useFetch";
const Dashboard = () => {
	// const [image, setImage] = useState("");

	// useEffect(() => {
	// 	apiClient.get("https://api.spotify.com/v1/me/playlists").then((res) => {
	// 		const data = res.data;
	// 		console.log(data);
	// 		data.items.map((item) => console.log(item));
	// 	});
	// }, []);
	return (
		<>
			<PlayCard />
		</>
	);
};

export default Dashboard;
