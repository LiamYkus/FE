import React from 'react';
import {
  Input,
  Button,
  Dialog,
  Select,
  Option,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export function UpdateAccountDialog({ open, handleClose, accountData, onUpdate }) {
  const [formData, setFormData] = React.useState({
    username: '',
    email: '',
    role: '',
    status: '',
  });

  // Populate form data when `accountData` changes
  React.useEffect(() => {
    if (accountData) {
      setFormData({
        username: accountData.username || '',
        email: accountData.email || '',
        role: accountData.role || '',
        status: accountData.status || '',
      });
    }
  }, [accountData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle select changes for dropdowns
  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit(formData); // Pass updated form data to parent
    }
    handleClose(); // Close the dialog
  };

  return (
      <Dialog size="md" open={open} handler={handleClose} className="p-4 overflow-hidden">
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Update Account
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Update the information below to modify account details.
          </Typography>
          <IconButton
              size="sm"
              variant="text"
              className="!absolute right-3.5 top-3.5"
              onClick={handleClose}
          >
            <XMarkIcon className="h-4 w-4 stroke-2" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="space-y-4 pb-6">
          {/* Username */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
              Username
            </Typography>
            <Input
                color="gray"
                size="lg"
                placeholder="Enter username"
                name="username"
                value={formData.username} // Bind to state
                onChange={handleChange} // Update state
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: '!min-w-full',
                }}
                labelProps={{
                  className: 'hidden',
                }}
            />
          </div>

          {/* Email */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
              Email
            </Typography>
            <Input
                color="gray"
                size="lg"
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email} // Bind to state
                onChange={handleChange} // Update state
                className="placeholder:opacity-100 focus:!border-t-gray-900"
                containerProps={{
                  className: '!min-w-full',
                }}
                labelProps={{
                  className: 'hidden',
                }}
            />
          </div>

          {/* Role */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
              Role
            </Typography>
            <Select
                color="gray"
                size="lg"
                name="role"
                value={formData.role} // Bind to state
                onChange={(e) => handleChange({ target: { name: 'role', value: e } })} // Custom handler for Select
                className="placeholder:opacity-100 focus:!border-t-gray-900"
            >
              <Option value="Admin">Admin</Option>
              <Option value="User">User</Option>
              <Option value="Moderator">Moderator</Option>
            </Select>
          </div>

          {/* Status */}
          <div>
            <Typography variant="small" color="blue-gray" className="mb-2 text-left font-medium">
              Status
            </Typography>
            <Select
                color="gray"
                size="lg"
                name="status"
                value={formData.status} // Bind to state
                onChange={(e) => handleChange({ target: { name: 'status', value: e } })} // Custom handler for Select
                className="placeholder:opacity-100 focus:!border-t-gray-900"
            >
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
              <Option value="Pending">Pending</Option>
            </Select>
          </div>
        </DialogBody>

        <DialogFooter>
          <Button variant="outlined" className="ml-auto" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="ml-2" onClick={handleSubmit}>
            Save Changes
          </Button>
        </DialogFooter>
      </Dialog>
  );
}
