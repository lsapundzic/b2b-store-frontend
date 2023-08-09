// ! Disabled for now, clashes with the navbar

// TODO: Return and enable it for marketing purposes

import Image from "next/image";

export default function Brand() {
  return (
    <div style={{ display: "flex", alignItems: "center", padding: "0 16px" }}>
      {/* Company Logo */}
      <Image
        src="../../public/icons/brand/svg/logo-color.svg"
        alt="Sotla Lab Logo"
        style={{ marginRight: "8px" }}
        height="50"
        width="50"
      />

      {/* Company Name */}
      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
        Sotla Lab Experts
      </span>
    </div>
  );
}
