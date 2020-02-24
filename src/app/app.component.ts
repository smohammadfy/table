import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  name: string;
  title = 'project';
  username = '';
  selectedfont = 'ir,Tahoma,sans_serif';
  token = '';
  adduser = false;
  addtoken = true;
  failed = false;
  baseURL = 'http://192.168.1.14/requests/';
  lastsellmore = false;

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const authToken = localStorage.getItem('user_key');
    if (authToken && username) {
      this.failed = false;
      this.lastsellmore = true;
    }
  }

  constructor(private http: HttpClient) {
  }
  changeFont() {
    document.getElementById('output-text').style.fontFamily = this.selectedfont;
  }
  submit() {
    this.http.post(this.baseURL + 'seller_login', JSON.stringify({username: this.username, password: this.token})).subscribe(response => {
      const resJson = JSON.parse(JSON.stringify(response));
      if (!resJson.status) {
        this.lastsellmore = false;
        this.failed = true;
      }
      if (resJson.status) {
        localStorage.setItem('user_key', resJson.token);
        localStorage.setItem('username', this.username);
        this.lastsellmore = true;
        this.failed = false;
      }
    });
  }
}

