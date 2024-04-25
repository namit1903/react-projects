import Chart from "react-apexcharts";
export const StockChart=({chartData})=>{
  const {day,week,year}=chartData;
  const options={chartOptionstitle:{
    text:symbol,
    align:"center",
    style:{
      fontSize:"24px"
    }
  },
chart:{
  id:"stock-data",
  animations:{
    speed:1300
  }
},
xaxis:{
  type:"datetime"
}}
const series=[{name:symbol, data:day}]
  return <div className="mt-5 p-4 shadow-sm bg-white">
    <Chart options={options} series={series} type="area" width="100%"></Chart>
  </div>
}