#trello.feature
@bvt
Feature: Add list in board.

  Background: Create a board in Trello.
    Given I login with "{credentials.owner1}"
    And I click on link create new board from home page
    And I create a new Board with:
      | Title | test Board 2 |

  Scenario: add list to existing board
    When I create new list with:
      | Title | test list1 |
    Then I expect list created in board
      | Title | test list1|
