import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tous-les-super-heros',
  templateUrl: './tous-les-super-heros.component.html',
  styleUrls: ['./tous-les-super-heros.component.css']
})
export class TousLesSuperHerosComponent implements OnInit {

  public supers: Array<any>;

  constructor() {
    this.supers = []
  }

  ngOnInit(): void {
  }

  public ajoutSupers() {
    this.supers.push({
      nom: 'Wonder Woman', images: {
        sm: 'https://www.parismatch.com/lmnr/f/webp/r/1440,960,FFFFFF,forcex,center-middle/img/var/pm/public/styles/paysage/public/media/image/2023/08/11/16/gg.jpg?VersionId=sulJe7_ntWy_1zM7CImYY2S7kgTCnWMn'
      }
    })
    this.supers.push({
      nom: 'Hulk', images: {
        sm: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Hulk_%282540708438%29.jpg/800px-Hulk_%282540708438%29.jpg'
      }
    })
    this.supers.push({
      nom: 'Harley Quinn', images: {
        sm: 'https://media.vogue.fr/photos/6100112b9d91fef117cf8b97/2:3/w_1600,c_limit/076_CHLRNB_003622.jpg'
      }
    })
  }

}
