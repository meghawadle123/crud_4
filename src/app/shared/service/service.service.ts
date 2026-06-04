import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _matsnackbar:MatSnackBar) { }
  openSnackbar(msg:string){
    this._matsnackbar.open(msg,'close',{
      horizontalPosition:'left',
      verticalPosition:'top',
      duration:2500
    })
  }
}
