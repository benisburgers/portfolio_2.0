$(document).ready(function(){

  $('.shift').viewportChecker({
      classToAdd: 'active', // Class to add to the elements when they are visible,
      classToRemove: 'invisible', // Class to remove before adding 'classToAdd' to the elements
      invertBottomOffset: true, // Add the offset as a negative number to the element's bottom
      repeat: true, // Add the possibility to remove the class if the elements are not visible
      callbackFunction: function(elem, action){}, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
  	scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.
  });

});
