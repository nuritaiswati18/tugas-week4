// describe('Login', () => {
//     context('Login email credential', () => {
//         it('correct credential', function () {


//         });

//         it('', () => {

//         })
//     })

//     context('Login phone verification', () => {

//     })
// })

//test suite

// import ExamplePage from "../page/ExamplePage";

// describe('Your first test', () => {
//      //test case
//         it('Verify element page', () => {
//              //verify web
//             cy.visit('https://b899-13-67-75-93.ngrok.io/')
//              //verify label Koligrum Web Playground
//             cy.get('h1')
//             .should('have.text', 'Koligrum Web Playground');

//             //verify progress bar
//             cy.get('[role=progressbar]')
//             .should('be.visible')
//             .and($text => {
//                 expect($text).to.contain('1 / 10')
//             });
//             cy.get('#inputQuote')
//             .should('be.visible');
//         });
//     });


    // SESI 2
    describe('Cypress sesi 2', ()=> {
         it('Verify list options', () => {
         //visit web
         cy.visit('https://b899-13-67-75-93.ngrok.io/')  
         const optionList = ['White', 'Yellow', 'Cyan', 'Magenta', 'Blue'];
         cy.get('select.form-control > option')
         .should($list => {
            //total list 5
            expect($list).to.have.length(5)
            
            //verify all value
            for (let i=0; i < $list.length; i++) {
                expect($list.eq(i)).to.contain(optionList[i]);
            }; 
         })
        })
   


    it('check input', function(){
        const examplePage = new ExamplePage()
         //visit web
         cy.visit('https://b899-13-67-75-93.ngrok.io/')

         //input at least 3 quotes
         let i = 0
         let n = 3
         let arrayInput = []
         while(i < n){
            //input quote
            let temp = "quote " + (i+1)
            arrayInput.push(temp)
            cy.get("#inputQuote").type(temp);

            //pilih warna yang berbeda
            cy.get('#colorSelect')
            .select(i)


            //click button
            cy.get('#buttonAddQuote')
            .click()

            i++
         }
         


            //verify quotes yang dimasukkan benar
            cy.get('p[name="quoteText"]').then($listQuotes => {
                for (let j=0; j < arrayInput.length; j++) {
                    expect($listQuotes.eq(j+1)).to.contain(arrayInput[j])
    
                }
            })
            
            //verify tablenya ada
            cy.get('#tableView')
            .click()

            //hover button table
            cy.get('#buttonShowTable').trigger('mouseover')

            //verify judul tabel
            cy.get('thead:nth-child(1) tr:nth-child(1) > th:nth-child(1)').contains('Quotes')
            cy.get('thead:nth-child(1) tr:nth-child(1) > th:nth-child(2)').contains('Color')
            

            //verify isi tabel (kolom 1)
            cy.get('td[name="tableColumnQuote"]').then($listColumn1 => {
                for (let j=0; j < arrayInput.length; j++) {
                    expect($listColumn1.eq(j+1)).to.contain(arrayInput[j])
    
                }
            })

            //verify

        });

    })


    // describe('Cypress sesi 9', ()=> {
    //     it('visit web', () => {
    //     //visit web
    //     cy.visit('http://localhost:6061/')
    //     cy.url().should('eq', 'http://localhost:6061/');
    //     cy.url().then((url) => {
    //         expect(url).to.be.equal('http://localhost:6061/');
    //     })
    // })

    //        //input quote
    //        it('input quote', () => {
    //         cy.get('[data-testid="inputQuote"]').type('Saya lagi belajar');
    //        })
           

    //        //pilih warna yang berbeda
    //        it('select color', () => {
    //         cy.get('[data-testid="colorSelect"]').select('Yellow');
    //        })
           

    //        //click button
    //        it('click button', () => {
    //         cy.get('[data-testid="buttonAddQuote"]').click();
    //        })
           

    //        //verify quotes yang dimasukkan benar
    //        it('verify quotes', () => {
    //         cy.get('p[name="quoteText"]').should('contain.text','Saya lagi belajar');
    //        })
           

    //        // hapus 
    //        it('delete quotes', () => {
    //         cy.get(':nth-child(2) > .panel > .panel-body').click()
    //        })
           

    //        //verify quotes dihapus tidak ada lagi
    //        it('verify deleted quotes not exist', () => {
    //         cy.contains('Saya lagi belajar').should('not.exist');
    //        })
           
        
    // })
    
    
    
    