function get_timer_639(string_was_639, string_sec_639) {
  var date_new_was_639 = new Date(string_was_639);
  var date_new_sec_639 = string_sec_639;
  var date_639 = new Date();
  var razn_639, left_639, left_n_639, vraz_639, ost_639;
  razn_639 = date_639 - date_new_was_639;
  left_639 = date_new_sec_639 - razn_639;
  if (left_639 > 0) {
    left_n_639 = left_639;
  } else {
    if (Math.abs(left_639) > date_new_sec_639) {
      vraz_639 = Math.abs(left_639) / date_new_sec_639;
      vraz_639 = vraz_639.toString().split(".");
      left_n_639 = Math.abs(left_639) - vraz_639[0] * date_new_sec_639;
      left_n_639 = date_new_sec_639 - left_n_639;
    } else {
      left_n_639 = date_new_sec_639 - Math.abs(left_639);
    }
  }
  ost_639 = left_n_639;
  var day_639 = parseInt(ost_639 / (60 * 60 * 1000 * 24));
  if (day_639 < 10) {
    day_639 = "0" + day_639;
  }
  day_639 = day_639.toString();
  var hour_639 = parseInt(ost_639 / (60 * 60 * 1000)) % 24;
  if (hour_639 < 10) {
    hour_639 = "0" + hour_639;
  }
  hour_639 = hour_639.toString();
  var min_639 = parseInt(ost_639 / (1000 * 60)) % 60;
  if (min_639 < 10) {
    min_639 = "0" + min_639;
  }
  min_639 = min_639.toString();
  var sec_639 = parseInt(ost_639 / 1000) % 60;
  if (sec_639 < 10) {
    sec_639 = "0" + sec_639;
  }
  sec_639 = sec_639.toString();
  timethis_639 = day_639 + " : " + hour_639 + " : " + min_639 + " : " + sec_639;
  $(".timerhello_639 p.result .result-day").text(day_639);
  $(".timerhello_639 p.result .result-hour").text(hour_639);
  $(".timerhello_639 p.result .result-minute").text(min_639);
  $(".timerhello_639 p.result .result-second").text(sec_639);
}
function getfrominputs_639() {
  string_was_639 = "Tue Aug 17 2020 00:00:00 GMT+0300 (Москва, стандартное время)";
  string_sec_639 = "86400900";
  get_timer_639(string_was_639, string_sec_639);
  setInterval(function () {
    get_timer_639(string_was_639, string_sec_639);
  }, 1000);
}
$(document).ready(function () {
  getfrominputs_639();
});