import { AddPracticeDialog } from '@/sections/practice/add-practice-dialog';
import { ArrowLeftIcon, ArrowRightIcon, EyeIcon, PlusIcon } from '@heroicons/react/24/solid';
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const practiceTableData = [
  {
    practiceName: 'Practice 1',
    status: 'ended',
    startDate: '12/12/2021',
    endDate: '12/12/2021',
    participants: 30,
    numberOfQuestions: 10,
  },
  {
    practiceName: 'Practice 2',
    status: 'progress',
    startDate: '12/12/2021',
    endDate: '12/12/2021',
    participants: 30,
    numberOfQuestions: 10,
  },
  {
    practiceName: 'Practice 3',
    status: 'progress',
    startDate: '12/12/2021',
    endDate: '12/12/2021',
    participants: 30,
    numberOfQuestions: 10,
  },
  {
    practiceName: 'Practice 4',
    status: 'progress',
    startDate: '12/12/2021',
    endDate: '12/12/2021',
    participants: 30,
    numberOfQuestions: 10,
  },
  {
    practiceName: 'Practice 5',
    status: 'progress',
    startDate: '12/12/2021',
    endDate: '12/12/2021',
    participants: 30,
    numberOfQuestions: 10,
  },
];

export default function PracticesList() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="mt-12">
        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg w-80 h-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for practice"
            />
          </div>

          <Button className="flex items-center gap-3" onClick={() => setOpen(true)}>
            <PlusIcon className="w-5 h-5" />
            Add new practice
          </Button>
        </div>

        <Card className="mt-12">
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
            <Typography variant="h6" color="white">
              Practice List
            </Typography>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="checkbox-all-search" class="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  {[
                    'practice name',
                    'status',
                    'start date',
                    'end date',
                    'participants',
                    'number of questions',
                    '',
                  ].map((el) => (
                    <th key={el} className="border-b border-blue-gray-50 py-3 px-5 text-left">
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        {el}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {practiceTableData.map(
                  (
                    { practiceName, status, startDate, endDate, participants, numberOfQuestions },
                    key
                  ) => {
                    const className = `py-3 px-5 ${
                      key === practiceTableData.length - 1 ? '' : 'border-b border-blue-gray-50'
                    }`;

                    return (
                      <tr key={practiceName} className="hover:opacity-70 cursor-pointer">
                        <th scope="col" class="p-4">
                          <div class="flex items-center">
                            <input
                              id="checkbox-all-search"
                              type="checkbox"
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label for="checkbox-all-search" class="sr-only">
                              checkbox
                            </label>
                          </div>
                        </th>
                        <td className={className}>
                          <Typography variant="small" color="blue-gray" className="font-semibold">
                            {practiceName}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={status}
                            color={status === 'ended' ? 'red' : 'green'}
                            className="py-0.5 px-2 text-[11px] font-medium w-fit capitalize"
                          />
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {startDate}
                          </Typography>
                        </td>

                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {endDate}
                          </Typography>
                        </td>

                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {`${participants} students`}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {`${numberOfQuestions} questions`}
                          </Typography>
                        </td>
                        <td className={className}>
                          <IconButton
                            variant="text"
                            className="rounded-full"
                            onClick={() => {
                              navigate(practiceName);
                            }}
                          >
                            <EyeIcon strokeWidth={2} className="h-5 w-5 text-inherit" />
                          </IconButton>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-end border-t border-blue-gray-50 p-4 gap-x-2">
            <IconButton variant="outlined" size="sm">
              <ArrowLeftIcon className="w-full h-full" />
            </IconButton>
            <div className="flex items-center gap-2">
              <IconButton variant="outlined" size="sm">
                1
              </IconButton>
              <IconButton variant="text" size="sm">
                2
              </IconButton>
              <IconButton variant="text" size="sm">
                3
              </IconButton>
              <IconButton variant="text" size="sm">
                ...
              </IconButton>
              <IconButton variant="text" size="sm">
                8
              </IconButton>
              <IconButton variant="text" size="sm">
                9
              </IconButton>
              <IconButton variant="text" size="sm">
                10
              </IconButton>
            </div>
            <IconButton variant="outlined" size="sm">
              <ArrowRightIcon className="w-full h-full" />
            </IconButton>
          </CardFooter>
        </Card>
      </div>

      <AddPracticeDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
