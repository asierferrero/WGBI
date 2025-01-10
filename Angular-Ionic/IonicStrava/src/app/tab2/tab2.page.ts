import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Atleta } from '../classes/atleta';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  atletak: Atleta[] = [];
  showLoader = true;

  constructor(private apiService: ApiService) { }

  getAtletak(): void {
    this.apiService.dbState().subscribe((res) => {
      if (res) {
        this.apiService.fetchAtletak().subscribe(
          data => {
            this.atletak = data;
            this.showLoader = false;
          }
        )
      }
    });
  }

  ngOnInit() {
    this.getAtletak();
  }

}
