import { Component, OnInit } from '@angular/core';
import * as moment from "moment";

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit {
  mode: any = null;
  selected: any = { startDate: null, endDate: null };
  title = 'date-new';
  singleDatePicker: boolean = true;
  alwaysShowCalendars: boolean = true;
  visible = false;
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
    this.toggle('day');
    this.singleDatePicker = true;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  showWeek() {
    this.toggle('week');
    this.singleDatePicker = true;
    this.selected.startDate = moment().startOf('week');
    this.selected.endDate = moment().endOf('week');
  }

  showMonth() {
    this.toggle('month');
    this.singleDatePicker = true;
    this.selected.startDate = moment().startOf('month');
    this.selected.endDate = moment().endOf('month');
  }


  showCustom() {
    this.toggle('custom');
    this.singleDatePicker = false;
    this.selected.startDate = moment();
    this.selected.endDate =  moment();
  }

  choosedDate(selectedDate: any) {
    this.selected.startDate = selectedDate.startDate;
    this.selected.endDate =  selectedDate.endDate;
    this.visible = false;
  }

  toggle(mode: string) {
    if (this.mode === mode) {
      this.visible = !this.visible ;
    } else {
      this.visible= true;
    }
    this.mode = mode;
  }

}
