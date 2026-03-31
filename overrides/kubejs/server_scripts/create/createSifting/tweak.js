ServerEvents.recipes(event => {
	event.remove({ output: "createsifter:andesite_mesh" })
    event.shaped(
        Item.of('createsifter:andesite_mesh'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: '#forge:ingots/andesite_alloy',
            A: 'minecraft:stick'
        }
    )
	event.remove({ output: "createsifter:zinc_mesh" })
    event.shaped(
        Item.of('createsifter:zinc_mesh'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: '#forge:ingots/zinc',
            A: 'minecraft:stick'
        }
    )
	event.remove({ output: "createsifter:brass_mesh" })
    event.shaped(
        Item.of('createsifter:brass_mesh'),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: '#forge:ingots/brass',
            A: 'minecraft:stick'
        }
    )
});
