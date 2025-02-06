import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.page.html',
  styleUrls: ['./item-details.page.scss'],
  standalone: true, // Ensure it's a standalone component
  imports: [IonicModule, CommonModule, FormsModule], // ✅ Import IonicModule
})
export class ItemDetailsPage {}
