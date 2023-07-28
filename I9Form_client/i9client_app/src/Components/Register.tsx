import {
    ColDef, GetRowIdParams, Grid, GridOptions, RowSelectedEvent
    // GetRowIdParams,
    // Grid,
    // GridOptions,
    // RowSelectedEvent,
    // ValueFormatterParams,
} from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, { useState, useRef } from "react";

//row data: <TData>
//tyscript interface for row data to grid
export interface AppUser {

    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;

}
// Set grid Coloumn Headers 
const columnDefs: ColDef<AppUser>[] = [
    { headerName: 'First Name', field: 'firstName' },
    { headerName: 'Last Name', field: 'lastName' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Username', field: 'username' },
    { headerName: 'Password', field: 'password' },
];

//Set grid Row Data with data from IRegister
// var rowData: AppUser[] = [
//     { firstName: 'Toyota', lastName: "Kim", email: 'email.com', username: 'toykim3o!',password: "907bhuR!!"}
//   ];

// Pass IRegister as generic row data type
// const gridOptions: GridOptions<AppUser> = {
//   columnDefs: columnDefs,
//   rowData: rowData,
//   rowSelection: 'multiple',

getRowId: (params: GetRowIdParams<AppUser>) => {
    // params.data : ICar
    return params.data.firstName + params.data.lastName;
}
// onRowSelected: (event: RowSelectedEvent<IRegister>) => {
//   // event.data: ICar | undefined
//   if (event.data && event.node.isSelected()) {
//     const price = event.data.price;
//     // event.context: IContext
//     const discountRate = event.context.discount;
//     console.log('Price with 10% discount:', price * discountRate);
//   }
// },
// };

// function onShowSelection() {
//   // api.getSelectedRows() : ICar[]
//   const cars: IRegister[] = gridOptions.api!.getSelectedRows();
//   console.log(
//     'Selected cars are',
//     cars.map((c) => `${c.make} ${c.model}`)
//   );
// }

// wait for the document to be loaded, otherwise
// AG Grid will not find the div in the document.
// lookup the container we want the Grid to use
var eGridDiv = document.querySelector<HTMLElement>('#myGrid')!;

// create the grid passing in the div to use together with the columns & data we want to use
// new Grid(eGridDiv, gridOptions);

if (typeof window !== 'undefined') {
    // Attach external event handlers to window so they can be called from index.html
    // (<any>window).onShowSelection = onShowSelection;
}

  // const Register = () => {
  //   // let navigate = useNavigate();
  //   const form = useRef();
  //   const checkBtn = useRef();

  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //    const [loading, setLoading] = useState(false);
  //   const [message, setMessage] = useState("");
  //   const [successful, setSuccessful] = useState("");

  //   const onChangeFirstName = (e: { target: { value: any; }; }) => {
  //     const firstName = e.target.value;
  //     setFirstName(firstName);
  //   };
  //   const onChangeLastName = (e: { target: { value: any; }; }) => {
  //     const lastName = e.target.value;
  //     setLastName(lastName);
  //   };

  //   const onChangeEmail = (e: { target: { value: any; }; }) => {
  //     const email = e.target.value;
  //     setEmail(email);
  //   };

  //   const onChangePassword = (e: { target: { value: any; }; }) => {
  //     const password = e.target.value;
  //     setPassword(password);
  //   };

  //   const handleRegister = (e: { preventDefault: () => void; }) => {
  //     e.preventDefault();

  //     setMessage("");
  //     setSuccessful("false");
  //   }
  // }
