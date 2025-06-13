import { Box } from "@mui/material";

const ResponsiveGrid = ({
  children,
  columns = { xs: 1, sm: 1, md: 1 },
  gap = 0,
  ...props
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: gap,
        gridTemplateColumns: {
          xs: `repeat(${columns.xs}, 1fr)`,
          sm: `repeat(${columns.sm}, 1fr)`,
          md: `repeat(${columns.md}, 1fr)`,
        },
        width: "100%",
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ResponsiveGrid;
