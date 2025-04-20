import React from "react";
import { useDispatch } from "react-redux";
import { Error } from "react-windows-xp";
import { toggleComingSoon } from "./slices/xpstore";

export default function ComingSoon() {
  const dispatch = useDispatch();

  function handleComingSoon() {
    dispatch(toggleComingSoon());
  }

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "250px" }}>
          <Error
            className="withOutline"
            confirmText="Ok"
            iconSize={48}
            onClose={handleComingSoon}
            onConfirm={handleComingSoon}
            title="Error"
          >
            <p>Coming Soon</p>
          </Error>
        </div>
      </div>
    </div>
  );
}
