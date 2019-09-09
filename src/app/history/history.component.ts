import { Component, OnInit } from '@angular/core';
import { DateinfoService } from '../dateinfo.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  
  dates: Object;

  constructor(private dateinfo: DateinfoService) { }

  ngOnInit() {
    this.dateinfo.getHistory().subscribe(dateinfo => {
      this.dates = dateinfo
      console.log(this.dates);
    })
  }

}
