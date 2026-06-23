import { MaintenancePage } from "@/app/components/MaintenancePage";

export const metadata = {
  title: "Maintenance Mode — OZTTRO",
  description: "OZTTRO is undergoing scheduled maintenance. We'll be back online shortly.",
};

export default function Maintenance() {
  return <MaintenancePage />;
}
