// Node structure: [vertex, path]

function knightMoves(initVertex, finalVertex) {
    
}

function createPossibleMoves(node) {
    const moveAdditions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],
                            [1, -2], [1, 2], [2, -1], [2, 1]];
    const possibleMoves = [];
    for(const moveAddition of moveAdditions) {
        const vertexX = node[0][0] + moveAddition[0];
        const vertexY = node[0][1] + moveAddition[1];
        if(vertexX < 0 || vertexY < 0 || vertexX > 7 || vertexY > 7) {
            
        }
    }
}