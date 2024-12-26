import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  IconButton,
  Typography,
  Avatar,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/react/24/outline';
import { AddUpdateAccountDialog } from '../../../sections/class/admin/add-update-account-dialog.jsx';

const accountListData = [
  {
    profilePicture: '/img/profile.png',
    username: 'Romina Hadid',
    email: 'romina.hadid@example.com',
    role: 'Admin',
    status: 'Active',
    lastLogin: '2023-12-01',
    createdOn: '2021-09-01',
  },
  {
    profilePicture: '/img/profile.png',
    username: 'Ryan Tompson',
    email: 'ryan.tompson@example.com',
    role: 'User',
    status: 'Inactive',
    lastLogin: '2023-11-15',
    createdOn: '2021-10-12',
  },
  {
    profilePicture: '/img/profile.png',
    username: 'Ryan Tompson',
    email: 'ryan.tompson@example.com',
    role: 'User',
    status: 'Inactive',
    lastLogin: '2023-11-15',
    createdOn: '2021-10-12',
  },
  {
    profilePicture: '/img/profile.png',
    username: 'Ryan Tompson',
    email: 'ryan.tompson@example.com',
    role: 'User',
    status: 'Inactive',
    lastLogin: '2023-11-15',
    createdOn: '2021-10-12',
  },
];

export default function AccountManagement() {
  const [accounts, setAccounts] = React.useState(accountListData); // Manage account list
  const [isDialogOpen, setDialogOpen] = React.useState(false); // Manage add/edit dialog state
  const [selectedAccount, setSelectedAccount] = React.useState(null); // Store selected account for editing
  const [isDeleteDialogOpen, setDeleteDialogOpen] = React.useState(false); // Manage delete dialog state
  const [accountToDelete, setAccountToDelete] = React.useState(null); // Store the account to delete

  // Open the dialog to edit an account
  const handleEditClick = (account) => {
    setSelectedAccount(account);
    setDialogOpen(true);
  };

  // Open the dialog to create a new account
  const handleCreateClick = () => {
    setSelectedAccount(null); // Clear selected account
    setDialogOpen(true);
  };

  // Handle account updates or creation
  const handleSaveAccount = (updatedAccount) => {
    if (selectedAccount) {
      // Update existing account
      setAccounts((prevAccounts) =>
          prevAccounts.map((acc) =>
              acc.email === selectedAccount.email ? updatedAccount : acc
          )
      );
    } else {
      // Add a new account
      setAccounts((prevAccounts) => [...prevAccounts, updatedAccount]);
    }
    setDialogOpen(false); // Close the dialog
  };

  // Open the delete confirmation dialog
  const handleDeleteClick = (account) => {
    setAccountToDelete(account);
    setDeleteDialogOpen(true);
  };

  // Confirm and delete the account
  const confirmDelete = () => {
    setAccounts((prevAccounts) =>
        prevAccounts.filter((acc) => acc.email !== accountToDelete.email)
    );
    setDeleteDialogOpen(false); // Close the delete confirmation dialog
    setAccountToDelete(null); // Clear selected account
  };

  return (
      <>
        <div className="mt-12">
          <div className="flex justify-between items-center pb-4">
            <Typography variant="h5" color="blue-gray">
              Account Management
            </Typography>
            <Button className="flex items-center gap-3" onClick={handleCreateClick}>
              <PlusIcon className="w-5 h-5" />
              Create Account
            </Button>
          </div>
          <Card className="mt-8">
            <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
              <Typography variant="h6" color="white">
                Account List
              </Typography>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <tr>
                  {[
                    'No.',
                    'Username',
                    'Email',
                    'Role',
                    'Status',
                    'Last Login',
                    'Actions',
                  ].map((header) => (
                      <th
                          key={header}
                          className="border-b border-blue-gray-50 py-3 px-5 text-left"
                      >
                        <Typography
                            variant="small"
                            className="text-[11px] font-bold uppercase text-blue-gray-400"
                        >
                          {header}
                        </Typography>
                      </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {accounts.map(
                    ({ profilePicture, username, email, role, status, lastLogin }, index) => (
                        <tr key={email} className="hover:opacity-60 cursor-pointer">
                          <td className="py-3 px-5">{index + 1}</td>
                          <td className="py-3 px-5">
                            <div className="flex items-center gap-4">
                              <Avatar src={profilePicture} alt={username} size="sm" />
                              <Typography variant="small" color="blue-gray" className="font-bold">
                                {username}
                              </Typography>
                            </div>
                          </td>
                          <td className="py-3 px-5">{email}</td>
                          <td className="py-3 px-5">{role}</td>
                          <td className="py-3 px-5">{status}</td>
                          <td className="py-3 px-5">{lastLogin}</td>
                          <td className="py-3 px-5 flex gap-2">
                            <Button
                                size="sm"
                                variant="outlined"
                                onClick={() =>
                                    handleEditClick({ profilePicture, username, email, role, status, lastLogin })
                                }
                            >
                              <PencilIcon className="w-4 h-4" />
                            </Button>
                            <Button
                                size="sm"
                                color="red"
                                variant="outlined"
                                onClick={() => handleDeleteClick({ username, email })}
                            >
                              <TrashIcon className="w-4 h-4" />
                            </Button>
                          </td>
                        </tr>
                    )
                )}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>

        {/* Add or Update Account Dialog */}
        <AddUpdateAccountDialog
            open={isDialogOpen}
            handleClose={() => setDialogOpen(false)}
            accountData={selectedAccount}
            onSubmit={handleSaveAccount}
        />

        {/* Delete Confirmation Dialog */}
        <Dialog
            open={isDeleteDialogOpen}
            handler={setDeleteDialogOpen}
            size="sm"
            className="p-4 overflow-hidden"
        >
          <DialogHeader>Confirm Deletion</DialogHeader>
          <DialogBody>
            <Typography>
              Are you sure you want to delete the account for{' '}
              <span className="font-bold text-red-500">
              {accountToDelete?.username || 'this account'}
            </span>
              ?
            </Typography>
          </DialogBody>
          <DialogFooter>
            <Button variant="text" onClick={() => setDeleteDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="outlined" color="red" onClick={confirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </Dialog>
      </>
  );
}
