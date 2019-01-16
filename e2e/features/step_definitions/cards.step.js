const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const List = require('../../pages/dashboard/list.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');
const Card = require('../../pages/card/card.po');

let newCard;
let member;
let newList;
let cardMember;

let card;

When(/^I create a card with:$/, (cardData => {
  let cardName = cardData.rowsHash();
  newList = new List();
  newCard = newList.createCard(cardName.CardTitle);
}));

Given(/^I invite a member to the board:$/, (dataMember) => {
  member = new Dashboard().inviteMember();
  let data = dataMember.rowsHash();
  member.addAMember(data);
});

Given(/^I select the card:$/, (member) => {
  let memberData = member.rowsHash();
  card = memberData.CardTitle;
  newCard = newList.selectCard(memberData.CardTitle, memberData.ListTitle);
});

When(/^I assign a member to the card:$/, (data) => {
  member = newCard.clickAddMember();
  let memberData = data.rowsHash();
  cardMember = member.addMemberToCardButton();
  cardMember.addMember(memberData);
});

Then(/^I see the assigned member on the form card$/, (data) => {
  let memberData = data.rowsHash();
  expect(cardMember.isMember(memberData.user)).to.be.true;
});

Then(/^I expect card created in list$/, (cardName) => {
  let card = cardName.rowsHash();
  let nameCard = card.Title;
  newList = new List();
  expect(newList.isThereCard(nameCard)).to.be.true;
});

When(/^I move the card to the my list:$/, (data) => {
  newCard = new Card();
  let CardSet = data.rowsHash();
  newCard.moveCard(CardSet.ListTitle);
});

When(/^I move the card to:$/, (data) => {
  newCard = new Card();
  let CardSet = data.rowsHash();
  newCard.moveCard(CardSet);
});

Then(/^I see the card in:$/, (data) => {
  newList = new List();
  let destin = data.rowsHash();
  expect(newList.verifyMoveCard(destin, card)).to.be.true;
});

Then(/^I don't see the card in:$/, (data) => {
  newList = new List();
  let origin = data.rowsHash();
  expect(newList.verifyMoveCard(origin, card)).to.be.false;
});
