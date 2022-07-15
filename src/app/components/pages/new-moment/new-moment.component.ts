import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMoment } from '../../IMoment';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent implements OnInit {

    

  btnText = "Compartilhar!";
  
  constructor() { }

  ngOnInit(): void {
  }

  createHandler(event: any){
    console.log('Deu bom')  
  }

}
