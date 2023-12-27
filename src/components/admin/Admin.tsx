/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './Admin.css';
import {
  Typography,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AdminContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '10px',
});

const QuestionsContainer = styled('div')({
  display: 'block',
});

const Admin: React.FC = () => {
  const responses = [
    { id: 1, firstName: 'Марія', lastName: 'Іваненко', answer: '8/10', position: 'Покоївка' },
    { id: 2, firstName: 'Петро', lastName: 'Петренко', answer: '6/10', position: 'Портьє' },
    { id: 3, firstName: 'Оксана', lastName: 'Сидоренко', answer: '9/10', position: 'Адміністратор' },
  ];

  const questions = {
    'Портьє': ['Питання 1', 'Питання 2', 'Питання 3'],
    'Покоївка': ['Питання 1', 'Питання 2', 'Питання 3'],
    'Адміністратор': ['Питання 1', 'Питання 2', 'Питання 3'],
  };


  return (
    <AdminContainer>
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h6">Відповіді співробітників</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 600 }}>Ім'я</TableCell>
                  <TableCell style={{ fontWeight: 600 }}>Прізвище</TableCell>
                  <TableCell style={{ fontWeight: 600 }}>Відповіді</TableCell>
                  <TableCell style={{ fontWeight: 600 }}>Посада</TableCell>
                  <TableCell align="right" style={{ fontWeight: 600 }}>Видалити</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {responses.map((response) => (
                  <TableRow key={response.id}>
                    <TableCell>{response.firstName}</TableCell>
                    <TableCell>{response.lastName}</TableCell>
                    <TableCell>{response.answer}</TableCell>
                    <TableCell>{response.position}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>

      <QuestionsContainer>
        <List>
          {Object.entries(questions).map(([category, questionList], index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{category}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List>
                  {questionList.map((question: any, questionIndex: number) => (
                    <ListItem key={questionIndex}>
                      <ListItemText primary={question} />
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </AccordionDetails>
            </Accordion>
          ))}
        </List>
      </QuestionsContainer>
    </AdminContainer>
  );
};

export default Admin;
