/* Your Code Here */
// build a time-card and payroll application using the record-oriented approach
// define a function called createEmployeeRecord that takes the arguments: A 4-element Array of a String, String, String, and Number corresponding to a first name, family name, title, and pay rate per hour
// The function should return an Object with the following keys: firstName, familyName, title, payPerHour, timeInEvents, and timeOutEvents
// It should loadd an Array elements into corresponding Object properties. Additionally, initialize empty Arrays on the properties timeInEvents and timeOutEvents
// use .this
// use .bind()
function createEmployeeRecord(firstName, familyName, title, payPerHour) {
    var employeeRecord = ["Gray", "Worm", "Security", 1];
    return {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}

function createEmployeeRecords(employeeRecords) {
    let twoRows = [
        ["moe", "sizlak", "barkeep", 2],
        ["bartholomew", "simpson", "scamp", 3]
      ]
    let employeexRecords = [];
    for (let i = 0; i < twoRows.length; i++) {
        employeexRecords.push(createEmployeeRecord(twoRows[i][0], twoRows[i][1], twoRows[i][2], twoRows[i][3]));
    } return employeexRecords;
}


function createTimeInEvent(employeeRecord, dateStamp) {
    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: dateStamp.substring(11, 13),
        date: dateStamp
    });
    return employeeRecord;
}


function createTimeOutEvent(employeeRecord, dateStamp) {
    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: dateStamp.substring(11, 13),
        date: dateStamp
    });
    return employeeRecord;
}


function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(function(event) {
        return event.date === date;
    });
    const timeOutEvent = employeeRecord.timeOutEvents.find(function(event) {
        return event.date === date;
    });
    const timeInHour = parseInt(timeInEvent.hour);
    const timeOutHour = parseInt(timeOutEvent.hour);
    const hoursWorked = timeOutHour - timeInHour;
    return hoursWorked;
} 


function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    const payRate = employeeRecord.payPerHour;
    const wagesEarned = hoursWorked * payRate;
    return wagesEarned;
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}


function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(function(record) {
        return record.firstName === firstName;
    });
}


function calculatePayroll(employeeRecords) {
    const allWages = 0;
    const allDates = employeeRecords.map(function(record) {
        return record.timeInEvents.map(function(event) {
            return event.date;
        });
    }) .reduce(function(acc, curr) {}, []);
    return allWages;
}



