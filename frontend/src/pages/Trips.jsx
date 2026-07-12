import CrudTable from "../components/tables/CrudTable";
import {
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip,
} from "../services/tripService";

const tripService = {
  list: getTrips,
  create: createTrip,
  update: updateTrip,
  delete: deleteTrip,
};

const fields = [
  { name: "source", label: "Source", type: "text", required: true },
  { name: "destination", label: "Destination", type: "text", required: true },
  { name: "vehicle", label: "Vehicle", type: "text", required: true },
  { name: "driver", label: "Driver", type: "text", required: true },
  { name: "cargoWeight", label: "Cargo Weight", type: "number", required: true },
  { name: "plannedDistance", label: "Planned Distance", type: "number", required: true },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    default: "Draft",
    options: ["Draft", "Dispatched", "Completed", "Cancelled"],
  },
];

function Trips() {
  return (
    <div>
      <CrudTable
        title="Trip Management"
        description="Monitor all transport trips."
        service={tripService}
        fields={fields}
        searchFields={["source", "destination", "vehicle", "driver", "status"]}
      />
    </div>
  );
}

export default Trips;
