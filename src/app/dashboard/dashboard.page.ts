import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Poulation } from '../model/model';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  populations: Poulation[] = [];
  userName: any;
  constructor(private data: DataService,  private modalController: ModalController, private alertController: AlertController, private toastController: ToastController, private authentication: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loadData()
  }

  async loadData() {
    await this.data.getPopulation().subscribe(item => {
      this.populations = item;
      console.log(item);
    })
  }

  async toggleModal () {
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    return await modal.present();
  }

  async alert () {
    const alert = await this.alertController.create ({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
  async presentToast() {
    const toast = await this.toastController.create ({
      message: 'Your toast message here',
      duration: 2000 //Duration in milliseconds
    });
    toast.present();
  }
  async dismissToast() {
    const toast = await this.toastController.getTop();
    if(toast) {
      toast.dismiss();
    }
  }

    logOut () {
      this.authentication.canProceed = true;
      this.router.navigate(['login'])
      localStorage.removeItem('userName');
    }
  }

