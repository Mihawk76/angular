import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class Hero {id: number; name: string}
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];*/
export class AppComponent implements OnInit {
  stringifiedData: any;  
  parsedJsons: any;
  title = 'my-app';
  results = '';
   // Object Data  
   myData = {  
    name: "Manav",  
    qualification: "M.C.A",  
    technology: "Angular"  
  };
   
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    console.log("buat testing");
    /*this.http.get('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
    });*/
    this.http.get('http://35.227.101.77:8080/demo/readTh').subscribe(data => {
      console.log(data);
      console.log("value is: ", data);
      this.stringifiedData = JSON.stringify(data);
      console.log("With stringify" ,this.stringifiedData);
       // Parse from JSON  
      this.parsedJsons = JSON.parse(this.stringifiedData); 
      console.log("Whole :" , this.parsedJsons); 
      console.log("With Parsed JSON :" , this.parsedJsons[0].value);
      for (var i = 0; i < this.parsedJsons.length; i++) {
        var key = Object.keys(this.parsedJsons[i])[0];
        this.parsedJsons[key] = this.parsedJsons[i][key];
    }  
    });
    
    // this.http.get('https://api.github.com/users/seeschweiler').subscribe((res : any[])=>{
    //   console.log(res);
    //   //this.products = res;
    //   });
    
    //$http.get('35.227.101.77:8080/demo/readStore').then(function(response) {
      // process response here..
    //}, function(response) {
   //});
  }
}
// tryAppend<string>('description', () => d.description);
