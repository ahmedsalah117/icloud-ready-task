import ActionableInsights from "../../public/images/actionable_insights.svg";
import CustomerEngagement from "../../public/images/customer_engagement.svg";
import EmployeeProductivity from "../../public/images/employees_productivity.svg";
import OperationsExcellence from "../../public/images/operations_exellence.svg";
export interface PillarType {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  bgColor: string;
}
export const pillarsArray: PillarType[] = [
  {
    id: 1,
    image: CustomerEngagement,
    title: "Mobile Apps",
    description: "Get your own mobile app",
    price: 100,
    bgColor: "#0A488F",
  },
  {
    id: 2,
    image: ActionableInsights,
    title: "Bi",
    description: "Create Dashboards",
    price: 100,
    bgColor: "#579064",
  },
  {
    id: 3,
    image: EmployeeProductivity,
    title: "HR",
    description: "Talents",
    price: 100,
    bgColor: "#950000",
  },
  {
    id: 4,
    image: OperationsExcellence,
    title: "Operations",
    description: "ERP Management",
    price: 100,
    bgColor: "#8F6C0A",
  },
];
