#trello.feature
  @bvt
  Feature: I delete an existing team

    Background: I create a Team
      When I login with "{credentials.owner1}"

      Scenario: I delete the Team
        Given I click the create Team link from sidebar
        And I create a new Team with:
          | teamName    | Team for delete |
          | description | any         |
        When I select Settings item list:
        And I delete the team
        Then I expect the Team delete
          | teamName    | Team for delete |
