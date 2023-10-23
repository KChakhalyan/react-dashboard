import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type AddProps = {
   slug: string;
   columns: GridColDef[];
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: AddProps) => {
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // add new Item
      // axios.post(`/api/${props.slug}s`, {});
   };
   return (
      <div className="add">
         <div className="modal">
            <span className="close" onClick={() => props.setOpen(false)}>
               x
            </span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>
               {props.columns
                  .filter((item) => item.field !== "id" && item.field !== "img")
                  .map((column) => (
                     <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                     </div>
                  ))}
               <button>Add</button>
            </form>
         </div>
      </div>
   );
};
export default Add;
