(function(){
  var head = document.getElementsByTagName('head')[0],
      css = '#hg-bar { display: none; }',
      style = document.createElement('style'),
      sl1 = document.createElement("link"),
      sl2 = document.createElement("link");

  style.type = 'text/css';

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);

  sl1.type = "text/css";
  sl1.rel = "stylesheet";
  sl1.href = "//fonts.googleapis.com/css?family=Source+Sans+Pro:400,600";
  head.appendChild(sl1);

  sl2.type = "text/css";
  sl2.rel = "stylesheet";
  sl2.href = "https://api.hasgeek.com/static/css/baseframe-networkbar.css?fdb5800d";
  head.appendChild(sl2);

  var container = document.getElementById('networkbar');
  if (container === null) {
    container = document.createElement('div');
    document.body.insertBefore(container, document.body.firstChild);
  }
  container.innerHTML = "\u003cdiv id=\"hg-bar\" class=\"no-print\"\u003e\n    \u003cdiv class=\"container\"\u003e\n          \u003cul id=\"hg-barlinks\"\u003e\n            \n    \u003cli id=\"hg-networkbar-home\" class=\"strong\"\u003e\u003ca href=\"https://hasgeek.com/\"\u003eHasGeek\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-hasjob\"\u003e\u003ca href=\"https://hasjob.co/\"\u003eHasjob\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-hgtv\"\u003e\u003ca href=\"https://hasgeek.tv/\"\u003eHGTV\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-talkfunnel\"\u003e\u003ca href=\"https://talkfunnel.com/\"\u003eTalkfunnel\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-events\"\u003e\u003ca href=\"#\" class=\"hg-submenu\"\u003eEvents\u003c/a\u003e\n        \u003cul\u003e\n          \n    \u003cli id=\"hg-networkbar-metarefresh\"\u003e\u003ca href=\"https://metarefresh.in/\"\u003eMeta Refresh\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-rootconf\"\u003e\u003ca href=\"https://rootconf.in/\"\u003eRootconf\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-fifthelephant\"\u003e\u003ca href=\"https://fifthelephant.in/\"\u003eThe Fifth Elephant\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-jsfoo\"\u003e\u003ca href=\"https://jsfoo.in/\"\u003eJSFoo\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-droidcon\"\u003e\u003ca href=\"https://droidcon.in/\"\u003eDroidcon India\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-pastevents\" class=\"hg-menu-section\"\u003ePast events\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-angularjs-miniconf\"\u003e\u003ca href=\"https://metarefresh.in/2014/angularjs-miniconf\"\u003eAngularJS Miniconf\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-cartonama\"\u003e\u003ca href=\"https://cartonama.com/2012\"\u003eCartonama Conference\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-phpcloud\"\u003e\u003ca href=\"https://phpcloud.hasgeek.com/\"\u003eScaling PHP in the Cloud\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-androidcamp\"\u003e\u003ca href=\"https://androidcamp.hasgeek.com/\"\u003eAndroidCamp\u003c/a\u003e\u003c/li\u003e\n    \u003cli id=\"hg-networkbar-doctypehtml5\"\u003e\u003ca href=\"http://www.doctypehtml5.in/\"\u003eDocType HTML5\u003c/a\u003e\u003c/li\u003e\n\n        \u003c/ul\u003e\u003c/li\u003e\n\n          \u003c/ul\u003e\n    \u003c/div\u003e\n  \u003c/div\u003e";

  var siteid = container.getAttribute('data-siteid');
  if (siteid) {
    var menuelement = document.querySelector('#hg-bar [id="hg-networkbar-' + siteid + '"]');
    if (menuelement !== null) {
      menuelement.className = menuelement.className + " selected";
    }
  }
})();