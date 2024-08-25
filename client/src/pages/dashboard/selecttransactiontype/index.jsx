import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const SelectTransactionType = () => {
  return (
    <div className='px-20 flex items-center space-x-4'>
      <h1>Select </h1>
      <DropdownMenu>
        <DropdownMenuTrigger className="px-4 py-2 border rounded-md bg-blue-500 text-white hover:bg-blue-600">
        Transaction Type
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-gray-800 text-white">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-blue-500">Debit</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-green-500">Credit</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-red-500">All</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default SelectTransactionType

