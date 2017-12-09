function BankAccount (name, initDeposit) {
  this.name = name;
  this.initDeposit = initDeposit;
}

BankAccount.prototype.withdrawl = function(add) {
  this.initDeposit += add;
}

BankAccount.prototype.deposit = function(sub) {
  this.initDeposit += sub;
}

$(document).ready(function() {
  $('#bank').submit(function(event) {
    event.preventDefault();

    var name = $('input#name').val();
    var initDeposit = $('input#initDeposit').val();
    var sub = $('input#withdrawl').val();
    var add = $('input#deposit').val();

    var newAccount = new BankAccount(name, initDeposit);
  });
});
