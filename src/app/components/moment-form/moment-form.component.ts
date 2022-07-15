import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMoment } from '../IMoment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.scss']
})
export class MomentFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<IMoment>()

  @Input() btnText!: string;

  momentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
    });
  }

  get title(){
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description');
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0]
    this.momentForm.patchValue({image: file});
    
  }

  submit(){
    console.log(this.momentForm.value);
    this.onSubmit.emit(this.momentForm.value);
    if(this.momentForm.invalid){
      return;

      
    }
    
    
  }
  

}
