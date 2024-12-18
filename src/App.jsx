import { Chart } from "react-google-charts";
import './App.css'

function App() {
  const data = [
    ["Задача", "Часов в день"],
    ["Бьюти-рутина", 1],
    ["Сон", 8],
    ["Зарядка", 1],
    ["Прием пищи", 2],
    ["Учеба", 9],
    ["Уборка", 2],
    ["Поход за продуктами", 1],
    ["Приготовление еды", 2],
    ["Просмотр телевизора", 3],
  ];

  const options = {
    title: "Моя повседневная активность",
    pieHole: 0.4, // Создает кольцевую диаграмму. Ничего не делаю, если включен is3D 
    is3D: true, // Включает 3D-вид
    slices: {
      7: { offset: 0.2 }, // Взрывает второй срез
    },
    pieStartAngle: 30, // Поворачивает диаграмму
    sliceVisibilityThreshold: 0.02, // Скрывает срезы размером менее 2%
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#233238",
        fontSize: 14,
      },
    },
    colors: ["#8AD1C2", "#9F8AD1", "#D18A99", "#BCD18A", "#D1C28A", "#fd9a5c", "#ffe975", "#e6b4fd", "#f8847a"],
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
