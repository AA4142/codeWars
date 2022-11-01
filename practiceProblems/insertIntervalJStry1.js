//return {number[][][]}
// retrun an object with an array for intervals
const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval = [4,8];

var insert = function(intervals, newInterval){
    const newIntervalRange = [];
    for( let i = newInterval[0]; i <= newInterval[1]; i++){
        newIntervalRange.push(i);
    }
    console.log(newIntervalRange);

    const testNumbers = new Map(newIntervalRange);
    console.log(testNumbers);

    //we need to get all the intervals that include the new interval numbers into one big array

    for(let x = 0; x < intervals.length; x++){

    }


    //we need to store the low intervals and high intervals so they can be returned 

};

insert(intervals, newInterval);