module.exports = (posX, posY, posZ) => {
    let blockPos = { x: posX, y: posY, z: posZ }
    let block = World.getBlock(blockPos.x, blockPos.y, blockPos.z).getBlockState()

    if (block.type === 'single') return blockPos

    if (block.facing === 'east' && block.type === 'right') {
        blockPos.z -= 1
        return blockPos
    } else if (block.facing === 'east' && block.type === 'left') {
        blockPos.z += 1
        return blockPos
    }

    if (block.facing === 'west' && block.type === 'right') {
        blockPos.z += 1
        return blockPos
    } else if (block.facing === 'west' && block.type === 'left') {
        blockPos.z -= 1
        return blockPos
    }

    if (block.facing === 'north' && block.type === 'right') {
        blockPos.x -= 1
        return blockPos
    } else if (block.facing === 'north' && block.type === 'left') {
        blockPos.x += 1
        return blockPos
    }

    if (block.facing === 'south' && block.type === 'right') {
        blockPos.x += 1
        return blockPos
    } else if (block.facing === 'south' && block.type === 'left') {
        blockPos.x -= 1
        return blockPos
    }
}