import React from "react";
import { Box, Button } from "@mui/material";
import Input from "@mui/joy/Input";

const ContactInformation = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        marginX: "16px",
        marginY: "16px",
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
          Contact Information
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
              <label className="text-[12px]">Personal Email</label>
              <Input
                variant="plain"
                fullWidth
                value="John.smith@gmail.com"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">Mobile</label>
              <Input
                variant="plain"
                fullWidth
                value="011223344556"
                className="font-bold text-[16px]"
              />
            </div>
            <div></div>
            <div></div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default ContactInformation;
