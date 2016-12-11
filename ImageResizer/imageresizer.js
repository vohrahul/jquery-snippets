var _imageResizerDeviation = 20,
  ImageResizer = {
    Initialize: function(i) {
      this.SetOptions(i);
      $(".wrappedImage").each(function(i, e) {
        var p = $(this).parent().closest("div.imageWrap");
        var t = $(p).width(),
          a = $(this).width(),
          n = _imageResizerDeviation / 100 * t;
        if (a > t - n) {
          $(this).css("width", t);
        } else {
          $(p).prepend('<div class="_imageResizerBackgroundDiv"></div>');
          var temp = p.first();
          console.log($(temp));
          $(temp).css('background', 'url("' + $(this).attr('src') + '")');
          $(temp).css('background-size', '2px');
          $(temp).css('background-repeat', 'repeat');
        }
      })
    },
    SetOptions: function(i) {
      null != i && (_imageResizerDeviation = null != i.deviation ? i.deviation : 0)
    }
  };