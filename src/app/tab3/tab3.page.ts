import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  categoria: any;

  constructor(
    public navController: NavController,
    public toastController: ToastController
  ) {}

  verCategoria() {
    console.log(this.categoria);
    switch (this.categoria) {
      case 'accion': {
        this.navController.navigateForward('s-accion');
        break;
      }
      case 'ciencia': {
        this.navController.navigateForward('s-ciencia');
        break;
      }
      case 'comedia': {
        this.navController.navigateForward('s-comedia');
        break;
      }
      case 'terror': {
        this.navController.navigateForward('s-terror');
        break;
      }
      default: {
        this.mensaje();
        break;
      }
    }
  }

  async mensaje() {
    const toast = await this.toastController.create({
      message: 'Seleccione una categoria',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }
 
}