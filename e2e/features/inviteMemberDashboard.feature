#trello.feature
@wip
Feature: Create Board in Trello
  As a User
  I want to create board in Trello

  Background: Create a Board in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title      | test Board 24 |
      | Privacy    | Public        |
      | Background | orange        |
    And  I go to Trello main page

  Scenario: invite member to the board
    Given I select a board with:
      | Title | test Board |
    When I select Members button
    And I add member in the board:
      | user | {credentials.member1} |
    Then I see the member in board Members
      | user | {credentials.member1} |
