import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule, MatButtonModule, MatDialogModule,
   MatSelectModule, MatTableModule, MatSortModule, MatSnackBarModule } from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
     MatCardModule,
     MatFormFieldModule,
     MatIconModule,
     MatInputModule,
     MatDialogModule,
     MatSelectModule,
     MatTableModule,
     MatSortModule,
     MatSnackBarModule
    ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
