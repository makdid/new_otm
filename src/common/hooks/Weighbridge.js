import { useDispatch, useSelector } from "react-redux";
import { w3cwebsocket } from "websocket";
import moment from "moment";

// import { getEnvInit } from "../configs";
import { useConfig } from "../hooks";
import { wbSlice } from "../../slices/wb";
const { setWb } = wbSlice.actions;

let wsClient;

export const useWeighbridge = () => {
  const dispatch = useDispatch();

  // const { wb } = useSelector((state) => state.app);
  const { configs } = useConfig();

  if (configs?.ENV?.WBMS_WB_IP && !wsClient) {
    wsClient = new w3cwebsocket(`ws://${configs?.ENV?.WBMS_WB_IP}:${configs?.ENV?.WBMS_WB_PORT}/GetWeight`);

    wsClient.onmessage = (message) => {
      let isChange = false;

      const wb = localStorage.getItem("wb")
        ? JSON.parse(localStorage.getItem("wb"))
        : {
            weight: -1,
            lastChange: 0,
            isStable: false,
            onProcessing: false,
            canStartScalling: false,
          };

      const curWb = { ...wb };
      curWb.weight = Number.isNaN(+message.data) ? 0 : +message.data;

      // console.log("current wb:", curWb.weight);
      // console.log("last wb:", wb.weight);

      if (curWb.weight !== wb.weight) {
        isChange = true;
        console.log("masuk 1");

        curWb.lastChange = moment().valueOf();
        curWb.isStable = false;
      } else if (moment().valueOf() - wb.lastChange > configs?.ENV?.WBMS_WB_STABLE_PERIOD && !curWb.isStable) {
        isChange = true;

        console.log("masuk 2");

        curWb.isStable = true;
      }

      if (curWb.weight === 0 && curWb.isStable && !curWb.onProcessing && !curWb.canStartScalling) {
        isChange = true;

        console.log("masuk 3");

        curWb.canStartScalling = true;
      } else if (curWb.weight > 0 && !curWb.onProcessing && curWb.canStartScalling) {
        isChange = true;

        console.log("masuk 4");

        curWb.canStartScalling = false;
      }

      if (curWb.onProcessing && curWb.canStartScalling) {
        isChange = true;

        console.log("masuk 5");

        curWb.canStartScalling = false;
      }

      // karena ada dispatch on message, jd penggunaan hooks weighbridge harus dicomponent terkecil
      if (isChange) dispatch(setWb({ ...curWb }));
    };

    wsClient.onerror = (err) => {
      // alert(`Cannot connect to WB: ${err}`);
      console.log("Error Get Data from Serial Weighbridge:", err);
    };
  }

  return;
};
