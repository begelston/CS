
class TheDal {
    constructor(urlApi) {
        this.UrlApi = urlApi;
    }

    execute(path, type, parms, success, error) {

        parms = ko.toJSON(parms);// convert paramters object to json string for API 

        $.ajax({
            //url: vRad.OMS.UrlApi + path,
            url: this.UrlApi + path,
            type: type,
            data: parms,
            contentType: 'application/json; charset=utf-8',
            async: true,
            success: function (inData, textStatus, jqXHR) {
                if (success) {
                    success(inData, textStatus, jqXHR);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                //if (jqXHR.status === 401) {
                //    // User is not authorized. Redirect to login page, keeping any query parameters
                //    window.location = vRad.OMS.UrlPortal + "login.aspx" + window.location.search;
                //    return;
                //}
                ///////////////////
                //error = error || vRad.error.showErrorMessage;
                error(jqXHR, textStatus, errorThrown);
            }
        });
    }

    GetMembers(parms, success, error) {
        this.execute('/MemberView/GetAll', 'POST', parms, success, error);
    }

    GetRequests(parms, success, error) {
        this.execute('CSWS/PrayerRequests', 'POST', parms, success, error);
    }
}