import { memo } from "react";
import { EENumber } from "./EENumber";

export const EENumbers = memo(({ number }: { number: number }) => {
  const strArr = number.toString().padStart(2, "0").split("");

  return (
    <div style={{ display: "flex", gap: 8 }}>
      {strArr.map((n, i) => (
        <EENumber key={`${n}+${i}`} number={Number.parseInt(n)} />
      ))}
    </div>
  );
});
