import React from 'react'
import './Main.css'
import { Box, TextField, Button, Stack } from "@mui/material";
import Todo from '../Todo/Todo';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Main(props) {
    const [items, setItems] = useState([
        { id: 1, text: "Walk the dog." },
        { id: 2, text: "Buy groceries." }
    ]);
    const [itemText, setItemText] = useState('');
    const [nextId, setNextId] = useState(3);

    // Log initial state
    useEffect(() => {
        console.log('Initial items:', items);
    }, []);

    // Log whenever items change
    useEffect(() => {
        console.log('Items array updated:', items);
    }, [items]);

    const addItem = (text) => {
        if (text && text.trim() !== '') {
            const newItem = {
                id: nextId,
                text: text
            };
            console.log('Adding item:', newItem);
            setItems([...items, newItem]);
            setNextId(nextId + 1);
            setItemText('');
        }
    }

    const deleteItem = (idToDelete) => {
        console.log('Attempting to delete item with ID:', idToDelete);
        const newItems = items.filter(item => item.id !== idToDelete);
        setItems(newItems);
    }

    // Add this function for Enter key handling
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission behavior
            addItem(itemText);
        }
    }

    return (
        <div className='main-page'>
            <h1 className='headingMain'>What's on Your To Do List?</h1>

            <Box
                sx={{
                    maxWidth: 600,
                    mx: "auto",
                    mt: "5",
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                className='boxMain'>

                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Enter your task"
                        variant="outlined"
                        fullWidth
                        value={itemText}
                        onChange={(e) => { setItemText(e.target.value) }}
                        onKeyDown={handleKeyPress} // Add this line
                    />
                    <Button variant="contained" onClick={() => addItem(itemText)}>Add</Button>
                </Stack>



            </Box>

          

            <br></br>

            <div className='items'>
                {items.map((item) => {
                    return (
                        <Todo 
                            key={item.id} 
                            data={item.text} 
                            onDelete={() => deleteItem(item.id)} 
                        />
                    )
                })}

                 {items.length > 0 && (
           
                   <Box 
  display="flex" 
  justifyContent="center" 
  mt={2}
>
  <Button 
    variant="contained" 
    color="error" 
    onClick={() => setItems([])}
    sx={{ 
      minWidth: '120px',
      py: 1,
      px: 3
    }}
  >
    Clear List
  </Button>
</Box>
                
            )}
            </div>

 
        </div>
    )
}