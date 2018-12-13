#board.feature

Feature: Create board in Trello
  As a User
  I want to create boards in Trello

  Scenario: Create a board in Trello
    Given I login with user
    When I create a new Board with:
      | Title      | Team Board |
      | Privacy    | Public     |
      | Background | orange     |
    Then I expect my board created
