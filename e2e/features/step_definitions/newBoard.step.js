const {Given, When, Then} = require('cucumber');
const expect = require('chai');



Given(/^I click on link create new board from home page$/, () => {
  console.log('new board');
});

Given(/^I click on plus icon from header$/, () => {
  console.log('new board');
});

Given(/^I click on create board option from right dropdown menu$/, () => {
  console.log('new board');
});

Given(/^I click on button board icon from header$/, () => {
  console.log('new board');
});

Given(/^I click on create new board link from left dropdown menu$/, () => {
  console.log('new board');
});

When(/^I create a new board using link button with:$/, (data) => {
  console.log('new board', data);
});

When(/^I create a new board using plus icon with:$/, (data) => {
  console.log('new board', data);
});

When(/^I create a new board using board icon with:$/, (data) => {
  console.log('new board', data);
});

Then(/^I expect new board created using link$/, (data) => {
  console.log('new board', data);
});

Then(/^I expect new board created using plus icon$/, (data) => {
  console.log('new board', data);
});

Then(/^I expect new board created using board icon$/, (data) => {
  console.log('new board', data);
});
