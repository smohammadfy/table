import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {stringify} from 'querystring';
import {HttpClient} from '@angular/common/http';
import {Urlb} from '../URLs';
export interface DATA {
  name: string;
  lastname: string;
  username: string;
  service: string;
  number: string;
  date: any;
  phonenumber: string;
  tick: string;
  id: number;
}
@Component({
  selector: 'app-lastsellmore',
  templateUrl: './lastsellmore.component.html',
  styleUrls: ['./lastsellmore.component.sass']
})


export class LastsellmoreComponent implements OnInit {
  constructor(private http: HttpClient) { }
  displayedColumns: string[] = ['name', 'lastname' , 'username' , 'service' , 'number', 'date' , 'phonenumber' , 'tick'];
  username: string;
  token: string;
  phonenumber: string;
  nameandlastname: string[];
  datas: DATA[] =  [];
  dataSource: any;
  tick(id) {
    this.http.get(Urlb.urlBase + 'get_report?username=' )
  }
  ngOnInit() {
    this.token = localStorage.getItem('user_key');
    this.username = localStorage.getItem('username');
  }
  submit() {
    this.datas = [];
    // tslint:disable-next-line:max-line-length
    this.http.post( Urlb.urlBase + 'get_report?username=' + this.username, JSON.stringify({username: '', phonenumber: this.phonenumber}), {headers: {Authorization: this.token}}).subscribe(response => {
      const result = JSON.parse(JSON.stringify(response));
      if (result.hasOwnProperty('status') && !result.status) {
        localStorage.removeItem('user_key');
        localStorage.removeItem('username');
        location.reload();
      }
      // tslint:disable-next-line:prefer-for-of
      for ( let i = 0 ; i < result.length ; i++) {
          this.nameandlastname = result[i].name.split('.', 2);
          this.datas.push({date: undefined, lastname: this.nameandlastname[1], number: result[i].count ,
            phonenumber: result[i].phonenumber, service: result[i].title, id : result[i].id,
            tick: result[i].verfied , username: result[i].username, name: this.nameandlastname[0]});
      }
      console.log(this.datas);
      this.dataSource = new MatTableDataSource(this.datas);
    });
  }
}
// 09212982058
