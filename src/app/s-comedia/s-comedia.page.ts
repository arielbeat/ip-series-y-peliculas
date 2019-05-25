import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-s-comedia',
  templateUrl: './s-comedia.page.html',
  styleUrls: ['./s-comedia.page.scss'],
})

  export class SComediaPage implements OnInit {

<<<<<<< HEAD
    ngMTipo: boolean;
    mostrarTg: boolean;
=======
    dragon: boolean;
    mostrarDragon: boolean;
    uno: any = false;
    dos: any = false;
    tres: any = false;
    cuatro: any = false;
    cinco: any = false;
>>>>>>> d25678ec6499ce48a5902ca299af2f2067a942fe
  
    constructor(
      public navController: NavController,
      public actionSheetController: ActionSheetController
    ) { }
  
    ngOnInit() {
    }
  
    volver() {
      this.navController.back();
    }
  
<<<<<<< HEAD
    verTg() {
      if(!this.ngMTipo) {
        this.mostrarTg = true;
      } else {
        this.mostrarTg = false;
=======
    verDragon() {
      if(!this.dragon) {
        this.mostrarDragon = true;
      } else {
        this.mostrarDragon = false;
>>>>>>> d25678ec6499ce48a5902ca299af2f2067a942fe
      }
    }
  
    async compartir() {
      const share = await this.actionSheetController.create({
        header: 'Opciones',
        buttons:
        [
          {
            text: 'Facebook',
            icon: 'logo-facebook'
          },
          {
            text: 'Pinterest',
            icon: 'logo-pinterest'
          },
          {
            text: 'Tumblr',
            icon: 'logo-tumblr'
          },
          {
            text: 'Twitter',
            icon: 'logo-twitter'
          }
        ]
      });
      share.present();
    }
<<<<<<< HEAD
=======

    verEstrellas5() {
      console.log('Ver estrellas 5');
      console.log(this.uno);
      console.log(this.dos);
      console.log(this.tres);
      console.log(this.cuatro);
      console.log(this.cinco);
      if (this.cinco) {
        this.cuatro = true;
        this.tres = true;
        this.dos = true;
        this.uno = true;
      }
    }
  
    verEstrellas4() {
      console.log('Ver estrellas 4');
      console.log(this.uno);
      console.log(this.dos);
      console.log(this.tres);
      console.log(this.cuatro);
      console.log(this.cinco);
      if (this.cuatro) {
        this.tres = true;
        this.dos = true;
        this.uno = true;
      } else {
        this.cinco = false;
      }
    }
  
    verEstrellas3() {
      console.log('Ver estrellas 3');
      console.log(this.uno);
      console.log(this.dos);
      console.log(this.tres);
      console.log(this.cuatro);
      console.log(this.cinco);
      if (this.tres) {
        this.dos = true;
        this.uno = true;
      } else {
        this.cinco = false;
        this.cuatro = false;
      }
    }
  
    verEstrellas2() {
      console.log('Ver estrellas 2');
      console.log(this.uno);
      console.log(this.dos);
      console.log(this.tres);
      console.log(this.cuatro);
      console.log(this.cinco);
      if (this.dos) {
        this.uno = true;
      } else {
        this.cinco = false;
        this.cuatro = false;
        this.tres = false;
      }
    }
  
    verEstrellas1() {
      console.log('Ver estrellas 1');
      console.log(this.uno);
      console.log(this.dos);
      console.log(this.tres);
      console.log(this.cuatro);
      console.log(this.cinco);
      if (!this.uno) {
        this.cinco = false;
        this.cuatro = false;
        this.tres = false;
        this.dos = false;
      }
    }
>>>>>>> d25678ec6499ce48a5902ca299af2f2067a942fe
  
  }

