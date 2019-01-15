#trello.feature
Feature: Create list in Trello

  Background: Create a board in Trello
    Given I login with "{credentials.member1}"
    And I create a new Board with:
      | Title      | FirstBoardX4 |
    And I go to Trello main page
    And I create a new Board with:
      | Title      | SecondBoardX4 |
    And I go to Trello main page
    And I select a board in Boards Drawer with:
      | Title | FirstBoardX4 |
    And I create new list with:
      | Title | ListFirstBoard |
  Scenario: As a user owner change list to other board
    When I move the list to the my board:
      | BoardTitle | SecondBoardX4 |
    And I go to Trello main page
    And I select a board in Boards Drawer with:
      | Title | SecondBoardX4 |
    Then I should see the list in the board:
      | Title | ListFirstBoard |
