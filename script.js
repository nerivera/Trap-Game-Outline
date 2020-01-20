var trapLocations = [undefined, undefined, undefined];
var position = 1;
$(document).ready(function() {
  $("table").css("width", $("table").css("height"));
  $("td")
    .mouseover(function() {
      if ($(this).attr("class") === undefined) {
        $(this).animate({
          backgroundColor: (this.id != trapLocations[0] && this.id != trapLocations[1] && this.id != trapLocations[2]) ? "#ffc0cb" : "#000000"
        }, {
          duration: (this.id != trapLocations[0] && this.id != trapLocations[1] && this.id != trapLocations[2]) ? 400 : 2000,
          quene: false
        });
      }
    })
    .mouseleave(function() {
      if ($(this).attr("class") === undefined) {
        $(this).stop();
        if (this.id != trapLocations[0] && this.id != trapLocations[1] && this.id != trapLocations[2]) {
          $(this).animate({
            backgroundColor: "#ffffff"
          }, {
            duration: 200,
            quene: false
          });
        }
      }
    })
    .click(function() {
      if ($(this).attr("class") === undefined && this.id != trapLocations[0] && this.id != trapLocations[1] && this.id != trapLocations[2]) {
        $("#" + trapLocations[0]).animate({
          backgroundColor: "#ffffff"
        }, {
          duration: 700,
          quene: false
        });
        trapLocations[0] = trapLocations[1];
        trapLocations[1] = trapLocations[2];
        trapLocations[2] = this.id;
        $(this).stop();
        $(this).animate({
          backgroundColor: "#ffffff"
        }, {
          duration: 1000,
          quene: false
        });
      }
    });
});
