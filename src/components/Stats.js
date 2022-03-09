import React, { useEffect } from "react";
import { useGetEntryList } from "../hooks/useGetEntryList";
import { Flex, Heading, Text, Button, Container } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
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
      {entries > 0 ? (
        <>
          <Heading textAlign={"center"} margin={"3rem 1rem"}>
            How have you been{" "}
            <Text as={"span"} color={"purple.400"}>
              feeling
            </Text>{" "}
            lately?
          </Heading>

          <Flex gap="40px" justifyContent={"center"} flexWrap={"wrap"}>
            <EmotionsChart entries={entries} />
            <GradesChart entries={entries} />
          </Flex>
        </>
      ) : (
        <Container>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            flexDir={"column"}
            marginBottom={"4rem "}
          >
            <Heading textAlign={"center"} margin={"3rem 1rem"}>
              {" "}
              Looks like you haven't started yet!
              <br />
              <br /> Get to know
              <Text as={"span"} color={"purple.400"}>
                {" "}
                yourself!
              </Text>
            </Heading>
            <br />
            <Button
              variant={"solid"}
              size={"lg"}
              colorScheme={"purple"}
              as={NavLink}
              to="/entries/create"
            >
              Start writing &nbsp; ✍🏽
            </Button>
          </Flex>
        </Container>
      )}
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
            "#82E0AA",
            "#85C1E9 ",
            "#85929E ",
            "#BB8FCE ",
            "#F1948A",
            "#F7DC6F ",
            "#E59866 ",
            "#CD6155 ",
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
    <Flex maxWidth="300px">
      <canvas id="emotionsChart" width="400" height="400"></canvas>
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
          label: "Grades",
          data: Object.values(gradesData),
          backgroundColor: [
            "#82E0AA",
            "#85C1E9 ",
            "#85929E ",
            "#BB8FCE ",
            "#F1948A",
            "#F7DC6F ",
            "#E59866 ",
            "#CD6155 ",
            "#ECF0F1 ",
            "#48C9B0 ",
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
            display: false,
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
    <Flex maxWidth="300px">
      <canvas id="gradeChart" width="400" height="400"></canvas>
    </Flex>
  );
};
