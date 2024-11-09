import React from "react";

interface Color {
  name: string;
  hex: string;
}

interface ColorPaletteProps {
  colors: Color[];
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors }) => (
  <div style={{ display: "flex",flexDirection:"column", flexWrap: "wrap" }}>
    {colors.map((color) => (
      <div
        key={color.name}
        style={{
          backgroundColor: color.hex,
          color: "#fff",
          padding: "10px",
          //   margin: '5px',
          //   borderRadius: '4px',
          width: "100px",
          textAlign: "center"
        }}
      >
        {color.name}
      </div>
    ))}
  </div>
);
