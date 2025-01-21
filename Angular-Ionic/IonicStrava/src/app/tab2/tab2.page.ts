import { Component, OnInit } from '@angular/core';
import { Location} from '@angular/common';
import { Atleta } from '../classes/atleta';
import { ApiService} from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  atletak: Atleta[] = [];
  showLoader=true;

  constructor(private apiService: ApiService, private location: Location) {}

  getAtletak(): void {
    this.apiService.dbState().subscribe((res) => {
      if (res) {
        this.apiService.fetchAtletak()
          .then((data) => {
            this.atletak = data;
            this.showLoader = false;
          })
          .catch((error) => {
            console.error('Errorea atletak atzitzen:', error);
            this.showLoader = false;
          });
      }
    });
  }
  goBack(): void {
    this.location.back();
   }
  ngOnInit(): void {
    this.getAtletak();
  }
}

