import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonItem,
  IonText,
  IonFooter,
  IonListHeader,
  IonButton,
} from '@ionic/angular/standalone';
import { GroceryService } from '../Services/grocery.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonLabel,
    IonItem,
    IonText,
    IonFooter,
    IonListHeader,
    NgFor,
    IonButton,
    RouterLink,
  ],
})
export class HomePage implements OnInit {
  private groceryService = inject(GroceryService);
  groceryList: any[] = [];
  image: string | undefined;
  ngOnInit(): void {
    this.groceryList = this.groceryService.getItems();
  }

  async uploadImg() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Prompt,
        resultType: CameraResultType.Uri,
      });
      this.image = image.webPath;
    } catch (err) {
      console.log(err);
    }
  }
}
