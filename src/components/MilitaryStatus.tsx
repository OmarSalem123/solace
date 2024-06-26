import React from "react";
import { Box, Button } from "@mui/material";
import Input from "@mui/joy/Input";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { styled } from "@mui/material/styles";

const MilitaryStatus = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        marginX: "16px",
        marginBottom: "16px",
        borderRadius: "24px",
        padding: "24px",
        width: "100%",
        disply: "flex",
        flexDirection: {
          xs: "row",
          lg: "column",
        },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex justify-between mx-2 my-4">
        <h1 className="text-[#151D48] font-[500] text-[20px]">
          Military Status
        </h1>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#0F6CBD",
            padding: "8px, 12px, 8px, 12px",
            width: "104px",
          }}
        >
          Edit
        </Button>
      </div>
      <div className="mx-2 mb-4">
        <form>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="text-[12px]">Require Travel Permit</label>
              <Input
                variant="plain"
                fullWidth
                value="Yes"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">Military Status</label>
              <Input
                variant="plain"
                fullWidth
                value="Exempted"
                className="font-bold text-[16px]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[12px]">Document</label>
              <Button
                component="label"
                role={undefined}
                variant="outlined"
                disabled
                startIcon={<AttachFileIcon />}
              >
                filename1.docx
                <VisuallyHiddenInput type="file" />
              </Button>
            </div>
            <div></div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default MilitaryStatus;
