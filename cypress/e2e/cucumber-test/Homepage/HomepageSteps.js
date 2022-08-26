import {Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"

const Homepage = require('../../../support/pages/Homepage');
let homepage = new Homepage();


Given(/^I visit fairprice web$/, ()=>{
    homepage.visit('/');
})

When(/^I click promotion tab$/,()=>{
    homepage.promotions_tab();
})

Then(/^I can see label promotions: ([\w\s]+), ([\w\s]+), and ([\w\s]+)$/,(promo1, promo2, promo3)=>{
    homepage.tab_PWP(promo1);
    homepage.tab_WeeklyDeals(promo2);
    homepage.tab_DigitalClubExclusive(promo3);
})

Given(/^I visit promotion page$/, ()=>{
    homepage.promotions_tab();
})

When(/^I click PWP tab$/,(promoTag)=>{
    homepage.visit_tab_PWP(promoTag);
})

Then(/^I can see label PWP on all products$/,(promoTag)=>{
    homepage.label_PWP(promoTag);
})

Given(/^I am on promotion page$/, ()=>{
    homepage.promotions_tab();
})

When(/^I click Weekly Deals tab$/,(promoTag)=>{
    homepage.visit_tab_WeeklyDeals(promoTag);
})

Then(/^I can see label Weekly Deals on all products$/,(promoTag)=>{
    homepage.label_WeeklyDeals(promoTag);
})

