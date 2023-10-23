import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";

type DataTableProps = {
   columns: GridColDef[];
   rows: object[];
   slug: string;
};

const DataTable = (props: DataTableProps) => {
   const handleDelete = (id: number) => {
      // delete an item
      // axios.delete(`/users/${slug}/id || {id}`);
      console.log(id + "Id has been deleted");
   };
   const actionColmn: GridColDef = {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => {
         return (
            <div className="action">
               <Link to={`/${props.slug}/${params.row.id}`} className="view"></Link>
               <img src="/view.svg" alt="" />
               <div className="delete" onClick={() => handleDelete(params.row.id)}>
                  <img src="/delete.svg" alt="" />
               </div>
            </div>
         );
      },
   };
   return (
      <div className="data-table">
         <DataGrid
            className="data-grid"
            rows={props.rows}
            columns={[...props.columns, actionColmn]}
            initialState={{
               pagination: {
                  paginationModel: {
                     pageSize: 10,
                  },
               },
            }}
            slots={{
               toolbar: GridToolbar,
            }}
            slotProps={{
               toolbar: { showQuickFilter: true, quickFilterProps: { debounceMs: 500 } },
            }}
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
         />
      </div>
   );
};
export default DataTable;
