import React, { useEffect } from "react";
import { useGetEntryList } from "../hooks/useGetEntryList";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
} from "@chakra-ui/react";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
);

export default function Stats() {
  const { entries } = useGetEntryList();

  return (
    <section>
      <EmotionsChart entries={entries} />
      <GradesChart entries={entries} />
      {/* <h3>Those are your grades: </h3>
      {entries.length ? (
        <Table
          variant="simple"
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Thead>
            <Tr>
              <Th>Grades</Th>
              <Th>How many times?</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>My day was a 1</Td>
              <Td>{count.once}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 2</Td>
              <Td>{count.twice}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 3</Td>
              <Td>{count.thrice}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 4</Td>
              <Td>{count.fourTimes}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 5</Td>
              <Td>{count.fiveTimes}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 6</Td>
              <Td>{count.sixTimes}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 7</Td>
              <Td>{count.sevenTimes}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 8</Td>
              <Td>{count.eightTimes}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 9</Td>
              <Td>{count.nineTimes}</Td>
            </Tr>
            <Tr>
              <Td>My day was a 10</Td>
              <Td>{count.tenTimes}</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Keep going!</Th>
            </Tr>
          </Tfoot>
        </Table>
      ) : (
        <span>sorry, no stats</span>
      )} */}
    </section>
  );
}

const EmotionsChart = ({ entries }) => {
  const getEmotions = () => {
    let emotionsCount = {};
    entries.forEach((entry) => {
      if (entry.emotion?.length > 0) {
        entry.emotion.forEach((emotion) => {
          if (emotionsCount[emotion]) {
            emotionsCount[emotion] = emotionsCount[emotion] + 1;
          } else {
            emotionsCount[emotion] = 1;
          }
        });
      }
    });
    return emotionsCount;
  };
  useEffect(() => {
    const emotionsData = getEmotions();
    const ctx = document.getElementById("emotionsChart");
    const data = {
      labels: Object.keys(emotionsData),
      datasets: [
        {
          label: "Emotions",
          data: Object.values(emotionsData),
          backgroundColor: [
            "green",
            "blue",
            "grey",
            "purple",
            "pink",
            "yellow",
            "orange",
            "red",
          ],
        },
      ],
    };
    const config = {
      type: "doughnut",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Emotions",
          },
        },
      },
    };
    const myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, [entries]);

  return (
    <Flex maxWidth="300px" margin="0 auto">
      <canvas id="emotionsChart" width="200" height="200"></canvas>
    </Flex>
  );
};

const GradesChart = ({ entries }) => {
  const count = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  };

  const getStats = () => {
    entries.forEach((entry) => (count[entry.grade] += 1));
    return count;
  };

  useEffect(() => {
    const gradesData = getStats();
    const ctx = document.getElementById("gradeChart");
    const data = {
      labels: Object.keys(gradesData),
      datasets: [
        {
          label: "Emotions",
          data: Object.values(gradesData),
          backgroundColor: [
            "green",
            "blue",
            "grey",
            "purple",
            "pink",
            "yellow",
            "orange",
            "red",
          ],
        },
      ],
    };
    const config = {
      type: "bar",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Grades",
          },
        },
      },
    };
    const myChart = new Chart(ctx, config);
    return () => {
      myChart.destroy();
    };
  }, [entries]);

  return (
    <Flex maxWidth="300px" margin="0 auto">
      <canvas id="gradeChart" width="200" height="200"></canvas>
    </Flex>
  );
};
