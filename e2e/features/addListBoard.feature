#trello.feature
Feature: Create list in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title      | test Board 24 |
      | Privacy    | Public        |
      | Background | orange        |
    And I go to Trello main page

  Scenario: add list to existing board
    Given I select a board in Boards Drawer with:
      | Title | test Board 24 |
    When I create new list with:
      | Title | test list |
    Then I expect list created in board
      | Title | test list |
