import { assert, describe, expect, it } from "vitest";
import { getAlerts } from "./alerts";

const alertMock = [
  {
    sender_name: "Weather Man",
    event: "The porch chairs are melting",
    start: 1747248420,
    end: 1747274400,
    description: "Its so hot that the chairs melted.",
  },
];

describe("getAlerts", () => {
  it("should generate an object array with an event and description", () => {
    const alerts = getAlerts(alertMock);

    expect(alerts).toEqual([
      {
        event: "The porch chairs are melting",
        description: "Its so hot that the chairs melted.",
      },
    ]);
  });

  it('should return "N/A" when alerts are undefined', () => {
    const alerts = getAlerts(undefined);

    expect(alerts).toBe("N/A");
  });
});
