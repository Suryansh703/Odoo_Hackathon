import { useEffect, useMemo, useState } from "react";
import { FaEdit, FaPlus, FaSearch, FaTrash } from "react-icons/fa";

const CrudTable = ({
  title,
  description,
  service,
  fields,
  searchFields,
  idField = "_id",
}) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({});

  const initialFormData = useMemo(
    () =>
      fields.reduce((acc, field) => {
        acc[field.name] = field.default || "";
        return acc;
      }, {}),
    [fields]
  );

  useEffect(() => {
    setFormData(initialFormData);
  }, [initialFormData]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await service.list();
      setItems(response.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to load data.");
    } finally {
      setLoading(false);
    }
  };

  const openCreateModal = () => {
    setSelectedItem(null);
    setFormData(initialFormData);
    setIsModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setFormData(
      fields.reduce((acc, field) => {
        const value = item[field.name];
        acc[field.name] = value === undefined || value === null ? "" : value;
        return acc;
      }, {})
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setFormData(initialFormData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError("");

    try {
      const payload = fields.reduce((acc, field) => {
        let value = formData[field.name];
        if (field.type === "number") {
          value = value === "" ? "" : Number(value);
        }
        acc[field.name] = value;
        return acc;
      }, {});

      if (selectedItem) {
        await service.update(selectedItem[idField], payload);
      } else {
        await service.create(payload);
      }

      await fetchItems();
      closeModal();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to save item.");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (item) => {
    if (!window.confirm("Delete this item?")) {
      return;
    }

    try {
      await service.delete(item[idField]);
      await fetchItems();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Unable to delete item.");
    }
  };

  const filteredItems = useMemo(() => {
    const query = search.toLowerCase();
    if (!query) return items;

    return items.filter((item) =>
      searchFields.some((field) =>
        String(item[field] || "").toLowerCase().includes(query)
      )
    );
  }, [items, search, searchFields]);

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-white/5 overflow-hidden">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 py-5 border-b border-white/10">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-cyan-400 mt-1 text-sm">{description}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-full border border-white/10 bg-slate-900 py-3 pl-11 pr-4 text-white outline-none focus:border-cyan-500 sm:w-72"
            />
          </div>
          <button
            type="button"
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-white transition hover:bg-cyan-400"
          >
            <FaPlus />
            Add
          </button>
        </div>
      </div>

      {loading ? (
        <div className="px-6 py-8 text-white">Loading...</div>
      ) : error ? (
        <div className="px-6 py-8 text-red-400">{error}</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-white table-auto">
            <thead className="bg-cyan-500/10 text-left">
              <tr>
                {fields.map((field) => (
                  <th key={field.name} className="p-4">
                    {field.label}
                  </th>
                ))}
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={fields.length + 1} className="p-6 text-center text-white/70">
                    No entries found.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => (
                  <tr key={item[idField]} className="border-t border-white/10 hover:bg-cyan-500/5">
                    {fields.map((field) => (
                      <td key={field.name} className="p-4 align-top">
                        {field.type === "date" && item[field.name]
                          ? String(item[field.name]).slice(0, 10)
                          : item[field.name] ?? "-"}
                      </td>
                    ))}
                    <td className="flex justify-center gap-3 p-4">
                      <button
                        type="button"
                        onClick={() => openEditModal(item)}
                        className="text-cyan-400 hover:text-cyan-200"
                      >
                        <FaEdit />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDelete(item)}
                        className="text-red-400 hover:text-red-200"
                      >
                        <FaTrash />
                      </button>
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
                <h3 className="text-2xl font-semibold text-white">
                  {selectedItem ? `Edit ${title.replace(/ Management$/, "")}` : `Add ${title.replace(/ Management$/, "")}`}
                </h3>
                <p className="text-cyan-400 text-sm">
                  {selectedItem
                    ? "Update this record and save your changes."
                    : "Create a new record in the backend."}
                </p>
              </div>
              <button type="button" onClick={closeModal} className="text-white/70 hover:text-white">
                Close
              </button>
            </div>

            <form onSubmit={handleSave} className="grid gap-4">
              <div className="grid gap-4">
                {fields.map((field) => (
                  <label key={field.name} className="block text-white/80">
                    {field.label}
                    {field.type === "textarea" ? (
                      <textarea
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                      />
                    ) : field.type === "select" ? (
                      <select
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                      >
                        {field.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name] || ""}
                        onChange={handleChange}
                        required={field.required}
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
                        {...(field.type === "number" ? { min: field.min ?? 0 } : {})}
                      />
                    )}
                  </label>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-white hover:bg-white/10"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-2xl bg-cyan-500 px-6 py-3 text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrudTable;
