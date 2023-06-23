import Background from "./DashboardComponents/Background"
import App from "../App";
import Layout from "./DashboardComponents/Layout";
import PatientContextProvider from "./PatientGlobalState";

const Dashboard = (props) => {
     return (
    
         <Background>
             <Layout>
                 <PatientContextProvider>
                     {props.children}
                </PatientContextProvider>
             </Layout>
         </Background>
    
     )
}

export default Dashboard;