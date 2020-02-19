import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {stringify} from 'querystring';
export interface DATA {
  name: string;
  lastname: string;
  service: string;
  payed: string;
  tick: string;
  date: any;
  phonenumber: string;
}
@Component({
  selector: 'app-lastsellmore',
  templateUrl: './lastsellmore.component.html',
  styleUrls: ['./lastsellmore.component.sass']
})


export class LastsellmoreComponent implements OnInit {
  constructor() { }
  datas: DATA[] =  [
    // tslint:disable-next-line:max-line-length
    {name: 'alireza' , lastname: 'rohani' , service: ' قهوه رایگان' , tick: 'false' , payed: '12' , date: '2019/02/23' , phonenumber: '091244477240'},
    {name: 'soheil' , lastname: 'shirvani', service: ' چای رایگان' , tick: 'false' , payed: '12' , date: '2018/02/23' ,
      phonenumber: '093544477240'},
    {name: 'ashkan' , lastname: 'goharfar', service: ' پیتزا رایگان' , tick: 'false' , payed: '12', date: '2017/02/23' ,
      phonenumber: '092144477240'}
  ];
  displayedColumns: string[] = ['name', 'lastname' , 'service' , 'payed', 'date' , 'phonenumber' , 'tick'];
  dataSource = new MatTableDataSource(this.datas);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue;
  }
  tick(data) {
    console.log(stringify(data));
  }
  ngOnInit() {
  }

}
