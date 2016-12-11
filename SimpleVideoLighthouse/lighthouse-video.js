/**
 * Simple Video LightHouse v1.0
 * Author: Rahul Vohra
 */

var LightHousePlugin = {
  Initialize: function(selector) {
    $('video.' + selector).on('click', function() {
      var arrSrc = $(this).find('source').map(function() {
        return $(this).attr('src');
      });

      var arrVtype = $(this).find('source').map(function() {
        return $(this).attr('type');
      });
      var src = arrSrc[0];
      var vtype = arrVtype[0];
      var videoFull = '<video id="fullVideo" controls style="width:90%; height:90%; text-align:center; z-index:9999;position:absolute; top: 50px; left: 50px;"><source src="' + src + '" type="' + vtype + '"></video>';
      var closeBtn = '<span class="fullVideoCloseButton" style="position:absolute; top: 5px; right: 5px;z-index: 9999;cursor:pointer;">X</span>';
      if ($('.overlay').length < 1) {
        $('body').append('<span class="overlay"></span>');
        $('body').append(videoFull);
        $('body').append(closeBtn);
      }
      $('span.fullVideoCloseButton').on('click', function() {
        LightHousePlugin.CloseVideo();
      });
    });
  },
  CloseVideo: function() {
    $('.overlay').remove();
    $('#fullVideo').remove();
    $('span.fullVideoCloseButton').remove();
  }
}