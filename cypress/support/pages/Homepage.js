// const locator = require('../locator/HomepageLocator');

// const css_colour = {
//     Blue : 'background-color: blue;',
//     Yellow : 'background-color: yellow;',
//     Cyan: 'background-color: cyan;',
//     Magenta:'background-color: magenta;'
// }

// class Hpage {

//     async visit(){
//         cy.visit('http://localhost:6061/');
//         return cy.url().should('eq', 'http://localhost:6061/');
//     }

//     async type_quote(quote){
//         return cy.get(locator.datatestid.tf_quote).type(quote);
//     }

//     async choose_colour(colour){
//         return cy.get(locator.datatestid.sel_colour).select(colour);
//     }

//     async submit_quote(){
//         cy.get(locator.datatestid.btn_submit).click();
//         // cy.get(locator.datatestid.cont_colour).eq(1).should('have.attr', 'style').then(color=>{
//         //     expect(color).to.be.equal(css_colour[colour]);
//         // })
//         // return cy.contains(quote).should(exist);    
//     }

//     async clear_quote(quote){
//         return cy.contains(quote).click().should('not.exist'); 
//     }



// }


const locator = require ('../locator/HomepageLocator');

class Homepage {

    async visit(path){
        cy.visit(path).wait(1000);
        return cy.url().should('eq', 'https://www.fairprice.com.sg/');
    }

    async promotions_tab(){
        cy.get(locator.datatestid.promotions_tab).click();
        return cy.url().should('eq', 'https://www.fairprice.com.sg/promotions');
    }

    async tab_PWP(promoTag){
        return cy.get(locator.datatestid.tab_PWP).contains('PWP');
    }

    async tab_WeeklyDeals(promoTag){
        return cy.get(locator.datatestid.tab_WeeklyDeals).contains('Weekly Deals');
    }

    async tab_DigitalClubExclusive(promoTag){
        return cy.get(locator.datatestid.tab_DigitalClubExclusive).contains('Digital Club Exclusive');
    }


    async visit_tab_PWP(promoTag){
        cy.get(locator.datatestid.tab_PWP).click();
        return cy.url().should('eq', `https://www.fairprice.com.sg/promotions?tag=pwp`);
    }

    async label_PWP(promoTag){
        return cy.get(locator.datatestid.label_PWP).contains('PWP');
        
    }

    async visit_tab_WeeklyDeals(promoTag){
        cy.get(locator.datatestid.tab_WeeklyDeals).click();
        return cy.url().should('eq', `https://www.fairprice.com.sg/promotions?tag=weekly-deals`);
    }

    async label_WeeklyDeals(promoTag){
        return cy.get(locator.datatestid.label_WeeklyDeals).contains('Weekly Deals');
        
    }

}


module.exports = Homepage;