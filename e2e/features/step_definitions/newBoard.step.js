const {Given, When, Then} = require('cucumber');
const expect = require('chai');

const board = require('../../pages/container/boardContainer.po');

Given(/^I click on link create new board from home page$/, () => {
  console.log('1');
  board.onClickNewBoard();
});

Given(/^I click on plus icon from header$/, () => {
  console.log('2');
});

Given(/^I click on create board option from right dropdown menu$/, () => {
  console.log('3');
});

Given(/^I click on button board icon from header$/, () => {
  console.log('4');
});

Given(/^I click on create new board link from left dropdown menu$/, () => {
  console.log('5');
});

When(/^I create a new board using link button with:$/, (data) => {
  console.log('6', data);
});

When(/^I create a new board using plus icon with:$/, (data) => {
  console.log('7', data);
});

When(/^I create a new board using board icon with:$/, (data) => {
  console.log('8', data);
});

Then(/^I expect my board created$/, () => {
  console.log('9');
  expect.assert;
});

Then(/^I see the board$/, () => {
  console.log('10');
  expect.assert;
});
