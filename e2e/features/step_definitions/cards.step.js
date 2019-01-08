const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const List = require('../../pages/dashboard/list.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');

let newCard;
let member;
let newList;
let cardMember;

When(/^I create a card with:$/, (cardData => {
  let cardName = cardData.rowsHash();
  newList = new List();
  newCard = newList.createCard(cardName.CardTitle);
}));

Given(/^I invite a member to the board:$/, (dataMember) => {
  member = new Dashboard().inviteMember();
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
  cardMember = member.addMemberToCardButton();
  cardMember.addMember(memberData);
});

Then(/^I see the assigned member on the form$/, (data) => {
  let memberData = data.rowsHash();
  expect(cardMember.isMember(memberData.user)).to.be.true;
});

Then(/^I expect card created in list$/, (cardName) => {
  let card = cardName.rowsHash();
  let nameCard = card.Title;
  newList = new List();
  expect(newList.isThereCard(nameCard)).to.be.true;
});
