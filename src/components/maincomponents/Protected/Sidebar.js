import React, { useState, useEffect } from 'react';
import IconLink from '../../minorcomponents/IconLinkGroup';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import UpdateIcon from '@mui/icons-material/Update';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FolderIcon from '@mui/icons-material/Folder';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Sidebar = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (innerWidth <= 768) {
      setIsHidden(true);
    }
  }, []);

  const hideSidebar = () => {
    setIsHidden(true);
  };
  const showSidebar = () => {
    setIsHidden(false);
  };

  return (
    <React.Fragment>
      <div
        className="col-sm-4 col-md-2 min-vh-100 bg-white border-top border-end border-5 "
        style={{
          display: isHidden ? 'none' : 'block',
        }}
      >
        <button
          className="btn-close pb-2 col-1 offset-11"
          style={{ display: innerWidth <= 768 ? 'block' : 'none' }}
          onClick={hideSidebar}
          aria-label="Close"
        ></button>

        <IconLink
          to="/main/patient"
          text="Patient"
          icon={<PersonAddAlt1Icon />}
        />
        <IconLink to="/main/booking" text="Booking" icon={<UpdateIcon />} />
        <IconLink
          to="/main/resources"
          text="Resources"
          icon={<BusinessCenterOutlinedIcon />}
        />
        <IconLink
          to="/main/medical"
          text="Medical"
          icon={<MedicalServicesIcon />}
        />
        <IconLink to="/main/documents" text="Documents" icon={<FolderIcon />} />
        <IconLink to="/main/visit" text="Visit" icon={<CreateOutlinedIcon />} />
      </div>
      <button
        className="btn col-1 text-dark"
        style={{
          height: 'max-content',
          width: 'max-content',
          display: isHidden ? 'block' : 'none',
        }}
        onClick={showSidebar}
        aria-label="open"
      >
        <span>SideBar </span>
        <MenuOpenIcon />
      </button>
    </React.Fragment>
  );
};

export default Sidebar;
