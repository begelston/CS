class CSWS {
    constructor() {

    }

    initialize() {
        //this.Dal = new TheDal('https://randomuser.me/api/');
        this.Dal = new TheDal('http://localhost:8088/api');
        this.PrayerRequests = new PrayerRequests();        
        this.PrayerRequests.getPrayerRequests();
    }

}


