import React from "react";
import DirectSon from "./Son";

export default function Father(props) {
  return (
    <div>
      <DirectSon nome="Larissa" idade={20} nerd={true} />
      <DirectSon nome="Emanuela" idade={17} nerd={false} />
      <DirectSon nome="Gabriela" idade={22} nerd={true} />
    </div>
  );
}
