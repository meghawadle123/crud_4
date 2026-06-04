import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoDashboardComponent } from './shared/component/todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { GetconfirmComponent } from './shared/component/getconfirm/getconfirm.component';
import { PostDashboardComponent } from './shared/component/post-dashboard/post-dashboard.component';
import { PostCardComponent } from './shared/component/post-card/post-card.component';
import { PostFormComponent } from './shared/component/post-form/post-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    TodoFormComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentTableComponent,
    GetconfirmComponent,
    PostDashboardComponent,
    PostCardComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
