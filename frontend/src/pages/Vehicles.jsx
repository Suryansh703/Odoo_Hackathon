import CrudTable from "../components/tables/CrudTable";
import {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle,
} from "../services/vehicleService";

const vehicleService = {
  list: getVehicles,
  create: createVehicle,
  update: updateVehicle,
  delete: deleteVehicle,
};

const fields = [
  { name: "registrationNumber", label: "Registration", type: "text", required: true },
  { name: "vehicleName", label: "Name", type: "text", required: true },
  { name: "vehicleType", label: "Type", type: "text", required: true },
  { name: "maxLoadCapacity", label: "Max Load", type: "number", required: true },
  { name: "odometer", label: "Odometer", type: "number", required: false, default: 0 },
  { name: "acquisitionCost", label: "Cost", type: "number", required: true },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    default: "Available",
    options: ["Available", "On Trip", "In Shop", "Retired"],
  },
];

function Vehicles() {
  return (
    <div>
      <CrudTable
        title="Vehicle Management"
        description="Manage your transport fleet efficiently."
        service={vehicleService}
        fields={fields}
        searchFields={["registrationNumber", "vehicleName", "vehicleType", "status"]}
      />
    </div>
  );
}

export default Vehicles;
