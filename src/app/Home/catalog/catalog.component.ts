import { Component, OnInit, AfterViewInit } from '@angular/core';
import 'src/assets/js/mapdata.js';
import 'src/assets/js/worldmap.js';
import * as $ from 'jquery';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.src = 'src/assets/js/mapdata.js';
    document.body.appendChild(s);

    const s2 = document.createElement('script');
    s2.src = 'src/assets/js/worldmap.js';
    document.body.appendChild(s2);
    $.getScript('src/assets/js/worldmap.js');
    $.getScript('src/assets/js/worldmap.js');
  }
}
