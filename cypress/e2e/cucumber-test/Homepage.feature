Feature: Fairprice promotions test scenarios

        @Promotions @Testcase_success_01
        Scenario: I want to visit promotions tab
            Given I visit fairprice web
            When I click promotion tab
            Then I can see label promotions:  PWP, Weekly Deals, and Digital Club Exclusive

        @Promotions @Testcase__success_02
        Scenario: I want to visit PWP Label
            Given I visit promotion page
            When I click PWP tab
            Then I can see label PWP on all products

        @Promotions @Testcase__failed_01
        Scenario: I want to get failed when validate label on tab Weekly Deals
            Given I am on promotion page
            When I click Weekly Deals tab
            Then I can see label Weekly Deals on all products