$(document).ready(function () {
  $(".btech").hide();
  $("#course").click(function () {
    var course = $("#course").val();
    if (course == "degree") {
      $("#Dip").hide();
      $(".dip").hide();
      $(".btech").show();
    } else {
      $("#Dip").show();
      $(".dip").show();
      $(".btech").hide();
    }
  });
});
