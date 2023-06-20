import { lazy } from "react";
import { styled } from "@mui/system";

const ApexChart = lazy(() => import("react-apexcharts"));

const Chart = styled(ApexChart)``;

export default Chart;
