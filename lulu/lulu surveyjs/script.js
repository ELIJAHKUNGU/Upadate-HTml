Survey.StylesManager.applyTheme("modern");

var surveyJSON = { "pages": [{ "name": "page1", "elements": [{ "type": "html", "name": "question2" }] }, { "name": "page2" }, { "name": "page3", "elements": [{ "type": "dropdown", "name": "question1", "choices": ["item1", "item2", "item3"] }] }] }

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});