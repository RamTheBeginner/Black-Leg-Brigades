import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
  
  export function AlertDialogDemo({
    title,
    description,
    confirmText,
    cancelText = "Cancel",
    onConfirm,
    onCancel,
    defaultOpen = false,
  }) {
    return (
      <AlertDialog defaultOpen={defaultOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel as={Button} onClick={onCancel}>
              {cancelText}
            </AlertDialogCancel>
            <AlertDialogAction as={Button} onClick={onConfirm}>
              {confirmText}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  