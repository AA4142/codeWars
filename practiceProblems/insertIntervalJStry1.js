//return {number[][][]}
// retrun an object with an array for intervals
const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
const newInterval = [4,8];

var insert = function(intervals, newInterval){
    const allIntervalNumbers = [];
    for( let i = newInterval[0]; i <= newInterval[1]; i++){
        allIntervalNumbers.push(i);
    }
    console.log(allIntervalNumbers);

    //we need to get all the intervals that include the new interval numbers into one big array


    //we need to store the low intervals and high intervals so they can be returned 

};

insert(intervals, newInterval);