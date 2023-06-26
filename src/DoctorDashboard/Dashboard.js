import Background from "./DashboardComponents/Background"
import App from "../App";
import Layout from "./DashboardComponents/Layout";
import DoctorContextProvider from "./DoctorGlobalState";

const Dashboard = (props) => {
     return (

         <Background>
             <Layout>
                <DoctorContextProvider>
                   {props.children}
                </DoctorContextProvider>
             </Layout>
         </Background>
     )
}

export default Dashboard;