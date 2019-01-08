#New board
@bvt
Feature: Create a board in Trello with all scenario
  As a user
  I Want to create board in Trello

  Background: Login in Trello app
    Given I loggin with "{credentials.owner}"

  Scenario: Create a board using big button from home page
    Given I go to Trello home page
    When I create new board with:
    | Title      | Test create board |
    | Privacy    | Public        |
    | Background | orange        |
    Then I expect board with:
    | Title      | Test create board |
