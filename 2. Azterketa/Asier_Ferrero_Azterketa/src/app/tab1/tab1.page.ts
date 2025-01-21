import { Component, OnInit } from '@angular/core';
import { Platera } from '../classes/platera';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  platerak: Platera[] = [];
  isDrawerOpen = false; // drawer zabalik dagoen edo ez kontrolatzeko
  showFiller = false;   // testu gehigarria erakusteko edo ezkutatzeko

  constructor(private apiService: ApiService) {}

  getPlaterak(): void {
    this.apiService.dbState().subscribe((res) => {
      if(res){
        this.apiService.fetchPlaterak().subscribe(
            data => {this.platerak = data}
        );
      }
    });
  }

  ngOnInit(): void {
    this.getPlaterak();
  }

  toggleMenu() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  // Metodo hau aldatu dut bakoitzean klikatzerakoan bakarrik bere deskribapena agertzeko
  toggleExtraText(id: number) {
    this.platerak = this.platerak.map(platera => {
      if (platera.id === id) {
        platera.showFiller = !platera.showFiller;
      } else {
        platera.showFiller = false;
      }
      return platera;
    });
  }
}
