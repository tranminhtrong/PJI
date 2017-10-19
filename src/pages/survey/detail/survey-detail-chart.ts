import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
//import Chart from 'chart.js';


import { } from '';

@Component({
    selector: 'page-survey-detail-chart',
    templateUrl: 'survey-detail-chart.html'
})
export class SurveyDetailChartPage {

    // Pie
    public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';
    public options = {
        responsive: true,
        maintainAspectRatio: false
    };
    public pieChartWidth: any = 400;
    public pieChartHeight: any = 400;

    constructor(public navCtrl: NavController, public platform: Platform) {
            //this.pieChartHeight = platform.height()+200;
            //this.pieChartWidth = platform.width();
            console.log('W: ' + this.pieChartWidth + ', H: ' + this.pieChartHeight);
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }
}
