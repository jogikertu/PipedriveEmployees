import { createSlice } from "@reduxjs/toolkit";

export const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    status: "default", // default | loading | error
    list: [],
  },
  reducers: {
    loadEmployees: (state) => {
      state.status = "loading";
    },
    loadEmployeesSuccess: (state, action) => {
      state.status = "default";
      state.list = action.payload;
    },
    loadEmployeesFailure: (state) => {
      state.status = "error";
    },
    deleteEmployee: (state, action) => {
      state.list = state.list.filter((x) => x.id !== action.payload);
    },
    addEmployee: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    updateEmployee: (state, action) => {
      const updatedEmployee = action.payload;
      state.list = state.list.map((x) =>
        x.id === updatedEmployee.id ? updatedEmployee : x
      );
    },
  },
});

export const {
  loadEmployees,
  loadEmployeesSuccess,
  loadEmployeesFailure,
  deleteEmployee,
  updateEmployee,
  addEmployee,
} = employeesSlice.actions;

export default employeesSlice.reducer;
