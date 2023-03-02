import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private dataService:DataService ) { }
  data  = this.dataService.dataArray;
  ngOnInit(): void {
  }
  deleteData(id:number){
  this.dataService.removeData(id);
  }
  sendData(id:number) {
    this.dataService.updateData(id);
  }
}
