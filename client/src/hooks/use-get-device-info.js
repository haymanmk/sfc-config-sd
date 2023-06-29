import { useEffect, useState } from "react";

export const useGetDeviceInfo = () => {
  const url = "http://shixpa-peproxy00.garmin.com/smt-sfcadvance/T3-3F/api/Configs";
  const [deviceInfo, setDeviceInfo] = useState([]);

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        setDeviceInfo(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return deviceInfo;
};
