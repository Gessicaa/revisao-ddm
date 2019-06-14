import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PerfilModalPage } from '../perfil-modal/perfil-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  perfis = []

  constructor(public modalController: ModalController, private storage: Storage) {
    this.storage.get('perfil').then((perfil) => {
      if (perfil) {
        this.perfis = perfil
      }
    })
  }

  add(perfil) {
    this.perfis.push(perfil)
    this.storage.set('perfil', this.perfis)
  }

  async abrir_modal() {
    let modal = await this.modalController.create({
      component: PerfilModalPage
    });

    modal.onDidDismiss().then((perfil) => {
      this.add(perfil);
    });

    await modal.present();

  }

  likes(perfil) {
    perfil.likes = perfil.likes + 1;
  }
  
}
