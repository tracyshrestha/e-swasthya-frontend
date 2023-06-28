import Background from "./DashboardComponents/Background"
import Layout from "./DashboardComponents/Layout";


const Dashboard = (props) => {
     return (
         <Background>
             <Layout>
                   {props.children}
             </Layout>
         </Background>
     )
}

export default Dashboard;