import React from "react";
import PageHeader from "../../components/users/common/page-header/page-header";
import ReservationDetails from "../../components/users/reservations/reservation-details";
import Spacer from "../../components/common/spacer/spacer";

const ReservationDetailsPage = () => {
  return (
    <>
      <PageHeader title="Reservation Details" />
      <Spacer />
      <ReservationDetails />
      <Spacer />
    </>
  );
};

export default ReservationDetailsPage;
