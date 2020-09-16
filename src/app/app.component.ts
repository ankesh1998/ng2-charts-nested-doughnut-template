import { Component, OnInit } from "@angular/core";
import { ChartType } from "chart.js";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // Doughnut
  constructor() {}

  ngOnInit() {
    var ctx = document.getElementById("myChart");
    var chartData = {
    datasets: [
      {
        "backgroundColor": [
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#007bff",
          "#A18181",
          "#ffc107",
        ],
        "hoverBackgroundColor": [
         "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#007bff",
          "#A18181",
          "#ffc107",
        ],
        "data": [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          200,
          50,
          100
        ]
      },
      {
        "backgroundColor": [
        "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#007bff",
          "#A18181",
          "#ffc107",
        ],
        "hoverBackgroundColor": [
         "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#db4545",
          "#9ddb45",
          "#E76B25",
          "#f0f0f0",
          "#007bff",
          "#A18181",
          "#ffc107",
        ],
        "data": [
        80,
        10,
        30,
        80,
        10,
        5,
        10,
        25,
        15,
        45,
        25,
        15,
        ]
      }
    ],
    labels: [
      "Human Impersonation",
      "Normal",
      "Bot Impersonation",
      "Unknown",
      "Human Impersonation",
      "Normal",
       "Bot Impersonation",
      "Unknown",
      "Human Impersonation",
      "Normal",
       "Bot Impersonation",
      "Unknown",
      "Web",
      "iOS",
      "Android",
    ]
    };
    var pieChart = new Chart(ctx, {
      type: "doughnut",
      data: chartData
    });
  }
}
