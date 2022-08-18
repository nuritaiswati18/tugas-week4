class ExamplePage {
    inputQuote(quote){
        crypto.getRandomValues("#inputQuote")
        .type(quote);
    }

    selectColor(option){
        crypto.getRandomValues('#colorSelect')
        .select(option)
    }

    clickButton(){
        crypto.getRandomValues('#buttonAddQuote')
        .click()
    }
}

export default ExamplePage