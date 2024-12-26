import React from 'react';
import {
  Input,
  Option,
  Select,
  Button,
  Dialog,
  Textarea,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  CardBody,
} from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CreateQuestion } from '@/pages/dashboard/teacher/practice-detail';
import { PlusIcon } from '@heroicons/react/24/solid';

export function AddPracticeDialog({ open, handleClose }) {
  const [listQuestions, setListQuestions] = React.useState([
    {
      question: '',
      answer: '',
      score: 10,
    },
  ]);

  const handleAddQuestion = () => {
    setListQuestions((prev) => [
      ...prev,
      {
        question: '',
        answer: '',
        score: 10,
      },
    ]);
  };

  const handleUpdateQuestion = (index, key, value) => {
    setListQuestions((prev) => {
      const newList = [...prev];
      newList[index][key] = value;
      return newList;
    });
  };

  const handleDeleteQuestion = (index) => {
    setListQuestions((prev) => {
      const newList = [...prev];
      newList.splice(index, 1);
      return newList;
    });
  };

  return (
    <Dialog size="md" open={open} handler={handleClose} className="p-4 overflow-hidden">
      <DialogHeader className="relative m-0 block">
        <Typography variant="h4" color="blue-gray">
          Create practice
        </Typography>
        <Typography className="mt-1 font-normal text-gray-600">
          Fill in the information below to create a new practice.
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
      <DialogBody className="space-y-4 pb-6 h-[60vh] pr-0">
        <CardBody className="p-0 mx-2  h-full overflow-auto relative">
          <div className="flex items-center justify-between sticky top-0 bg-white z-10 py-2">
            <Button
              size="sm"
              variant="gradient"
              className="flex items-center gap-x-2 whitespace-nowrap min-w-fit"
              onClick={handleAddQuestion}
            >
              <PlusIcon className="w-5 h-5" />
              Add question
            </Button>
            <div className="w-full h-[1px] bg-blue-gray-200" />
            <Typography
              variant="h5"
              className="whitespace-nowrap border-[1px] border-gray-400 rounded-lg px-3 py-1"
            >
              Practice name
            </Typography>
          </div>

          <div className="mt-4 flex flex-col gap-y-12">
            {listQuestions.map((question, index) => (
              <CreateQuestion
                key={index}
                {...question}
                no={index + 1}
                handleUpdateQuestion={handleUpdateQuestion}
                handleDeleteQuestion={handleDeleteQuestion}
              />
            ))}
          </div>
        </CardBody>
      </DialogBody>

      <DialogFooter>
        <Button className="ml-2" onClick={handleClose}>
          Add Practice
        </Button>
      </DialogFooter>
    </Dialog>
  );
}
