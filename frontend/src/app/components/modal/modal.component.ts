import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  imports: [
    MatIcon
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() title = 'Modal Title';
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();

  close(): void {
    this.closeModal.emit();
  }
}
