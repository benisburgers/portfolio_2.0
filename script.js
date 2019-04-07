$(document).ready(function(){

  $('.shift').viewportChecker({
      classToAdd: 'active', // Class to add to the elements when they are visible,
      classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
      invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
      repeat: false, // Add the possibility to remove the class if the elements are not visible
      callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
  	scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
  });

  var caseOpen = false;

  function openCase(el) {
    //find collapsed-content
    var collapsedContent = el.find('.collapsed-content');
    //get collapsed-content height
    var collapsedContentHeight = collapsedContent.height();
    //expand collapsed content
    collapsedContent.css('max-height','none');
    //measure collapsed content height
    collapsedContentHeight = collapsedContent.height()
    //collapse collapsed content
    collapsedContent.css('max-height','0');
    //get collapsed content height (jquery needs this for css transition)
    collapsedContent.css('max-height');
    //provide collapsed content with new max-height to allow transition
    collapsedContent.css('max-height',collapsedContentHeight);
    //add class 'expand' to this case
    el.addClass('expand');
    //define variable openCase as 'this' to allow current case to be closed by another case
    caseOpen = el;
  }

  function closeCase(el) {
    //find collapsed-content
    var collapsedContent = el.find('.collapsed-content');
    //reduce max-height of collapsedContent back to 0
    collapsedContent.css('max-height','0');
    //remove class expand from case
    el.removeClass('expand');
    //set global variable openCase to 'false', signifiying no open cases
    caseOpen = false;
  }


  $(function() {
    $('.case').on('click', function() {
      var thisCase = $(this);
      //check if a case is open
      if (caseOpen) {
        console.log('a case is open');
        //check if 'this' case is open
        if (thisCase[0] == caseOpen[0]) {
          console.log('you clicked on the open case');
          //close thisCase
          closeCase(thisCase)
        }
        else {
          console.log('you clicked on a closed case');
          //close open Case
          closeCase(caseOpen);
          //open this case
          openCase(thisCase)
        }
      }
      else {
        console.log('no case is open');
        openCase(thisCase)
      }
    });
  });

});
