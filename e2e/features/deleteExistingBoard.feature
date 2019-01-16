#trello.feature
@bvt
Feature: Delete an existing board

  Background: I create a new board in Trello
    Given I login with "{credentials.owner1}"
    And I click on link create new board from home page
    And I create a new Board with:
      | Title      | DeadBoard test |
  Scenario: I delete an existing board
    When I click in ShowMenu link
    And I delete it
    And I go to Trello main page
    Then I expect the board delete:
      | Title      | DeadBoard test |

