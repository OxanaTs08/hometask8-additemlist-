import { Stack, Button, List, ListItemText, TextField } from '@mui/material';
import { useState, useEffect } from 'react';

const ListItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  useEffect(() => {
    console.log('Компонент ListItems обновлен');
  }, []);

  return (
    <Stack spacing={4} sx={{ padding: '50px', alignItems: 'center' }}>
      <TextField
        sx={{ width: '300px' }}
        type="text"
        value={inputValue}
        label="Add an item"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" onClick={addItem}>
        Add
      </Button>
      <List
        sx={{ border: '1px solid black', borderRadius: '10px', width: '500px' }}
      >
        {' '}
        {items.length === 0 ? (
          <ListItemText sx={{ textAlign: 'center' }}>
            Your list is empty
          </ListItemText>
        ) : (
          items.map((item, index) => (
            <ListItemText sx={{ textAlign: 'center' }} key={index}>
              {' '}
              - {item}
            </ListItemText>
          ))
        )}
      </List>
    </Stack>
  );
};
export default ListItems;
