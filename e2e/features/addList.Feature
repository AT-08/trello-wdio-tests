#trello.feature
Feature: Create list in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owmer1}"
    When I create a new Board with:
      | Title      | test Board |
      | Privacy    | Public     |
      | Background | orange     |

  Scenario: add list to existing board
    Given I selected a board
      | Title | test board |
    When I create new list
    Then I expect list created in board
