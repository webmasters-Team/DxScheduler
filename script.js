$(function(){
    var scheduler = $(".scheduler").dxScheduler({
        dataSource: data,
        views: ['month', 'week', 'workWeek', 'day', { type: "agenda", agendaDuration: 1 }],
        currentView: "month",
         currentDate: new Date("2017, 02, 02"),
        useDropDownViewSwitcher: false,
        firstDayOfWeek: 0,
        startDayHour: 8,
        endDayHour: 19,
        resources: [{
            fieldExpr: "ownerId", 
            allowMultiple: true, 
            label: "Owner"
        }],
        onContentReady: function (e) {
            var $element = e.element.find('.dx-scheduler-dropdown-appointments');
            $element.click(function (ea) {
                var startDate = new Date($($element).dxDropDownMenu('instance').option('items')[0].startDate);
                e.component.option('currentDate', startDate);
                e.component.option("currentView", "agenda");
                ea.preventDefault();
                ea.stopPropagation();
            });
        },
        width: "100%",
        height: 600
    }).dxScheduler("instance");
});

var data = [
    {
        text: "Website Re-Design Plan",
        ownerId: [4],
        startDate: new Date(2017, 2, 11, 9, 30),
        endDate: new Date(2017, 2, 11, 11, 30)
    }, {
        text: "Book Flights to San Fran for Sales Trip",
        ownerId: [2],
        startDate: new Date(2017, 2, 11, 12, 0),
        endDate: new Date(2017, 2, 11, 13, 0),
        allDay: true
    }, {
        text: "Install New Router in Dev Room",
        ownerId: [1],
        startDate: new Date(2017, 2, 11, 12, 30),
        endDate: new Date(2017, 2, 11, 15, 30)
    }, {
        text: "Approve Personal Computer Upgrade Plan",
        ownerId: [3],
        startDate: new Date(2017, 2, 11, 10, 0),
        endDate: new Date(2017, 2, 11, 11, 0)
    }, {
        text: "Final Budget Review",
        ownerId: [1],
        startDate: new Date(2017, 2, 11, 12, 0),
        endDate: new Date(2017, 2, 11, 13, 35)
    }, {
        text: "New Brochures",
        ownerId: [4],
        startDate: new Date(2017, 2, 11, 12, 30),
        endDate: new Date(2017, 2, 11, 15, 45)
    }, {
        text: "Install New Database",
        ownerId: [2],
        startDate: new Date(2017, 2, 11, 9, 45),
        endDate: new Date(2017, 2, 11, 11, 15)
    }, {
        text: "Approve New Online Marketing Strategy",
        ownerId: [3, 4],
        startDate: new Date(2017, 2, 11, 12, 0),
        endDate: new Date(2017, 2, 11, 12, 0)
    }, {
        text: "Upgrade Personal Computers",
        ownerId: [2],
        startDate: new Date(2017, 2, 11, 15, 15),
        endDate: new Date(2017, 2, 11, 16, 30)
    }, {
        text: "Customer Workshop",
        ownerId: [3],
        startDate: new Date(2017, 2, 11, 11, 0),
        endDate: new Date(2017, 2, 11, 12, 0),
        allDay: true
    }, {
        text: "Prepare 2017 Marketing Plan",
        ownerId: [1, 3],
        startDate: new Date(2017, 2, 11, 11, 0),
        endDate: new Date(2017, 2, 11, 13, 30)
    }, {
        text: "Brochure Design Review",
        ownerId: [4],
        startDate: new Date(2017, 2, 11, 12, 0),
        endDate: new Date(2017, 2, 11, 15, 30)
    }, {
        text: "Create Icons for Website",
        ownerId: [3],
        startDate: new Date(2017, 2, 11, 10, 0),
        endDate: new Date(2017, 2, 11, 11, 30)
    }, {
        text: "Upgrade Server Hardware",
        ownerId: [4],
        startDate: new Date(2017, 2, 11, 12, 30),
        endDate: new Date(2017, 2, 11, 16, 0)
    }, {
        text: "Submit New Website Design",
        ownerId: [1],
        startDate: new Date(2017, 2, 11, 16, 30),
        endDate: new Date(2017, 2, 11, 18, 0)
    }, {
        text: "Launch New Website",
        ownerId: [2],
        startDate: new Date(2017, 2, 11, 12, 20),
        endDate: new Date(2017, 2, 11, 12, 0)
    },     {
        text: "Website Re-Design Plan",
        ownerId: [4],
        startDate: new Date(2017, 2, 11, 9, 30),
        endDate: new Date(2017, 2, 11, 11, 30)
    }, {
        text: "Book Flights to San Fran for Sales Trip",
        ownerId: [2],
        startDate: new Date(2017, 2, 11, 12, 0),
        endDate: new Date(2017, 2, 11, 13, 0),
        allDay: true
    }, {
        text: "Install New Router in Dev Room",
        ownerId: [1],
        startDate: new Date(2017, 2, 27, 12, 30),
        endDate: new Date(2017, 2, 27, 15, 30)
    }, {
        text: "Approve Personal Computer Upgrade Plan",
        ownerId: [3],
        startDate: new Date(2017, 2, 27, 10, 0),
        endDate: new Date(2017, 2, 27, 11, 0)
    }, {
        text: "Final Budget Review",
        ownerId: [1],
        startDate: new Date(2017, 2, 27, 12, 0),
        endDate: new Date(2017, 2, 27, 13, 35)
    }, {
        text: "New Brochures",
        ownerId: [4],
        startDate: new Date(2017, 2, 27, 12, 30),
        endDate: new Date(2017, 2, 27, 15, 45)
    }, {
        text: "Install New Database",
        ownerId: [2],
        startDate: new Date(2017, 2, 27, 9, 45),
        endDate: new Date(2017, 2, 27, 11, 15)
    }, {
        text: "Approve New Online Marketing Strategy",
        ownerId: [3, 4],
        startDate: new Date(2017, 2, 27, 12, 0),
        endDate: new Date(2017, 2, 27, 12, 0)
    }, {
        text: "Upgrade Personal Computers",
        ownerId: [2],
        startDate: new Date(2017, 2, 27, 15, 15),
        endDate: new Date(2017, 2, 27, 16, 30)
    }, {
        text: "Customer Workshop",
        ownerId: [3],
        startDate: new Date(2017, 2, 27, 11, 0),
        endDate: new Date(2017, 2, 27, 12, 0),
        allDay: true
    }, {
        text: "Prepare 2017 Marketing Plan",
        ownerId: [1, 3],
        startDate: new Date(2017, 2, 27, 11, 0),
        endDate: new Date(2017, 2, 27, 13, 30)
    }, {
        text: "Brochure Design Review",
        ownerId: [4],
        startDate: new Date(2017, 2, 27, 12, 0),
        endDate: new Date(2017, 2, 27, 15, 30)
    }, {
        text: "Create Icons for Website",
        ownerId: [3],
        startDate: new Date(2017, 2, 27, 10, 0),
        endDate: new Date(2017, 2, 27, 11, 30)
    }, {
        text: "Upgrade Server Hardware",
        ownerId: [4],
        startDate: new Date(2017, 2, 27, 12, 30),
        endDate: new Date(2017, 2, 27, 16, 0)
    }, {
        text: "Submit New Website Design",
        ownerId: [1],
        startDate: new Date(2017, 2, 27, 16, 30),
        endDate: new Date(2017, 2, 27, 18, 0)
    }, {
        text: "Launch New Website",
        ownerId: [2],
        startDate: new Date(2017, 2, 27, 12, 20),
        endDate: new Date(2017, 2, 27, 12, 0)
    }, {
        text: "Stand-up meeting",
        ownerId: [1, 2, 3, 4],
        startDate: new Date(2017, 2, 27, 9, 0),
        endDate: new Date(2017, 2, 27, 9, 15),
        recurrenceRule: "FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;UNTIL=20171130"
    }
];