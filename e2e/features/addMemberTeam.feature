#trello.feature
@bvt
Feature: Team

  Background: Create a team in Trello
    Given I login with "{credentials.owner1}"
    And I click the create Team link from sidebar
    And I create a new Team with:
      | teamName    | softwareAMT  |
  Scenario: Add member to the team
    When I add member in the team:
      | user | {credentials.member1} |
    Then I see the member in Team Members
      | user | {credentials.member1} |
