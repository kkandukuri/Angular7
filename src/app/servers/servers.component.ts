import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers =false;
  serverCreationStatus='No Server Created yet.';
  serverName='TestServer';
  userName='';
  hasUserName=false;

  constructor() { 
    setTimeout(()=>{
      this.allowNewServers=true;
    },2000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus='Server was created.....& Server Name: '+this.serverName;
  }
  

  onUpdateServerName(event:Event){
    console.log(event);
    this.serverName=(<HTMLInputElement>event.target).value;
    console.log(this.serverName);

  }
}
