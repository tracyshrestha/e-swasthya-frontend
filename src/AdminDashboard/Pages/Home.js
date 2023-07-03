import AdminHome from "./PageComponents/AdminHome";
import DashBoardContextProvider from "./PageComponents/Context/Dashboard";

const Home = () => {
    return (
        <DashBoardContextProvider>
              <AdminHome/>
        </DashBoardContextProvider>
    )
}

export default Home;