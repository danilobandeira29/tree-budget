export default interface ValueNode {
    value: number;
    ref: string;
    evaluate(): any;
}