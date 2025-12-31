import { Component, signal, effect } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ItemsService } from '../../services/items';

@Component({
  standalone: true,
  imports: [MatToolbarModule, MatListModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class ListComponent {
  items = signal<any[]>([]);
  loading = signal(true);

  constructor(private service: ItemsService) {
    this.service.getItems().subscribe({
      next: data => {
        this.items.set(data);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
}
