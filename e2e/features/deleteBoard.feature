#trello.feature
Feature: Create board in Trello
  As a User
  I want to create boards in Trello

#  Background: Create a board in Trello
#    Given I login "https://trello.com/login?returnUrl=%2F"
#    When I create a new Board with:
#      | Title       |   board4delete2 |
#      | Privacy     |   Private       |

  Scenario: Delete an existing board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I search a Board with:
      | Title       |   DanteBoard |
    And I delete it
    Then I expect the board delete
