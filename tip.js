function showMessage(message) {
  var container = $("#tip-container");
  if (container) {
    if (container.css("display") === "block") {
      container.css({
        "display":"none"
      });
    }
    
    container.css({
        "left": "initial",
        "z-index": "0",
        "margin-left": 'auto',
      });
    
    container.html(message);
    $("#tip-container").show();
    
    var screenWidth = parseInt($(window).width());
    var minWidth = screenWidth * 0.3;
    var maxWidth = screenWidth * 0.9;
    container.css({
      "min-width": minWidth + "px",
      "max-width": maxWidth + "px"
    });

    var width = $("#tip-container").width();
    var half = - (width / 2);
    
    $("#tip-container").css({
        "left": "50%",
        "margin-left": '' + half + 'px',
        "z-index": 999
    });
    
    setTimeout(function(){
      container.hide();
    }, 1000);
  }
}