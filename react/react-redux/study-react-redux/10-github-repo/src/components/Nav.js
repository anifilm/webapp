import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Nav({ categories, onClick }) {
  const to = (users) => `/user/${users.id}`;

  return (
    <Drawer variant="permanent">
      <List style={{ width: 200 }}>
      {/* props.categories를 기반으로 링크 생성 */}
      {categories.map((user) => (
        <ListItem
          button
          key={`nav-item-${user.id}`}
          onClick={() => onClick(to(user))}
        >
          <ListItemText primary={user.name} />
        </ListItem>
      ))}
      </List>
    </Drawer>
  );
}

Nav.propTypes = {
  // state.users.categories의 구조
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
