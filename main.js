



function activateRectangle(rectangleId) {
    var rectangles = document.querySelectorAll('[id^="rectangle"]');
    
    for (var i = 0; i < rectangles.length; i++) {
      rectangles[i].classList.remove('active');
    }
    
    var rectangle = document.getElementById(rectangleId);
    rectangle.classList.add('active');
  }
  