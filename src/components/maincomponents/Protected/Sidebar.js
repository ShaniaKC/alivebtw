import React, { useState } from 'react';
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

  const hideSidebar = () => {
    setIsHidden(true);
  };
  const showSidebar = () => {
    setIsHidden(false);
  };

  return (
    <React.Fragment>
      <div
        className="col-sm-2 vh-100  border-primary bg-white border-top border-end border-5 text-end"
        style={{ display: isHidden ? 'none' : 'block' }}
      >
        <button
          className="btn-close pb-5"
          onClick={hideSidebar}
          aria-label="Close"
        ></button>

        <IconLink to="/patient" text="Patient" icon={<PersonAddAlt1Icon />} />
        <IconLink to="/booking" text="Booking" icon={<UpdateIcon />} />
        <IconLink
          to="/resources"
          text="Resources"
          icon={<BusinessCenterOutlinedIcon />}
        />
        <IconLink to="/medical" text="Medical" icon={<MedicalServicesIcon />} />
        <IconLink to="/documents" text="Documents" icon={<FolderIcon />} />
        <IconLink to="/visit" text="Visit" icon={<CreateOutlinedIcon />} />
      </div>
      <button
        className="btn btn-primary col-1 text-white"
        style={{
          height: 'max-content',
          width: 'max-content',
          display: isHidden ? 'block' : 'none',
        }}
        onClick={showSidebar}
        aria-label="open"
      >
        <MenuOpenIcon />
      </button>
    </React.Fragment>
  );
};

export default Sidebar;
