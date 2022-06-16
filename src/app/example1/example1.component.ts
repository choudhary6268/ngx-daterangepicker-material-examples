import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  mode: string = 'day';
  selected: any = { startDate: null, endDate: null };
  title = 'date-new';
  singleDatePicker: boolean = true;
  alwaysShowCalendars: boolean = true;

  constructor() {
    this.selected.startDate = moment();
    this.selected.endDate = moment();
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
  showToday() {
    this.mode = 'day';
    this.singleDatePicker = true;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  showWeek() {
    this.mode = 'week';
    this.singleDatePicker = true;
    this.selected.startDate = moment().subtract(7, 'days').startOf('day');
    this.selected.endDate = moment();
  }

  showMonth() {
    this.mode = 'month';
    this.singleDatePicker = true;
    this.selected.startDate = moment().startOf('month');
    this.selected.endDate = moment();
  }


  showCustom() {
    this.mode = 'custom';
    this.singleDatePicker = true;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  choosedDate(selectedDate: any) {
    this.selected.startDate = selectedDate.startDate;
    this.selected.endDate =  selectedDate.endDate;
  }

}
