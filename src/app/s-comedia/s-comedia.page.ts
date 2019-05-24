import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-s-comedia',
  templateUrl: './s-comedia.page.html',
  styleUrls: ['./s-comedia.page.scss'],
})

  export class SComediaPage implements OnInit {

    ngMTipo: boolean;
    mostrarTg: boolean;
  
    constructor(
      public navController: NavController,
      public actionSheetController: ActionSheetController
    ) { }
  
    ngOnInit() {
    }
  
    volver() {
      this.navController.back();
    }
  
    verTg() {
      if(!this.ngMTipo) {
        this.mostrarTg = true;
      } else {
        this.mostrarTg = false;
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
  
  }

