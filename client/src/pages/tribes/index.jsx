import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TribesTable from "../../components/TribesTable";
import { fetchTribes } from "../../store/actions/tribes";

export default function Tribes() {
  const dispatch = useDispatch();
  const tribes = useSelector((state) => state.tribes.list);
  const status = useSelector((state) => state.tribes.status);

  useEffect(() => {
    dispatch(fetchTribes());
  }, [dispatch]);

  return <TribesTable tribes={tribes} status={status} />;
}
