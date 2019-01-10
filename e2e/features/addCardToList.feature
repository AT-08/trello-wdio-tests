#trello.feature
@bvt
Feature: Create card in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title      | test Board 24 |
      | Privacy    | Public        |
      | Background | orange        |
    And I go to Trello main page
    And I select a board with:
      | Title | test Board 24 |
    And I create new list with:
      | Title | test list |

  Scenario: add list to existing board
    Given I select a list with:
      | Title | test list |
    And I create a card with:
      | CardTitle | test card |
    Then I expect card created in list
      | Title | test card |
