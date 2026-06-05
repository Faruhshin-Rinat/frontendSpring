import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PlayersGrid from "./components/PlayersGrid";

function List() {
  return (
    <div>
      <Navbar active="2" />
      <PlayersGrid />
      <Footer />
    </div>
  );
}

export default List;
