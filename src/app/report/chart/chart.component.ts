import { Component, OnInit } from '@angular/core';
import { ChartServiceService } from '../chart-service.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public chart1: any;
  public chart2:any;

  constructor(private chartService:ChartServiceService) { }
 topAuthors:any={}
 topBlogs:any={}
  ngOnInit(): void {
    this.chartService.getTopAuthors().subscribe(response=>{
      this.topAuthors= Object.values(response)
       console.log(this.topAuthors)
      this.chart1 = new Chart("canvas1", {
        type: "bar",
        data: {
          labels: this.topAuthors.map(author=>author._id),
          datasets: [
            {
              label: "No of Blogs",
              data: this.topAuthors.map(author=>author.count),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 1,
             
            },
            
          ]
        },
        options: {
          responsive: true,
          
         title: {
            display: true,
            text: 'Top Authors'
            }
        ,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
        
      });

    })
     this.chartService.getTopBlogs().subscribe(response=>{
      this.topBlogs=response;
      console.log(this.topBlogs)
      this.chart2 = new Chart("canvas2", {
        type: "bar",
        data: {
          labels: this.topBlogs.map(blog=>blog.title.substring(0,18)),
          datasets: [
            {
              label: 'Like',
              data: this.topBlogs.map(blog=>blog.noOfLikes),
              backgroundColor: 'rgba(255, 99, 132, 0.4)',
              borderColor: "rgba(255, 99, 132, 1)",
              order: 1
            },
            {
              label: 'Comments',
              data:this.topBlogs.map(blog=>blog.noOfComments),
              backgroundColor: "rgba(54, 162, 235, 0.4)",
              type: 'line',
              order: 0
            }
          ]
        },
        options: {
          responsive: true,
            title: {
                display: true,
                text: 'Top Blogs',
            }
        ,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
     })
   
  }



}
