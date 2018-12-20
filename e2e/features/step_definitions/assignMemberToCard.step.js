const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const list = require('../../pages/dashboard/list.po');
const dashboard = require('../../pages/dashboard/dashboard.po');

let newCard;
let member;
let newList;
let cardmember;

When(/^I create a card with:$/, (cardData => {
  let cardName = cardData.rowsHash();
  newList = new list();
  newCard = newList.createCard(cardName.CardTitle);
}));

Given(/^I invite a member to the board:$/, (dataMember) => {
  member = new dashboard().inviteMember();
  let data = dataMember.rowsHash();
  member.addMember(data);
});

Given(/^I select the card:$/, (member) => {
  let memberData = member.rowsHash();
  newCard = newList.selectCard(memberData.CardTitle, memberData.ListTitle);
});

When(/^I assign a member to the card:$/, (data) => {
  member = newCard.clickAddMember();
  let memberData = data.rowsHash();
  cardmember = member.addMemberToCardButton();
  cardmember.addMember(memberData);
});

Then(/^I see the assigned member on the form$/, (data) => {
  let memberData = data.rowsHash();
  expect(cardmember.isMember(memberData.user)).to.be.true;
});
