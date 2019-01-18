#trello.feature
@bvt
Feature: Create card in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    And I click on link create new board from home page
    And I create a new Board with:
      | Title | test Board |
    And I create new list with:
      | Title | test list |

  Scenario: add card to existing list
    When I create a card with:
      | CardTitle | test card |
      | Title | test list |
    Then I expect card created in list
      | Title | test card |
