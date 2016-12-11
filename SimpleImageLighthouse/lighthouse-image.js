/**
 * Simple Image LightHouse v1.0
 * Author: Rahul Vohra
 */

var LightHousePlugin = {
  Initialize: function(selector) {
    $('img.' + selector).on('click', function() {
      var src = $(this).attr('src');

      var imageFull = '<img id="fullImage" src="' + src + '" style="width:90%; text-align:center; z-index:9999;position:absolute; top: 50px; left: 50px;" />';
      var closeBtn = '<span class="fullImageCloseButton" style="position:absolute; top: 5px; right: 5px;z-index: 9999;cursor:pointer;">X</span>';
      if ($('.overlay').length < 1) {
        $('body').append('<span class="overlay"></span>');
        $('body').append(imageFull);
        $('body').append(closeBtn);
      }
      $('span.fullImageCloseButton').on('click', function() {
        LightHousePlugin.CloseImage();
      });
    });
  },
  CloseImage: function() {
    $('.overlay').remove();
    $('#fullImage').remove();
    $('span.fullImageCloseButton').remove();
  }
}