import { Link } from 'react-router-dom';
import * as C from './styles';
import FaceIcon from '@mui/icons-material/Face';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmailIcon from '@mui/icons-material/Email';

type Props = {
  title: string;
  description: string;
  icon: string;
  path: string;
  active: boolean;
};

export const SidebarItem = ({title, description, icon, path, active}: Props) => {
    return (
      <C.Container>
        <Link to={path}>
          <C.Info>
            <C.Title>{title}</C.Title>
            <C.Description>{ description }</C.Description>
          </C.Info>
          
          <C.IconArea active={active}>

            {icon === 'profile' &&
              <FaceIcon sx={{ fontSize: 35 }} style={{ fill: '#191919' }}  />
            }

                        
            {icon === 'book' &&
              <LibraryBooksIcon sx={{ fontSize: 35 }} style={{ fill: '#191919' }}  />
            }

                        
            {icon === 'mail' &&
              <EmailIcon sx={{ fontSize: 35 }} style={{ fill: '#191919' }}  />
            }
            
           </C.IconArea>
          <C.Point active={active}></C.Point>
        </Link>
      </C.Container>
  );
};
