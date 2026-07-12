import CrudTable from "../components/tables/CrudTable";
import {
  getFuel,
  createFuel,
  updateFuel,
  deleteFuel,
} from "../services/fuelService";

const fuelService = {
  list: getFuel,
  create: createFuel,
  update: updateFuel,
  delete: deleteFuel,
};

const fields = [
  { name: "vehicle", label: "Vehicle", type: "text", required: true },
  { name: "driver", label: "Driver", type: "text", required: true },
  { name: "liters", label: "Litres", type: "number", required: true },
  { name: "cost", label: "Cost", type: "number", required: true },
  { name: "date", label: "Date", type: "date", required: true },
];

function Fuel() {
  return (
    <div>
      <CrudTable
        title="Fuel Management"
        description="Monitor fuel consumption."
        service={fuelService}
        fields={fields}
        searchFields={["vehicle", "driver"]}
      />
    </div>
  );
}

export default Fuel;
