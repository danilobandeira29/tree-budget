export default abstract class Nodee {
    ref: string;

    constructor (ref: string) {
        this.ref = ref;
    }
    
    abstract evaluate(): number | undefined;
}
