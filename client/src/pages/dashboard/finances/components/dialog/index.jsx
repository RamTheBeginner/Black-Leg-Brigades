import React, { useEffect, useState } from "react";
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
import { ADD_ACCOUNT, DELETE_ACCOUNT, EDIT_ACCOUNT } from "@/utils/constants";
import { userChange } from "@/store/reducers/UserSlice";
import { ComboboxPopover } from "../comboBox";
import { transactionChange } from "@/store/reducers/AccountSlice";

const DialogBox = (props) => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [position, setPosition] = React.useState("Select");
  const [accountNumber, setAccountNumber] = React.useState(0);
  const [date, setDate] = React.useState("");
  const [creditLimit, setCreditLimit] = React.useState(0);
  const [bankName, setBankName] = React.useState("");
  const [loading, setLoading] = useState(true);

  const transaction = useSelector((state) => state.transaction.value);

  

  useEffect(() => {
   
    dispatch(transactionChange(-1));
    
  }, []);

  console.log(transaction)
  useEffect(() => {
    if(transaction != -1 && props.type != 1){
      setPosition(user.Accounts[transaction].type);
      setBankName(user.Accounts[transaction].bankName);
      setDate(user.Accounts[transaction].month+"/"+user.Accounts[transaction].year);
      setCreditLimit(user.Accounts[transaction].creditLimit);
      setAccountNumber(user.Accounts[transaction].accountNumber)
    }

  },[transaction])

  const handleSubmit = async () => {
    if (loading) {
      setLoading(false);


      if (position !== "Select") {

        const formData = new FormData();
        formData.append("bankName", bankName);
        formData.append("accountNumber", accountNumber);
        formData.append("creditLimit", creditLimit);
        formData.append("date", date);
        formData.append("type", position);
        formData.append("userData", user.id);

        if(transaction != -1){
          formData.append("account_id",user.Accounts[transaction]._id)
        }
        let response = 0;
        if(props.type === 1){
        response = await apiClient.post(ADD_ACCOUNT, formData);
        }
        if(props.type === 2 && transaction != -1){
        response = await apiClient.post(EDIT_ACCOUNT,formData)
        }
        if(props.type === 3 && transaction != -1){
          response = await apiClient.post(DELETE_ACCOUNT,formData)
        }

       
        dispatch(transactionChange(-1));
        if (response.status === 200 && response.data) {
          dispatch(userChange(response.data.user));
        }
      }
      setLoading(true);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" style={{ backgroundColor: props.color }}>{props.name}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{props.name}</DialogTitle>
            <DialogDescription>{props.des}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {props.type !== 1 && (
              <div className="grid grid-cols-4 items-center gap-4">
                <ComboboxPopover />
              </div>
            )}

            {(props.type === 1 ||
              transaction !== -1) && (
                <>
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
                      <Label htmlFor="Cerdit_limit" className="text-right">
                        Credit Limit
                      </Label>
                      <Input
                        id="Cerdit_limit"
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
                          <Button  disabled = {props.type !== 1} variant="outline ">{position}</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                        className="w-56">
                          <DropdownMenuLabel
                          >Choose Type</DropdownMenuLabel>
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
                </>
              )}
          </div>

          <DialogFooter>
            <Button onClick={handleSubmit}>{props.sub}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
