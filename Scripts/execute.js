chrome.runtime.onInstalled.addListener(function (object){
    chrome.tabs.create({url: "firstOpen.html"});
});

chrome.tabs.executeScript(null, {file: "jquery.js"});
chrome.tabs.executeScript(null, {file: "execute.js"});
chrome.tabs.insertCSS(null, {file: "night.css"});


var currentWindow = window.location.href;
if (currentWindow == "https://twitter.com") {
    $('.bottomText').html("Attempted Development by <a href='https://twitter.com/ggarnhart' target='_blank'>@GGarnhart</a>.");
    
    $('.u-bgUserColorLightest').each(function(){
        this.style.setProperty('background-color', '#314257', 'important', 'important');
    });

    $('.u-borderUserColor').each(function(){
        this.style.setProperty('border-color', '#4099FF', 'important', 'important');

    });

    $('button.PollingCardComposer-addOption.u-textUserColor').each(function(){
        this.style.setProperty('color', '#939ea5', 'important', 'important');
    });

    $('button.PollingCardComposer-defaultDuration.u-textUserColor').each(function(){
        this.style.setProperty('color', '#939ea5', 'important', 'important');
    });

    $('button.PollingCardComposer-remove.u-textUserColor').each(function(){
        this.style.setProperty('color', '#939ea5', 'important', 'important');
    });
}

else{
    $(".bottomText").html("To use, please navigate to <a href='https://twitter.com' target='_blank'>twitter</a> and click this icon again.");
};
