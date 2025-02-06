import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  groceryList: any[] = [
    {
      id: 1,
      name: 'Apple',
      description: 'Fresh red apples, rich in fiber and vitamins.',
    },
    {
      id: 2,
      name: 'Milk',
      description: '1-liter full cream milk, rich in calcium.',
    },
    {
      id: 3,
      name: 'Bread',
      description: 'Whole wheat bread, soft and healthy.',
    },
    {
      id: 4,
      name: 'Eggs',
      description: 'Pack of 12 organic eggs, high in protein.',
    },
    {
      id: 5,
      name: 'Rice',
      description: '5kg basmati rice, aromatic and long-grain.',
    },
    {
      id: 6,
      name: 'Tomato',
      description: 'Fresh tomatoes, rich in vitamins and antioxidants.',
    },
  ];

  onClickView(item: any) {
    console.log('Clicked on item:', item);
  }
}
