import ValueNode from "./ValueNode";

export default interface Nodee {
    left?: Nodee | ValueNode;
    right?: Nodee | ValueNode;
    ref: string;
    nodes: Array<Nodee | ValueNode>;
    getNodes(): Array<Nodee | ValueNode>;
    evaluate(): number;
}
