import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { BrainboxaiService } from '../services/brainboxai.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
title = "Brain shop Api"
data:any
  constructor(private client : BrainboxaiService ) { 
    
  }

  ngOnInit(): void{

     this.client.talk().subscribe
    ((data) => {
      this.data =  this.client})
      console.log(this.data);
    
    
  }

}
