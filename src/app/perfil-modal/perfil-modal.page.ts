import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-perfil-modal',
  templateUrl: './perfil-modal.page.html',
  styleUrls: ['./perfil-modal.page.scss'],
})
export class PerfilModalPage implements OnInit {

  perfil;

  constructor(public modalController: ModalController, private camera: Camera) {}

  ngOnInit() {
  }

  novo_perfil = {
    "nome": "",
    "idade": "",
    "avatar": "",
    "likes":""
  }

  add() {
    this.modalController.dismiss(this.perfil)
  }
  
  take_picture() {
    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.novo_perfil.avatar = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      alert(err);
      // Handle error
    });
  }

}
