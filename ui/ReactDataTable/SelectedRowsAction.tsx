interface ISelectRowsAction {
  selectedRows: any[],
  handleClearRows: () => void;
  selectedActions: { label: string; action: (selectedRow: any[]) => void }[];
}
export default function SelectedRowsAction({
  handleClearRows,
  selectedRows,
  selectedActions,
}: ISelectRowsAction) {
  return (
    <>
    <div className="w-100 flex py-2">
      
      <button className="btn btn-primary m-2" onClick={handleClearRows}>
        Clear Selected Rows
      </button>

      {selectedActions.map((action, index) => {
        return (
          <button
            key={index}
            className="btn btn-danger m-2"
            onClick={() => {
              action?.action(selectedRows)
            }}
          >
            {action?.label}
          </button>
        );
      })}
    </div>
    
    </>

  );
}
