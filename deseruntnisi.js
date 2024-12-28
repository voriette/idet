/**
 * Traverses the scene graph and applies the provided group function to each node.
 * @param {Object} scene - The root of the scene graph.
 * @param {Function} groupFn - Function to apply to each group/node in the scene graph.
 * @returns {Object|null} The result of the group function if a matching node is found, otherwise null.
 */
function pickVisit(scene, groupFn) {
    // Helper function to recursively traverse the scene graph
    function visit(node) {
        if (!node) return null;

        // Apply the group function to the current node
        const result = groupFn(node);
        if (result) return result;

        // If the node has children, traverse them
        if (node.children && node.children.length) {
            for (let child of node.children) {
                const childResult = visit(child);
                if (childResult) return childResult; // Return immediately if a match is found
            }
        }

        return null;
    }

    // Start the traversal from the root of the scene graph
    return visit(scene);
}

// Example usage
const scene = {
    // Mock scene graph structure
    type: 'root',
    children: [
        { type: 'group', children: [{ type: 'item', value: 1 }, { type: 'item', value: 2 }] },
        { type: 'group', children: [{ type: 'item', value: 3 }, { type: 'item', value: 4 }] }
    ]
};

const targetValue = 3;
const result = pickVisit(scene, group => {
    if (group.type === 'item' && group.value === targetValue) {
        return group; // Return the node if it matches the target value
    }
    return null; // Continue traversal if no match
});

console.log(result); // Output: { type: 'item', value: 3 }
