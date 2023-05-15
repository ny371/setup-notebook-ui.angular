import { MatTableDataSource } from '@angular/material/table';
import { CarsService } from '../../services/cars.service';

// TODO: Replace this with your own data model type
export interface CarsTableItem {
  id: number;
  year: number;
  make: string;
  model: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: CarsTableItem[] = []

/**
 * Data source for the CarsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class CarsTableDataSource extends MatTableDataSource<CarsTableItem> {

  constructor(private carsService: CarsService) {
    super();
    this.carsService.getCars().subscribe((data: CarsTableItem[])=>{
      this.data = data;
    });
  }

}