import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonBackButton,
  IonCard,
  IonCardContent,
} from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { GroceryService } from 'src/app/Services/grocery.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCard,
    IonBackButton,
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ItemDetailsPage implements OnInit {
  item: any;
  private route = inject(ActivatedRoute);
  private groceryList = inject(GroceryService);
  ngOnInit() {
    this.getParam();
  }
  getParam() {
    const id = this.route.snapshot.paramMap.get('id');
    const grocery = this.groceryList.getItems();
    this.item = grocery.find((item) => item.id == id);
  }
}
