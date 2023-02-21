// Here we are adding an event for the search submit button
var searchform = document.getElementById('searchForm');
if ( typeof(searchform) != 'undefined' && searchform != null ) {
  $("#searchForm").submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.

    var sf = $(this);
    var searchurl = sf.attr('action');
    document.getElementById("mainframe").innerHTML = "<div class='spinner-border text-primary'></div>";

    $.ajax({
      type: "POST",
      url: searchurl,
      data: sf.serialize(), // serializes the form's elements.
      success: function(data)
      {
        // alert(data); // show response from the php script.
        storedText = data;
        fetchDone("mainframe",searchurl)
      }
    });
    if ( editor_businessdoc_editor != null ) { editor_businessdoc_editor.watch(); }
    if ( editor_testingdoc_editor != null ) { editor_testingdoc_editor.watch(); }
    if ( editor_trainingdoc_editor != null ) { editor_trainingdoc_editor.watch(); }
  });
}

