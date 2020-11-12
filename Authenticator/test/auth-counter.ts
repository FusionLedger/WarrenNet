import { Client, Provider, ProviderRegistry, Result } from "@blockstack/clarity";
import { assert } from "chai";

describe("network counter contract test suite", () => {
  let networkCounterClient: Client;
  let provider: Provider;

  before(async () => {
    provider = await ProviderRegistry.createProvider();
    networkCounterClient = new Client("SP3GWX3NE58KXHESRYE4DYQ1S31PQJTCRXB3PE9SB.hello-world", "network-counter", provider);
  });

  it("should have a valid syntax", async () => {
    await networkCounterClient.checkContract();
  });

  describe("deploying an instance of the contract", () => {
    before(async () => {
      await networkCounterClient.deployContract();
    });

    it("should return 'network counter'", async () => {
      const query = networkCounterClient.createQuery({ method: { name: "say-hi", args: [] } });
      const receipt = await networkCounterClient.submitQuery(query);
      const result = Result.unwrapString(receipt);
      assert.equal(result, "hello world");
    });

    it("should echo number", async () => {
      const query = networkCounterClient.createQuery({
        method: { name: "echo-number", args: ["123"] }
      });
      const receipt = await networkCounterClient.submitQuery(query);
      const result = Result.unwrapInt(receipt)
      assert.equal(result, 123);
    });
  });

  after(async () => {
    await provider.close();
  });
});
