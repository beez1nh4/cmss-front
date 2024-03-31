import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
export class PedestrianChart extends React.Component {
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			title:{
				text: "Pedestres ao longo do dia"
			},
			axisY: {
				title: "Pedestres",
				suffix: " pedestres"
			},
			axisX: {
				title: "Hora do dia",
				prefix: "hora ",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Hora {x}: {y} pedestres",
				dataPoints: [
					{ x: 1, y: 2 },
					{ x: 2, y: 3 },
					{ x: 3, y: 4 },
					{ x: 4, y: 2 },
					{ x: 5, y: 4 },
					{ x: 6, y: 0 },
					{ x: 7, y: 8 },
					{ x: 8, y: 9 },
					{ x: 9, y: 3 },
					{ x: 10, y: 4 },
					{ x: 11, y: 1 },
					{ x: 12, y: 0 },
					{ x: 13, y: 5 },
/* 					{ x: 14, y: 0 },
					{ x: 15, y: 6 },
					{ x: 16, y: 0 },
					{ x: 17, y: 9 },
					{ x: 18, y: 3 },
					{ x: 19, y: 8 },
					{ x: 20, y: 4 },
					{ x: 21, y: 9 },
					{ x: 22, y: 4 },
					{ x: 23, y: 9 } */
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
