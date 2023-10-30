import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEmployeeModal from "../../components/AddEmployeeModal";
import EmployeeTable from "../../components/EmployeeTable";
import { fetchEmployees } from "../../store/actions/employees";

export default function Employees() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.list);
  const status = useSelector((state) => state.employees.status);
  const show = useSelector((state) => state.modal.show);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <>
      <EmployeeTable employees={employees} status={status} />
      <AddEmployeeModal show={show} />
    </>
  );
}
