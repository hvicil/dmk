import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import PageHeader from "../../components/users/common/page-header/page-header";
import Vehicles from "../../components/users/vehicles/vehicles";
import WhyChooseUs from "../../components/users/about/why-choose-us/why-choose-us";
import RentPath from "../../components/users/about/rent-path/rent-path";

const SolutionsPage = () => {
  return (
    <>
      <PageHeader title="Solutions" />
      <Spacer />
      <RentPath />
      <Spacer />
      <WhyChooseUs />
      <Spacer />
    </>
  );
};

export default SolutionsPage;
