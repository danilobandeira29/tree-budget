import Nodee from "./Node";

export default class ValueNode extends Nodee {
    value: number;

    constructor (ref: string, value: number) {
        super(ref);
        this.value = value;
    }

    evaluate(): number | undefined {
        return this.value;
    };
}