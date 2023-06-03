import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
     // Add this line
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
