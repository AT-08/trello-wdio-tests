
Feature: Delete team board

  Background:
    Given  I login with "{credentials.owner1}"
    And I create a new Board with:
      | Title      | test Board 24 |
      | Privacy    | Public        |
      | Background | orange        |
    And  I create a team board:
      | Title | DeadBoard1 |

  Scenario: I delete a board to team
    And I delete it
    And I go to Trello main page
    Then I expect the board delete
