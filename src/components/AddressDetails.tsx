import React from "react";
import { Box, Button } from "@mui/material";
import Input from "@mui/joy/Input";

const AddressDetails = () => {
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
          Address Details
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
              <label className="text-[12px]">Country</label>
              <Input
                variant="plain"
                fullWidth
                value="Egypt"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">City</label>
              <Input
                variant="plain"
                fullWidth
                value="Cairo"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">Postal Code</label>
              <Input
                variant="plain"
                fullWidth
                value="11728"
                className="font-bold text-[16px]"
              />
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div>
              <label className="text-[12px]">Building</label>
              <Input
                variant="plain"
                fullWidth
                value="7"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">Street</label>
              <Input
                variant="plain"
                fullWidth
                value="Street 127"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">Floor No.</label>
              <Input
                variant="plain"
                fullWidth
                value="7"
                className="font-bold text-[16px]"
              />
            </div>
            <div>
              <label className="text-[12px]">Apartment</label>
              <Input
                variant="plain"
                fullWidth
                value="72"
                className="font-bold text-[16px]"
              />
            </div>
          </div>
        </form>
      </div>
    </Box>
  );
};

export default AddressDetails;