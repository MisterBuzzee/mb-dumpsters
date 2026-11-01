import { cache, callAction, notify, Points } from "@aicore-fivem/lib/client";
import { Locale } from "common";
import { DUMPSTER_MODELS, EVENTS } from "common/dumpsters";

const FAR = { fallback: "DUMPSTER_ERR_FAR" };

const points = new Points();
points.addModel("dumpster", {
  models: [...DUMPSTER_MODELS],
  label: () => Locale("DUMPSTER_PROMPT"),
  icon: "dumpster",
  radius: 2.0,
  canShow: () => cache.vehicle === false,
  onPressed: async (entity: number) => {
    const [x = 0, y = 0, z = 0] = GetEntityCoords(entity, false);
    // Hide the target eye while the search runs.
    try {
      (exports as Record<string, { disableTargeting?: (s: boolean) => void }>)["ai-target"]?.disableTargeting?.(true);
    } catch {
      // ignore
    }
    await callAction(EVENTS.search, [x, y, z], FAR);
    try {
      (exports as Record<string, { disableTargeting?: (s: boolean) => void }>)["ai-target"]?.disableTargeting?.(false);
    } catch {
      // ignore
    }
  },
});