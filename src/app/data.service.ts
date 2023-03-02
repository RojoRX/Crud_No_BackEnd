import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataArray =
    [{
      id: 1,
      name: "Tea - Lemon Scented",
      company: "Meevee",
      price: 5.45
    }, {
      id: 2,
      name: "Coffee - Decaffeinato Coffee",
      company: "Jabberstorm",
      price: 17.78
    }, {
      id: 3,
      name: "Beer - Molson Excel",
      company: "Mydo",
      price: 14.69
    }, {
      id: 4,
      name: "Samosa - Veg",
      company: "Gabvine",
      price: 8.83
    }, {
      id: 5,
      name: "Bacardi Raspberry",
      company: "Jetwire",
      price: 9.76
    }, {
      id: 6,
      name: "Vodka - Moskovskaya",
      company: "Miboo",
      price: 15.99
    }];
    private dataSource = new Subject<any>();
    data$ = this.dataSource.asObservable();

  constructor() { }
  addData(data: any) {
    data.id = this.dataArray.length + 1;
    this.dataArray.push(data);
    console.log("Dato Agregado")
  }
  editData(data: any) {
    if(this.dataArray.findIndex(x => x.id === data.id)){
      this.dataArray[data.id-1]=data;
      console.log("Dato Editado")
      console.log(data.id)
    }
  }
  removeData(id: number) {
    // encuentra el índice del elemento con el ID especificado
    let index = this.dataArray.findIndex(x => x.id === id);
    // elimina el elemento del array
    this.dataArray.splice(index, 1);
  }
  
  updateData(id: number) {
    let index = this.dataArray.findIndex(x => x.id === id);
    this.dataSource.next(this.dataArray[index]);
  }
}
