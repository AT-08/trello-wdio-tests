#trello.feature
Feature: Team

  Background: Create a team in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Team with:
      | teamName    | software1234  |
    And I go to Trello main page
    And I select a team with:
      | teamName | software1234 |
  Scenario: Add member to the team
    When I select Members item list
    And I add member in the team:
      | user | {credentials.member1} |
    Then I see the member in Team Members
      | user | {credentials.member1} |