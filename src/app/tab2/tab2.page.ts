import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  categoria: any;

  constructor(
    public navController: NavController,
    public toastController: ToastController
  ) {}

  verCategoria() {
    console.log(this.categoria);
    switch (this.categoria) {
      case 'accion': {
        this.navController.navigateForward('p-accion');
        break;
      }
      case 'ciencia': {
        this.navController.navigateForward('p-ciencia');
        break;
      }
      case 'comedia': {
        this.navController.navigateForward('p-comedia');
        break;
      }
      case 'terror': {
        this.navController.navigateForward('p-terror');
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
