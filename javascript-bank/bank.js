/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && balance === Math.floor(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    var currentAccountNum = this.nextAccountNumber;
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return currentAccountNum;

  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {

  for (var i = 0; i < this.accounts.length; i++) {

    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {

  var total = 0;

  for (var i = 0; i < this.accounts.length; i++) {
    total += this.accounts[i].getBalance();
  }
  return total;
};
