export const columns = [
  { field: 'id', headerName: 'Rank', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'attQues',
    headerName: 'Attempted Question',
    type: 'number',
    width: 150,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'marks',
    headerName: 'Marks',
    type: 'number',
    width: 110,
    editable: false,
    align: 'center',
    headerAlign: 'center',
  },
  // {
  //   field: 'acc',
  //   headerName: 'Accuracy',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  //   headerClassName: 'bold-header', // Add a custom class for the header
  // },
];
export const rows = [
  { id: 1, attQues: 1, user: 'A', marks: 14 },
  { id: 2, attQues: 5, user: 'A', marks: 31 },
  { id: 3, attQues: 6, user: 'C', marks: 31 },
  { id: 4, attQues: 8, user: 'E', marks: 11 },
  { id: 5, attQues: 3, user: 'B', marks: 1 },
  { id: 6, attQues: 2, user: 'D', marks: 150 },
  { id: 7, attQues: 2, user: 'F', marks: 44 },
  { id: 8, attQues: 4, user: 'R', marks: 36 },
  { id: 9, attQues: 9, user: 'H', marks: 65 },
  { id: 10, attQues: 1, user: 'I', marks: 141 },
  { id: 11, attQues: 5, user: 'J', marks: 31 },
  { id: 12, attQues: 6, user: 'K', marks: 3131 },
  { id: 13, attQues: 8, user: 'L', marks: 11 },
  { id: 14, attQues: 3, user: 'M', marks: 1 },
  { id: 15, attQues: 2, user: 'N', marks: 150 },
  { id: 16, attQues: 2, user: 'O', marks: 44 },
  { id: 17, attQues: 4, user: 'P', marks: 36 },
  { id: 18, attQues: 9, user: 'Q', marks: 65 }
]
