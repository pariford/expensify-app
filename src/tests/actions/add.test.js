const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;
test("should add two numbers", () => {
  const result = add(3, 4);
  if (result != 7) {
    throw new Error("Add is not working properly.");
  }
});
test("Name should be populated", () => {
  const result = generateGreeting("Paritosh");
  expect(result).toBe("Hello Paritosh!");
});

test("Name should be populated even when name is not defined", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
