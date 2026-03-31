ServerEvents.recipes(event => {
	//裂变反应堆外壳 "mekanism:fission_reactor_casing"
	event.remove({ output: "mekanismgenerators:fission_reactor_casing" })
    event.shaped(
        Item.of('mekanismgenerators:fission_reactor_casing'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: Item.of('mekanism:steel_casing', '{}'),
            A: Item.of('gtceu:small_rhodium_plated_palladium_gear', '{}'),
            B: Item.of('gtceu:titanium_plate', '{}')
        }
    )
	//涡轮外壳 'mekanism:turbine_casing'
	event.remove({ output: "mekanism:turbine_casing" })
    event.shaped(
        Item.of('mekanismgenerators:turbine_casing'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: Item.of('gtceu:steel_frame', '{}'),
            A: Item.of('gtceu:small_steel_gear', '{}'),
            B: Item.of('gtceu:osmium_plate', '{}')
        }
    )
	//能量板 'mekanism:energy_tablet'
	event.remove({ id: "mekanism:energy_tablet" });
	event.shaped(
        Item.of('mekanism:energy_tablet'),
        [
            'ABA',
            'CBC',
            'ABA'
        ],
        {
            A: 'gtceu:energy_crystal',
            C: 'mekanism:alloy_infused',
            B: 'gtceu:gold_plate'
        }
    )
	//机器方块
	event.remove({ id: "mekanism:steel_casing" });
    event.shaped(
        Item.of('mekanism:steel_casing'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            C: 'gtceu:polytetrafluoroethylene_plate',
            A: 'gtceu:osmium_plate',
            B: 'gtceu:aluminium_single_cable',
            D: 'gtceu:ev_machine_casing'
        }
    )
	//冶金灌注
	event.remove({ id: "mekanism:metallurgic_infuser" });
    event.shaped(
        Item.of('mekanism:metallurgic_infuser'),
        [
            'ABA',
            'CDC',
            'EFE'
        ],
        {
            E: Item.of('gtceu:micro_processor_computer'),
            B: Item.of('minecraft:glass'),
            D: Item.of('mekanism:steel_casing'),
            F: Item.of('#gtceu:circuits/ev'),
            C: Item.of('gtceu:osmium_plate'),
            A: Item.of('gtceu:ev_electric_pump')
        }
    )
	//热力蒸馏方块
	event.remove({ output: "mekanism:thermal_evaporation_block" })
    event.shaped(
        Item.of('mekanism:thermal_evaporation_block'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'gtceu:copper_plate',
            C: 'gtceu:steel_frame',
            A: 'gtceu:steel_rod'
        }
    )
	//动态储罐 结构玻璃
	event.remove({ id: "mekanism:dynamic_tank" });
	event.remove({ id: "mekanism:structural_glass" });
    event.shaped(
        Item.of('mekanism:dynamic_tank'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'minecraft:bucket',
            A: 'gtceu:steel_bolt',
            B: 'gtceu:steel_plate'
        }
    )
    event.shaped(
        Item.of('mekanism:structural_glass'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'minecraft:glass',
            A: 'gtceu:steel_bolt',
            B: 'gtceu:steel_plate'
        }
    )
	//防化
	event.remove({ id: "mekanism:hazmat_mask" });
	event.remove({ id: "mekanism:hazmat_gown" });
	event.remove({ id: "mekanism:hazmat_pants" });
	event.remove({ id: "mekanism:hazmat_boots" });
    event.shaped(
        Item.of('mekanism:hazmat_mask'),
        [
            'AAA',
            'ABA',
            '   '
        ],
        {
            A: Item.of('gtceu:rubber_plate'),
            B: Item.of('minecraft:orange_dye')
        }
    )
    event.shaped(
        Item.of('mekanism:hazmat_gown'),
        [
            'A A',
            'ABA',
            'AAA'
        ],
        {
            A: Item.of('gtceu:rubber_plate'),
            B: Item.of('minecraft:orange_dye')
        }
    )
    event.shaped(
        Item.of('mekanism:hazmat_pants'),
        [
            'AAA',
            'ABA',
            'A A'
        ],
        {
            A: Item.of('gtceu:rubber_plate'),
            B: Item.of('minecraft:orange_dye')
        }
    )
    event.shaped(
        Item.of('mekanism:hazmat_boots'),
        [
            '   ',
            'A A',
            'ABA'
        ],
        {
            A: Item.of('gtceu:rubber_plate'),
            B: Item.of('minecraft:black_dye')
        }
    )
});
