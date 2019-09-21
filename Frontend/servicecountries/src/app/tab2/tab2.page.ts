import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { CountriesService } from "../api/countries.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page implements OnInit {
  usuarios: any[] = [];
  hasError: boolean = false;
  errorMessage: String = '';
  filtro: any[] = [];
  filteredProducts: any[] = [];
  constructor(
    private countriesService: CountriesService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.countriesService.getCountries().subscribe(
      usuarios => {
        this.hasError = false;
        this.errorMessage = '';
        this.usuarios = usuarios;
      },
      error => {
        this.hasError = true;
        this.showErrorMessage(error);
      }
    );
    // console.log(this.usuarios);
  }

  async showErrorMessage(error: any) {
    const alert = await this.alertCtrl.create({
      header: 'Error de conexión',
      message: 'La aplicación tiene problemas al conectarse con el servidor',
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          cssClass: 'tertiary',
          handler: () => {
            this.errorMessage = 'Se presentó un error al consultar los usuarios.';
          }
        }
      ]
    });
    await alert.present();
  }



}
