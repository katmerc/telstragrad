
//The url of the documents collection
var theUrl = 'http://localhost:3000/api/documents'

//Delete
function httpDelete()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("DELETE", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

//Creates the complete action to get a document
function concatenateAction(){
    var action_src = "http://localhost:3000/api/documents/" + document.getElementsByName("id")[0].value;
    var getForm = document.getElementById('getForm');
    getForm.action = action_src ;
}
