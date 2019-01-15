#trello.feature
@wip
Feature: Create list in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.owner1}"
    And I create a new Board with:
      | Title      | FirstBoardMLTABF |
    And I go to Trello main page
    And I create a new Board with:
      | Title      | SecondBoardMLTABF |
    And I go to Trello main page
    And I select a board in Boards Drawer with:
      | Title | FirstBoardMLTABF |
    And I create new list with:
      | Title | ListFirstMLTABF |
  Scenario: As a user owner change list to other board
    When I move the list to the my board:
      | BoardTitle | SecondBoardMLTABF|
    And I go to Trello main page
    And I select a board in Boards Drawer with:
      | Title | SecondBoardMLTABF|
    Then I should see the list in the board:
      | Title | ListFirstMLTABF |
