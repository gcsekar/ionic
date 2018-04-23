import {Component} from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {TodoProvider} from '../../providers/todo/todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  todos = [];
  enableSort: boolean = true;
  
  constructor(private todoService: TodoProvider, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.todos = this.todoService.getToDos();
  }

  toggleSort(){
    this.enableSort = !this.enableSort;
  }
  
  addToDo() {
    let alert = this.alertCtrl.create({
      title: 'Add ToDo',
      subTitle: 'Enter a new ToDo Item',
      inputs: [
        {
          name: 'ToDo',
          placeholder: 'Enter todo'
        }
      ],
      buttons: [{
        text: "Save",
        handler: data => {
          if (data["ToDo"] != "") {
            this.todoService.addToDo(data["ToDo"]);
          }
        }
      }, {
        text: "Cancel"
      }]
    });
    alert.present();
  }
}
