import fortune from "./fortune";

test("O fortuna", () => {
 expect(fortune().length).toBeGreaterThan(1);
});