ServerEvents.recipes(event => {
        const { avaritia } = event.recipes;
	event.remove({ output: "avaritia:neutron_collector" })
    avaritia.shaped_table(
        4,
        Item.of('avaritia:neutron_collector'),
        [
            'AABBBBBAA',
            'A BBBBB A',
            'A  CCC  A',
            'D CCCCC D',
            'A CCDCC A',
            'D CCCCC D',
            'A  CCC  A',
            'A       A',
            'AAADADAAA'
        ],
        {
            A: Item.of('gtceu:neutronium_block'),
            C: Item.of('gtca:orundum_ingot'),
            D: Item.of('avaritia:crystal_matrix_ingot'),
            B: Item.of('gtca:adamantium_ingot')
        }
    )
	event.remove({ output: "avaritia:dense_neutron_collector" })
    avaritia.shaped_table(
        4,
        Item.of('avaritia:dense_neutron_collector'),
        [
            'AAB   BAA',
            'AC     CA',
            'B DEEED B',
            '  EFFFE  ',
            '  EFGFE  ',
            '  EFFFE  ',
            'B DEEED B',
            'AC     CA',
            'AAB   BAA'
        ],
        {
            A: Item.of('minecraft:ender_pearl'),
            B: Item.of('avaritia:diamond_lattice'),
            F: Item.of('avaritia:neutron_collector'),
            C: Item.of('gtceu:gravi_star'),
            D: Item.of('avaritia:neutron_ingot'),
            G: Item.of('avaritia:endest_pearl'),
            E: Item.of('gtca:ohriharukon_ingot')
        }
    )
	event.remove({ output: "avaritia:denser_neutron_collector" })
    avaritia.shaped_table(
        4,
        Item.of('avaritia:denser_neutron_collector'),
        [
            'ABBCCCBBA',
            'BDD   DDB',
            'BDEFFFEDB',
            'C FGGGF C',
            'C FGFGF C',
            'C FGGGF C',
            'BDEFFFEDB',
            'BDD   DDB',
            'ABBCCCBBA'
        ],
        {
            F: Item.of('avaritia:blaze_cube_block'),
            G: Item.of('avaritia:dense_neutron_collector'),
            C: Item.of('gtceu:ruthenium_trinium_americium_neutronate_ingot'),
            B: Item.of('avaritia:neutron_pile'),
            D: Item.of('avaritia:blaze_cube'),
            A: Item.of('avaritia:neutron_gear'),
            E: Item.of('avaritia:singularity', '{Id:"avaritia:gold"}').strongNBT()
        }
    )
	event.remove({ output: "avaritia:densest_neutron_collector" })
    avaritia.shaped_table(
        4,
        Item.of('avaritia:densest_neutron_collector'),
        [
            'AA     AA',
            'A  BBB  A',
            '  CCCCC  ',
            ' BCDDDCB ',
            ' BCDEDCB ',
            ' BCDDDCB ',
            '  CCCCC  ',
            'A  BBB  A',
            'AA     AA'
        ],
        {
            C: Item.of('gtca:orundum_ingot'),
            B: Item.of('avaritia:neutron_ingot'),
            D: Item.of('avaritia:denser_neutron_collector'),
            A: Item.of('avaritia:neutron_gear'),
            E: Item.of('avaritia:singularity', '{Id:"avaritia:redstone"}').strongNBT()
        }
    )
    avaritia.shaped_table(
        4,
        Item.of('gtceu:creative_tank'),
        [
            'ABBACABBA',
            'BDDDCDDDB',
            'BDEDCDEDB',
            'ADDDFDDDA',
            'CCCFEFCCC',
            'ADDDFDDDA',
            'BDEDCDEDB',
            'BDDDCDDDB',
            'ABBACABBA'
        ],
        {
            C: Item.of('gtca:orundum_ingot'),
            E: Item.of('avaritia:infinity_catalyst'),
            F: Item.of('avaritia:infinity_ingot'),
            D: Item.of('gtceu:uhv_quantum_tank'),
            A: Item.of('gtca:adamantium_ingot'),
            B: Item.of('gtceu:neutronium_ingot')
        }
    )
    avaritia.shaped_table(
        4,
        Item.of('gtceu:creative_chest'),
        [
            'ABBACABBA',
            'BDDDCDDDB',
            'BDEDCDEDB',
            'ADDDFDDDA',
            'CCCFEFCCC',
            'ADDDFDDDA',
            'BDEDCDEDB',
            'BDDDCDDDB',
            'ABBACABBA'
        ],
        {
            C: Item.of('gtca:orundum_ingot'),
            E: Item.of('avaritia:infinity_catalyst'),
            F: Item.of('avaritia:infinity_ingot'),
            A: Item.of('gtca:adamantium_ingot'),
            D: Item.of('gtceu:uhv_quantum_chest'),
            B: Item.of('gtceu:neutronium_ingot')
        }
    )
    avaritia.shaped_table(
        4,
        Item.of('gtceu:creative_energy'),
        [
            'ABBACABBA',
            'BDDDCDDDB',
            'BDEDCDEDB',
            'ADDDFDDDA',
            'CCCFEFCCC',
            'ADDDFDDDA',
            'BDEDCDEDB',
            'BDDDCDDDB',
            'ABBACABBA'
        ],
        {
            C: Item.of('gtca:orundum_ingot'),
            E: Item.of('avaritia:infinity_catalyst'),
            F: Item.of('avaritia:infinity_ingot'),
            D: Item.of('gtceu:uhv_ultimate_battery'),
            A: Item.of('gtca:adamantium_ingot'),
            B: Item.of('gtceu:neutronium_ingot')
        }
    )
	event.remove({ output: "ae2:creative_energy_cell" })
    avaritia.shaped_table(
        4,
        Item.of('ae2:creative_energy_cell'),
        [
            'AAAABAAAA',
            'ACDCBCDCA',
            'ADCEBECDA',
            'ACEEBEECA',
            'BBBBFBBBB',
            'ACEEBEECA',
            'ADCEBECDA',
            'ACDCBCDCA',
            'AAAABAAAA'
        ],
        {
            F: Item.of('ae2:cell_component_256k', '{}'),
            C: Item.of('avaritia:infinity_ingot', '{}'),
            E: Item.of('gtceu:wetware_processor_mainframe', '{}'),
            A: Item.of('ae2:dense_energy_cell', '{}'),
            D: Item.of('gtceu:max_battery', '{}'),
            B: Item.of('ae2:singularity', '{}')
        }
    )
});
