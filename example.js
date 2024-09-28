const mcData = require('reinarpg-data')('1.8.8')

console.log(mcData.blocksByName.stone)
console.log(mcData.windows['minecraft:brewing_stand'])
console.log(mcData.version)
console.log(mcData.effectsByName.Haste)

console.log(mcData.mobs[62])
console.log(mcData.objects[62])

console.log(require('reinarpg-data').versionsByMinecraftVersion.pc['1.8.8'])

console.log(require('reinarpg-data').versionsByMinecraftVersion.pc['15w40b'])

console.log(require('reinarpg-data').preNettyVersionsByProtocolVersion.pc[47])

console.log(require('reinarpg-data').postNettyVersionsByProtocolVersion.pc[47][0])

console.log(require('reinarpg-data')(47).version)

console.log(require('reinarpg-data')('1.8').version)

console.log(require('reinarpg-data')('15w40b').version)

console.log(require('reinarpg-data')('0.30c').version)

console.log(require('reinarpg-data')('bedrock_0.14').version)

console.log(require('reinarpg-data')('pc_1.9').blocksByName.dirt)
console.log(require('reinarpg-data')('bedrock_0.14').blocksByName.podzol)
console.log(require('reinarpg-data')('bedrock_0.14').type)

console.log(require('reinarpg-data')('1.8').enchantments[5])

console.log(require('reinarpg-data').supportedVersions.pc)

console.log(require('reinarpg-data')('1.12').language['options.sensitivity.max'])

console.log(require('reinarpg-data')('1.13.2').blocksByStateId[3381])

console.log(require('reinarpg-data')('1.13.2').particles[2])

console.log(require('reinarpg-data')('1.16.1').blockLoot.stone)

console.log(require('reinarpg-data')('1.16.1').loginPacket)

console.log(require('reinarpg-data')('1.16.4').mapIconsByName.player)

console.log(require('reinarpg-data').legacy.pc.blocks['0:0'])

console.log(require('reinarpg-data')('1.15.2').attributes['generic.movementSpeed'])

console.log(require('reinarpg-data')('1.16').attributes['minecraft:generic.movement_speed'])
console.log(require('reinarpg-data')('1.15.2').attributesByName.movementSpeed)
console.log(require('reinarpg-data')('1.16').attributesByName.movementSpeed)

console.log(require('reinarpg-data')('1.16.5').sounds[21])
console.log(require('reinarpg-data')('1.16.5').soundsByName['ambient.underwater.loop.additions.ultra_rare'])
