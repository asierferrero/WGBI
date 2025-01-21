import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusikaListaPage } from './musika-lista.page';

describe('MusikaListaPage', () => {
  let component: MusikaListaPage;
  let fixture: ComponentFixture<MusikaListaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MusikaListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
