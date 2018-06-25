import { Component , OnInit,Inject} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from './tasks.model';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit {
task:Task;
  name:string;
  date:string;
  assigned:string;
  data:any=[]

  //type MyArrayType = Array<{id: number, text: string}>;
  //task:any={id,name: string, date: string,assigned: string};
 taskArray: Array<{id:number,name: string, date: string,assigned: string}>  = [
				  {id:1,name: "Test Task #", date: "12/01/2012", assigned: "John Doe" },
                 { id:2,name: "Test Task #", date: "12/02/2012", assigned: "John Doe" },
                 { id:3,name: "Test Task #", date: "12/03/2012", assigned: "John Doe" },
                 { id:4,name: "Test Task #", date: "12/04/2012", assigned: "John Doe" },
                 { id:5,name: "Test Task #", date: "12/05/2012", assigned: "John Doe" },
                 { id:6,name: "Test Task #", date: "12/06/2012", assigned: "John Doe" },
                 { id:7,name: "Test Task #", date: "12/07/2012", assigned: "John Doe" },
];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService ) {
   }
   //Create ngOnInit() and and load articles
   ngOnInit(): void {
   	console.log(this.storage.get("hello"));
   	console.log(this.storage.get("hello"));
   if(this.storage.get("hello")!=null){
   	this.taskArray.length=0;
   	for (var i = 0; i < this.storage.get("hello").length; ++i) {
   		this.taskArray.push(this.storage.get("hello")[i])
   	}
   //	console.log(this.storage.get("hello")[0]);
   }
   }  


  /* saveInLocal(key, val): void {
    console.log('recieved= key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }


	getFromLocal(key): void {
	    console.log('recieved= key:' + key);
	    this.data[key]= this.storage.get(key);
	    console.log(this.data);
	   }*/

   onFormSubmit(userForm: NgForm){
   	
   
   	this.taskArray.push({id:this.taskArray.length+1,name:this.name,date:this.date,assigned:this.assigned});
   		console.log(this.taskArray.length);
   		console.log(this.taskArray);
   		this.storage.set("hello", this.taskArray);
   		this.name='';
   		this.date='';
   		this.assigned='';
   }


   deleteRow(id:number){
   	console.log(id);
   
   this.taskArray.splice(id,1);
   console.log(this.taskArray);
   this.storage.set("hello", this.taskArray);
   }
}
