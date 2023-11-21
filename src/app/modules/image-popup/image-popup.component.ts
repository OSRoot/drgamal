import { Component } from '@angular/core';

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.scss']
})
export class ImagePopupComponent {
  showImagePopup: boolean = false;
  imageUrl: string = '';

  openImagePopup(url: string) {
    this.imageUrl = url;
    this.showImagePopup = true;
  }

  closeImagePopup() {
    this.showImagePopup = false;
  }
}
