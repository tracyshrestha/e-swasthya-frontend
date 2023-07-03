import { Chart } from "react-google-charts";


const Chartspie = () => {
    const options = {
        title: "Covid Immunization",
      };
      const data = [
        ["Task", "Hours per Day"],
        ["Moderna", 11],
        ["Vaxzevria", 2],
        ["Janssen", 2],
        ["Covaxin", 2],
        ["Covilo", 7],
      ];
    return (
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"500px"}
      />
    ) 
}


export default Chartspie;