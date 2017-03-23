var askAge = function(ttt) {
  if (ttt >= 18) {
    window.location.href = "https://www.usa.gov/register-to-vote";
  } else {
    window.location.href = "https://en.wikipedia.org/wiki/Twenty-sixth_Amendment_to_the_United_States_Constitution";
  };
};

$(document).ready(function() {
  // function registerProduct(button, productName) {
  //   $("#"+button).click(function(event){
  //     event.preventDefault();
  //     $("#form").show();
  //     $("#form").unbind().submit(function(event){
  //       var name = $("#name").val();
  //       var address = $("#address").val();
  //       $("#form").hide();
  //       $("#name").val("");
  //       $("#address").val("");
  //       $("#receipt").append(productName + name );
  //       event.preventDefault();
  //     });
  //   });
  // }
  // registerProduct("btn-flour","Flour");
  // registerProduct("btn-chocolate","Chocolate");
  // registerProduct("btn-tools","Tools");
  var age = parseInt(prompt("Enter your age:"));
  askAge(age);
  // if (age >= 18) {
  //   window.location.href = "https://www.usa.gov/register-to-vote";
  // } else {
  //   window.location.href = "https://en.wikipedia.org/wiki/Twenty-sixth_Amendment_to_the_United_States_Constitution";
  // };
});
