import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="p-5">
      <div className="mb-5 row d-flex justify-content-beetwen">
        <div className="col-lg-6">
          <p className="fs-2 text-bold">List Pasien</p>
        </div>
        <div className="col-lg-6 d-flex justify-content-end align-items-center">
            <a className="btn btn-warning">Add New Pasien</a>
        </div>
      </div>
    <table className="table">
        <thead className="table-light">
          <tr>
            <td scope="col">No</td>
            <td scope="col">Name</td>
            <td scope="col">NoRm</td>
            <td scope="col">Date Of Birth</td>
            <td scope="col">Phone Number</td>
            <td scope="col">Address</td>
            <td scope="col"></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
            <td>button</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
