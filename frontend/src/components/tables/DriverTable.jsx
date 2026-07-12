import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import {
  getDrivers,
  createDriver,
  updateDriver,
  deleteDriver,
} from "../../services/driverService";

const initialFormData = {
  name: "",
  licenseNumber: "",
  licenseCategory: "",
  licenseExpiryDate: "",
  contactNumber: "",
  status: "Available",
};

function DriverTable({ search = "" }) {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [formData, setFormData] = useState(initialFormData);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await getDrivers();
      setDrivers(response.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to load drivers.");
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setSelectedDriver(null);
    setFormData(initialFormData);
    setIsModalOpen(true);
  };

  const openEditModal = (driver) => {
    setSelectedDriver(driver);
    setFormData({
      name: driver.name || "",
      licenseNumber: driver.licenseNumber || "",
      licenseCategory: driver.licenseCategory || "",
      licenseExpiryDate: driver.licenseExpiryDate ? driver.licenseExpiryDate.slice(0, 10) : "",
      contactNumber: driver.contactNumber || "",
      status: driver.status || "Available",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDriver(null);
    setFormData(initialFormData);
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");
    try {
      if (selectedDriver) {
        await updateDriver(selectedDriver._id, formData);
      } else {
        await createDriver(formData);
      }
      await fetchDrivers();
      closeModal();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to save driver.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (driverId) => {
    if (!window.confirm("Delete this driver?")) return;
    setError("");
    try {
      await deleteDriver(driverId);
      await fetchDrivers();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to delete driver.");
    }
  };

  const filteredDrivers = drivers.filter((driver) => {
    const query = search.toLowerCase();
    return (
      driver.name.toLowerCase().includes(query) ||
      driver.licenseNumber.toLowerCase().includes(query) ||
      driver.contactNumber.toLowerCase().includes(query) ||
      driver.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 overflow-hidden">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 py-5 border-b border-white/10">
        <div>
          <h2 className="text-xl font-semibold text-white">Drivers</h2>
          <p className="text-cyan-400 mt-1 text-sm">Connected to backend API for live driver data.</p>
        </div>
        <button
          type="button"
          onClick={openCreateModal}
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-white transition hover:bg-cyan-400"
        >
          <FaPlus />
          Add Driver
        </button>
      </div>

      {loading ? (
        <div className="px-6 py-8 text-white">Loading drivers...</div>
      ) : error ? (
        <div className="px-6 py-8 text-red-400">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-white table-auto">
            <thead className="bg-cyan-500/10 text-left">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">License Number</th>
                <th className="p-4">Category</th>
                <th className="p-4">Expiry</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrivers.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-6 text-center text-white/70">No drivers found.</td>
                </tr>
              ) : (
                filteredDrivers.map((driver) => (
                  <tr key={driver._id} className="border-t border-white/10 hover:bg-cyan-500/5">
                    <td className="p-4">{driver.name}</td>
                    <td className="p-4">{driver.licenseNumber}</td>
                    <td className="p-4">{driver.licenseCategory}</td>
                    <td className="p-4">{driver.licenseExpiryDate ? driver.licenseExpiryDate.slice(0, 10) : "-"}</td>
                    <td className="p-4">{driver.contactNumber}</td>
                    <td className="p-4">{driver.status}</td>
                    <td className="flex gap-3 justify-center p-4">
                      <button type="button" onClick={() => openEditModal(driver)} className="text-cyan-400 hover:text-cyan-200"><FaEdit /></button>
                      <button type="button" onClick={() => handleDelete(driver._id)} className="text-red-400 hover:text-red-200"><FaTrash /></button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8">
          <div className="w-full max-w-2xl rounded-3xl bg-slate-950 p-6 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white">{selectedDriver ? "Edit Driver" : "Add Driver"}</h3>
                <p className="text-cyan-400 text-sm">{selectedDriver ? "Update driver details and save changes." : "Create a new driver record in the backend."}</p>
              </div>
              <button type="button" onClick={closeModal} className="text-white/70 hover:text-white">Close</button>
            </div>
            <form onSubmit={handleSave} className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block text-white/80">
                  Name
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInput}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>
                <label className="block text-white/80">
                  License Number
                  <input
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleInput}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block text-white/80">
                  License Category
                  <input
                    name="licenseCategory"
                    value={formData.licenseCategory}
                    onChange={handleInput}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>
                <label className="block text-white/80">
                  Expiry Date
                  <input
                    type="date"
                    name="licenseExpiryDate"
                    value={formData.licenseExpiryDate}
                    onChange={handleInput}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="block text-white/80">
                  Contact Number
                  <input
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInput}
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  />
                </label>
                <label className="block text-white/80">
                  Status
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInput}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                  >
                    <option value="Available">Available</option>
                    <option value="On Trip">On Trip</option>
                    <option value="Off Duty">Off Duty</option>
                    <option value="Suspended">Suspended</option>
                  </select>
                </label>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button type="button" onClick={closeModal} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white hover:bg-white/10">Cancel</button>
                <button type="submit" disabled={saving} className="rounded-2xl bg-cyan-500 px-6 py-3 text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60">{saving ? "Saving..." : "Save Driver"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default DriverTable;
