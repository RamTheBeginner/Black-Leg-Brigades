import React, { useState } from "react";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDispatch, useSelector } from "react-redux";
import { transactionChange } from "@/store/reducers/AccountSlice";

export function ComboboxPopover() {
  const [open, setOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center space-x-4 mt-7">
      <p className="text-sm text-muted-foreground">Account</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-[150px] justify-start"
          >
            {selectedAccount ? (
              <>
                <Circle className="mr-2 h-4 w-4 shrink-0" />
                {selectedAccount}
              </>
            ) : (
              <>Choose Account</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="p-0 w-[200px] max-h-[180px] overflow-y-auto"
          side="left"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Select an account..." />
            <CommandList className="max-h-[7.5rem] overflow-y-auto">
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
                {user.Accounts.map((account , index) => (
                  <CommandItem
                    key = {index}
                    value={account.bankName}
                    onSelect={(value) => {
                      setSelectedAccount(value);
                      setOpen(false);
                      dispatch(transactionChange(index));
                    }}
                  >
                    <Circle
                      className={cn(
                        "mr-2 h-4 w-4",
                        account.bankName === selectedAccount
                          ? "opacity-100"
                          : "opacity-40"
                      )}
                    />
                    <span>{account.bankName}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
