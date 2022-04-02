import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  imgDefault = 'https://source.unsplash.com/user/wsanter';
  @Input() img: string ='valor init' ;
  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img= this.imgDefault;
  }

}
