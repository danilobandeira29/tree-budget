import Nodee from "./Node";
import ValueNode from "./ValueNode";

export default class RefNode extends Nodee {
    left?: RefNode | ValueNode;
    right?: RefNode | ValueNode;
    value: number | undefined;
    nodes: Array<Nodee>;

    constructor(ref: string, left?: RefNode | ValueNode, right?:RefNode | ValueNode) {
        super(ref);
        this.left = left;
        this.right = right;
        this.value = this.evaluate();
        this.nodes = [];
        if(left) this.nodes.push(left);
        if(right) this.nodes.push(right);
    }

    evaluate(): number | undefined {
        if(this.left && this.right) return this.left.evaluate()! + this.right.evaluate()!;
        return this.left?.evaluate() || this.right?.evaluate();
    }

    getNodes() {
        return this.nodes;
    }

    find(ref: string): Nodee | undefined {
        if(this.ref === ref) return this;

    }

}