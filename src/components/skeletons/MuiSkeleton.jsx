import React from "react";
import { Box, Skeleton } from "@mui/material";

const MuiSkeleton = ({ count = 5, variant, width = "100%", height = 40, spacing = 0, margin = -6, sx = {}, ...props }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: spacing }}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          variant={variant}
          width={width}
          height={height}
          sx={{
            bgcolor: "rgba(0, 0, 0, 0.1)",
            margin: `${margin}px`,
            ...sx,
          }}
          {...props}
        />
      ))}
    </Box>
  );
};

export default MuiSkeleton;
