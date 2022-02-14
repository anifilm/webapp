import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function TodoApp({ task, tasks, inputTask, addTask }) {
  return (
    <div>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Todo
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ padding: '16px' }}>   　　
        <Input onChange={(e) => inputTask(e.target.value)} />   　　　　　
        <Button variant="contained" color="secondary" onClick={() => addTask(task)}>add</Button>
        <List>   　　　　　　　
          {tasks.map(function (item, i) {
            return (
              <ListItem key={i}>
                <ListItemText primary={`・${item}`} />
              </ListItem>
            );
          })}
        </List>   　　　　　　　
      </div>   　　
    </div>
  );
}
