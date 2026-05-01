ServerEvents.recipes(event => {
	event.remove({ output: "hostilenetworks:deep_learner" })
    event.shaped(
        Item.of('hostilenetworks:deep_learner'),
        [
            'ABA',
            'CDC',
            'EEE'
        ],
        {
            B: Item.of('gtceu:gold_screw', '{}'),
            D: Item.of('gtceu:computer_monitor_cover', '{}'),
            C: Item.of('gtceu:lpic_chip', '{}'),
            A: Item.of('gtceu:hv_emitter', '{}'),
            E: Item.of('gtceu:stainless_steel_plate', '{}')
        }
    )
	event.remove({ output: "hostilenetworks:blank_data_model" })
    event.shaped(
        Item.of('hostilenetworks:blank_data_model'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            B: Item.of('gtceu:lpic_chip', '{}'),
            C: Item.of('ae2:basic_card', '{}'),
            A: Item.of('gtceu:stainless_steel_plate', '{}')
        }
    )
	event.remove({ output: "hostilenetworks:sim_chamber" })
    event.shaped(
        Item.of('hostilenetworks:sim_chamber'),
        [
            'ABA',
            'CDC',
            'EBE'
        ],
        {
            C: Item.of('gtceu:lpic_chip', '{}'),
            B: Item.of('gtceu:kanthal_spring', '{}'),
            E: Item.of('gtceu:gold_single_cable', '{}'),
            A: Item.of('gtceu:hv_emitter', '{}'),
            D: Item.of('gtceu:hv_machine_hull', '{}')
        }
    )
	event.remove({ output: "hostilenetworks:loot_fabricator" })
    event.shaped(
        Item.of('hostilenetworks:loot_fabricator'),
        [
            'ABA',
            'CDC',
            'EBE'
        ],
        {
            C: Item.of('gtceu:lpic_chip', '{}'),
            B: Item.of('gtceu:kanthal_spring', '{}'),
            E: Item.of('gtceu:gold_single_cable', '{}'),
            D: Item.of('gtceu:hv_machine_hull', '{}'),
            A: Item.of('gtceu:hv_sensor', '{}')
        }
    )
});
