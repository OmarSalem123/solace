import { Box, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import Input from "@mui/joy/Input";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";
import { useEffect } from "react";

type FormData = {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  firstNameAr: string;
  fatherNameAr: string;
  grandfatherNameAr: string;
  familyNameAr: string;
  nationalIdNumber: string;
  nationalIdExpiringDate: string;
  nationalities: { countryId: number; country: { id: string; name: string } }[];
  maritalStatus: string;
  dependants: number;
  additionalNationality?: string;
};

const BasicInfo: React.FC = () => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const { data } = useQuery(GET_USER);
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  useEffect(() => {
    if (data) {
      const userData = data.getUserById;
      setValue("firstName", userData.firstName);
      setValue("fatherName", userData.fatherName);
      setValue("grandfatherName", userData.grandfatherName);
      setValue("familyName", userData.familyName);
      setValue("firstNameAr", userData.localizedName.firstName);
      setValue("fatherNameAr", userData.localizedName.fatherName);
      setValue("grandfatherNameAr", userData.localizedName.grandfatherName);
      setValue("familyNameAr", userData.localizedName.familyName);
      setValue("nationalIdNumber", userData.nationalId.idNumber);
      setValue("nationalIdExpiringDate", userData.nationalId.expiryDate);
      setValue("maritalStatus", userData.maritalStatus.name);
      setValue("dependants", userData.dependants);
    }
  }, [data]);

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        marginX: "16px",
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
          Basic Information
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="text-[12px]">National ID Number</label>
              <Input
                {...register("nationalIdNumber")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">National ID Expiring Date</label>
              <Input
                {...register("nationalIdExpiringDate")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Title</label>
              <Input
                value="Mr."
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div>
              <label className="text-[12px]">First Name</label>
              <Input
                {...register("firstName")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Father Name</label>
              <Input
                {...register("fatherName")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Grand Father Name</label>
              <Input
                {...register("grandfatherName")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Family Name</label>
              <Input
                {...register("familyName")}
                value="Smith"
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div>
              <label className="text-[12px]">الأسم الأول</label>
              <Input
                {...register("firstNameAr")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">اسم الأب</label>
              <Input
                {...register("fatherNameAr")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">اسم الجد</label>
              <Input
                {...register("grandfatherNameAr")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">اللقب / اسم العائلة</label>
              <Input
                {...register("familyNameAr")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div>
              <label className="text-[12px]">Date of birth</label>
              <Input
                value="01 / 04 / 1980"
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Gender</label>
              <Input
                value="Male"
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Nationality</label>
              <Input
                value="Egyptian "
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Additional Nationality</label>
              <Input
                value="-"
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div>
              <label className="text-[12px]">Passport No.</label>
              <Input
                value="A135464"
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Passport Issue Date</label>
              <Input
                value="01 / 04 / 1980"
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Passport Expiry Date</label>
              <Input
                {...register("nationalIdExpiringDate")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <div>
              <label className="text-[12px]">Marital Status</label>
              <Input
                {...register("maritalStatus")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
              />
            </div>
            <div>
              <label className="text-[12px]">Dependencies</label>
              <Input
                {...register("dependants")}
                variant="plain"
                fullWidth
                className="font-bold text-[16px] !text-black"
                disabled
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

export default BasicInfo;
