var fillInMonths = function () {
    var days = [
        { text: "January", val: "1" },
        { text: "February", val: "2" },
        { text: "March", val: "3" },
        { text: "April", val: "4" },
        { text: "May", val: "5" },
        { text: "June", val: "6" },
        { text: "July", val: "7" },
        { text: "August", val: "8" },
        { text: "September", val: "9" },
        { text: "October", val: "10" },
        { text: "Novermber", val: "11" },
        { text: "December", val: "12" }
    ];
    $(".months").each(function () {
        fillOptions(this, days);
    });
};

var fillOptions = function (elements, options) {
    for (var i = 0; i < options.length; i++)
        $(elements).append("<option value='" + options[i].val + "'>" + options[i].text + "</option>");
};
var fillDataOfMinutesAndHoursSelectOptions = function () {
    for (var i = 0; i < 60; i++) {
        if (i < 24) {
            $(".hours").each(function () { $(this).append(timeSelectOption(i)); });
        }
        $(".minutes").each(function () { $(this).append(timeSelectOption(i)); });
    }
};
var fillInWeekDays = function () {
    var days = [
        { text: "Monday", val: "MON" },
        { text: "Tuesday", val: "TUE" },
        { text: "Wednesday", val: "WED" },
        { text: "Thursday", val: "THU" },
        { text: "Friday", val: "FRI" },
        { text: "Saturday", val: "SAT" },
        { text: "Sunday", val: "SUN" }
    ];
    $(".week-days").each(function () {
        fillOptions(this, days);
    });

};
var fillDayWeekInMonth = function () {
    var days = [
        { text: "First", val: "1" },
        { text: "Second", val: "2" },
        { text: "Thrid", val: "3" },
        { text: "Fourth", val: "4" }
    ];
    $(".day-order-in-month").each(function () {
        fillOptions(this, days);
    });
};
var displayTimeUnit = function (unit) {
    if (unit.toString().length == 1)
        return "0" + unit;
    return unit;
};
var timeSelectOption = function (i) {
    return "<option id='" + i + "'>" + displayTimeUnit(i) + "</option>";
};

var generate = function () {

    var activeTab = $("ul#cronGenTabs li.active a").prop("id");
    var results = "";
    switch (activeTab) {
        case "MinutesTab":
            results = "0 0/" + $("#minutesInput").val() + " * 1/1 * ? *";
            break;
        case "HourlyTab":
            break;
        case "DailyTab":
            break;
        case "WeeklyTab":
            break;
        case "MonthlyTab":
            break;
        case "YearlyTab":
            break;

        default:
    }
    $("#Results").val(results);
};