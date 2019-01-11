#trello.feature
@wip
Feature: Team

  Background: Create a team in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Team with:
      | teamName    | food  |
    And I go to Trello main page

  Scenario: Add member to the team
    Given I select a team with:
      | teamName | food |
    When I select Members item list
    And I add member in the team:
      | user | {credentials.member1} |
    Then I see the member in Team Members
      | user | {credentials.member1} |
