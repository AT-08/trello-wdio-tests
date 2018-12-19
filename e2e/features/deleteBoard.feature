#trello.feature
Feature: Create board in Trello
  As a User
  I want to create boards in Trello

  Background: Create a board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I create a new Board with:
      | Title       |   finalBoard |
      | Privacy     |   Private |

  Scenario: Delete an existing board in Trello
    Given I login "https://trello.com/login?returnUrl=%2F"
    When I search a Board with:
      | Title       |   finalBoard |
    And I delete it
    And I go to boards page "https://trello.com/romandenisov7/boards"
    Then I expect the board delete
