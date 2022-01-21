import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

 
  constructor() { }

  ngOnInit(
    
  ): void {
    
  }
  public termino!: string;

  extraerData(data:string){
    this.termino=data
    console.log(this.termino)
  }

  
}
