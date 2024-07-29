import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const CallerModule = buildModule("CallerModule", (m) => {
  const calculator = m.contract("Calculator", [], {});
  const caller = m.contract("Caller", [calculator], {
    after: [calculator]
  });

  return { calculator, caller };
});

export default CallerModule;
