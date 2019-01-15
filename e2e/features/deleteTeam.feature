#trello.feature
  Feature: I delete an existing team

    Background: I create a Team
      When I login with "{credentials.owner1}"

      Scenario: I delete the Team
        Given I create a new Team with:
          | teamName    | Team for delete |
          | description | any         |
        When I go to settings
        And I delete the team
        Then I expect the Team delete
          | teamName    | Team for delete |
