#trello.feature
Feature: Create team in Trello
  As a User
  I want to create team in Trello

  Background: Create a team in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Team with:
      | teamName    | AT-08  |
      | description | Hi all |
    And I click Trello icon

  Scenario: Add member to existing team
    Given I select a team with:
      | teamName | AT-08 |
    When I select Members item list
    And I add member in the team:
      | user | {credentials.member1} |
    Then I expect member add in team
