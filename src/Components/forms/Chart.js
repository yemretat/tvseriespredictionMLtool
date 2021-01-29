/* eslint-disable no-use-before-define */
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Header from "../ui/Header";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import { orange } from "@material-ui/core/colors";

export default function Confirm({ prevStep, nextStep, currentResponseData }) {
  const backfunc = (e) => {
    e.preventDefault();
    prevStep();
  };
  const continueFunc = (e) => {
    e.preventDefault();
    nextStep();
  };
  debugger;
  console.log(currentResponseData);
  console.log(currentResponseData.data);
  const [predictionScores, setPredictionScores] = useState([
    currentResponseData.data[0]["KNN_prediction"],
    currentResponseData.data[0]["DecisionTree_prediction"],
    currentResponseData.data[0]["RandomForest_prediction"],
  ]);
  const [accuracyScores, setAccuracyScores] = useState([
    currentResponseData.data[1]["KNN_accuracyscore"],
    currentResponseData.data[1]["DecisionTree_accuracyscore"],
    currentResponseData.data[1]["RandomForest_accuracyscore"],
  ]);
  console.log(accuracyScores);

  /*const [chartData,setChartData]=useState({labels:[],}) */
  const [chartData, setChartData] = useState({
    labels: ["DecisionTree", "KNN", "RandomForest"],
    datasets: [
      {
        label: "Accuracy Score",
        data: [accuracyScores[0], accuracyScores[1], accuracyScores[2]],
        backgroundColor: [
          "rgba(33, 114, 213, 0.6)",
          "rgba(80, 146, 227, 0.6)",
          "rgba(255, 128, 0, 0.6)",
        ],
      },
    ],
  });
  const [chartDataPredicts, setChartDataPredicts] = useState({
    labels: ["DecisionTree", "KNN", "RandomForest"],
    datasets: [
      {
        label: "Prediction Scores",
        data: [predictionScores[0], predictionScores[1], predictionScores[2]],
        backgroundColor: [
          "rgba(33, 114, 213, 0.6)",
          "rgba(80, 146, 227, 0.6)",
          "rgba(255, 128, 0, 0.6)",
        ],
      },
    ],
  });
  return (
    <div>
      <Header></Header>
      <div className="listdeneme">
        <Bar
          data={chartData}
          options={{
            scales: { yAxes: [{ ticks: { max: 1, min: 0, stepSize: 0.1 } }] },
          }}
        />
        <br />
      </div>
      <Bar
        data={chartDataPredicts}
        options={{
          scales: { yAxes: [{ ticks: { max: 5, min: 1, stepSize: 1 } }] },
        }}
      />
      <Grid container>
        {" "}
        <Grid item xs={6} style={{ textAlign: "center" }}>
          {" "}
          <input
            onClick={backfunc}
            class="buttoncontinue3"
            type="submit"
            value="Back..."
            name=""
          />
        </Grid>
        <Grid item xs={6} style={{ textAlign: "center" }}>
          {" "}
          <input
            onClick={continueFunc}
            class="buttonback3"
            type="submit"
            value="Finish..."
            name=""
          />
        </Grid>
      </Grid>
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
