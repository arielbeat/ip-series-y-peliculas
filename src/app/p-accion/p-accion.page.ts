import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-p-accion',
  templateUrl: './p-accion.page.html',
  styleUrls: ['./p-accion.page.scss'],
})
export class PAccionPage implements OnInit {

  dragon: boolean;
  mostrarDragon: boolean;

  constructor(
    public navController: NavController,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
  }

  volver() {
    this.navController.back();
  }

  verDragon() {
    if(!this.dragon) {
      this.mostrarDragon = true;
    } else {
      this.mostrarDragon = false;
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
