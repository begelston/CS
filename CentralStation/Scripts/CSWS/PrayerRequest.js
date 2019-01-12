class PrayerRequest {
    constructor(firstName, lastName, email, request) {
        this.FirstName = ko.observable();
        this.LastName = ko.observable();
        this.Email = ko.observable();
        this.Request = ko.observable();

        this.initialize(firstName, lastName, email, request);
    }

    initialize(firstName, lastName, email, request) {
        this.FirstName(firstName);
        this.LastName(lastName);
        this.Email(email);
        this.Request(request);
    }
}