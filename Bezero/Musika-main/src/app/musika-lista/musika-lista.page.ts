// produktuak.page.ts
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MusikasService } from '../services/musika.service';
import { Musika } from '../interfaces/musika';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musika-lista',
  templateUrl: './musika-lista.page.html',
  styleUrls: ['./musika-lista.page.scss'],
})
export class MusikaListaPage implements OnInit {

  trackById(index: number, item: any): any {
    return item.id; 
  }

  musikas: Musika[] = [];

  constructor(private router: Router, private musikasService: MusikasService) {}

  async ngOnInit() {
    const response = await this.musikasService.getAll();
    this.musikas = response.results;
  }


  aukeraturakoMusikak: Musika[] = [];

  toggleChanged(musika: Musika) {
    console.log('Toggle: ', musika.izena, 'balorea:', musika.aukeratua);

    var musikak = document.getElementById("musikak");
    var erantzuna = "";

    if (musika.aukeratua) {
      this.aukeraturakoMusikak.push(musika);
    } else {
      // this.aukeraturakoMusikak.pop();
    }

    for (let i = 0; i < this.aukeraturakoMusikak.length; i++) {
      const kanta = this.aukeraturakoMusikak[i];
      erantzuna += "<span>" + kanta.mota + "</span><br>"
    }  
    erantzuna += "</p>";  
    // musikak.innerHTML = erantzuna;
  }
}
