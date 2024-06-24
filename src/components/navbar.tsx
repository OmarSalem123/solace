import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <nav className="h-[113px] w-full px-[40px] py-[24px]">
      <div className="flex flex-wrap justify-between items-center w-full">
        <div className="flex flex-col">
          <h1 className="text-[26px] text-[#151D48] font-bold">
            John Smith Profile
          </h1>
          <Breadcrumbs
            separator="›"
            style={{ color: "#459AFF" }}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="#959FB0" href="/">
              Dashboard
            </Link>
            <Link underline="hover" color="#959FB0" href="/">
              HR manage
            </Link>
            <Link underline="hover" color="#959FB0" href="/">
              Employees
            </Link>
            <Typography color="#003FAD">John Smith Profile</Typography>
          </Breadcrumbs>
        </div>
        <div className="flex items-center justify-start gap-[30px]">
          <button>
            <img
              src="/assets/notification.svg"
              alt="notification"
              className="w-[24px] h-[24px]"
            />
          </button>
          <button>
            <img
              src="/assets/mail.svg"
              alt="notification"
              className="w-[24px] h-[24px]"
            />
          </button>
          <button>
            <img
              src="/assets/settings.svg"
              alt="notification"
              className="w-[24px] h-[24px]"
            />
          </button>
          <button>
            <img
              src="/assets/avatar.png"
              alt="notification"
              className="w-[40px] h-[40px]"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
