


let customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

let bestCustomer;

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBest) {
  bestCustomer = newBest;
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else';
}

module.exports = {
  customerName,
  upperCaseCustomerName,
  setBestCustomer,
  overwriteBestCustomer,
  changeLeastFavoriteCustomer
};
