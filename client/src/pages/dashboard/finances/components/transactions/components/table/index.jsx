import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AlertDialogDemo } from "../../../alert";

export function TableDemo() {
  const [dialogState, setDialogState] = useState({
    type: null,
    transaction: null,
    show: false,
    showCombobox: false, // New state for combobox visibility
  });

  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day);
  };

  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.user.value.Transactions);

  const data = [...data1].sort((a, b) => {
    const dateA = parseDate(a.Date);
    const dateB = parseDate(b.Date);
    return dateB - dateA;
  });

  const handleEdit = (transaction) => {
    setDialogState({
      type: "edit",
      transaction,
      show: true,
      showCombobox: false, // Reset combobox visibility
    });
  };

  const handleDelete = (transaction) => {
    setDialogState({
      type: "delete",
      transaction,
      show: true,
      showCombobox: false,
    });
  };

  const handleClose = () => {
    setDialogState({ type: null, transaction: null, show: false, showCombobox: false });
  };

  const handleConfirmEdit = () => {
    console.log("Edit confirmed");
    handleClose();
  };

  const handleShowCombobox = () => {
    setDialogState(prevState => ({
      ...prevState,
      showCombobox: true,
    }));
  };

  return (
    <>
      <Table className="w-full">
        <TableCaption>A list of your Transactions</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[14%] text-left">Category</TableHead>
            <TableHead className="w-[14%] text-left">Type</TableHead>
            <TableHead className="w-[14%] text-left">Account Number</TableHead>
            <TableHead className="w-[14%] text-left">Bank Name</TableHead>
            <TableHead className="w-[14%] text-left">Date</TableHead>
            <TableHead className="w-[10%] text-right">Amount</TableHead>
            <TableHead className="w-[20%] text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell className="w-[14%] text-left font-medium">
                {transaction.Category}
              </TableCell>
              <TableCell className="w-[14%] text-left">
                {transaction.Type}
              </TableCell>
              <TableCell className="w-[14%] text-left">
                {transaction.Account.accountNumber}
              </TableCell>
              <TableCell className="w-[14%] text-left">
                {transaction.Account.bankName}
              </TableCell>
              <TableCell className="w-[14%] text-left">
                {transaction.Date}
              </TableCell>
              <TableCell className="w-[10%] text-right">
                {transaction.Amount}
              </TableCell>
              <TableCell className="w-[20%] text-right">
                <div className="flex justify-end space-x-2">
                  <button
                    className="p-1 text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(transaction)}
                  >
                    <MdOutlineEdit />
                  </button>
                  <button
                    className="p-1 text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(transaction)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {dialogState.show && (
        <AlertDialogDemo
          key={`${dialogState.type}-${dialogState.transaction?.Category}`}
          title={
            dialogState.type === "edit"
              ? "Edit Transaction"
              : "Delete Transaction"
          }
          description={`Are you sure you want to ${
            dialogState.type === "edit" ? "edit" : "delete"
          } the transaction with Category: ${dialogState.transaction?.Category}?`}
          confirmText={dialogState.type === "edit" ? "Edit" : "Delete"}
          onConfirm={dialogState.type === "edit" ? handleConfirmEdit : () => {
            console.log("Delete confirmed");
            handleClose();
          }}
          onCancel={handleClose}
          defaultOpen={dialogState.show}
          showCombobox={dialogState.showCombobox} // Pass combobox state
          onShowCombobox={handleShowCombobox} // Handler to show combobox
        />
      )}
    </>
  );
}
