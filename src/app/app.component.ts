import { Component } from '@angular/core';
import { MockItems } from './mock/items.mock';
import { item } from './model/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: Array<item> = MockItems;
  public activeUser:item;
  openUser(user: item){
      this.activeUser = user;
  }
}
