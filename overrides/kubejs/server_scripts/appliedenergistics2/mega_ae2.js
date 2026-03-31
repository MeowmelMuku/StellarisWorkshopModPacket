ServerEvents.recipes((event) => {
    const greg = event.recipes.gtceu;

    // 累加处理器
    greg
        .circuit_assembler("megacells:accumulation_processor")
        .itemInputs(
            "megacells:printed_accumulation_processor",
            "ae2:printed_silicon",
            "#gtceu:circuits/iv",
            "gtceu:advanced_smd_resistor",
            "2x #forge:fine_wires/tin"
        )
        .itemOutputs("4x megacells:accumulation_processor")
        .duration(200)
        .EUt(30);

    // 累加电路板
    greg
        .forming_press("megacells:printed_accumulation_processor")
        .itemInputs("#forge:ingots/sky_steel")
        .notConsumable("megacells:accumulation_processor_press")
        .itemOutputs("megacells:printed_accumulation_processor")
        .duration(200)
        .EUt(30);

    // 累加压印模板
    greg
        .laser_engraver("megacells:accumulation_processor_press")
        .itemInputs("ae2:singularity")
        .notConsumable("#forge:lenses/purple")
        .itemOutputs("megacells:accumulation_processor_press")
        .duration(500)
        .EUt(120);

    // 量子处理器
    greg
        .circuit_assembler("advanced_ae:quantum_processor")
        .itemInputs(
            "advanced_ae:printed_quantum_processor",
            "ae2:printed_silicon",
            "#gtceu:circuits/iv",
            "gtceu:advanced_smd_resistor",
            "2x #forge:fine_wires/tin"
        )
        .itemOutputs("4x advanced_ae:quantum_processor")
        .duration(200)
        .EUt(30);

    // 量子电路板
    greg
        .forming_press("advanced_ae:printed_quantum_processor")
        .itemInputs("advanced_ae:quantum_alloy")
        .notConsumable("advanced_ae:quantum_processor_press")
        .itemOutputs("advanced_ae:printed_quantum_processor")
        .duration(200)
        .EUt(30);

    // 量子压印模板
    greg
        .laser_engraver("advanced_ae:quantum_processor_press")
        .itemInputs("ae2:singularity")
        .notConsumable("#forge:lenses/orange")
        .itemOutputs("advanced_ae:quantum_processor_press")
        .duration(500)
        .EUt(120);

    // 能量处理器
    greg
        .circuit_assembler("appflux:energy_processor")
        .itemInputs(
            "appflux:printed_energy_processor",
            "ae2:printed_silicon",
            "#gtceu:circuits/iv",
            "gtceu:advanced_smd_resistor",
            "2x #forge:fine_wires/tin"
        )
        .itemOutputs("4x appflux:energy_processor")
        .duration(200)
        .EUt(30);

    // 能量电路板
    greg
        .forming_press("appflux:printed_energy_processor")
        .itemInputs("#forge:ingots/red_alloy")
        .notConsumable("appflux:energy_processor_press")
        .itemOutputs("appflux:printed_energy_processor")
        .duration(200)
        .EUt(30);

    // 能量压印模板
    greg
        .laser_engraver("appflux:energy_processor_press")
        .itemInputs("ae2:singularity")
        .notConsumable("#forge:lenses/magenta")
        .itemOutputs("appflux:energy_processor_press")
        .duration(500)
        .EUt(120);

    // 天空钢 钨钢+硅岩 EBF
    event.recipes.gtceu.electric_blast_furnace("sky_steel_ingot")
        .itemInputs("#forge:ingots/tungsten_steel", "#forge:ingots/naquadah")
        .inputFluids("gtceu:krypton 1000")
        .itemOutputs("2x megacells:sky_steel_ingot")
        .duration(600)
        .EUt(7680)
        .blastFurnaceTemp(4500);

    // 量子合金 镀铑钯+铂 EBF
    event.recipes.gtceu.electric_blast_furnace("quantum_alloy")
        .itemInputs("#forge:ingots/rhodium_plated_palladium", "#forge:ingots/platinum")
        .inputFluids("gtceu:krypton 1000")
        .itemOutputs("2x advanced_ae:quantum_alloy")
        .duration(600)
        .EUt(7680)
        .blastFurnaceTemp(4500);
});