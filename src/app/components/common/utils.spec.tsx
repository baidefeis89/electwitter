import { normalizeText } from "./utils";

describe('Normalize text', () => {
  it('should remove characters', () => {
    const inputs = ['@asdf', 'asdf', '@asdf,', '@asdf.!', '@asdf?¡', '@asdf-_=/'];
    const expectedOutputs = ['@asdf', 'asdf', '@asdf', '@asdf', '@asdf', '@asdf_'];

    expect(inputs.map( input => normalizeText(input))).toStrictEqual(expectedOutputs);
  });
});
