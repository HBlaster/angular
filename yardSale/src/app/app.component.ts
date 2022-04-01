import { Component } from '@angular/core';
import{product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  showImg = true;

  products: product[]= [
    {
      id: '1',
      name: 'juguetes',
      price: 250,
      image: '../assets/img/toys (1).jpg'
    },

    {
      id: '2',
      name: 'Libros',
      price: 90,
      image: '../assets/img/books.jpg'
    },

    {
      id: '3',
      name: 'Casa para perros',
      price: 550,
      image: '../assets/img/house.jpg'
    },
    {
      id: '4',
      name: 'Bycicle',
      price: 2500,
      image: '../assets/img/bycicle.jpg'
    }
  ];

  onLoaded(img: string) {
    console.log('log padre', img);

  }

  toggleImg(){
    this.showImg = !this.showImg;
  }
}
