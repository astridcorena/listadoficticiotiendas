$(".wrapper").on("click", function(){
  $.getJSON( "", function( data ) { //se supone que aquí debería ir el enlace para el archivo local pero no lo lee
    var elements = [];
    var $table = $('<table></table>');
    $table.append("<tr><th>Code</th><th>Name</th></tr>")
    $.each(data, function(i, element) {
      var tr = $('<tr>').append(
        $('<td>').text(element.code),
          $('<td>').text(element.name)
      );
      $table.append(tr);
    });
    $(".wrapper").append($table)
    $(".wrapper button").hide()
  });
})
