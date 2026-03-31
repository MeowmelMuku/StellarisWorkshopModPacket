ServerEvents.recipes(event => {
  event.remove({ type: 'createsifter:sifting' })
  
  function stringMesh(output, input, time, isWater) {
    sifting(output, [input, "createsifter:string_mesh"], time, isWater)
  }

  // 安山筛网
  function andesiteMesh(output, input, time, isWater) {
    sifting(output, [input, "createsifter:andesite_mesh"], time, isWater)
  }
  // 锌筛网
  function zincMesh(output, input, time, isWater) {
    sifting(output, [input, "createsifter:zinc_mesh"], time, isWater)
  }
  // 黄铜筛网
  function brassMesh(output, input, time, isWater) {
    sifting(output, [input, "createsifter:brass_mesh"], time, isWater)
  }
  // 高级黄铜筛网
  function advancedBrassMesh(output, input, time, isWater) {
    sifting(output, [input, "createsifter:advanced_brass_mesh"], time, isWater)
  }

  /**
   * 
   * @param {*} output 输出
   * @param {*} input 输入
   * @param {*} time 不填写默认为5秒
   * @param {*} isWater 不填写默认为false
   */
  function sifting(output, input, time, isWater) {
    if (time == undefined) time = 5
    if (isWater == undefined) isWater = false
    
    // 直接使用外部传入的 event 参数，不要嵌套 ServerEvents.recipes
    event.recipes.createsifter.sifting(output, input, time * 20, isWater)
  }
  
  // ==================== 沙砾筛网配方 ====================
  
  // 沙砾 线筛网 石子 (基础概率 0.05-0.1)
  stringMesh(
    [
      Item.of('minecraft:flint').withChance(0.08),
      Item.of('exdeorum:stone_pebble').withChance(0.07),
      Item.of('exdeorum:andesite_pebble').withChance(0.06),
      Item.of('exdeorum:granite_pebble').withChance(0.05)
    ],
    'minecraft:gravel'
  )

  // 沙砾 安山筛网 矿物 (提高常见物品概率 0.1-0.2)
  andesiteMesh(
    [
      Item.of('minecraft:flint').withChance(0.15),
      Item.of('exdeorum:stone_pebble').withChance(0.12),
      Item.of('exdeorum:andesite_pebble').withChance(0.1),
      Item.of('minecraft:coal').withChance(0.18),
      Item.of('exdeorum:iron_ore_chunk').withChance(0.15),
      Item.of('exdeorum:copper_ore_chunk').withChance(0.12)
    ],
    'minecraft:gravel'
  )

  // 沙砾 锌筛网 矿物 (进一步提高概率 0.2-0.3，增加物品)
  zincMesh(
    [
      Item.of('minecraft:coal').withChance(0.25),
      Item.of('exdeorum:iron_ore_chunk').withChance(0.22),
      Item.of('exdeorum:copper_ore_chunk').withChance(0.2),
      Item.of('exdeorum:tin_ore_chunk').withChance(0.18),
      Item.of('exdeorum:lead_ore_chunk').withChance(0.16),
      Item.of('minecraft:lapis_lazuli').withChance(0.12),
      Item.of('minecraft:redstone').withChance(0.15)
    ],
    'minecraft:gravel'
  )

  // 沙砾 黄铜筛网 矿物 (再次提高概率 0.3-0.5)
  brassMesh(
    [
      Item.of('minecraft:coal').withChance(0.35),
      Item.of('exdeorum:iron_ore_chunk').withChance(0.32),
      Item.of('exdeorum:copper_ore_chunk').withChance(0.3),
      Item.of('exdeorum:tin_ore_chunk').withChance(0.28),
      Item.of('exdeorum:lead_ore_chunk').withChance(0.25),
      Item.of('exdeorum:silver_ore_chunk').withChance(0.22),
      Item.of('exdeorum:gold_ore_chunk').withChance(0.18),
      Item.of('minecraft:lapis_lazuli').withChance(0.25),
      Item.of('minecraft:redstone').withChance(0.28),
      Item.of('minecraft:diamond').withChance(0.12)
    ],
    'minecraft:gravel'
  )

  // 沙砾 高级黄铜筛网 矿物 (最高概率 0.4-0.8)
  advancedBrassMesh(
    [
      Item.of('minecraft:coal').withChance(0.5),
      Item.of('exdeorum:iron_ore_chunk').withChance(0.45),
      Item.of('exdeorum:copper_ore_chunk').withChance(0.4),
      Item.of('exdeorum:tin_ore_chunk').withChance(0.38),
      Item.of('exdeorum:lead_ore_chunk').withChance(0.35),
      Item.of('exdeorum:silver_ore_chunk').withChance(0.32),
      Item.of('exdeorum:gold_ore_chunk').withChance(0.28),
      Item.of('exdeorum:nickel_ore_chunk').withChance(0.25),
      Item.of('exdeorum:zinc_ore_chunk').withChance(0.22),
      Item.of('minecraft:lapis_lazuli').withChance(0.35),
      Item.of('minecraft:redstone').withChance(0.4),
      Item.of('minecraft:diamond').withChance(0.2),
      Item.of('minecraft:emerald').withChance(0.15),
      Item.of('minecraft:amethyst_shard').withChance(0.25)
    ],
    'minecraft:gravel'
  )
  
  // ==================== 尘土筛网配方 ====================
  
  // 尘土 线筛网 各种粉末 (基础概率 0.05-0.1)
  stringMesh(
    [
      Item.of('minecraft:bone_meal').withChance(0.08),
      Item.of('minecraft:gunpowder').withChance(0.07),
      Item.of('minecraft:redstone').withChance(0.05)
    ],
    'exdeorum:dust'
  )

  // 尘土 安山筛网 (提高概率 0.1-0.2)
  andesiteMesh(
    [
      Item.of('minecraft:bone_meal').withChance(0.15),
      Item.of('minecraft:gunpowder').withChance(0.12),
      Item.of('minecraft:redstone').withChance(0.1),
      Item.of('minecraft:glowstone_dust').withChance(0.08),
      Item.of('ae2:certus_quartz_dust').withChance(0.08)
    ],
    'exdeorum:dust'
  )

  // 尘土 锌筛网 (进一步提高概率 0.2-0.3)
  zincMesh(
    [
      Item.of('minecraft:bone_meal').withChance(0.22),
      Item.of('minecraft:gunpowder').withChance(0.2),
      Item.of('minecraft:redstone').withChance(0.18),
      Item.of('minecraft:glowstone_dust').withChance(0.15),
      Item.of('ae2:certus_quartz_dust').withChance(0.15),
      Item.of('ae2:sky_dust').withChance(0.12),
      Item.of('enderio:grains_of_infinity').withChance(0.1)
    ],
    'exdeorum:dust'
  )

  // 尘土 黄铜筛网 (再次提高概率 0.3-0.5)
  brassMesh(
    [
      Item.of('minecraft:bone_meal').withChance(0.3),
      Item.of('minecraft:gunpowder').withChance(0.28),
      Item.of('minecraft:redstone').withChance(0.25),
      Item.of('minecraft:glowstone_dust').withChance(0.22),
      Item.of('ae2:certus_quartz_dust').withChance(0.22),
      Item.of('ae2:sky_dust').withChance(0.18),
      Item.of('enderio:grains_of_infinity').withChance(0.15),
      Item.of('minecraft:blaze_powder').withChance(0.12)
    ],
    'exdeorum:dust'
  )

  // 尘土 高级黄铜筛网 (最高概率 0.4-0.7)
  advancedBrassMesh(
    [
      Item.of('minecraft:bone_meal').withChance(0.4),
      Item.of('minecraft:gunpowder').withChance(0.35),
      Item.of('minecraft:redstone').withChance(0.32),
      Item.of('minecraft:glowstone_dust').withChance(0.3),
      Item.of('ae2:certus_quartz_dust').withChance(0.3),
      Item.of('ae2:sky_dust').withChance(0.25),
      Item.of('enderio:grains_of_infinity').withChance(0.22),
      Item.of('minecraft:blaze_powder').withChance(0.18)
    ],
    'exdeorum:dust'
  )
  
  // ==================== 沙子筛网配方 ==================== 
  
  // 沙子 线筛网
  stringMesh(
    [
      Item.of('minecraft:flint').withChance(0.08),
      Item.of('minecraft:cactus').withChance(0.06),
      Item.of('ae2:certus_quartz_crystal').withChance(0.05)
    ],
    'minecraft:sand'
  )

  // 沙子 高级筛网
  advancedBrassMesh(
    [
      Item.of('minecraft:flint').withChance(0.3),
      Item.of('minecraft:cactus').withChance(0.25),
      Item.of('minecraft:dead_bush').withChance(0.2),
      Item.of('minecraft:kelp').withChance(0.22),
      Item.of('ae2:certus_quartz_crystal').withChance(0.28),
      Item.of('minecraft:prismarine_shard').withChance(0.18),
      Item.of('minecraft:prismarine_crystals').withChance(0.15),
      Item.of('ae2:charged_certus_quartz_crystal').withChance(0.12)
    ],
    'minecraft:sand'
  )
  
  // ==================== 灵魂沙筛网配方 ==================== 
  
  // 灵魂沙 线筛网
  stringMesh(
    [
      Item.of('minecraft:quartz').withChance(0.08),
      Item.of('minecraft:bone').withChance(0.06),
      Item.of('minecraft:gunpowder').withChance(0.05)
    ],
    'minecraft:soul_sand'
  )

  // 灵魂沙 高级筛网
  advancedBrassMesh(
    [
      Item.of('minecraft:quartz').withChance(0.35),
      Item.of('minecraft:bone').withChance(0.3),
      Item.of('minecraft:gunpowder').withChance(0.28),
      Item.of('minecraft:ghast_tear').withChance(0.15),
      Item.of('minecraft:glowstone_dust').withChance(0.25),
      Item.of('minecraft:nether_wart').withChance(0.22),
      Item.of('exdeorum:crimson_nylium_spores').withChance(0.18),
      Item.of('exdeorum:warped_nylium_spores').withChance(0.18)
    ],
    'minecraft:soul_sand'
  )
  
  // ==================== 破碎的下界岩筛网配方 ==================== 
 
  // 破碎的下界岩 线筛网
  stringMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.07),
      Item.of('minecraft:quartz').withChance(0.06),
      Item.of('minecraft:gunpowder').withChance(0.05)
    ],
    'exdeorum:crushed_netherrack'
  )

  // 破碎的下界岩 高级筛网
  advancedBrassMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.3),
      Item.of('exdeorum:basalt_pebble').withChance(0.25),
      Item.of('minecraft:quartz').withChance(0.35),
      Item.of('minecraft:gunpowder').withChance(0.3),
      Item.of('minecraft:blaze_powder').withChance(0.22),
      Item.of('minecraft:gold_nugget').withChance(0.28),
      Item.of('minecraft:magma_cream').withChance(0.18),
      Item.of('exdeorum:warped_nylium_spores').withChance(0.2),
      Item.of('exdeorum:crimson_nylium_spores').withChance(0.2),
      Item.of('exdeorum:cobalt_ore_chunk').withChance(0.15),
      Item.of('gtceu:raw_sulfur').withChance(0.25)
    ],
    'exdeorum:crushed_netherrack'
  )

  // ==================== 泥土筛网配方 ====================
  
  // 泥土 线筛网
  stringMesh(
    [
      Item.of('minecraft:flint').withChance(0.07),
      Item.of('exdeorum:stone_pebble').withChance(0.06),
      Item.of('exdeorum:andesite_pebble').withChance(0.05)
    ],
    'minecraft:dirt'
  )

  // 泥土 安山筛网
  andesiteMesh(
    [
      Item.of('minecraft:flint').withChance(0.12),
      Item.of('exdeorum:stone_pebble').withChance(0.1),
      Item.of('exdeorum:andesite_pebble').withChance(0.08),
      Item.of('exdeorum:grass_seeds').withChance(0.15),
      Item.of('minecraft:wheat_seeds').withChance(0.12),
      Item.of('minecraft:potato').withChance(0.1)
    ],
    'minecraft:dirt'
  )

  // 泥土 锌筛网
  zincMesh(
    [
      Item.of('exdeorum:grass_seeds').withChance(0.22),
      Item.of('minecraft:wheat_seeds').withChance(0.2),
      Item.of('minecraft:potato').withChance(0.18),
      Item.of('minecraft:carrot').withChance(0.16),
      Item.of('minecraft:sugar_cane').withChance(0.15),
      Item.of('minecraft:melon_seeds').withChance(0.12),
      Item.of('minecraft:pumpkin_seeds').withChance(0.12)
    ],
    'minecraft:dirt'
  )

  // 泥土 黄铜筛网
  brassMesh(
    [
      Item.of('exdeorum:grass_seeds').withChance(0.3),
      Item.of('minecraft:wheat_seeds').withChance(0.28),
      Item.of('minecraft:potato').withChance(0.25),
      Item.of('minecraft:carrot').withChance(0.22),
      Item.of('minecraft:sugar_cane').withChance(0.2),
      Item.of('minecraft:melon_seeds').withChance(0.18),
      Item.of('minecraft:pumpkin_seeds').withChance(0.18),
      Item.of('minecraft:sweet_berries').withChance(0.15),
      Item.of('exdeorum:mycelium_spores').withChance(0.12)
    ],
    'minecraft:dirt'
  )

  // 泥土 高级黄铜筛网
  advancedBrassMesh(
    [
      Item.of('exdeorum:grass_seeds').withChance(0.4),
      Item.of('minecraft:wheat_seeds').withChance(0.35),
      Item.of('minecraft:potato').withChance(0.32),
      Item.of('minecraft:carrot').withChance(0.3),
      Item.of('minecraft:sugar_cane').withChance(0.28),
      Item.of('minecraft:melon_seeds').withChance(0.25),
      Item.of('minecraft:pumpkin_seeds').withChance(0.25),
      Item.of('minecraft:sweet_berries').withChance(0.22),
      Item.of('exdeorum:mycelium_spores').withChance(0.18),
      Item.of('minecraft:bamboo').withChance(0.15),
      Item.of('minecraft:pink_petals').withChance(0.12),
      Item.of('minecraft:poisonous_potato').withChance(0.1)
    ],
    'minecraft:dirt'
  )

  // ==================== 苔藓块筛网配方 ====================
  
  // 苔藓块 线筛网
  stringMesh(
    [
      Item.of('minecraft:oak_sapling').withChance(0.08),
      Item.of('minecraft:birch_sapling').withChance(0.06),
      Item.of('minecraft:spruce_sapling').withChance(0.05)
    ],
    'minecraft:moss_block'
  )

  // 苔藓块 安山筛网
  andesiteMesh(
    [
      Item.of('minecraft:oak_sapling').withChance(0.15),
      Item.of('minecraft:birch_sapling').withChance(0.12),
      Item.of('minecraft:spruce_sapling').withChance(0.1),
      Item.of('minecraft:jungle_sapling').withChance(0.08),
      Item.of('minecraft:acacia_sapling').withChance(0.08),
      Item.of('minecraft:azalea').withChance(0.06)
    ],
    'minecraft:moss_block'
  )

  // 苔藓块 锌筛网
  zincMesh(
    [
      Item.of('minecraft:oak_sapling').withChance(0.22),
      Item.of('minecraft:birch_sapling').withChance(0.2),
      Item.of('minecraft:spruce_sapling').withChance(0.18),
      Item.of('minecraft:jungle_sapling').withChance(0.16),
      Item.of('minecraft:acacia_sapling').withChance(0.16),
      Item.of('minecraft:dark_oak_sapling').withChance(0.12),
      Item.of('minecraft:azalea').withChance(0.15),
      Item.of('minecraft:flowering_azalea').withChance(0.1)
    ],
    'minecraft:moss_block'
  )

  // 苔藓块 黄铜筛网
  brassMesh(
    [
      Item.of('minecraft:oak_sapling').withChance(0.3),
      Item.of('minecraft:birch_sapling').withChance(0.28),
      Item.of('minecraft:spruce_sapling').withChance(0.25),
      Item.of('minecraft:jungle_sapling').withChance(0.22),
      Item.of('minecraft:acacia_sapling').withChance(0.22),
      Item.of('minecraft:dark_oak_sapling').withChance(0.18),
      Item.of('minecraft:mangrove_propagule').withChance(0.15),
      Item.of('minecraft:azalea').withChance(0.2),
      Item.of('minecraft:flowering_azalea').withChance(0.15),
      Item.of('minecraft:big_dripleaf').withChance(0.12)
    ],
    'minecraft:moss_block'
  )

  // 苔藓块 高级黄铜筛网
  advancedBrassMesh(
    [
      Item.of('minecraft:oak_sapling').withChance(0.4),
      Item.of('minecraft:birch_sapling').withChance(0.35),
      Item.of('minecraft:spruce_sapling').withChance(0.32),
      Item.of('minecraft:jungle_sapling').withChance(0.3),
      Item.of('minecraft:acacia_sapling').withChance(0.3),
      Item.of('minecraft:dark_oak_sapling').withChance(0.25),
      Item.of('minecraft:mangrove_propagule').withChance(0.22),
      Item.of('minecraft:cherry_sapling').withChance(0.2),
      Item.of('minecraft:azalea').withChance(0.28),
      Item.of('minecraft:flowering_azalea').withChance(0.22),
      Item.of('minecraft:big_dripleaf').withChance(0.18),
      Item.of('minecraft:spore_blossom').withChance(0.15),
      Item.of('minecraft:lily_pad').withChance(0.15),
      Item.of('minecraft:glow_lichen').withChance(0.12),
      Item.of('minecraft:sweet_berries').withChance(0.2),
      Item.of('minecraft:glow_berries').withChance(0.15)
    ],
    'minecraft:moss_block'
  )

  // ==================== 破碎的黑石筛网配方 ====================
  
  // 破碎的黑石 线筛网
  stringMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.08),
      Item.of('minecraft:gold_nugget').withChance(0.06),
      Item.of('minecraft:black_dye').withChance(0.05)
    ],
    'exdeorum:crushed_blackstone'
  )

  // 破碎的黑石 安山筛网
  andesiteMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.15),
      Item.of('exdeorum:basalt_pebble').withChance(0.12),
      Item.of('minecraft:gold_nugget').withChance(0.1),
      Item.of('minecraft:black_dye').withChance(0.08),
      Item.of('minecraft:gunpowder').withChance(0.08)
    ],
    'exdeorum:crushed_blackstone'
  )

  // 破碎的黑石 锌筛网
  zincMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.22),
      Item.of('exdeorum:basalt_pebble').withChance(0.2),
      Item.of('minecraft:gold_nugget').withChance(0.18),
      Item.of('minecraft:black_dye').withChance(0.15),
      Item.of('minecraft:gunpowder').withChance(0.15),
      Item.of('minecraft:magma_cream').withChance(0.12)
    ],
    'exdeorum:crushed_blackstone'
  )

  // 破碎的黑石 黄铜筛网
  brassMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.3),
      Item.of('exdeorum:basalt_pebble').withChance(0.28),
      Item.of('minecraft:gold_nugget').withChance(0.25),
      Item.of('minecraft:black_dye').withChance(0.22),
      Item.of('minecraft:gunpowder').withChance(0.22),
      Item.of('minecraft:magma_cream').withChance(0.18),
      Item.of('minecraft:ancient_debris').withChance(0.08)
    ],
    'exdeorum:crushed_blackstone'
  )

  // 破碎的黑石 高级黄铜筛网
  advancedBrassMesh(
    [
      Item.of('exdeorum:blackstone_pebble').withChance(0.4),
      Item.of('exdeorum:basalt_pebble').withChance(0.35),
      Item.of('minecraft:gold_nugget').withChance(0.32),
      Item.of('minecraft:black_dye').withChance(0.3),
      Item.of('minecraft:gunpowder').withChance(0.3),
      Item.of('minecraft:magma_cream').withChance(0.25),
      Item.of('minecraft:ancient_debris').withChance(0.15)
    ],
    'exdeorum:crushed_blackstone'
  )

  // ==================== 末地石筛网配方 ====================
  
  // 末地石 线筛网
  stringMesh(
    [
      Item.of('minecraft:end_stone').withChance(0.08),
      Item.of('minecraft:chorus_fruit').withChance(0.06)
    ],
    'minecraft:end_stone'
  )

  // 末地石 高级黄铜筛网
  advancedBrassMesh(
    [
      Item.of('minecraft:end_stone').withChance(0.3),
      Item.of('minecraft:chorus_fruit').withChance(0.25),
      Item.of('minecraft:chorus_flower').withChance(0.2),
      Item.of('minecraft:ender_pearl').withChance(0.2),
      Item.of('mysticalagriculture:prosperity_ore').withChance(0.15),
      Item.of('mysticalagriculture:inferium_ore').withChance(0.15),
      Item.of('minecraft:shulker_shell').withChance(0.12),
      Item.of('minecraft:popped_chorus_fruit').withChance(0.18)
    ],
    'minecraft:end_stone'
  )

  // ==================== 深层板岩筛网配方 ====================
  
  // 深层板岩 线筛网
  stringMesh(
    [
      Item.of('exdeorum:deepslate_pebble').withChance(0.08),
      Item.of('minecraft:cobbled_deepslate').withChance(0.06)
    ],
    'minecraft:deepslate'
  )

  // 深层板岩 高级黄铜筛网
  advancedBrassMesh(
    [
      Item.of('exdeorum:deepslate_pebble').withChance(0.3),
      Item.of('minecraft:cobbled_deepslate').withChance(0.25),
      Item.of('exdeorum:iron_ore_chunk').withChance(0.22),
      Item.of('exdeorum:copper_ore_chunk').withChance(0.2),
      Item.of('exdeorum:gold_ore_chunk').withChance(0.18),
      Item.of('exdeorum:diamond_ore_chunk').withChance(0.12),
      Item.of('exdeorum:emerald_ore_chunk').withChance(0.1),
      Item.of('minecraft:sculk').withChance(0.15)
    ],
    'minecraft:deepslate'
  )
})