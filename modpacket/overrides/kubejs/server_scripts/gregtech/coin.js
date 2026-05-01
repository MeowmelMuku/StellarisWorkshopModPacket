ServerEvents.recipes(event => {

    event.shaped(
        Item.of('gtmutils:silver_credit'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'gtmutils:copper_credit'
        }
    )
    event.shaped(
        Item.of('gtmutils:gold_credit'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'gtmutils:silver_credit'
        }
    )
    event.shaped(
        Item.of('gtmutils:platinum_credit'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'gtmutils:gold_credit'
        }
    )
});
