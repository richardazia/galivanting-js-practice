# Simple reminder
<x-grandparent>
    <x-parent>
        <x-child1></xchild1>
        <x-child2></xchild2>
        <x-child3></xchild3>
        <x-child4></xchild4>
    </x-parent>
    <x-sibling></sibling>
</x-grandparent>

## Traverse methods
- pre order
- postorder
- breadth first

- "Document Order
- useful for copying

visit root, and then the children

## Postorder traversal
- bottom up, children before parents, from the children to the parent, to the grand parent. 
- good for deleting

## Breadth-First Traversal
- back to front - visits elements at the given depth. 
- good for rendering elements on screen
