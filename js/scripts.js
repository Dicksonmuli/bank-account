
//business logic
function BankAccount(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
  this.amount= amount;
}
BankAccount.prototype.getAccountType = function getAccountType(){
    return this.accountType;
}
function Address(street, city, county) {
  this.street = street;
  this.city = city;
  this.county = county;
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.city + ", " + this.state;
}
var balance=0;
var deposit= function(bal){
  balance-=bal;
  return balance;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
}

// user interface logic
$(document).ready(function() {

  $("#welcome").click(function(){
    event.preventDefault();
    $(".inner-wrapper").fadeIn(2000).delay(2000);
    $(".introduction").fadeOut(2000);
  });
  $("#robot").click(function(){
    event.preventDefault();
    $(".contact").fadeIn(2000).delay(2000);
    $("#header-wrapper").fadeOut(2000);
  });
  $("#login-button").submit(function(event){
    event.preventDefault();
    $(".inner-wrapper").fadeOut(2000);
    var accountName=$("input#new-first-name").val("");
    $(".text-area").fadeIn(2000).delay(2000).text("Welcome" + accountName);
  })

});
  //
  //
  //
  // $("form#new-contact").submit(function(event) {
  //   event.preventDefault();
  //
  //   var inputtedFirstName = $("input#new-first-name").val();
  //   var inputtedLastName = $("input#new-last-name").val();
  //   var newContact = new Contact(inputtedFirstName, inputtedLastName);
  //
  //   $(".new-address").each(function() {
  //     var inputtedStreet = $(this).find("input.new-street").val();
  //     var inputtedCity = $(this).find("input.new-city").val();
  //     var inputtedCounty = $(this).find("input.new-county").val();
  //     var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
  //     newContact.addresses.push(newAddress)
  //   });
  //
  //   $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");
  //
  //  $(".contact").last().click(function() {
  //    $("#show-contact").show();
  //    $("#show-contact h2").text(newContact.fullName());
  //    $(".first-name").text(newContact.firstName);
  //    $(".last-name").text(newContact.lastName);
  //    $("ul#addresses").text("");
  //    newContact.addresses.forEach(function(address) {
  //      $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
  //    });
  //  });
 // })
