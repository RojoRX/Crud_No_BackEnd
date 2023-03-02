import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form:FormGroup;
  editData=[];

  constructor(private dataService:DataService ) { 
    this.form=new FormGroup({
      name: new FormControl(''),
      company: new FormControl(''),
      price: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      console.log(data.id);
      this.form=new FormGroup({
        id: new FormControl(data.id),
        name: new FormControl(data.name),
        company: new FormControl(data.company),
        price: new FormControl(data.price)
      });
    });
  }
  submitForm(){
    if(this.form.value.id!=undefined){
      this.dataService.editData(this.form.value);
    }
    else{
      this.dataService.addData(this.form.value)
    }
    this.form.reset();
  }
}
