class Node {
    constructor(vertex, parentNode) {
        this.vertex = vertex;
        this.path = parentNode 
            ? parentNode.path.concat([vertex]) : [vertex];
    }
}

function knightMoves(initVertex, finalVertex) {
    const queue = [new Node(initVertex, null)];
    let steps = 0;
    for(let qFrontIndex = 0; ; qFrontIndex++) {
        const currentNode = queue[qFrontIndex];
        steps = currentNode.path.length - 1;
        if(JSON.stringify(currentNode.vertex) === JSON.stringify(finalVertex)) {
            return displayResult(currentNode, steps);
        }
        const nextNodes = generateNextNodes(currentNode);
        for(const node of nextNodes) queue.push(node);
    }
}

function generateNextNodes(node) {
    const moveAdditions = [[-2, -1], [-2, 1], [-1, -2], [-1, 2],
                            [1, -2], [1, 2], [2, -1], [2, 1]];
    const nextNodes = [];
    for(const moveAddition of moveAdditions) {
        const vertexX = node.vertex[0] + moveAddition[0];
        const vertexY = node.vertex[1] + moveAddition[1];
        if(vertexX >= 0 && vertexY >= 0 && vertexX <= 7 && vertexY <= 7) {
            nextNodes.push(new Node([vertexX, vertexY], node));
        }
    }
    return nextNodes;
}

function displayResult(node, steps) {
    let logText = `You made it in ${steps} move! Here's your path:`
    for(const pathVertex of node.path) {
        logText += "\n" + JSON.stringify(pathVertex);
    }
    console.log(logText);
}

export default knightMoves;