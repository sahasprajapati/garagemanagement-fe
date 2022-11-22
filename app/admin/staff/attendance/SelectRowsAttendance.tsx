interface ISelectRowsAction {
  handleClearRows: () => void;
  handleDeleteRows: () => void;
}
export default function SelectedRowsAttendanceComponent({
  handleClearRows,
  handleDeleteRows,
}: ISelectRowsAction) {
  return (
    <>
      <button className="btn btn-primary ml-0" onClick={handleClearRows}>
        Clear Selected Rows
      </button>

      <button className="btn btn-danger m-2" onClick={handleDeleteRows}>
        Delete Selected Rows
      </button>
    </>
  );
}
