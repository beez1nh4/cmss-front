import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import { useSentinel } from '../../../contexts/SentinelContext';
import { addColorSet } from '@canvasjs/charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
CanvasJS.addColorSet('customColorSet', ['#F7931E']);

 
export default function NotificationChart() {
    const {notificationWeek} = useSentinel();

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "dark1", "dark2"
			colorSet: "customColorSet",
			title:{
				text: "Notifications - week"
			},
			axisY: {
				title: "Quantity",
				suffix: " notif."
			},
			axisX: {
				title: "Days",
				prefix: "Date: ",
				valueFormatString:  "D"			
			},
			data: [{
				type: "line",
				toolTipContent: "Date {label}: {y} notifications",
				dataPoints:notificationWeek.notifications/*[
					{ label: "14/07", y: 2 },
					{ label: "15/07", y: 3 },
					{ x: 16, y: 4 },
					{ x: 17, y: 2 },
					{ x: 18, y: 4 },
					{ x: 19, y: 0 },
					{ x: 20, y: 8 },
					{ x: 21, y: 9 },
					{ x: 22, y: 3 },
					{ x: 23, y: 4 },
				 	{ x: 11, y: 1 },
					{ x: 12, y: 0 },
					{ x: 13, y: 5 },
 					{ x: 14, y: 0 },
					{ x: 15, y: 6 },
					{ x: 16, y: 0 },
					{ x: 17, y: 9 },
					{ x: 18, y: 3 },
					{ x: 19, y: 8 },
					{ x: 20, y: 4 },
					{ x: 21, y: 9 },
					{ x: 22, y: 4 },
					{ x: 23, y: 9 }  
				]*/
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

