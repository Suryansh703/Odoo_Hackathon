import CrudTable from "../components/tables/CrudTable";
import {
  getMaintenance,
  createMaintenance,
  updateMaintenance,
  deleteMaintenance,
} from "../services/maintenanceService";

const maintenanceService = {
  list: getMaintenance,
  create: createMaintenance,
  update: updateMaintenance,
  delete: deleteMaintenance,
};

const fields = [
  { name: "vehicle", label: "Vehicle", type: "text", required: true },
  { name: "title", label: "Service", type: "text", required: true },
  { name: "description", label: "Description", type: "textarea", required: true },
  { name: "cost", label: "Cost", type: "number", required: true },
  { name: "maintenanceDate", label: "Date", type: "date", required: true },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    default: "Pending",
    options: ["Pending", "In Progress", "Completed"],
  },
];

function Maintenance() {
  return (
    <div>
      <CrudTable
        title="Maintenance Management"
        description="Track vehicle servicing."
        service={maintenanceService}
        fields={fields}
        searchFields={["vehicle", "title", "status"]}
      />
    </div>
  );
}

export default Maintenance;
