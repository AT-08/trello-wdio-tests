#trello.feature
@wip
Feature: Delete member of the team

  Background: Add member to team
    Given I login with "{credentials.owner1}"
    And I click the create Team link from sidebar
    And I create a new Team with:
      | teamName    | softwareDMT  |
    And I add member in the team:
      | user | {credentials.member1} |
  Scenario: delete member of the team
    When I delete the member
    Then I don't expect member of team:
      | user | {credentials.member1} |
