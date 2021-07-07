import Nodee from "./Node";
import ValueNode from "./ValueNode";

export default class RefNode implements Nodee {
    left?: Nodee | ValueNode;
    right?: Nodee | ValueNode;
    value: number;
    ref: string;
    nodes: Array<Nodee | ValueNode>;

    constructor(ref: string, left?: Nodee | ValueNode, right?: Nodee | ValueNode) {
        this.left = left;
        this.right = right;
        this.ref = ref;
        this.value = this.evaluate();
        this.nodes = [];
        if(left) this.nodes.push(left);
        if(right) this.nodes.push(right);
    }

    evaluate() {
        if(this.left && this.right) return this.left.evaluate() + this.right.evaluate();
        return this.left?.evaluate() || this.right?.evaluate();
    }

    getNodes() {
        return this.nodes;
    }

}