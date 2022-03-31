import { Component } from '@angular/core';
import { product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  person = {
    name : 'Alfredo',
    age : 26
    }
    img = 'https://source.unsplash.com/random';

    names: string[] = [
      'jose',
      'alfredo',
      'paulina'
    ]
  
    super: string[] = [
      'sopa',
      'pasta dental',
      'papel higienico'
    ]
  
    newName = '';
  
    newArticule ='';
  
    products: product[] = [
      {
        name: 'juguetes',
        price: 250,
        imag: '../assets/images/toys (1).jpg'
      },
  
      {
        name: 'Libros',
        price: 90,
        imag: '../assets/images/books.jpg'
      },
  
      {
        name: 'Casa para perros',
        price: 550,
        imag: '../assets/images/house.jpg'
      },
      {
        name: 'Bycicle',
        price: 2500,
        imag: '../assets/images/bycicle.jpg'
      }
    ]

    box = {
      width:100,
      height:100,
      background: 'red'
    };

    /*Objeto para registro de formulario*/
    register = {
      name: '',
      email: '',
      password:''

    }
    
    btnDisabled = false;
    toggleBtn(){
      this.btnDisabled = !this.btnDisabled;
    }
    increaseAge(){
      this.person.age += 1;
    }
  
    onScroll(event: Event){
      const Element = event.target as HTMLElement;
      console.log(Element.scrollTop);
    }
  
    changeName(event: Event){
      const element = event.target as HTMLInputElement;
      this.person.name=element.value;
  
    }
  
 
  
    newNames() {
      this.names.push(this.newName); //Agregar un dato al array de nombres
      this.newName = '';
    }
  
    deleteName(i: number) {
      this.names.splice(i, 1); //Eliminar un dato del array de nombres
    }
    
    AddArticule(){
      this.super.push(this.newArticule); //Agregar un dato al array de super
      this.newArticule = '';
    }
    deleteArticule(i: number){
      this.super.splice(i, 1 ); //Eliminar un dato del array de super
    }

    onRegister(){
      console.log(this.register); 
    }
}
