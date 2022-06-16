import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-example1',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss']
})
export class Example2Component implements OnInit {
  mode: string = 'last7day';
  selected: any = { startDate: null, endDate: null };
  title = 'date-new';
  singleDatePicker: boolean = false;
  alwaysShowCalendars: boolean = true;

  constructor() {
    this.showLast7Days();
  }

  ngOnInit(): void {
  }

  isInvalidDate(date: any) {
    return date.weekday() === 0;
  }
  isCustomDate(date: any) {
    return  (
      date.weekday() === 0 ||
      date.weekday() === 6
    )  ? 'mycustomdate' : false;
  }

  showLast7Days() {
    this.mode = 'last7days';
    this.singleDatePicker = false;
    this.selected.startDate = moment().subtract(7, 'days').startOf('day');
    this.selected.endDate =  moment();
  }

  showLast30Days() {
    this.mode = 'last30days';
    this.singleDatePicker = false;
    this.selected.startDate = moment().subtract(30, 'days').startOf('day');
    this.selected.endDate =  moment();
  }

  showLastQuarter() {
    this.mode = 'lastQuarter';
    this.singleDatePicker = false;
    this.selected.startDate = moment().subtract(1, 'Q').startOf('day');
    this.selected.endDate =  moment();
  }

  showLast6Months() {
    this.mode = 'last6Months';
    this.singleDatePicker = false;
    this.selected.startDate = moment().subtract(6, 'M').startOf('day');
    this.selected.endDate = moment();
  }

  showLast12Months() {
    this.mode = 'last12Months';
    this.singleDatePicker = false;
    this.selected.startDate = moment().subtract(12, 'M').startOf('day');
    this.selected.endDate = moment();
  }


  showCustom() {
    this.mode = 'custom';
    this.singleDatePicker = false;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  choosedDate(selectedDate: any) {
    this.selected.startDate = selectedDate.startDate;
    this.selected.endDate =  selectedDate.endDate;
  }

}
