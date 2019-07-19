import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  id: any[] = [];
  img: string;

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      this.getImg(params.img);
    });
   }

  ngOnInit() {
  }

  getImg(id: string) {

    this.img = id;
      }
  }

