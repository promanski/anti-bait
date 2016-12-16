function selectText(text){
  var parts = text.split("/");
  parts = parts[(parts.length)-2];
  parts = parts.replace(/-/g, ' ');
  return parts.charAt(0).toUpperCase() + parts.slice(1);
}

function replaceContent(){
var links = $('a[href^="http:/"]');

  for (var index=0; index<links.length; index++){
      var trueText = selectText(links[index].href);
      var fakeText = getTextFromTitle(links[index]).text();
      getTextFromTitle(links[index]).text(trueText);
  }
}

function getTextFromTitle(el) {
    return $(el).find('.title');
}
if (window.location.href.indexOf("onet.pl" >-1)){
replaceContent();
}
