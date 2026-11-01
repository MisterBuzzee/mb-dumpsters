import { cache, callAction, notify, optionalExport, Points } from "@aicore-fivem/lib/client";
import { Locale } from "common";
import { DUMPSTER_MODELS, EVENTS } from "common/dumpsters";

const FAR = { fallback: "DUMPSTER_ERR_FAR" };

let searching = false;

const points = new Points();
points.addModel("dumpster", {
  models: [...DUMPSTER_MODELS],
  label: () => Locale("DUMPSTER_PROMPT"),
  icon: "dumpster",
  radius: 2.0,
  canShow: () => !searching && cache.vehicle === false,
  onPressed: async (entity: number) => {
    const [x = 0, y = 0, z = 0] = GetEntityCoords(entity, false);
    searching = true;
    points.refresh();
    (optionalExport("ai-target") as { disableTargeting?: (s: boolean) => void } | null)?.disableTargeting?.(true);
    await callAction(EVENTS.search, [x, y, z], FAR);
    searching = false;
    points.refresh();
    (optionalExport("ai-target") as { disableTargeting?: (s: boolean) => void } | null)?.disableTargeting?.(false);
  },
});