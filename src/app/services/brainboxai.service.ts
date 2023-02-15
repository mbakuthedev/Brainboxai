import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ChatBot } from '../chat-bot';


@Injectable({
  providedIn: 'root'
})
export class BrainboxaiService {

  constructor(private http : HttpClient) { 
   
  }
  private url = "http://api.brainshop.ai/get?bid=172707&key=trsms77NLyvZdH4M&uid=[1343]&msg=[msg]";

  talk(): Observable<ChatBot[]>{
   return this.http.get<ChatBot[]>(this.url)
  }
 
 


}
