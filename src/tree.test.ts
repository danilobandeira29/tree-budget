import RefNode from "./RefNode";
import ValueNode from "./ValueNode";

test("should evaluate all ValueNode of a RefNode", function() {
    const subExtraordinaria1 = new ValueNode("1.1.1", 3);
    const subExtraordinaria2 = new ValueNode("1.1.2", 5);
    const receitaExtraordinaria = new RefNode("1.1", subExtraordinaria1, subExtraordinaria2);
    const receita = new RefNode("1", receitaExtraordinaria);
    const value = receita.evaluate();
    expect(value).toBe(8);
});

test("should evaluate all ValueNode reflect RefNode of any level", function() {
    const subExtraordinaria1 = new ValueNode("1.1.1", 3);
    const subExtraordinaria2 = new ValueNode("1.1.2", 5);
    const receitaExtraordinaria = new RefNode("1.1", subExtraordinaria1, subExtraordinaria2);
    expect(receitaExtraordinaria.value).toBe(8);
});

test("should evaluate of all RefNode and reflect on root", function() {
    const subExtraordinaria1 = new ValueNode("1.2.2", 3);
    const subExtraordinaria2 = new ValueNode("1.2.1", 5);
    const receitaExtraordinaria = new RefNode("1.2", subExtraordinaria1, subExtraordinaria2);
    const receitaOrdinaria = new ValueNode("1.1", 4);
    const receita = new RefNode("1", receitaExtraordinaria, receitaOrdinaria);
    const subOrdinaria1 = new ValueNode("2.1.1", 10);
    const subOrdinaria2 = new ValueNode("2.1.2", 4);
    const despesaOrdinaria = new RefNode("2.1", subOrdinaria1, subOrdinaria2);
    const despesa = new RefNode("2", despesaOrdinaria);
    const root = new RefNode("0", receita, despesa);
    expect(root.value).toBe(26);
});

test("should RefNode have an array of ValueNodes", function() {
    const subExtraordinaria1 = new ValueNode("1.1.1", 3);
    const subExtraordinaria2 = new ValueNode("1.1.2", 5);
    const receitaExtraordinaria = new RefNode("1.1", subExtraordinaria1, subExtraordinaria2);
    expect(receitaExtraordinaria.nodes).toHaveLength(2);
    expect(receitaExtraordinaria.nodes[0].ref).toBe("1.1.1");
    expect(receitaExtraordinaria.nodes[1].ref).toBe("1.1.2");
});

test.only("should find a node of root", function() {
    const subExtraordinaria1 = new ValueNode("1.1.1", 3);
    const subExtraordinaria2 = new ValueNode("1.1.2", 5);
    const receitaExtraordinaria = new RefNode("1.1", subExtraordinaria1, subExtraordinaria2);
    const subOrdinaria1 = new ValueNode("1.2.2", 3);
    const subOrdinaria2 = new ValueNode("1.2.1", 5);
    const receitaOrdinaria = new RefNode("1.2", subOrdinaria1, subOrdinaria2);
    const receita = new RefNode("1", receitaExtraordinaria, receitaOrdinaria);
    const node = receita.find("1");
    expect(node?.ref).toBe("1");
});

// test.only("should find a node of any level by ref", function() {
//     const subExtraordinaria1 = new ValueNode("1.1.1", 3);
//     const subExtraordinaria2 = new ValueNode("1.1.2", 5);
//     const receitaExtraordinaria = new RefNode("1.1", subExtraordinaria1, subExtraordinaria2);
//     const subOrdinaria1 = new ValueNode("1.2.2", 3);
//     const subOrdinaria2 = new ValueNode("1.2.1", 5);
//     const receitaOrdinaria = new RefNode("1.2", subOrdinaria1, subOrdinaria2);
//     const receita = new RefNode("1", receitaExtraordinaria, receitaOrdinaria);
//     const node = receita.find("1.2.2");
//     expect(node?.ref).toBe("1.2.2");
// });
