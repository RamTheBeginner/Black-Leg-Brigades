import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const transactions = [
  {
    category: "INV001",
    type: "Credit",
    accountNumber: "123456789",
    bankName: "Bank A",
    amount: "$250.00",
    date: "2024-08-16",
  },
  {
    category: "INV002",
    type: "Debit",
    accountNumber: "987654321",
    bankName: "Bank B",
    amount: "$150.00",
    date: "2024-08-15",
  },
  {
    category: "INV003",
    type: "Credit",
    accountNumber: "123456789",
    bankName: "Bank A",
    amount: "$350.00",
    date: "2024-08-14",
  },
];

export function TableDemo() {
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("/").map(Number);
    return new Date(year, month - 1, day); // month - 1 because Date months are 0-based
  };
  const dispatch = useDispatch();
  const data1 = useSelector((state) => state.user.value.Transactions);
  const data = [...data1].sort((a, b) => {
    const dateA = parseDate(a.Date);
    const dateB = parseDate(b.Date);
    return dateB - dateA;
  });
  return (
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
                <button className="p-1 text-blue-500 hover:text-blue-700">
                  <MdOutlineEdit />
                </button>
                <button className="p-1 text-red-500 hover:text-red-700">
                  <FaTrashAlt />
                </button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
