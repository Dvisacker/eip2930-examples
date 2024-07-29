import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const GetterModule = buildModule("GetterModule", (m) => {
  const getter = m.contract("Getter", [], {});

  return { getter };
});

export default GetterModule;
