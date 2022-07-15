import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IMoment } from '../../IMoment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.scss']
})
export class NewMomentComponent implements OnInit {



  btnText = "Compartilhar!";
  
  constructor(
   private momentService: MomentService,
   private messsagesService: MessagesService,
   private router: Router
  ) { }

  ngOnInit(): void {
  }

  async createHandler(moment: IMoment){
    const formData = new  FormData()
    
    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if(moment.image){
      formData.append('image', moment.image);
    }

    //todo

    await this.momentService.createMoment(formData).subscribe();

    this.messsagesService.add('MOmento adicionado com sucesso!')
   
    this.router.navigate(['/']);

  }

}
