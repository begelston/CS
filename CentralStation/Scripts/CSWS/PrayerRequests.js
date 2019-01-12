class PrayerRequests {
    constructor() {
        this.PrayerRequests = ko.observableArray([]);
    }

    getPrayerRequests() {
        var parms = {
            ActiveMembers: true
        };
        parms.ActiveMembers = true;
        var errorF = function (data) {
            alert('failed');
        }.bind(this);

        var successFunc = function (data) {
            var x = ko.toJSON(data);
            alert(x);
        }.bind(this);

        CSWSMain.Dal.GetRequests(data, successFunc, errorF);
    }
}

