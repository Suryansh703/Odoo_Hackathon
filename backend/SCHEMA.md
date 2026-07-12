# TransitOps Database Schema

## Vehicle

| Field | Type | Required |
|-------|------|----------|
| registrationNumber | String | Yes |
| vehicleName | String | Yes |
| vehicleType | String | Yes |
| maxLoadCapacity | Number | Yes |
| odometer | Number | No |
| acquisitionCost | Number | Yes |
| status | String | Yes |

---

## Driver

| Field | Type | Required |
|-------|------|----------|
| name | String | Yes |
| licenseNumber | String | Yes |
| licenseCategory | String | Yes |
| licenseExpiryDate | Date | Yes |
| contactNumber | String | Yes |
| safetyScore | Number | No |
| status | String | Yes |

---

## Trip

| Field | Type | Required |
|-------|------|----------|
| source | String | Yes |
| destination | String | Yes |
| vehicle | ObjectId (Vehicle) | Yes |
| driver | ObjectId (Driver) | Yes |
| cargoWeight | Number | Yes |
| plannedDistance | Number | Yes |
| actualDistance | Number | No |
| fuelConsumed | Number | No |
| finalOdometer | Number | No |
| status | String | Yes |

---

## Maintenance

| Field | Type | Required |
|-------|------|----------|
| vehicle | ObjectId (Vehicle) | Yes |
| title | String | Yes |
| description | String | Yes |
| cost | Number | No |
| maintenanceDate | Date | No |
| status | String | Yes |

---

## FuelLog

| Field | Type | Required |
|-------|------|----------|
| vehicle | ObjectId (Vehicle) | Yes |
| liters | Number | Yes |
| cost | Number | Yes |
| date | Date | No |

---

## Expense

| Field | Type | Required |
|-------|------|----------|
| vehicle | ObjectId (Vehicle) | Yes |
| expenseType | String | Yes |
| amount | Number | Yes |
| description | String | No |
| date | Date | No |

---

## Relationships

- One Vehicle → Many Trips
- One Driver → Many Trips
- One Vehicle → Many Maintenance Records
- One Vehicle → Many Fuel Logs
- One Vehicle → Many Expense Records

## Notes

- MongoDB ObjectId is used to create relationships between collections.
- Controllers should use `.populate()` to fetch Vehicle and Driver details from Trips.
- Any schema changes should be made in the `models` folder and communicated to the team before updating controllers or frontend.