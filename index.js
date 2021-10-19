// Import stylesheets
import $ from 'jquery';
import './style.css';

//limit: days
function solution(today, limit) {
  var incorrectColoredRowCount = 0;

  $('tr').each(function () {
    var borrowDate = $(this).find('td').eq(1).html();
    var returnDate = $(this).find('td').eq(2).html();

    if (returnDate.length < 1) {
      var isOverdue = getDaysDifference(borrowDate, today) > limit;
    } else {
      var isOverdue = getDaysDifference(borrowDate, returnDate) > limit;
    }

    var rowStyle = $(this).attr('style');

    if (typeof rowStyle !== 'undefined' && !isOverdue && rowStyle.length > 0) {
      incorrectColoredRowCount++;
    }
  });

  return incorrectColoredRowCount;
}

function getDaysDifference(borrowDate, returnDate) {
  var borrowDateTimeStamp = new Date(borrowDate).getTime() / 1000;
  var returnDateTimeStamp = new Date(returnDate).getTime() / 1000;

  var difference = returnDateTimeStamp - borrowDateTimeStamp;
  var daysDifference = Math.floor(difference / 60 / 60 / 24);

  return daysDifference;
}
console.log(solution('2021-01-02', 10000));
