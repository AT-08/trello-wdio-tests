#trello.feature
@bvt
Feature: Archive an list in existing board

  Background: I archive a list in existing board
    Given I login with "{credentials.owner1}"
    And I create a new Board with:
      | Title | Board Test |
    And I create new list with:
      | Title | test list1 |

  Scenario: I archive a list in existing board
    When I select a list with:
      | Title | test list1 |
    And I archive this list
    Then I don't expect list in board:
      | Title | test list1 |
