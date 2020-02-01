import { Component, OnInit } from '@angular/core';
import { Car } from '../../../models/car-model';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {

  public cols: object[];
  availableCars: Car[];
  selectedCars: Car[];
  draggedCar: Car;

  constructor(private carService: CarService) {
    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
  }

  ngOnInit() {
    this.selectedCars = [];
    this.carService.getCarsSmall().subscribe((res: Car[]) => {
      this.availableCars = res;
    });
  }


  dragStart(event, car: Car) {
    this.draggedCar = car;
  }

  drop(event) {
    if (this.draggedCar) {
      const draggedCarIndex = this.findIndex(this.draggedCar);
      this.selectedCars = [...this.selectedCars, this.draggedCar];
      this.availableCars = this.availableCars.filter((val, i) => i !== draggedCarIndex);
      this.draggedCar = null;
    }
  }

  dragEnd(event) {
    this.draggedCar = null;
  }

  findIndex(car: Car) {
    let index = -1;
    for (let i = 0; i < this.availableCars.length; i++) {
      if (car.vin === this.availableCars[i].vin) {
        index = i;
        break;
      }
    }
    return index;
  }

}
