import { example } from "../src"
import expect from "expect"
import {RequestManager} from "eth-connect"

describe("unit", () => {
  it("smoke test", () => {
    const rm = new RequestManager()
    expect(example()).toEqual(true)
  })
})
