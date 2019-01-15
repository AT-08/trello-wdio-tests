#trello.feature
@bvt
Feature: Create card in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    And I create a new Board with:
      | Title | test Board |
    And I create new list with:
      | Title | test list |

  Scenario: add card to existing list
    When I select a list with:
      | Title | test list |
    And I create a card with:
      | CardTitle | test card |
    Then I expect card created in list
      | Title | test card |
