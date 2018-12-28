#trello.feature
Feature: Create card in Trello

  @wip
  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Board with:
      | Title      | test Board 24 |
      | Privacy    | Public        |
      | Background | orange        |
    And I go to Trello main page
    Then add list to existing board
    And I select a board with:
      | Title | test Board 24 |
    And I create new list with:
      | Title | test list |

  @wip
  Scenario: add list to existing board
    Given I select a list with:
      | Title | test list |
    And I create new card with:
      | Title | test card |
    Then I expect card created in list
      | Title | test card |
