/**
 * CharLimit v1.0 - Character Limit Counter
 * Author: Rahul Vohra
 */

var CharLimitPlugin = {
  Initialize: function(selector, limitSize) {
    this.AppendCharCount(selector, limitSize);
    $('textarea.' + selector).on('keyup', function() {
      el = $(this);
      if (el.val().length > limitSize) {
        el.val(el.val().substr(0, limitSize));
      } else {
        var existing = el.next('i').find('span.charCount');
        $(existing).text(limitSize - el.val().length);
      }
    });
  },
  AppendCharCount: function(selector, limitSize) {
    $("textarea." + selector).each(function() {
      var limit = this.value.length;
      limit = limit == 0 ? limitSize : (limitSize - limit);
      var count = '<i><span class="charCount">' + limit + '</span> characters left.<i>';
      $(count).insertAfter(this);
    });
  }
}
