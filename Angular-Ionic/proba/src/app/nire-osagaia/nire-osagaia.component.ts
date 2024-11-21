import { Component } from '@angular/core';

@Component({
  selector: 'app-nire-osagaia',
  templateUrl: './nire-osagaia.component.html',
  styleUrl: './nire-osagaia.component.css'
})
export class NireOsagaiaComponent {
  langilea = {
    izena: 'Pepe',
    abizena: 'Perez',
    generoa: 'gizona',
    irudia: '/assets/caraMujer.jpg'
  };
  Title = "Langileen zerrenda";
  getTitle() {
    return this.Title;
  }
  langileak = [
    { izena: "Pepe", abizena: "Perez", generoa: "gizona", soldata: 1000, likes: 0 },
    { izena: "Sara", abizena: "Ruiz", generoa: "emakumea", soldata: 1000, likes: 0 },
    { izena: "Paul", abizena: "Elorza", generoa: "gizona", soldata: 1500, likes: 0 },
    { izena: "Raul", abizena: "Txakartegi", generoa: "gizona", soldata: 2000, likes: 0 }
  ];
  gehituLikes(langilea: any) { 
    langilea.likes++; 
  }
}
