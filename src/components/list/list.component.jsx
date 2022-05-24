import './list.styles.jsx'
import { ListItem } from './list.styles.jsx';

const List = ({children, ...otherProps}) => {
  return (
    <ListItem {...otherProps}>
      {children}
    </ListItem>
  );
};


export default List;