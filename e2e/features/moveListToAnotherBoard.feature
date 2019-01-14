#trello.feature
Feature: Create list in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    And I create a new Board with:
      | Title      | FirstBoard |
    And I create a new Board with:
      | Title      | SecondBoard |
    And I go to Trello main page
    And I select a board in Boards Drawer with:
      | Title | FirstBoard |
    And I create new list with:
      | Title | ListFirstBoard |
  Scenario: As a user owner change list to other board
    When I move the list to the my board:
      | BoardTitle | SecondBoard |
      | ListTitle | To Do     |
    And I select a board in Boards Drawer with:
      | Title | FirstBoard |
    Then I not should see the list in the board:
      | Board | SecondBoard |
    And I should see the list in the board:
      | Board | SecondBoard |
