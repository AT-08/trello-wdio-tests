#trello.feature
Feature: change team privacy

  Background: Create a team in Trello
    Given I login with "{credentials.owner1}"
    When I create a new Team with:
      | teamName    | AT-08-Team1 |
      | description | any         |

  Scenario: change  team privacy
    When I select Settings item list:
    And I change the privacy of the team:
      | privacy | private |
    Then I see the privacy change in team:
      | privacy | private |