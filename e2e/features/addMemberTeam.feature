#trello.feature
Feature: Create board in Trello
  As a User
  I want to create boards in Trello

  Background: Create a team in Trello
    Given I login "{credentials.owmer1}"
    When I  created new Team
      | TeamTitle |
      | GUI-ATeam |

  Scenario: add member to existing team
    Given I selected a team with:
      | TeamTitle | GUI-ATeam |
    When I selected member option
    And I add member in team
    Then I expect member add in team