import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiClient } from "@/lib/api-client";
import { ADD_ACCOUNT } from "@/utils/constants";
import { userChange } from "@/store/reducers/UserSlice";

const DialogBox = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [position, setPosition] = React.useState("Select");
  const [accountNumber, setAccountNumber] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [creditLimit, setCreditLimit] = React.useState(0);
  const [bankName, setBankName] = React.useState("");

  const handleSubmit = async () => {
    if (position !== "Select") {
      const formData = new FormData();
      formData.append("bankName", bankName);
      formData.append("accountNumber", accountNumber);
      formData.append("creditLimit", creditLimit);
      formData.append("date", date);
      formData.append("type", position);
      formData.append("userData", user.id);
      const response = await apiClient.post(ADD_ACCOUNT, formData);

      if (response.status === 200 && response.data) {
        dispatch(userChange(response.data.user));
      }
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Add an account</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add an account</DialogTitle>
            <DialogDescription>
              Make changes to your account here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Bank Name
              </Label>
              <Input
                id="name"
                onChange={(e) => setBankName(e.target.value)}
                className="col-span-3"
                value={bankName}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Account Number
              </Label>
              <Input
                id="username"
                className="col-span-3"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="expiry-date" className="text-right">
                Expiry Date
              </Label>
              <Input
                id="expiry-date"
                className="col-span-3"
                placeholder="mm/yy"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            {position === "Credit" && (
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="Cerbit_limit" className="text-right">
                  Credit Limit
                </Label>
                <Input
                  id="Cerbit_limit"
                  className="col-span-3"
                  placeholder="0"
                  value={creditLimit}
                  onChange={(e) => setCreditLimit(e.target.value)}
                />
              </div>
            )}

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <div className="col-span-3 flex items-center space-x-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline ">{position}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Choose Type</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={setPosition}
                    >
                      <DropdownMenuRadioItem value="Credit">
                        Credit
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="Debit">
                        Debit
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
