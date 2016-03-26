/// <reference path="../typings/main/ambient/moment/index.d.ts" />

import moment = require("moment");

export class DateFormatValueConverter {
  toView(value) {
    return moment(value).format('M/D/YYYY');
  }
}