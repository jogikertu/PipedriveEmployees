import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";

export default function TribesTable({ tribes, status }) {
  const loading = status === "loading";
  const error = status === "error";

  return (
    <Container className="mt-3">
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {!loading &&
            tribes.map((tribe) => (
              <tr key={tribe.id}>
                <td>{tribe.id}</td>
                <td>{tribe.name}</td>
                <td>{tribe.department}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      {loading && (
        <Row className="justify-content-center">
          <Spinner />
        </Row>
      )}
      {error && (
        <p className="table-error-message">
          There was an error loading the tribes data
        </p>
      )}
    </Container>
  );
}
