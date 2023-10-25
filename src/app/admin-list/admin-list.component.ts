import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Admin } from '../interfaces/admin';
import { AdminService } from '../services/admin.service';


@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {
  ngOnInit(): void {
    this.obtenerAdmins();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['usuario', 'contraseña', 'acciones'];
  dataSource = new MatTableDataSource<Admin>();


  constructor(private _adminService: AdminService){
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = 
    this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  obtenerAdmins(){
    this._adminService.getAdmins().subscribe(data =>{
      console.log(data);
      this.dataSource.data = data;
    })
  }

  
}