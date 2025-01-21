import { Component } from '@angular/core';
import { Erreserba } from '../classes/erreserba';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {

  constructor(private apiService: ApiService, private navCtrl: NavController, private toastController: ToastController) { }

  erreserba = {} as Erreserba;
  errorMessage = '';
  gehituForm(): void {
    if (!this.erreserba) { return; }
    try {
      this.apiService.addErreserba(this.erreserba);
      this.reset();
      this.showToast('Zure erreserba eskaera gehitu da!');
      this.navCtrl.navigateForward('tabs/tab1');

    } catch (error) {
      this.showToast('Errorea!');
      this.errorMessage = error as any;
    }
  }
  reset(): void {
    this.erreserba = {
      id: 0,
      name: '',
      lastname: '',
      dateR: '',
      people: 0,
      lunchordinner: '',
    };
  }
  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }
}
