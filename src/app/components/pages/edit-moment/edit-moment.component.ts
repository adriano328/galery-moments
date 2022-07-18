import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMoment } from '../../IMoment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';



@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.scss']
})
export class EditMomentComponent implements OnInit {

  moment!: IMoment;
  btnText: string = 'Editar';

  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.momentService.getMoment(id).subscribe((item) => {
      this.moment = item.data;
    })
  }

  async editHandler(momentData: IMoment){
      const id = this.moment.id
      const formData = new FormData()

      formData.append('title', momentData.title)
      formData.append('description', momentData.title)
      if(momentData.image){
        formData.append('image', momentData.image)
      }

      await this.momentService.updateMoment(id!, formData).subscribe()

      this.messageService.add(`Moment ${id} foi atualizado com sucesso!`)
      
      this.router.navigate(['/']);
  }

}
