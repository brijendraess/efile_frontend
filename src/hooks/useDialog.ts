import { useState } from 'react';

export interface DialogOptions<T = unknown> {
  data?: T;
}

export const useDialog = <T = unknown>() => {
  const [isOpen, setIsOpen] = useState(false);
  const [dialogData, setDialogData] = useState<T | null>(null);

  const openDialog = (options?: DialogOptions<T>) => {
    setIsOpen(true);
    if (options?.data) {
      setDialogData(options.data);
    }
  };

  const closeDialog = () => {
    setIsOpen(false);
    setDialogData(null);
  };

  return {
    isOpen,
    dialogData,
    openDialog,
    closeDialog,
  };
};