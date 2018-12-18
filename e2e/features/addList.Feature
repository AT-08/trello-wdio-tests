#trello.feature
Feature: Create list in Trello
  As a User
  I want to create list in Trello

  Background: Create a board in Trello
    Given I login "{credentials.owmer1}"
    When I  created new board
      | Title      | test Board |
      | Privacy    | Public     |
      | Background | orange     |

  Scenario: add list to existing board
    Given I selected a board with:
      | Title | test board |
    When I create new list
    Then I expect list created in board
