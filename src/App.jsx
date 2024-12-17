import { Chart } from "react-google-charts";
import './App.css'

function App() {
  const data = [
    ["Задача", "Часов в день"],
    ["Работа", 9],
    ["Прием пищи", 2],
    ["Поездка на работу", 2],
    ["Просмотр телевизора", 2],
    ["Сон", 7],
    ["Зарядка", 1],
    ["Бьюти-рутина", 1],
    ["Уборка", 1],
  ];

  const options = {
    title: "Моя повседневная активность",
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true, // Enables 3D view
    // slices: {
    //   1: { offset: 0.2 }, // Explodes the second slice
    // },
    pieStartAngle: 100, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A"],
  };
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default App
