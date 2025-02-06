import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: true, // Ensure it's a standalone component
  imports: [IonicModule, CommonModule, FormsModule], // ✅ Import IonicModule
})
export class ItemDetailsPage implements OnInit {
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
  item: any;
  private route = inject(ActivatedRoute);
  ngOnInit() {
    this.getParam();
  }
  getParam() {
    const id = this.route.snapshot.paramMap.get('id');
    this.item = this.groceryList.find((item) => item.id == id);
  }
}
