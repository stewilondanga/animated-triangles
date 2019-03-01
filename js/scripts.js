var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

(function() {
  var demo, run;

  demo = $("#whole-thing");

  run = function() {
    // Imagine a box

    // The box has border-top
    setTimeout(function() {
      return demo.addClass("step-1");
    }, 2500);

    // It also has the other borders
    setTimeout(function() {
      return demo.addClass("step-2");
    }, 5000);
    setTimeout(function() {
      return demo.addClass("step-3");
    }, 5500);
    setTimeout(function() {
      return demo.addClass("step-4");
    }, 6000);

    // Notice how the borders meet each other at angles.
    setTimeout(function() {
      return demo.addClass("step-5");
    }, 7500);

    // The background of the box is transparent.
    setTimeout(function() {
      return demo.addClass("step-6");
    }, 10000);

    // The box is actually zero width and zero height.
    setTimeout(function() {
      return demo.addClass("step-7");
    }, 12000);

    // Three of the borders are actually transparent in color.
    setTimeout(function() {
      return demo.addClass("step-8");
    }, 14000);
    setTimeout(function() {
      return demo.addClass("step-9");
    }, 14500);
    setTimeout(function() {
      return demo.addClass("step-10");
    }, 15000);

    //# Done
    return setTimeout(function() {
      return demo.addClass("step-11");
    }, 18000);
  };

  run();

  $("#re-run").on('click', function() {
    $("#whole-thing").removeClass();
    return run();
  });

  window.__run = run;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLElBQUEsRUFBQTs7RUFBQSxJQUFBLEdBQU8sQ0FBQSxDQUFFLGNBQUY7O0VBRVAsR0FBQSxHQUFNLFFBQUEsQ0FBQSxDQUFBLEVBQUE7Ozs7SUFLSixVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7YUFDVCxJQUFJLENBQUMsUUFBTCxDQUFjLFFBQWQ7SUFEUyxDQUFYLEVBRUUsSUFGRixFQUFBOzs7SUFLQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7YUFDVCxJQUFJLENBQUMsUUFBTCxDQUFjLFFBQWQ7SUFEUyxDQUFYLEVBRUUsSUFGRjtJQUdBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTthQUNULElBQUksQ0FBQyxRQUFMLENBQWMsUUFBZDtJQURTLENBQVgsRUFFRSxJQUZGO0lBR0EsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2FBQ1QsSUFBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkO0lBRFMsQ0FBWCxFQUVFLElBRkYsRUFYQTs7O0lBZ0JBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTthQUNULElBQUksQ0FBQyxRQUFMLENBQWMsUUFBZDtJQURTLENBQVgsRUFFRSxJQUZGLEVBaEJBOzs7SUFxQkEsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2FBQ1QsSUFBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkO0lBRFMsQ0FBWCxFQUVFLEtBRkYsRUFyQkE7OztJQTBCQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7YUFDVCxJQUFJLENBQUMsUUFBTCxDQUFjLFFBQWQ7SUFEUyxDQUFYLEVBRUUsS0FGRixFQTFCQTs7O0lBK0JBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTthQUNULElBQUksQ0FBQyxRQUFMLENBQWMsUUFBZDtJQURTLENBQVgsRUFFRSxLQUZGO0lBR0EsVUFBQSxDQUFXLFFBQUEsQ0FBQSxDQUFBO2FBQ1QsSUFBSSxDQUFDLFFBQUwsQ0FBYyxRQUFkO0lBRFMsQ0FBWCxFQUVFLEtBRkY7SUFHQSxVQUFBLENBQVcsUUFBQSxDQUFBLENBQUE7YUFDVCxJQUFJLENBQUMsUUFBTCxDQUFjLFNBQWQ7SUFEUyxDQUFYLEVBRUUsS0FGRixFQXJDQTs7O1dBMENBLFVBQUEsQ0FBVyxRQUFBLENBQUEsQ0FBQTthQUNULElBQUksQ0FBQyxRQUFMLENBQWMsU0FBZDtJQURTLENBQVgsRUFFRSxLQUZGO0VBL0NJOztFQW9ETixHQUFBLENBQUE7O0VBRUEsQ0FBQSxDQUFFLFNBQUYsQ0FBWSxDQUFDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsUUFBQSxDQUFBLENBQUE7SUFDdkIsQ0FBQSxDQUFFLGNBQUYsQ0FBaUIsQ0FBQyxXQUFsQixDQUFBO1dBQ0EsR0FBQSxDQUFBO0VBRnVCLENBQXpCOztFQUlBLE1BQU0sQ0FBQyxLQUFQLEdBQWU7QUE1RGYiLCJzb3VyY2VzQ29udGVudCI6WyJkZW1vID0gJChcIiN3aG9sZS10aGluZ1wiKVxuXG5ydW4gPSAoKSAtPlxuXG4gICMgSW1hZ2luZSBhIGJveFxuICBcbiAgIyBUaGUgYm94IGhhcyBib3JkZXItdG9wXG4gIHNldFRpbWVvdXQgLT5cbiAgICBkZW1vLmFkZENsYXNzKFwic3RlcC0xXCIpXG4gICwgMjUwMFxuICBcbiAgIyBJdCBhbHNvIGhhcyB0aGUgb3RoZXIgYm9yZGVyc1xuICBzZXRUaW1lb3V0IC0+XG4gICAgZGVtby5hZGRDbGFzcyhcInN0ZXAtMlwiKVxuICAsIDUwMDBcbiAgc2V0VGltZW91dCAtPlxuICAgIGRlbW8uYWRkQ2xhc3MoXCJzdGVwLTNcIilcbiAgLCA1NTAwXG4gIHNldFRpbWVvdXQgLT5cbiAgICBkZW1vLmFkZENsYXNzKFwic3RlcC00XCIpXG4gICwgNjAwMFxuICBcbiAgIyBOb3RpY2UgaG93IHRoZSBib3JkZXJzIG1lZXQgZWFjaCBvdGhlciBhdCBhbmdsZXMuXG4gIHNldFRpbWVvdXQgLT5cbiAgICBkZW1vLmFkZENsYXNzKFwic3RlcC01XCIpXG4gICwgNzUwMFxuICBcbiAgIyBUaGUgYmFja2dyb3VuZCBvZiB0aGUgYm94IGlzIHRyYW5zcGFyZW50LlxuICBzZXRUaW1lb3V0IC0+XG4gICAgZGVtby5hZGRDbGFzcyhcInN0ZXAtNlwiKVxuICAsIDEwMDAwXG4gIFxuICAjIFRoZSBib3ggaXMgYWN0dWFsbHkgemVybyB3aWR0aCBhbmQgemVybyBoZWlnaHQuXG4gIHNldFRpbWVvdXQgLT5cbiAgICBkZW1vLmFkZENsYXNzKFwic3RlcC03XCIpXG4gICwgMTIwMDBcbiAgXG4gICMgVGhyZWUgb2YgdGhlIGJvcmRlcnMgYXJlIGFjdHVhbGx5IHRyYW5zcGFyZW50IGluIGNvbG9yLlxuICBzZXRUaW1lb3V0IC0+XG4gICAgZGVtby5hZGRDbGFzcyhcInN0ZXAtOFwiKVxuICAsIDE0MDAwXG4gIHNldFRpbWVvdXQgLT5cbiAgICBkZW1vLmFkZENsYXNzKFwic3RlcC05XCIpXG4gICwgMTQ1MDBcbiAgc2V0VGltZW91dCAtPlxuICAgIGRlbW8uYWRkQ2xhc3MoXCJzdGVwLTEwXCIpXG4gICwgMTUwMDBcbiAgXG4gICMjIERvbmVcbiAgc2V0VGltZW91dCAtPlxuICAgIGRlbW8uYWRkQ2xhc3MoXCJzdGVwLTExXCIpXG4gICwgMTgwMDBcbiAgXG4gIFxucnVuKClcblxuJChcIiNyZS1ydW5cIikub24gJ2NsaWNrJywgLT5cbiAgJChcIiN3aG9sZS10aGluZ1wiKS5yZW1vdmVDbGFzcygpXG4gIHJ1bigpXG4gIFxud2luZG93Ll9fcnVuID0gcnVuOyJdfQ==
//# sourceURL=coffeescript
