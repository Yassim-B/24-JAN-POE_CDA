import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-titre',
  templateUrl: './titre.component.html',
  styleUrls: ['./titre.component.css']
})
export class TitreComponent implements OnInit {

  public titre: string;

  constructor() {
    this.titre = "Super NG"
  }

  ngOnInit(): void {
  }

}
