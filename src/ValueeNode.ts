import ValueNode from "./ValueNode";

export default class ValueeNode implements ValueNode {
    value: number;
    ref: string;

    constructor(ref: string, value: number) {
        this.ref = ref;
        this.value = value;
    }

    evaluate(): number {
        return this.value;
    }
}